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
                p: { xs: 1, sm: 2 },
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", sm: 400 },
                    boxShadow: "none",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <CardMedia
                        component="img"
                        image="/mascot.png"
                        alt="Beti-Dental"
                        sx={{
                            width: "100%",
                            height: "auto",
                            maxHeight: { xs: 300, sm: 400 },
                            objectFit: "contain",
                        }}
                    />
                </Box>
                <CardContent>{children}</CardContent>
            </Card>
        </Box>
    );
}