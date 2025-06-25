import { useState, useEffect } from "react";
import { useSnackbar } from "@/context/SnackbarProvider";
import { getAppointments, confirmAppointment, cancelAppointment } from "@/services/apiRoutes/admin/appointments";
import { debounce } from "lodash";
import { Appointment } from "@/interface/appointment";


export default function useAppointments() {
    const { showSnackbar } = useSnackbar();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [filterStatus, setFilterStatus] = useState<string>("All Appointments");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);
    const [currentCancelAppointmentId, setCurrentCancelAppointmentId] = useState<string | null>(null);
    const [selectedReason, setSelectedReason] = useState<string>("");
    const [customReason, setCustomReason] = useState<string>("");

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = () => {
        setIsLoading(true);
        getAppointments()
            .then((res) => {
                setAppointments(res.data);
            })
            .catch(() => {
                showSnackbar("Error fetching appointments", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    
    // TODO: rework... pointless and overdoing
    // Debounced search handler
    const handleSearchChange = debounce((value: string) => {
        setSearchQuery(value);
    }, 300);

    // Filter appointments based on search and status
    const filteredAppointments = appointments.filter((appointment) => {
        const fullName = `${appointment.first_name} ${appointment.last_name}`.toLowerCase();
        const matchesSearch = fullName.includes(searchQuery.toLowerCase());
        const matchesStatus =
            filterStatus === "All Appointments" || appointment.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    // Confirm appointment
    const handleConfirm = (id: string) => {
        confirmAppointment(id)
            .then(() => {
                showSnackbar("Appointment confirmed successfully", "success");
                fetchAppointments();
            })
            .catch(() => {
                showSnackbar("Error confirming appointment", "error");
            });
    };

    // Cancel appointment
    const handleCancel = (id: string, reason?: string) => {
        if (!reason) {
            // Open modal if no reason is provided
            setCurrentCancelAppointmentId(id);
            setOpenCancelModal(true);
            return;
        }

        cancelAppointment(id, reason)
            .then(() => {
                showSnackbar("Appointment cancelled successfully", "success");
                setOpenCancelModal(false);
                fetchAppointments();
            })
            .catch(() => {
                showSnackbar("Error cancelling appointment", "error");
            });
    };

    // Confirm cancellation from modal
    const handleCancelConfirm = () => {
        const cancellationReason = selectedReason === "Other" ? customReason : selectedReason;
        if (!cancellationReason) {
            showSnackbar("Please provide a cancellation reason", "warning");
            return;
        }

        if (currentCancelAppointmentId) {
            handleCancel(currentCancelAppointmentId, cancellationReason);
        }
    };

    return {
        appointments: filteredAppointments,
        isLoading,
        filterStatus,
        setFilterStatus,
        searchQuery,
        handleSearchChange,
        openCancelModal,
        setOpenCancelModal,
        selectedReason,
        setSelectedReason,
        customReason,
        setCustomReason,
        handleConfirm,
        handleCancel,
        handleCancelConfirm,
    };
};