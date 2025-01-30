import { Box, Typography, Link } from "@mui/material";
import { LinkMessageProps } from "@/interface/forms";

export default function LinkMessage({
                                            message,
                                            linkText,
                                            linkHref,
                                        }: LinkMessageProps) {
    return (
        <Box mt={3} textAlign="center">
            <Typography variant="body2">
                {message}{" "}
                <Link
                    href={linkHref}
                    variant="body2"
                    sx={{ fontWeight: "bold" }}
                >
                    {linkText}
                </Link>
            </Typography>
        </Box>
    );
}