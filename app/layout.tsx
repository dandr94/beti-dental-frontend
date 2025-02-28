"use client";
import { Navbar, Footer } from "@/components/common";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { Container } from "@mui/material";
import { SnackbarProvider } from "@/context/SnackbarProvider";
import React from "react";
import { usePathname } from "next/navigation";
import AdminNavbar from "@/components/admin/Navbar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();

    const isAdminRoute = pathname.startsWith("/admin");

    return (
        <html lang="en">
        <body className="body-font">
        <ThemeProvider theme={theme}>
            <SnackbarProvider>
                {isAdminRoute ? <AdminNavbar /> : <Navbar />}

                <Container
                    component="main"
                    maxWidth={false}
                    sx={{
                        py: { xs: 1, sm: 2 },
                        px: { xs: 1, sm: 2 },
                        backgroundColor: theme.palette.background.default,
                    }}

                >
                    {children}
                </Container>

                {!isAdminRoute ? <Footer /> : null}


            </SnackbarProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}