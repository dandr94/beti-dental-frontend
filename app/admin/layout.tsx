"use client";

import { Box, Drawer, Toolbar } from "@mui/material";
import { useState } from "react";
import { Navbar, Sidebar } from "@/components/admin";
import { RequireRoleAuth } from "@/components/utils";

// Bad way, needs changing
const drawerWidth = 240;
const collapsedWidth = 60;

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <RequireRoleAuth allowedRoles={["admin", "dentist"]}>
            <Box sx={{ display: "flex" }}>
                <Navbar />

                <Drawer
                    variant="permanent"
                    sx={{
                        width: isSidebarOpen ? drawerWidth : collapsedWidth,
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                        [`& .MuiDrawer-paper`]: {
                            width: isSidebarOpen ? drawerWidth : collapsedWidth,
                            transition: "width 0.3s ease",
                            overflowX: "hidden",
                            boxSizing: "border-box",
                        },
                    }}
                >
                    <Toolbar />
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </Drawer>

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </RequireRoleAuth>
    );
};

export default Layout;
