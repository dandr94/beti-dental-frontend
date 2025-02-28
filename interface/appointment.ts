export interface Appointment {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    status: "pending" | "confirmed" | "cancelled";
    appointment_slot: {
        date: string;
        start_time: string;
        end_time: string;
    };
    cancellation_reason?: string;
    created_at: string;
}