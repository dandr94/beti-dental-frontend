import api, { privatePrefix } from "@/services/api";

export const getAdminDashboard = async () => {
    return await api.get(`${privatePrefix}/`);
};