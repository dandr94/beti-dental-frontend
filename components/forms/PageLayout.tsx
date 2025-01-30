"use client";

import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { PageLayoutProps } from "@/interface/forms";

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 2,
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    boxShadow: "none",
                    borderRadius: 2,
                }}
            >
                <CardMedia
                    component="img"
                    image="/mascot.png"
                    alt="Beti-Dental"
                    sx={{ height: 400, objectFit: "cover", borderRadius: 2 }}
                />
                <CardContent>{children}</CardContent>
            </Card>
        </Box>
    );
}