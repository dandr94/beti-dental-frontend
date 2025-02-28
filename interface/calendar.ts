export interface AppointmentSlot {
    id?: string;
    date?: string;
    start_time: string;
    end_time: string;
    is_booked?: boolean;
}

export interface ScheduleDay {
    id?: string;
    date?: string;
    is_working: boolean;
    appointment_slots: AppointmentSlot[];
}

export type CalendarData = Record<string, ScheduleDay>;

export interface CalendarAvailableHoursProps {
    day: number;
    details?: ScheduleDay
}