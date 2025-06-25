import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AdminNavbar() {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Admin Panel
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

