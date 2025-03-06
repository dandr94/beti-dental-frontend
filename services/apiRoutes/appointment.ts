import api, { publicPrefix } from "@/services/api";


// TODO: Rework page args to use appointment_slot_id instead of appointment_slot
export const bookAppointment = async (email: string, first_name: string, last_name: string, phone: string, appointment_slot_id: string) => {
    return await api.post(`${publicPrefix}/bookings/user_create/`, { email, first_name, last_name, phone, appointment_slot_id });
};