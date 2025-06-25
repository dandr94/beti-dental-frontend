import { getDateKey } from "@/utils/calendar";
import React from "react";
import { bulkSaveCalendar } from "@/services/apiRoutes/calendar";
import { useSnackbar } from "@/context/SnackbarProvider";
import { CalendarData } from "@/interface/calendar";

// TODO: Work on this.
export default function useScheduleLogic(
    currentDate: Date,
    calendarData: CalendarData,
    setCalendarData: React.Dispatch<React.SetStateAction<Record<string, any>>>,
    setHasUnsavedChanges: React.Dispatch<React.SetStateAction<boolean>>,
) {
    const { showSnackbar } = useSnackbar();

    const handleToggleWorking = (day: number, working: boolean) => {
        const key = getDateKey(currentDate, day);
        setCalendarData((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                is_working: working,
                appointment_slots: working ? prev[key]?.appointment_slots || [] : [],
            },
        }));
        setHasUnsavedChanges(true);
    };

    const handleChangeTime = (
        day: number,
        index: number,
        newStartTime: string,
        newEndTime: string,
    ) => {
        const key = getDateKey(currentDate, day);
        setCalendarData((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                appointment_slots:
                    prev[key]?.appointment_slots.map((slot: any, i: number) =>
                        i === index ? { ...slot, start_time: newStartTime, end_time: newEndTime } : slot,
                    ) || [],
            },
        }));
        setHasUnsavedChanges(true);
    };

    const handleRemoveTime = (day: number, index: number) => {
        const key = getDateKey(currentDate, day);
        setCalendarData((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                appointment_slots:
                    prev[key]?.appointment_slots.filter((_: any, i: number) => i !== index) || [],
            },
        }));
        setHasUnsavedChanges(true);
    };

    const handleApplyPreset = (
        day: number,
        preset: { start_time: string; end_time: string }[],
    ) => {
        const key = getDateKey(currentDate, day);
        setCalendarData((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                is_working: true,
                appointment_slots: preset.map((slot) => ({
                    start_time: slot.start_time,
                    end_time: slot.end_time,
                    is_booked: false,
                })),
            },
        }));
        setHasUnsavedChanges(true);
    };

    const handleAddTimeIncrement = (day: number, increment: number) => {
        const key = getDateKey(currentDate, day);
        setCalendarData((prev) => {
            const currentSlots = prev[key]?.appointment_slots || [];
            if (currentSlots.length > 0) {
                const lastSlot = currentSlots[currentSlots.length - 1];
                const [startHours, startMinutes] = lastSlot.end_time.split(":").map(Number);
                let totalMinutes = startHours * 60 + startMinutes;
                totalMinutes += increment;
                const newStartHours = Math.floor(totalMinutes / 60);
                const newStartMinutes = totalMinutes % 60;
                const newEndTotal = totalMinutes + increment;
                const newEndHours = Math.floor(newEndTotal / 60);
                const newEndMinutes = newEndTotal % 60;
                const pad = (n: number) => (n < 10 ? "0" + n : "" + n);
                const newSlot = {
                    start_time: `${pad(newStartHours)}:${pad(newStartMinutes)}`,
                    end_time: `${pad(newEndHours)}:${pad(newEndMinutes)}`,
                    is_booked: false,
                };
                return {
                    ...prev,
                    [key]: {
                        ...prev[key],
                        appointment_slots: [...currentSlots, newSlot],
                    },
                };
            }
            return prev;
        });
        setHasUnsavedChanges(true);
    };

    const handleAddCustomTime = (day: number) => {
        const key = getDateKey(currentDate, day);
        setCalendarData((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                appointment_slots: [
                    ...(prev[key]?.appointment_slots || []),
                    { start_time: "", end_time: "", is_booked: false },
                ],
            },
        }));
        setHasUnsavedChanges(true);
    };

    const saveSchedule = async () => {
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const formattedData = Object.entries(calendarData)
            .filter(([date]) => {
                const [year, month] = date.split("-").map(Number);
                return month - 1 === currentMonth && year === currentYear;
            })
            .map(([date, data]) => ({
                id: data.id, // Include the ID if present
                date,
                is_working: data.is_working,
                appointment_slots: data.appointment_slots.map((slot: any) => ({
                    id: slot.id,
                    start_time: slot.start_time,
                    end_time: slot.end_time,
                })),
            }));

        bulkSaveCalendar(formattedData)
            .then(() => {
                showSnackbar("Schedule saved successfully.", "success");
            })
            .catch(() => {
                showSnackbar("Error while saving schedule", "error");
            });
    };


    return {
        handleToggleWorking,
        handleChangeTime,
        handleRemoveTime,
        handleApplyPreset,
        handleAddTimeIncrement,
        handleAddCustomTime,
        saveSchedule,
    };
};
