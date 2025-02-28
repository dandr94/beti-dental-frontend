import React from "react";

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
    details?: ScheduleDay;
}

export interface CalendarCellProps {
    day: number;
    isDisabled: boolean;
    isCurrentDay: boolean;
    onClick?: () => void;
    bgColor?: string;
}

export interface CalendarGridProps {
    weeks: (number | null)[][];
    currentDate: Date;
    today: Date;
    onDayClick: (day: number, weekIndex: number) => void;
    expandedDay: { day: number; weekIndex: number } | null;
    renderDetails?: (day: number) => React.ReactNode;
    getCellBgColor?: (day: number) => string;
}

export interface CalendarHeaderProps {
    currentDate: Date;
    onPrev: () => void;
    onNext: () => void;
}

export interface DayDetails {
    is_working: boolean;
    appointment_slots: { start_time: string; end_time: string }[];
}