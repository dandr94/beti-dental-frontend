import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/apiRoutes/auth";
import { useSnackbar } from "@/context/SnackbarProvider";
import { validateLoginForm } from "@/utils/validators";


export default function useLogin() {
    const router = useRouter();
    const { showSnackbar } = useSnackbar();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateLoginForm(formData);

        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsLoading(true);

        loginUser(formData.email, formData.password)
            .then(() => {
                showSnackbar("Login successful", "success");
                router.push("/dashboard");
            })
            .catch(() => {
                showSnackbar("Login failed: Invalid credentials", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return { email: formData.email, password: formData.password, isLoading, fieldErrors, handleChange, handleSubmit };
}
