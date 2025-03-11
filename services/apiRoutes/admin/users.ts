import api, { privatePrefix } from "@/services/api";

export const getUsers = async () => {
    return await api.get(`${privatePrefix}/users/`);
};

// TODO: WRONG URL
export const getUserDetails = async () => {
    return await api.get(`${privatePrefix}/users/me/`);
};

export const createUser = async (email: string, first_name: string, last_name: string, password: string, password2: string, phone: string, role: string) => {
    return await api.post(`${privatePrefix}/users/`, { email, first_name, last_name, password, password2, phone, role });
};

export const updateUser = async (id: string, email: string, first_name: string, last_name: string, password: string, re_password: string, phone: string) => {
    return await api.put(`${privatePrefix}/users/${id}/`, {
        email,
        first_name,
        last_name,
        password,
        re_password,
        phone,
    });
};

export const patchUser = async (id: string, data: {
    email?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    re_password?: string;
    phone?: string;
    role?: string;
}) => {
    return await api.patch(`${privatePrefix}/users/${id}/`, data);
};

export const deleteUser = async (id: string) => {
    return await api.delete(`${privatePrefix}/users/${id}/`);
};
