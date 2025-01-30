import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { validateRegisterForm } from "@/utils/validators";

import { registerUser } from "@/services/apiRoutes/user";
import { useSnackbar } from "@/context/SnackbarProvider";

export default function useRegister() {
    const router = useRouter();
    const { showSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});


    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        re_password: "",
        phone: "",
    });

    const { email, first_name, last_name, password, re_password, phone } = formData;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    };


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateRegisterForm(formData);

        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsLoading(true);

        registerUser(email, first_name, last_name, password, re_password, phone)
            .then(() => {
                showSnackbar("Registration successful. Please check your email for confirmation!", "success");
                router.push("/auth/login/");
            })
            .catch(() => {
                showSnackbar("An error occurred during registration.", "error");
            })
            .finally(() => {
                    setIsLoading(false);
                },
            );
    };


    return {
        email,
        first_name,
        last_name,
        password,
        re_password,
        phone,
        isLoading,
        fieldErrors,
        handleChange,
        handleSubmit,
    };
}