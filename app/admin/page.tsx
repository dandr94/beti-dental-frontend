"use client";

import { Box, Typography, Stack, Paper, Divider } from "@mui/material";
import StatCard from "@/components/admin/StatCard";

export default function Page() {
    const totalUsers = 120;
    const totalDentists = 15;
    const jobsDone = 320;
    const incomingAppointments = 25;
    const appointmentsDone = 280;

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            {/* Stats Section */}
            <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                <StatCard title="Total Users" value={totalUsers} />
                <StatCard title="Total Dentists" value={totalDentists} />
                <StatCard title="Jobs Done" value={jobsDone} />
                <StatCard title="Incoming Appointments" value={incomingAppointments} />
                <StatCard title="Appointments Done" value={appointmentsDone} />
            </Stack>

            <Divider sx={{ my: 3 }} />

            {/* Recent Activity Section */}
            <Typography variant="h5" gutterBottom>
                Recent Activity
            </Typography>
            <Paper sx={{ p: 2 }}>
                <Typography variant="body1">
                    - User &#34;John Doe&#34; was added on 2023-10-01.
                </Typography>
                <Typography variant="body1">
                    - Dentist &#34;Dr. Smith&#34; completed 5 appointments today.
                </Typography>
                <Typography variant="body1">
                    - New appointment scheduled for 2023-10-05.
                </Typography>
            </Paper>
        </Box>
    );
};
