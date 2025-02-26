"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/apiRoutes/auth";
import { useSnackbar } from "@/context/SnackbarProvider";

export default function Page() {
    const router = useRouter();
    const { showSnackbar } = useSnackbar();


    useEffect(() => {
        logoutUser()
            .then(() => {
                showSnackbar("Logout successful", "success");
                router.push("/auth/login");
            })
            .catch(() => {
                showSnackbar("Something went wrong.", "error");
                router.push("/auth/login");
            });
    }, [router]);

    return null;
}
