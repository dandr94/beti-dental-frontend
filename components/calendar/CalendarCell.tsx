"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CalendarCellProps } from "@/interface/calendar";


export default function CalendarCell({
                                         day,
                                         isDisabled,
                                         isCurrentDay,
                                         onClick,
                                         bgColor,
                                     }: CalendarCellProps) {
    const theme = useTheme();
    return (
        <Box
            onClick={!isDisabled ? onClick : undefined}
            sx={{
                flex: 1,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: bgColor
                    ? bgColor
                    : isCurrentDay
                        ? theme.palette.primary.light
                        : isDisabled
                            ? "#f0f0f0"
                            : theme.palette.success.light,
                border: `1px solid ${theme.palette.background.paper}`,
                borderRadius: 2,
                cursor: isDisabled ? "not-allowed" : "pointer",
                opacity: isDisabled ? 0.5 : 1,
                transition: "background-color 0.3s ease",
                "&:hover": {
                    backgroundColor: bgColor
                        ? bgColor
                        : isDisabled
                            ? "#f0f0f0"
                            : theme.palette.success.dark,
                },
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    color: isCurrentDay
                        ? theme.palette.primary.dark
                        : theme.palette.text.primary,
                }}
            >
                {day}
            </Typography>
        </Box>
    );
}
