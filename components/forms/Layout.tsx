import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import FormLinkMessage from "./LinkMessage";
import { LoadingSpinner } from "../common";
import { LayoutProps } from "@/interface/forms";

export default function Layout({
                                   title,
                                   onSubmit,
                                   isLoading = false,
                                   buttonText,
                                   children,
                                   linkMessage,
                                   linkText,
                                   linkHref,
                                   showFormLinkMessage = true,
                                   showSocialAuth = true,
                               }: LayoutProps) {
    return (
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <Stack spacing={2}>
                <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    gutterBottom
                    sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                >
                    {title}
                </Typography>
                {showFormLinkMessage && (
                    <>
                        <FormLinkMessage
                            message={linkMessage}
                            linkText={linkText}
                            linkHref={linkHref}
                        />
                    </>
                )}
            </Stack>
            <Stack spacing={2} mt={3}>
                {children}
            </Stack>
            <Button
                disabled={isLoading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    mt: 4,
                    mb: 2,
                    py: 2,
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    height: "56px",
                }}
            >
                {isLoading ? <LoadingSpinner /> : buttonText}
            </Button>
            {showSocialAuth && (
                <>
                    <Divider>or</Divider>
                </>
            )}
        </Box>
    );
}