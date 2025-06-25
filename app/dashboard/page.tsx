"use client";

import { Box, Typography, Container } from "@mui/material";
import { LoadingSpinner } from "@/components/common";
import { useUserDashboard } from "@/hooks/";

export default function Page() {
    const { user, isLoading, error } = useUserDashboard();

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
                <Typography color="error">{error}</Typography>
            </Container>
        );
    }

    const config = [
        { label: "First name", value: user?.first_name },
        { label: "Last name", value: user?.last_name },
        { label: "Email address", value: user?.email },
        { label: "Role", value: user?.role },
        { label: "Phone", value: user?.phone },
    ];

    return (
        <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4" gutterBottom>
                    Dashboard
                </Typography>
                <Box sx={{ width: "100%" }}>
                    {config.map((item, index) => (
                        <Box key={index} sx={{ marginBottom: 2 }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {item.label}
                            </Typography>
                            <Typography variant="body1">
                                {item.value || "Not provided"}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}
