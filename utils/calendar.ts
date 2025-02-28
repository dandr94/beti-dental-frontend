import { getDaysInMonth, getDay, startOfMonth } from "date-fns";

export const chunkArray = <T>(array: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

export const getDateKey = (date: Date, day: number): string => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
};

export const formatTimeSlot = (timeSlot: string): string => {
    const [startTime, endTime] = timeSlot.split(" - ");
    return `${startTime.slice(0, 5)} - ${endTime.slice(0, 5)}`;
};

export const getMonthInfo = (date: Date) => {
    const daysInMonth = getDaysInMonth(date);
    const firstDayOfMonth = getDay(startOfMonth(date));
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    return { daysInMonth, adjustedFirstDay };
};