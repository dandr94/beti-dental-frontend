import React from "react";
import { Box } from "@mui/material";
import { CalendarCell } from "@/components/calendar";
import { CalendarGridProps } from "@/interface/calendar";


export default function CalendarGrid({
                                         weeks,
                                         currentDate,
                                         today,
                                         onDayClick,
                                         expandedDay,
                                         renderDetails,
                                         getCellBgColor,
                                     }: CalendarGridProps) {
    return (
        <>
            {weeks.map((week, weekIndex) => (
                <React.Fragment key={`week-${weekIndex}`}>
                    <Box sx={{ display: "flex", width: "100%" }}>
                        {week.map((day, colIndex) => {
                            if (day === null) {
                                return <Box key={`empty-${colIndex}`} sx={{ flex: 1 }} />;
                            }
                            const isPastDay =
                                day < today.getDate() && currentDate.getMonth() === today.getMonth();

                            return (
                                <CalendarCell
                                    key={day}
                                    day={day}
                                    isDisabled={isPastDay}
                                    isCurrentDay={day === today.getDate() && currentDate.getMonth() === today.getMonth()}
                                    onClick={isPastDay ? undefined : () => onDayClick(day, weekIndex)}
                                    bgColor={!isPastDay && getCellBgColor ? getCellBgColor(day) : undefined}
                                />
                            );
                        })}
                    </Box>
                    {expandedDay && expandedDay.weekIndex === weekIndex && (
                        <Box sx={{ width: "100%", mt: 2 }}>
                            {renderDetails && renderDetails(expandedDay.day)}
                        </Box>
                    )}
                </React.Fragment>
            ))}
        </>
    );
}