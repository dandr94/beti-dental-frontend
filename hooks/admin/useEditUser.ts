import { useState, ChangeEvent } from "react";
import { useSnackbar } from "@/context/SnackbarProvider";
import { patchUser } from "@/services/apiRoutes/admin/users";
import { validateEditUserForm } from "@/utils/validators";

export default function useEditUser(onUserUpdated: () => void, onClose: () => void) {
    const { showSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        role: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (id: string) => {
        const errors = validateEditUserForm(formData);
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsLoading(true);

        patchUser(id, formData)
            .then(() => {
                showSnackbar("User updated successfully!", "success");
                onUserUpdated();
                onClose();

            })
            .catch(() => {
                showSnackbar("An error occurred while updating the user.", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        formData,
        setFormData,
        fieldErrors,
        isLoading,
        handleChange,
        handleSubmit,
    };
}