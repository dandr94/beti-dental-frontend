"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";

type SnackbarSeverity = "success" | "error" | "warning" | "info";

interface SnackbarContextProps {
    showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export function useSnackbar() {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
}

export function SnackbarProvider({ children }: { children: ReactNode }) {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "info" as SnackbarSeverity,
    });

    const showSnackbar = (message: string, severity: SnackbarSeverity = "info") => {
        setSnackbar({ open: true, message, severity });
    };

    const handleClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleClose}
                TransitionComponent={(props) => <Slide {...props} direction="up" />}
            >
                <Alert
                    onClose={handleClose}
                    variant="filled"
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
}
