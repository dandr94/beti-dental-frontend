import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { format } from "date-fns";
import { CalendarHeaderProps } from "@/interface/calendar";


export default function CalendarHeader({
                                           currentDate,
                                           onPrev,
                                           onNext,
                                       }: CalendarHeaderProps) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <IconButton onClick={onPrev}>
                <ArrowBackIos />
            </IconButton>
            <Typography variant="h4">
                {format(currentDate, "MMMM yyyy")}
            </Typography>
            <IconButton onClick={onNext}>
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
}