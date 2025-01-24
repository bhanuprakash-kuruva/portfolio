
import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import Mongo from '../assets/mongo.png';
import Web from '../assets/web.png';
import Testing from '../assets/testing.jpg';

const certifications = [
    {
        title: 'Web Development (MERN Stack)',
        organization: 'TEACHNOOK',
        issueDate: 'September 2024',
        certificateLink: 'https://cert.diceid.com/cid/IX2gqV6oSt',
        image: Web,
    },
    {
        title: 'MongoDB: CRUD Mastery with Node.js',
        organization: 'GeeksForGeeks',
        issueDate: 'December 2024',
        certificateLink: 'https://lnkd.in/eqwnhyAK',
        image: Mongo,
    },
    {
        title: 'Software Testing (Fundamentals)',
        organization: 'Great Learning',
        issueDate: 'January 2025',
        certificateLink: 'https://coursera.org/certificate/username-backend-development',
        image: Testing,
    },
];

const Certifications = () => {
    // Framer Motion variants for animation
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2, // Stagger animation for child elements
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <Box
            sx={{ padding: { xs: '1rem', sm: '2rem' }, borderRadius: '10px' }}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Typography
                variant="h4"
                textAlign="center"
                gutterBottom
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: 'aliceblue' }}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Certifications
            </Typography>
            <Typography
                variant="subtitle1"
                textAlign="center"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray' }}
                gutterBottom
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                Here are the certifications I've earned. Click on the links below to check them out.
            </Typography>
            <Box sx={{ height: '30px' }}></Box>
            <Grid container spacing={4}>
                {certifications.map((cert, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div variants={itemVariants}>
                            <Card
                                elevation={3}
                                sx={{
                                    backgroundColor: 'rgb(235, 235, 235)',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={cert.image}
                                    alt={`${cert.title} Certificate`}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {cert.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {cert.organization}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ marginTop: '0.5rem' }}
                                    >
                                        Issued: {cert.issueDate}
                                    </Typography>
                                    {
                                       cert.title === 'Web Development (MERN Stack)' ? (<Box sx={{height:'30px'}}></Box>) :(<Box></Box>)
                                    }
                                    {cert.title !== 'Software Testing (Fundamentals)' ? (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            sx={{ marginTop: '1rem' }}
                                            href={cert.certificateLink}
                                            target="_blank"
                                        >
                                            View Certificate
                                        </Button>
                                    ) : (
                                        <Box sx={{height:'75px'}}></Box>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Certifications;
