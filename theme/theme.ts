'use client';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1158A7",
        },
    },
    typography: {
        fontFamily: "var(--font-iran-sans), Arial, sans-serif",
    },
});

export default theme;