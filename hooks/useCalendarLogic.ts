import { useState, useMemo } from "react";
import { addMonths, format } from "date-fns";
import { useCalendarData } from "@/hooks";
import { chunkArray, getMonthInfo } from "@/utils/calendar";
import theme from "@/theme";

export default function useCalendarLogic(isAdmin: boolean = false) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [expandedDay, setExpandedDay] = useState<{ day: number; weekIndex: number } | null>(null);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    const { calendarData, setCalendarData } = useCalendarData(currentDate);
    const today = new Date();

    const { daysInMonth, adjustedFirstDay } = useMemo(
        () => getMonthInfo(currentDate),
        [currentDate],
    );

    const handleMonthChange = (direction: "next" | "previous") => {
        if (isAdmin && hasUnsavedChanges) {
            const confirmChange = window.confirm(
                "You have unsaved changes. Are you sure you want to change the month? All unsaved changes will be lost.",
            );
            if (!confirmChange) return;
        }

        setCurrentDate(addMonths(currentDate, direction === "next" ? 1 : -1));
        setExpandedDay(null);
        setHasUnsavedChanges(false);
    };

    const handleDayClick = (day: number, weekIndex: number) => {
        const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        if (clickedDate < todayDate) return;

        setExpandedDay((prev) =>
            prev && prev.day === day && prev.weekIndex === weekIndex ? null : { day, weekIndex },
        );
    };

    const getCellBgColor = (day: number) => {
        const key = format(currentDate, "yyyy-MM") + `-${String(day).padStart(2, "0")}`;
        const data = calendarData[key];

        if (!data) return theme.palette.grey[200];
        return data.is_working ? theme.palette.success.light : theme.palette.error.light;
    };

    const weeks = useMemo(() => {
        const cells = Array.from({ length: 42 }, (_, i) => {
            if (i < adjustedFirstDay || i >= adjustedFirstDay + daysInMonth) return null;
            return i - adjustedFirstDay + 1;
        });
        return chunkArray(cells, 7);
    }, [adjustedFirstDay, daysInMonth]);

    return {
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
    };
};