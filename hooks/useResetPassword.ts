import React, { useState } from "react";
import { validatePasswordResetForm } from "@/utils/validators";

import { resetPassword } from "@/services/apiRoutes/user";
import { useSnackbar } from "@/context/SnackbarProvider";

export default function useResetPassword() {
    const { showSnackbar } = useSnackbar();
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validatePasswordResetForm(email);

        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsLoading(true);

        resetPassword(email)
            .then(() => {
                showSnackbar("Password reset email has been sent. Please check your email!", "success");
            })
            .catch(() => {
                showSnackbar("This email does not exists!", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });


    };

    return {
        email,
        isLoading,
        fieldErrors,
        handleChange,
        handleSubmit,
    };
}
