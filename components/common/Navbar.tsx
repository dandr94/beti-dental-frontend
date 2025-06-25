"use client";

import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import theme from "@/theme";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.text.primary,
                boxShadow: "none",
                backdropFilter: "blur(10px)",
                transition: "opacity 1s, transform 1s",
                borderBottom: 3,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 600 }}>
                        Beti Dental
                    </Typography>
                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                        <Link href="/" passHref>
                            <Button sx={{
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                            }}>Home</Button>
                        </Link>
                        <Link href="/services" passHref>
                            <Button sx={{
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                            }}>Services</Button>
                        </Link>
                        <Link href="/about" passHref>
                            <Button sx={{
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                            }}>About</Button>
                        </Link>
                        <Link href="/contact" passHref>
                            <Button sx={{
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                            }}>Contact</Button>
                        </Link>
                    </Box>
                    {/* Mobile Menu */}
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <IconButton onClick={handleMenuOpen} sx={{ color: theme.palette.text.primary }}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            <MenuItem onClick={handleMenuClose}>
                                <Link href="/" passHref>
                                    <Button sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                    }}>Home</Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <Link href="/services" passHref>
                                    <Button sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                    }}>Services</Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <Link href="/about" passHref>
                                    <Button sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                    }}>About</Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <Link href="/contact" passHref>
                                    <Button sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                    }}>Contact</Button>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}