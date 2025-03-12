"use client";

import { useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    InputLabel,
    Select,
    MenuItem,
    Typography, FormControl,
} from "@mui/material";
import { Fields } from "@/components/forms";
import { LoadingSpinner } from "@/components/common";
import { useEditUser } from "@/hooks/admin";
import { EditUserModalProps } from "@/interface/modal";

export default function EditUserModal({ open, onClose, user, onUserUpdated }: EditUserModalProps) {
    const {
        formData,
        setFormData,
        fieldErrors,
        isLoading,
        handleChange,
        handleSubmit,
    } = useEditUser(onUserUpdated, onClose);

    useEffect(() => {
        setFormData({
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            phone: user.phone,
            role: user.role,
        });
    }, [user, setFormData]);

    const fields = [
        {
            id: "email",
            type: "email",
            label: "Email Address",
            name: "email",
            autoComplete: "email",
            value: formData.email,
            required: true,
            fullWidth: true,
            autoFocus: true,
        },
        {
            id: "first_name",
            type: "text",
            label: "First Name",
            name: "first_name",
            autoComplete: "given-name",
            value: formData.first_name,
            required: true,
            fullWidth: false,
        },
        {
            id: "last_name",
            type: "text",
            label: "Last Name",
            name: "last_name",
            autoComplete: "family-name",
            value: formData.last_name,
            required: true,
            fullWidth: false,
        },
        {
            id: "phone",
            type: "text",
            label: "Phone",
            name: "phone",
            autoComplete: "phone",
            value: formData.phone,
            required: true,
            fullWidth: true,
        },
    ];

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <Fields fields={fields} handleChange={handleChange} fieldErrors={fieldErrors} />
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        id="role"
                        name="role"
                        value={formData.role}
                        label="Role"
                        onChange={handleChange}
                        error={!!fieldErrors.role}
                    >
                        <MenuItem value="patient">Patient</MenuItem>
                        <MenuItem value="dentist">Dentist</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                    {fieldErrors.role && (
                        <Typography variant="caption" color="error">
                            {fieldErrors.role}
                        </Typography>
                    )}
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    disabled={isLoading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => handleSubmit(user.id)}
                    sx={{
                        mt: 4,
                        mb: 2,
                        py: 2,
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        height: "56px",
                    }}
                >
                    {isLoading ? <LoadingSpinner /> : "Save Changes"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};