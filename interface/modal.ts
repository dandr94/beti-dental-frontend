export interface DeleteUserDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    isCurrentUser: boolean;
    userId: string;
}

export interface EditUserModalProps {
    open: boolean;
    onClose: () => void;
    user: {
        id: string;
        email: string;
        first_name: string;
        last_name: string;
        phone: string;
        role: string;
    };
    onUserUpdated: () => void;
}