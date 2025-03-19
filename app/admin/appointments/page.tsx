"use client";

import React from "react";
import {
    Box,
    Stack,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions, Button,
} from "@mui/material";
import { useAppointments } from "@/hooks/admin";
import AppointmentCard from "@/components/admin/appointments/AppointmentCard";

const cancellationReasons = [
    "Patient No-show",
    "Rescheduled",
    "Double Booked",
    "Other",
];

export default function Page() {
    const {
        appointments,
        isLoading,
        filterStatus,
        setFilterStatus,
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
    } = useAppointments();

    return (
        <Box sx={{ padding: 4 }}>
            <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel id="filter-status-label">Filter by Status</InputLabel>
                        <Select
                            labelId="filter-status-label"
                            id="filter-status"
                            value={filterStatus}
                            label="Filter by Status"
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <MenuItem value="All Appointments">All Appointments</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                            <MenuItem value="confirmed">Confirmed</MenuItem>
                            <MenuItem value="cancelled">Cancelled</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Search by Patient Name"
                        variant="outlined"
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                </Stack>

                {isLoading ? (
                    <CircularProgress />
                ) : appointments.length === 0 ? (
                    <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                        No appointments found.
                    </Typography>
                ) : (
                    <Stack spacing={2}>
                        {appointments.map((appointment) => (
                            <AppointmentCard
                                key={appointment.id}
                                appointment={appointment}
                                onConfirm={handleConfirm}
                                onCancel={handleCancel}
                            />
                        ))}
                    </Stack>
                )}

                <Dialog open={openCancelModal} onClose={() => setOpenCancelModal(false)}>
                    <DialogTitle>Cancel Appointment</DialogTitle>
                    <DialogContent>
                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <InputLabel id="cancel-reason-label">Cancellation Reason</InputLabel>
                            <Select
                                labelId="cancel-reason-label"
                                value={selectedReason}
                                label="Cancellation Reason"
                                onChange={(e) => setSelectedReason(e.target.value)}
                            >
                                {cancellationReasons.map((reason) => (
                                    <MenuItem key={reason} value={reason}>
                                        {reason}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {selectedReason === "Other" && (
                            <TextField
                                fullWidth
                                label="Enter Reason"
                                variant="outlined"
                                sx={{ mt: 2 }}
                                value={customReason}
                                onChange={(e) => setCustomReason(e.target.value)}
                            />
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenCancelModal(false)}>Close</Button>
                        <Button variant="contained" color="error" onClick={handleCancelConfirm}>
                            Confirm Cancellation
                        </Button>
                    </DialogActions>
                </Dialog>
            </Stack>
        </Box>
    );
}