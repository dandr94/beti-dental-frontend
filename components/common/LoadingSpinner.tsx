import { Box, CircularProgress } from "@mui/material";
import { LoadingSpinnerProps } from "@/interface/common";

export default function LoadingSpinner({
                                           fullHeight = true,
                                           size = 40,
                                       }: LoadingSpinnerProps) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: fullHeight ? "100vh" : "auto",
                py: fullHeight ? 0 : 2,
            }}
        >
            <CircularProgress size={size} />
        </Box>
    );
}