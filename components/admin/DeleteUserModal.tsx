"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useDeleteUser } from "@/hooks/admin";
import { DeleteUserDialogProps } from "@/interface/modal";


const DeleteUserModal = ({ open, onClose, onConfirm, isCurrentUser, userId }: DeleteUserDialogProps) => {
    const { isLoading, handleDelete } = useDeleteUser(onConfirm);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete User</DialogTitle>
            <DialogContent>
                Are you sure you want to delete this user?
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={isLoading}>
                    Cancel
                </Button>
                <Button
                    onClick={() => handleDelete(userId, isCurrentUser)}
                    disabled={isLoading}
                    variant="contained"
                    color="error"
                >
                    {isLoading ? "Deleting..." : "Delete"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteUserModal;