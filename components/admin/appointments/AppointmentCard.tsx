import React from "react";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Chip,
    Stack,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface AppointmentCardProps {
    appointment: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        status: "pending" | "confirmed" | "cancelled";
        appointment_slot: {
            date: string;
            start_time: string;
            end_time: string;
        };
        cancellation_reason?: string;
        created_at: string;
    };
    onConfirm: (id: string) => void;
    onCancel: (id: string, reason?: string) => void;
}

export default function AppointmentCard({
    appointment,
    onConfirm,
    onCancel,
}: AppointmentCardProps) {
    return (
        <Card sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
                <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <PersonIcon fontSize="small" color="primary" />
                        <Typography variant="subtitle1" fontWeight="bold">
                            {appointment.first_name} {appointment.last_name}
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <EmailIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {appointment.email}
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <PhoneIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {appointment.phone}
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <EventIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {appointment.appointment_slot.date}
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <AccessTimeIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {appointment.appointment_slot.start_time} -{" "}
                            {appointment.appointment_slot.end_time}
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarTodayIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            Created:{" "}
                            {new Date(appointment.created_at).toLocaleString()}
                        </Typography>
                    </Stack>

                    <Chip
                        label={appointment.status.toUpperCase()}
                        color={
                            appointment.status === "pending"
                                ? "warning"
                                : appointment.status === "confirmed"
                                ? "success"
                                : "error"
                        }
                        size="small"
                        sx={{ mt: 1, alignSelf: "flex-start" }}
                    />

                    {appointment.status === "cancelled" &&
                        appointment.cancellation_reason && (
                            <Typography
                                variant="body2"
                                color="error"
                                sx={{ mt: 1 }}
                            >
                                Reason: {appointment.cancellation_reason}
                            </Typography>
                        )}
                </Stack>
            </CardContent>

            <CardActions sx={{ justifyContent: "flex-end", pr: 2, pb: 2 }}>
                {appointment.status === "pending" && (
                    <>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => onConfirm(appointment.id)}
                            aria-label="Confirm Appointment"
                        >
                            Confirm
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => onCancel(appointment.id)}
                            aria-label="Cancel Appointment"
                        >
                            Cancel
                        </Button>
                    </>
                )}

                {appointment.status === "confirmed" && (
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => onCancel(appointment.id)}
                        aria-label="Cancel Appointment"
                    >
                        Cancel
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
