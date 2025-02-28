"use client";

import { useParams } from "next/navigation";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import { useActivation } from "@/hooks";
import { UIDTokenProps } from "@/interface/auth";

export default function Page() {
    const { uid, token } = useParams();

    const { isLoading, hasError, isActivated } = useActivation({ uid, token } as UIDTokenProps);

    //TODO: Work on this page, it is kind of ugly
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    py: 8,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    {isLoading
                        ? "Your account is being activated. You will be redirected shortly"
                        : isActivated
                            ? "Your account has been activated successfully. Redirecting to login..."
                            : "Failed to activate your account. Please try again."}
                </Typography>

                {isLoading && <CircularProgress />}
                {!isLoading && isActivated && <CircularProgress color="success" />}
                {!isLoading && hasError && (
                    <Typography color="error" variant="body1">
                        Something went wrong. Please check the activation link.
                    </Typography>
                )}
            </Box>
        </Container>
    );
}
