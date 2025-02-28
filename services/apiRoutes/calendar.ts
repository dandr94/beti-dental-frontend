import api, { publicPrefix } from "../api";
import { CalendarData } from "@/interface/calendar";

export const fetchCalendarData = async (startDate: string, endDate: string) => {
    return await api.get(
        `${publicPrefix}/schedule-days/?date__gte=${startDate}&date__lte=${endDate}`,
    );
};

export const bulkSaveCalendar = async (formattedData: CalendarData) => {
    return await api.patch(`${publicPrefix}/schedule-days/bulk_update/`, formattedData);
};