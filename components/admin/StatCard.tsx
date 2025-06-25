import { Paper, Typography, Stack } from "@mui/material";

interface StatCardProps {
    title: string;
    value: number | string;
}

const StatCard = ({ title, value }: StatCardProps) => {
    return (
        <Paper
            sx={{
                p: 3,
                flex: 1,
                textAlign: "center",
                backgroundColor: (theme) => theme.palette.background.paper,
            }}
        >
            <Stack spacing={1}>
                <Typography variant="h6" color="textSecondary">
                    {title}
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                    {value}
                </Typography>
            </Stack>
        </Paper>
    );
};

export default StatCard;