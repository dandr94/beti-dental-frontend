import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFD700",
            light: "#FFF3B0",
            dark: "#FFC400",
        },
        secondary: {
            main: "#87CEEB",
            light: "#B0E2FF",
            dark: "#6CA6CD",
        },
        background: {
            default: "#F9F9F9",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#2E2E2E",
            secondary: "#555555",
        },
        error: {
            main: "#FF5252",
        },
        success: {
            main: "#4CAF50",
        },
        warning: {
            main: "#FFC107",
        },

    },
    typography: {
        fontFamily: [
            "Comic Sans MS",
            "cursive",
            "sans-serif",
        ].join(","),
        h1: {
            fontSize: "4rem",
            fontWeight: 700,
            color: "#2E2E2E",
        },
        h2: {
            fontSize: "3rem",
            fontWeight: 700,
            color: "#2E2E2E",
        },
        h3: {
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#2E2E2E",
        },
        h4: {
            fontSize: "2rem",
            fontWeight: 700,
            color: "#2E2E2E",
        },
        h5: {
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#2E2E2E",
        },
        h6: {
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#2E2E2E",
        },
        body1: {
            fontSize: "1.25rem",
            color: "#555555",
        },
        body2: {
            fontSize: "1.1rem",
            color: "#555555",
        },
        button: {
            textTransform: "none",
            fontWeight: 700,
        },
    },
    shape: {},
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    padding: "10px 20px",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #E0E0E0",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },
    },
});

export default theme;