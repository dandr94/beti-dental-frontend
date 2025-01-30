import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { validatePasswordResetConfirmForm } from "@/utils/validators";

import { resetPasswordConfirm } from "@/services/apiRoutes/user";
import { useSnackbar } from "@/context/SnackbarProvider";
import { UIDTokenProps } from "@/interface/auth";

export default function useResetPasswordConfirm({ uid, token }: UIDTokenProps) {
    const router = useRouter();
    const { showSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});


    const [formData, setFormData] = useState({
        new_password: "",
        re_new_password: "",
    });

    const { new_password, re_new_password } = formData;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validatePasswordResetConfirmForm(formData);

        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsLoading(true);


        resetPasswordConfirm(uid, token, new_password, re_new_password)
            .then(() => {
                showSnackbar("Password reset successfully. You can log in now.", "success");
                router.push("/auth/login");
            })
            .catch(() => {
                showSnackbar("Failed to reset password. Please try again.", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });


    };

    return {
        new_password,
        re_new_password,
        isLoading,
        fieldErrors,
        handleChange,
        handleSubmit,
    };
}
