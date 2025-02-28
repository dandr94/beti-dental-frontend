import { useState, useEffect, useCallback } from "react";
import { format, startOfMonth, endOfMonth } from "date-fns";
import { fetchCalendarData } from "@/services/apiRoutes/calendar";
import { CalendarData } from "@/interface/calendar";
import { useSnackbar } from "@/context/SnackbarProvider";


export default function useCalendarData(displayCalendarDate: Date) {
    const [calendarData, setCalendarData] = useState<CalendarData>({});
    const [isLoading, setIsLoading] = useState(false);
    const { showSnackbar } = useSnackbar();

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        const startIso = format(startOfMonth(displayCalendarDate), "yyyy-MM-dd");
        const endIso = format(endOfMonth(displayCalendarDate), "yyyy-MM-dd");


        fetchCalendarData(startIso, endIso)
            .then(response => {
                const transformedData = response.data.reduce((acc, scheduleDay) => {
                    acc[scheduleDay.date] = scheduleDay;
                    return acc;
                }, {} as CalendarData);

                setCalendarData(transformedData);
            })
            .catch(() => {
                showSnackbar("Failed to fetch calendar data. Please try again later.", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });


    }, [displayCalendarDate, showSnackbar]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { calendarData, setCalendarData, isLoading };
};