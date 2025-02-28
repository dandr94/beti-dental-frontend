"use client";

import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { useBookingModal } from "@/hooks";
import { Fields, Layout } from "@/components/forms";
import { BookingModalProps } from "@/interface/modal";


export default function BookingModal({ open, onClose, timeSlot, appointment_slot }: BookingModalProps) {
    const {
        email,
        first_name,
        last_name,
        phone,
        isLoading,
        fieldErrors,
        handleChange,
        handleSubmit,
    } = useBookingModal(appointment_slot, onClose);

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
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Book Appointment for {timeSlot}
                </Typography>
                <Layout
                    title="Book Appointment"
                    onSubmit={handleSubmit}
                    isLoading={isLoading}
                    buttonText="Book"
                    linkMessage=""
                    linkText=""
                    linkHref=""
                    showFormLinkMessage={false}
                    showSocialAuth={false}
                >
                    <Fields fields={fields} handleChange={handleChange} fieldErrors={fieldErrors} />
                </Layout>
            </Box>
        </Modal>
    );
}