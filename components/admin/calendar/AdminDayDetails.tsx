"use client";

import React from "react";
import {
    Box,
    Typography,
    Switch,
    TextField,
    IconButton,
    Button,
    Paper,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import { DayDetails } from "@/interface/calendar";


interface AdminDayDetailsProps {
    day: number;
    details: DayDetails | undefined;
    onToggleWorkingAction: (day: number, working: boolean) => void;
    onChangeTimeAction: (day: number, index: number, newStartTime: string, newEndTime: string) => void;
    onRemoveTimeAction: (day: number, index: number) => void;
    onApplyPresetAction: (day: number, preset: { start_time: string; end_time: string }[]) => void;
    onAddTimeIncrementAction: (day: number, increment: number) => void;
    onAddCustomTimeAction: (day: number) => void;
}

// TODO: Make it dynamic. For now hard code some preset.
const defaultPreset: { start_time: string; end_time: string }[] = [
    { start_time: "08:00", end_time: "09:00" },
    { start_time: "09:00", end_time: "10:00" },
    { start_time: "10:00", end_time: "11:00" },
    { start_time: "11:00", end_time: "12:00" },
    { start_time: "12:00", end_time: "13:00" },
    { start_time: "13:00", end_time: "14:00" },
    { start_time: "14:00", end_time: "15:00" },
    { start_time: "15:00", end_time: "16:00" },
    { start_time: "16:00", end_time: "17:00" },
    { start_time: "17:00", end_time: "18:00" },
];

export default function AdminDayDetails({
                                            day,
                                            details = { is_working: false, appointment_slots: [] },
                                            onToggleWorkingAction,
                                            onChangeTimeAction,
                                            onRemoveTimeAction,
                                            onApplyPresetAction,
                                            onAddTimeIncrementAction,
                                            onAddCustomTimeAction,
                                        }: AdminDayDetailsProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={day}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: 3,
                        mt: 2,
                        borderRadius: 3,
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Typography variant="subtitle1" sx={{ flex: 1 }}>
                            Day {day} Settings
                        </Typography>
                        <Typography variant="body2" sx={{ mr: 1 }}>
                            Working Day
                        </Typography>
                        <Switch
                            checked={details.is_working}
                            onChange={(e) => onToggleWorkingAction(day, e.target.checked)}
                        />
                    </Box>
                    {details.is_working && (
                        <>
                            <Box sx={{ mb: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => onApplyPresetAction(day, defaultPreset)}
                                >
                                    Apply Preset
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => onAddTimeIncrementAction(day, 30)}
                                >
                                    Add 30-min Slot
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => onAddTimeIncrementAction(day, 60)}
                                >
                                    Add 1-hr Slot
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => onAddCustomTimeAction(day)}
                                >
                                    Add Custom Slot
                                </Button>
                            </Box>
                            <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                Working Hours
                            </Typography>
                            {details.appointment_slots.map((slot, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 1,
                                    }}
                                >
                                    <TextField
                                        value={`${slot.start_time} - ${slot.end_time}`}
                                        onChange={(e) => {
                                            const [startTime, endTime] = e.target.value.split(" - ");
                                            onChangeTimeAction(day, index, startTime, endTime);
                                        }}
                                        size="small"
                                        variant="outlined"
                                        sx={{ flex: 1 }}
                                    />
                                    <IconButton
                                        onClick={() => onRemoveTimeAction(day, index)}
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            ))}
                        </>
                    )}
                </Paper>
            </motion.div>
        </AnimatePresence>
    );
}