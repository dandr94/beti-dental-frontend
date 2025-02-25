import { verifyToken, refreshToken } from "@/services/apiRoutes/auth";

export const isAuthenticated = async (): Promise<{ isAuth: boolean; userData?: any }> => {
    try {
        const verifyResponse = await verifyToken();
        return { isAuth: true, userData: verifyResponse.data.user };

    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (error.response?.status === 401) {
            try {
                const refreshResponse = await refreshToken();

                return { isAuth: true, userData: refreshResponse.data.user };

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                return { isAuth: false };
            }
        }

        return { isAuth: false };
    }
};