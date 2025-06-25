"use client";

import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    Avatar,
    Container,
    Stack,
    Divider,
    ButtonProps,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import theme from "@/theme";
import { useEffect } from "react";

const testimonials = [
    {
        name: "John Doe",
        comment: "Beti is amazing! She made me feel comfortable and explained everything clearly. Highly recommended!",
        avatar: "person_2.jpg",
    },
    {
        name: "Jane Smith",
        comment: "I’ve been going to Beti for years. Her expertise and care are unmatched. Thank you!",
        avatar: "person_1.jpg",
    },
    {
        name: "Alice Johnson",
        comment: "The best dental experience I’ve ever had. Beti is truly a professional.",
        avatar: "person_3.jpg",
    },
];

const services = [
    {
        title: "General Dentistry",
        description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
    },
    {
        title: "Cosmetic Dentistry",
        description: "Enhance your smile with teeth whitening, veneers, and more.",
    },
    {
        title: "Orthodontics",
        description: "Straighten your teeth with modern braces and aligners.",
    },
    {
        title: "Emergency Care",
        description: "Immediate care for dental emergencies like toothaches and broken teeth.",
    },
];

const TypingText = ({ text }: { text: string }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            width: "100%",
            transition: { duration: 2, ease: "easeInOut" },
        });
    }, [controls]);

    return (
        <motion.div
            style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: 0,
            }}
            animate={controls}
        >
            {text}
        </motion.div>
    );
};

const AnimatedButton = ({ children, ...props }: ButtonProps) => (
    <motion.div
        whileHover={{ rotate: 5 }} // Tilt the button
        transition={{ type: "spring", stiffness: 300 }} // Add a springy effect
    >
        <Button {...props}>
            {children}
        </Button>
    </motion.div>
);

export default function HomePage() {
    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            {/* Hero Section */}
            <motion.div
                style={{ y: 0 }}
                whileInView={{ y: -50 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        py: { xs: 8, md: 15 },
                        backgroundImage: "url(/images/dental-hero.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white",
                        borderRadius: 20,
                    }}
                >
                    <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: "3rem", md: "5rem" } }}>
                        <TypingText text="Welcome to Beti Dental" />
                    </Typography>
                    <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}>
                        <TypingText text="Over 15 Years of Experience in Providing Exceptional Dental Care" />
                    </Typography>

                    <AnimatedButton
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ fontSize: "1.5rem", py: 2, px: 4, mt: 2 }}
                        href="/appointment"
                    >
                        Book an Appointment
                    </AnimatedButton>
                </Box>
            </motion.div>

            <Divider sx={{ my: 8, borderColor: theme.palette.secondary.dark }} />

            {/* About Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ my: { xs: 6, md: 10 } }}>
                    <Typography variant="h2" align="center" gutterBottom
                                sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}>
                        About Beti
                    </Typography>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 6 }} alignItems="center">
                        <Avatar
                            src="mascot.png"
                            alt="Dr. Smith"
                            sx={{
                                width: { xs: 250, md: 400 },
                                height: { xs: 250, md: 400 },
                                borderRadius: "50%",
                            }}
                        />
                        <Box>
                            <Typography variant="body1" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
                                Beti is a highly experienced dentist with over 15 years of practice. She specializes in general and
                                cosmetic dentistry, providing personalized care to each patient. Beti is dedicated to creating a
                                comfortable and welcoming environment in her private cabinet.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
                                Her mission is to help patients achieve healthy, beautiful smiles through advanced dental techniques
                                and compassionate care.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </motion.div>

            <Divider sx={{ my: 8, borderColor: theme.palette.secondary.dark }} />

            {/* Services Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ my: { xs: 6, md: 10 } }}>
                    <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}>
                        Our Services
                    </Typography>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 6 }} justifyContent="center">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                sx={{
                                    width: { xs: "100%", md: "25%" },
                                    textAlign: "center",
                                    p: { xs: 2, md: 3 },
                                    backgroundColor: theme.palette.background.paper,
                                    border: `3px solid ${theme.palette.primary.main}`,
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Box>
            </motion.div>

            <Divider sx={{ my: 8, borderColor: theme.palette.secondary.dark }} />

            {/* Testimonials Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
            >
                <Box sx={{ my: { xs: 6, md: 10 } }}>
                    <Typography variant="h2" align="center" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}>
                        What Our Patients Say
                    </Typography>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 6 }} justifyContent="center">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                sx={{
                                    width: { xs: "100%", md: "30%" },
                                    textAlign: "center",
                                    p: { xs: 2, md: 3 },
                                    backgroundColor: theme.palette.background.paper,
                                    border: `3px solid ${theme.palette.primary.main}`,
                                }}
                            >
                                <CardContent>
                                    <Avatar
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        sx={{
                                            width: { xs: 100, md: 150 },
                                            height: { xs: 100, md: 150 },
                                            mx: "auto",
                                            mb: { xs: 2, md: 3 },
                                        }}
                                    />
                                    <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                                        {testimonial.comment}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Box>
            </motion.div>

            <Divider sx={{ my: 8, borderColor: theme.palette.secondary.dark }} />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1 }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        py: { xs: 6, md: 10 },
                        border: 3,
                        borderRadius: 20,
                        borderColor: theme.palette.primary.main,
                    }}
                >
                    <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}>
                        Ready to Transform Your Smile?
                    </Typography>
                    <AnimatedButton variant="contained" color="primary" size="large" sx={{ fontSize: "1.5rem", py: 2, px: 4 }} href="/appointment">
                        Book an Appointment
                    </AnimatedButton>
                </Box>
            </motion.div>
        </Container>
    );
}
