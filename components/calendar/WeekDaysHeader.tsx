import { Box, Typography } from "@mui/material";


export default function WeekDaysHeader() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            {days.map((day) => (
                <Typography key={day} variant="body1" sx={{ flex: 1, textAlign: "center", fontWeight: 600 }}>
                    {day}
                </Typography>
            ))}
        </Box>
    );
}