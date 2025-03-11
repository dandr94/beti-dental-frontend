import api, { publicPrefix } from "@/services/api";


export const getAppointments = async () => {
    return await api.get(`${publicPrefix}/bookings/`);
};

export const confirmAppointment = async (id: string) => {
    return await api.post(`${publicPrefix}/bookings/${id}/admin_confirm/`);
};

export const cancelAppointment = async (id: string, cancellationReason: string) => {
    return await api.post(`${publicPrefix}/bookings/${id}/admin_cancel/`, {
        cancellation_reason: cancellationReason,
    });
};
