"use client";

import { Box, Typography, Container, Stack, Link, IconButton } from "@mui/material";
import theme from "@/theme";
import { Email, Facebook, Instagram, Phone, Twitter } from "@mui/icons-material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.light,
                py: 8,
                transition: "opacity 1s, transform 1s",
            }}
        >
            <Container maxWidth="xl">
                <Stack direction={{ xs: "column", md: "row" }} spacing={6} justifyContent="space-between">
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                            Beti Dental
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                            Providing exceptional dental care for over 15 years.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="/" color="inherit" sx={{ fontSize: "1.1rem" }}>
                                Home
                            </Link>
                            <Link href="/services" color="inherit" sx={{ fontSize: "1.1rem" }}>
                                Services
                            </Link>
                            <Link href="/about" color="inherit" sx={{ fontSize: "1.1rem" }}>
                                About
                            </Link>
                            <Link href="/contact" color="inherit" sx={{ fontSize: "1.1rem" }}>
                                Contact
                            </Link>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                            123 Dental Street
                            <br />
                            City, State 12345
                            <br />
                            <Phone sx={{ verticalAlign: "middle", mr: 1 }} /> (123) 456-7890
                            <br />
                            <Email sx={{ verticalAlign: "middle", mr: 1 }} /> info@betidental.com
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                            Follow Us
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <IconButton href="https://facebook.com" target="_blank">
                                <Facebook />
                            </IconButton>
                            <IconButton href="https://twitter.com" target="_blank">
                                <Twitter />
                            </IconButton>
                            <IconButton href="https://instagram.com" target="_blank">
                                <Instagram />
                            </IconButton>
                        </Stack>
                    </Box>
                </Stack>
                <Typography variant="body2" align="center" sx={{ mt: 6 }}>
                    © {new Date().getFullYear()} Beti Dental. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}