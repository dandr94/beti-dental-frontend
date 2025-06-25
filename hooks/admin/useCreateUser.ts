import { useState, ChangeEvent, FormEvent } from "react";
import { useSnackbar } from "@/context/SnackbarProvider";
import { createUser } from "@/services/apiRoutes/admin/users";
import { validateRegisterForm } from "@/utils/validators";

export default function useCreateUser(onUserCreated: () => void, onClose: () => void) {
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
        role: "patient",
    });

    const { email, first_name, last_name, password, re_password, phone, role } = formData;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const resetForm = () => {
        setFormData({
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            re_password: "",
            phone: "",
            role: "patient",
        });
        setFieldErrors({});
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateRegisterForm(formData);
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsLoading(true);

        createUser(email, first_name, last_name, password, re_password, phone, role)
            .then(() => {
                showSnackbar("User created successfully!", "success");
                onUserCreated();
                onClose();
                resetForm();
            })
            //TODO: If email exists show it as proper value, right now it is bad
            .catch(() => {
                showSnackbar("An error occurred while creating the user.", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        email,
        first_name,
        last_name,
        password,
        re_password,
        phone,
        role,
        isLoading,
        fieldErrors,
        handleChange,
        handleSubmit,
        resetForm,
    };
}