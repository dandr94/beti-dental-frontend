"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";
import { CircularProgress } from "@mui/material";
import { ChildrenProps } from "@/interface/common";


export default function RequireAuth({ children }: ChildrenProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const auth = await isAuthenticated();
            if (!auth) {
                router.push("/auth/login");
            } else {
                setAuthorized(true);
            }
            setIsLoading(false);
        };

        checkAuth();
    }, [router]);

    if (isLoading) {
        return (
            //TODO: Fix Spinner position
            <div className="flex justify-center my-8">
                <CircularProgress />
            </div>
        );
    }

    return authorized ? <>{children}</> : null;
}
