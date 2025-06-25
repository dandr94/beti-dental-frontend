"use client";

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Box,
} from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Sidebar = ({
                     isOpen,
                     toggleSidebar,
                 }: {
    isOpen: boolean;
    toggleSidebar: () => void;
}) => {
    return (
        <Box sx={{ position: "relative" }}>
            <IconButton
                onClick={toggleSidebar}
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    m: 1,
                }}
            >
                {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>

            {/* Sidebar Content */}
            <List sx={{ display: isOpen ? "block" : "none", mt: 5 }}>
                <Link href="/admin" passHref legacyBehavior>
                    <ListItem component="a">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Link>
                <Link href="/admin/users" passHref legacyBehavior>
                    <ListItem component="a">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>
                </Link>
                <Link href="/admin/schedules" passHref legacyBehavior>
                    <ListItem component="a">
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText primary="Schedules" />
                    </ListItem>
                </Link>
                <Link href="/admin/appointments" passHref legacyBehavior>
                    <ListItem component="a">
                        <ListItemIcon>
                            <ChecklistIcon />
                        </ListItemIcon>
                        <ListItemText primary="Appointments" />
                    </ListItem>
                </Link>
            </List>
        </Box>
    );
};

export default Sidebar;
