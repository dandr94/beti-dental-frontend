import axios from "axios";
import { refreshToken } from "./apiRoutes/auth";
import { Mutex } from "async-mutex";

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_HOST}/`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const publicPrefix = `${process.env.NEXT_PUBLIC_HOST_PUBLIC_PREFIX}`
export const privatePrefix = `${process.env.NEXT_PUBLIC_HOST_PRIVATE_PREFIX}`

const mutex = new Mutex();
let refreshInProgress = false;
let refreshPromise: Promise<any> | null = null;

api.interceptors.request.use(
    config => {
        config.withCredentials = true;
        return config;
    },
    error => Promise.reject(error),
);

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        // TODO: Maybe check for message to run this only when token has expired.
        //  Right now runs on every 401 status code.
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            return mutex.runExclusive(async () => {
                if (!refreshInProgress) {
                    refreshInProgress = true;
                    refreshPromise = refreshToken()
                        .then(response =>
                            response,
                        )
                        .finally(() => {
                            refreshInProgress = false;
                            refreshPromise = null;
                        });
                }

                try {

                    await refreshPromise;

                    return api(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            });
        }

        return Promise.reject(error);
    },
);

export default api;
