import React, { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { formatTimeSlot } from "@/utils/calendar";
import BookingModal from "@/components/modals/BookingModal";
import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useSnackbar } from "@/context/SnackbarProvider";
import { CalendarAvailableHoursProps } from "@/interface/calendar";


export default function CalendarAvailableHours({ day, details }: CalendarAvailableHoursProps) {
    const router = useRouter();
    const { showSnackbar } = useSnackbar();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<{ id: string; time: string } | null>(null);

    const handleBookClick = async (timeSlot: { id: string; time: string }) => {
        const { isAuth } = await isAuthenticated();

        if (!isAuth) {
            router.push("/auth/login");
            showSnackbar("Please log in before you book an appointment.", "warning");
            return;
        }

        setSelectedTimeSlot(timeSlot);
        setIsModalOpen(true);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {day !== null && details && details.is_working && (
                    <motion.div
                        key={day}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <Paper elevation={3} sx={{ p: 3, mt: 2, borderRadius: 3, backgroundColor: "#f9f9f9" }}>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                                Available Hours for Day {day}
                            </Typography>
                            <Box sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                                gap: 2,
                            }}>
                                {details.appointment_slots.map((slot) => (
                                    <Box key={slot.id} sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        py: 1,
                                        borderBottom: "3px solid #eee",
                                        opacity: slot.is_booked ? 0.5 : 1,
                                    }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <AccessTimeIcon color="primary" />
                                            <Typography
                                                variant="body1">{formatTimeSlot(`${slot.start_time} - ${slot.end_time}`)}</Typography>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleBookClick({
                                                id: slot.id,
                                                time: `${slot.start_time} - ${slot.end_time}`,
                                            })}
                                            disabled={slot.is_booked}
                                        >
                                            Book Appointment
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </motion.div>
                )}
            </AnimatePresence>

            {selectedTimeSlot && (
                <BookingModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    timeSlot={selectedTimeSlot.time}
                    appointment_slot={selectedTimeSlot.id}
                />
            )}
        </>
    );
}