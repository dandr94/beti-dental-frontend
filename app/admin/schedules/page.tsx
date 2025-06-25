"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

import { CalendarHeader, WeekDaysHeader, CalendarGrid } from "@/components/calendar/";
import AdminDayDetails from "@/components/admin/calendar/AdminDayDetails";
import { useCalendarLogic } from "@/hooks";
import { getDateKey } from "@/utils/calendar";
import { useScheduleLogic } from "@/hooks/admin";

export default function AdminCalendar() {
    const theme = useTheme();
    const {
        currentDate,
        expandedDay,
        calendarData,
        setCalendarData,
        today,
        handleMonthChange,
        handleDayClick,
        getCellBgColor,
        weeks,
        hasUnsavedChanges,
        setHasUnsavedChanges,
    } = useCalendarLogic(true);

    const {
        handleToggleWorking,
        handleChangeTime,
        handleRemoveTime,
        handleApplyPreset,
        handleAddTimeIncrement,
        handleAddCustomTime,
        saveSchedule,
    } = useScheduleLogic(currentDate, calendarData, setCalendarData, setHasUnsavedChanges);


    const handleSaveCalendar = async () => {
        try {
            await saveSchedule();
            setHasUnsavedChanges(false);
        } catch (error) {
            console.error("Error saving calendar:", error);
        }
    };

    return (
        <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 4 }}>
            <Typography variant="h3" align="center" sx={{ mb: 2 }}>
                Admin Calendar
            </Typography>
            <Box sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 4, p: 4 }}>
                <CalendarHeader
                    currentDate={currentDate}
                    onPrev={() => handleMonthChange("previous")}
                    onNext={() => handleMonthChange("next")}
                />
                <WeekDaysHeader />
                <Box sx={{ overflow: "hidden" }}>
                    <AnimatePresence>
                        <motion.div
                            key={format(currentDate, "yyyy-MM")}
                            layout
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CalendarGrid
                                weeks={weeks}
                                currentDate={currentDate}
                                today={today}
                                onDayClick={handleDayClick}
                                expandedDay={expandedDay}
                                renderDetails={(day: number) => (
                                    <AdminDayDetails
                                        day={day}
                                        details={calendarData[getDateKey(currentDate, day)]}
                                        onToggleWorkingAction={handleToggleWorking}
                                        onChangeTimeAction={handleChangeTime}
                                        onRemoveTimeAction={handleRemoveTime}
                                        onApplyPresetAction={handleApplyPreset}
                                        onAddTimeIncrementAction={handleAddTimeIncrement}
                                        onAddCustomTimeAction={handleAddCustomTime}
                                    />
                                )}
                                getCellBgColor={getCellBgColor}
                            />
                        </motion.div>
                    </AnimatePresence>
                </Box>
                <Box sx={{ mt: 4, textAlign: "center" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSaveCalendar}
                        disabled={!hasUnsavedChanges}
                    >
                        Save Calendar {hasUnsavedChanges && "*"}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}