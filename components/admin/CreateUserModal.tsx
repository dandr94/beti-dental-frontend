"use client";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    InputLabel,
    FormControl,
    Select, MenuItem, Typography,
} from "@mui/material";
import { Fields } from "@/components/forms";
import { LoadingSpinner } from "@/components/common";
import { useCreateUser } from "@/hooks/admin";

const CreateUserModal = ({ open, onClose, onUserCreated }: {
    open: boolean;
    onClose: () => void;
    onUserCreated: () => void;
}) => {
    const {
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
    } = useCreateUser(onUserCreated, onClose);

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const fields = [
        {
            id: "email",
            type: "email",
            label: "Email Address",
            name: "email",
            autoComplete: "email",
            value: email,
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
            value: first_name,
            required: true,
            fullWidth: false,
        },
        {
            id: "last_name",
            type: "text",
            label: "Last Name",
            name: "last_name",
            autoComplete: "family-name",
            value: last_name,
            required: true,
            fullWidth: false,
        },
        {
            id: "password",
            type: "password",
            label: "Password",
            name: "password",
            autoComplete: "password",
            value: password,
            required: true,
            fullWidth: true,
        },
        {
            id: "re_password",
            type: "password",
            label: "Repeat Password",
            name: "re_password",
            autoComplete: "re_password",
            value: re_password,
            required: true,
            fullWidth: true,
        },
        {
            id: "phone",
            type: "text",
            label: "Phone",
            name: "phone",
            autoComplete: "phone",
            value: phone,
            required: true,
            fullWidth: true,
        },
    ];


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create User</DialogTitle>
            {/*TODO: See why first field is not shown properly*/}
            <DialogContent>
                <Fields fields={fields} handleChange={handleChange} fieldErrors={fieldErrors} />
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        id="role"
                        name="role"
                        value={role}
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
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    disabled={isLoading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        mt: 4,
                        mb: 2,
                        py: 2,
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        height: "56px",
                    }}
                >
                    {isLoading ? <LoadingSpinner /> : "Create"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateUserModal;