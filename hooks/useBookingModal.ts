import { useState, ChangeEvent, FormEvent } from "react";
import { validateBookingModalForm } from "@/utils/validators";

import { bookAppointment } from "@/services/apiRoutes/appointment";
import { useSnackbar } from "@/context/SnackbarProvider";

export default function useBookingModal(appointment_slot: string, onClose: () => void) {
    const { showSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});


    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
    });

    const { email, first_name, last_name, phone } = formData;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    };


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateBookingModalForm(formData);
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsLoading(true);

        bookAppointment(email, first_name, last_name, phone, appointment_slot)
            .then(() => {
                showSnackbar("Booking successful. Please check your email for more details!", "success");
                onClose();
            })
            .catch(() => {
                showSnackbar("An error occurred during registration.", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };


    return {
        email,
        first_name,
        last_name,
        phone,
        isLoading,
        fieldErrors,
        handleChange,
        handleSubmit,
    };
}