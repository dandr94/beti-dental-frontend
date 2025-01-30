import { Box, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { ErrorMessageProps } from "@/interface/messages";

export default function ErrorMessage({
                                         message = "An error occurred.",
                                     }: ErrorMessageProps) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
                padding: 4,
                maxWidth: "800px",
                margin: "auto",
            }}
        >
            <ErrorOutline
                color="error"
                sx={{ fontSize: 80, marginBottom: 2 }}
            />

            <Typography
                variant="h4"
                color="error"
                align="center"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
                Oops! Something went wrong.
            </Typography>

            <Typography
                variant="body1"
                color="error"
                align="center"
                sx={{
                    fontSize: "1.2rem",
                    marginBottom: 3,
                    fontWeight: "500",
                }}
            >
                {message}..... {":("}
            </Typography>
        </Box>
    );
}