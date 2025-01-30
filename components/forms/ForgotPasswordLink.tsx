import { Box, Link } from "@mui/material";

export default function ForgotPasswordLink({ href = "/password-reset" }) {
    return (
        <Box textAlign="right" mt={-1} mb={2}>
            <Link href={href} variant="body2" sx={{ fontWeight: "bold" }}>
                Forgot password?
            </Link>
        </Box>
    );
}