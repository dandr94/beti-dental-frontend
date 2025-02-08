import api, { publicPrefix } from "../api";


export const loginUser = async (email: string, password: string) => {
    return await api.post(`${publicPrefix}/jwt/create/`, { email, password });
};

export const verifyToken = async () => {
    return await api.post(`${publicPrefix}/jwt/verify/`);
};

export const refreshToken = async () => {
    return await api.post(`${publicPrefix}/jwt/refresh/`);
};

export const logoutUser = async () => {
    return await api.post(`${publicPrefix}/logout/`);
};
