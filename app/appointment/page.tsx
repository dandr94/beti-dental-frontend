"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";

import { CalendarHeader, CalendarGrid, WeekDaysHeader } from "@/components/calendar";
import { CalendarAvailableHours } from "@/components/calendar/";
import { useCalendarLogic } from "@/hooks";
import { getDateKey } from "@/utils/calendar";
import { format } from "date-fns";

export default function Page() {
    const theme = useTheme();
    const {
        currentDate,
        expandedDay,
        calendarData,
        today,
        handleMonthChange,
        handleDayClick,
        getCellBgColor,
        weeks,
    } = useCalendarLogic();

    return (
        <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 4 }}>
            <Typography variant="h3" align="center" sx={{ mb: 2 }}>
                Appointments
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4, color: theme.palette.text.secondary }}>
                Select a day to see available appointment times.
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
                                renderDetails={(day: number) => {
                                    return (
                                        <CalendarAvailableHours
                                            day={day}
                                            details={calendarData[getDateKey(currentDate, day)]}
                                        />
                                    );
                                }}
                                getCellBgColor={getCellBgColor}
                            />
                        </motion.div>
                    </AnimatePresence>
                </Box>
            </Box>
        </Box>
    );
}