"use client";

import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

export default function NotFound() {
    const router = useRouter();

    const handleGoBack = () => {
        router.push("/");
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                p: 3,
                backgroundColor: "white",
            }}
        >
            <Typography variant="h1" color="primary" gutterBottom>
                404
            </Typography>
            <Typography variant="h4" gutterBottom>
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </Typography>
            <Typography variant="body1" color="textSecondary">
                It seems you&apos;ve stumbled upon a page that no longer exists
                or has moved.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoBack}
                sx={{ mt: 2, py: 1.5, px: 4 }}
            >
                Back to Home
            </Button>
        </Box>
    );
}