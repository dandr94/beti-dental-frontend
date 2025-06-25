import { useState } from "react";
import { useSnackbar } from "@/context/SnackbarProvider";
import { useRouter } from "next/navigation";
import { deleteUser } from "@/services/apiRoutes/admin/users";
import { logoutUser } from "@/services/apiRoutes/auth";

export default function useDeleteUser(onUserDeleted: () => void) {
    const { showSnackbar } = useSnackbar();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = (id: string, isCurrentUser: boolean) => {
        setIsLoading(true);

        deleteUser(id)
            .then(() => {
                showSnackbar("User deleted successfully!", "success");
                if (isCurrentUser) {
                    return logoutUser().then(() => {
                        router.push("/auth/login");
                    });
                } else {
                    onUserDeleted();
                }
            })
            .catch(() => {
                showSnackbar("An error occurred while deleting the user.", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        isLoading,
        handleDelete,
    };
}