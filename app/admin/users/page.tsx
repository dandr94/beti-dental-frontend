"use client";

import { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { CreateUserModal, EditUserModal, DeleteUserDialog } from "@/components/admin/";
import { getUsers } from "@/services/apiRoutes/admin/users";
import { getUser } from "@/services/apiRoutes/user";

interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    role: string;
    is_active: boolean;
}

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [loggedUser, setLoggedUser] = useState<User | null>(null);

    // TODO: clean up this page
    const fetchUsers = () => {
        getUsers()
            .then((response) => {
                setUsers(response.data);
            })
            .catch(() => {
                console.log("Failed to load user data.");
            });
    };

    const fetchUser = () => {
        getUser()
            .then((response) => {
                setLoggedUser(response.data);
            })
            .catch(() => {
                console.log("Failed to load user data.");
            });
    };

    useEffect(() => {
        fetchUsers();
        fetchUser();
    }, []);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Users
            </Typography>

            {/* Create User Button */}
            <Button variant="contained" onClick={() => setIsCreateModalOpen(true)} sx={{ mb: 3 }}>
                Create User
            </Button>

            {/* Users Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Is Active</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.first_name}</TableCell>
                                <TableCell>{user.last_name}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.is_active ? "Active" : "Inactive"}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => {
                                        setSelectedUser(user);
                                        setIsEditModalOpen(true);
                                    }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => {
                                        setSelectedUser(user);
                                        setIsDeleteDialogOpen(true);
                                    }}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modals and Dialogs */}
            <CreateUserModal
                open={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onUserCreated={fetchUsers}
            />
            {selectedUser && (
                <EditUserModal
                    open={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    user={selectedUser}
                    onUserUpdated={fetchUsers}
                />
            )}
            {selectedUser && (
                <DeleteUserDialog
                    open={isDeleteDialogOpen}
                    onClose={() => setIsDeleteDialogOpen(false)}
                    onConfirm={() => {
                        setIsDeleteDialogOpen(false);
                        fetchUsers();
                    }}
                    isCurrentUser={selectedUser.id === loggedUser?.id}
                    userId={selectedUser.id}
                />
            )}
        </Box>
    );
};

export default UsersPage;