import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { activateUser } from "@/services/apiRoutes/user";
import { UIDTokenProps } from "@/interface/auth";

export default function useActivation({ uid, token }: UIDTokenProps) {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    useEffect(() => {
        const activate = async () => {
            try {
                await activateUser(uid, token);
                setIsActivated(true);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        activate();
    }, [uid, token]);

    useEffect(() => {
        if (isActivated) {
            setTimeout(() => {
                router.push("/auth/login");
            }, 2000);
        }
    }, [isActivated, router]);

    return { isLoading, hasError, isActivated };
}
