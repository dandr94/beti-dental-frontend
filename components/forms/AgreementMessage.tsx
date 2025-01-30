import { Box, Typography, Link } from "@mui/material";

export default function AgreementMessage() {
    return (
        <Box mt={2} textAlign="center">
            <Typography variant="body2">
                By signing up, I agree to{" "}
                <Link
                    href="/terms-of-service"
                    variant="body2"
                    target="_blank"
                    sx={{ fontWeight: "bold" }}
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy-policy"
                    variant="body2"
                    target="_blank"
                    sx={{ fontWeight: "bold" }}
                >
                    Privacy Policy
                </Link>
                .
            </Typography>
        </Box>
    );
}