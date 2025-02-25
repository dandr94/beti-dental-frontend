"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { isAuthenticated } from "@/utils/auth";

interface RequireRoleAuthProps {
    children: React.ReactNode;
    allowedRoles: string[];
}

export default function RequireRoleAuth({ children, allowedRoles }: RequireRoleAuthProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const checkAuthAndRole = async () => {
            const { isAuth, userData } = await isAuthenticated();
            if (!isAuth) {
                router.push("/auth/login");
                return;
            }

            const role = userData.role
            if (allowedRoles.includes("all") || allowedRoles.includes(role)) {
                setAuthorized(true);
            } else {
                router.push("/auth/login");
            }

            setIsLoading(false);
        };

        checkAuthAndRole();
    }, [router, allowedRoles]);

    if (isLoading) {
        return (
            <div className="flex justify-center my-8">
                <CircularProgress />
            </div>
        );
    }


    return authorized ? <>{children}</> : null;
}