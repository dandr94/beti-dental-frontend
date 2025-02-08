import api, { publicPrefix } from "../api";

export const getUser = async () => {
    return await api.get(`${publicPrefix}/users/me/`);
};
export const registerUser = async (email: string, first_name: string, last_name: string, password: string, re_password: string, phone: string) => {
    return await api.post(`${publicPrefix}/users/`, { email, first_name, last_name, password, re_password, phone });
};
export const activateUser = async (uid: string, token: string) => {
    return await api.post(`${publicPrefix}/users/activation/`, { uid, token });
};
export const resetPassword = async (email: string) => {
    return await api.post(`${publicPrefix}/users/reset_password/`, { email });
};
export const resetPasswordConfirm = async (uid: string, token: string, new_password: string, re_new_password: string) => {
    return await api.post(`${publicPrefix}/users/reset_password_confirm/`, {
        uid,
        token,
        new_password,
        re_new_password,
    });
};