
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import Banner from '../assets/man.webp'; // Ensure the image path is correct
import Bhanu from '../assets/nenu.jpg'
const Hero = () => {
  return (
    <Box sx={{ flexGrow: 1, color: 'white', padding: { xs: '40px 20px', sm: '80px 20px' } }}>
      <Grid container spacing={2} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        
        {/* Left Side: Text Content */}
        <Grid item xs={12} md={8}>
          {/* Hero title animation on page load */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start from 50px below and invisible
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 1, ease: 'easeOut' }} // Smooth animation with 1 second duration
          >
            <Typography
              sx={{
                fontSize: { xs: '30px', sm: '55px', lg: '60px' },
                marginBottom: '20px',
                fontWeight: 'bold',
                lineHeight: 1.2,
                color: 'white',
              }}
            >
              Hey there, I'm <span style={{ color: 'rgb(92, 217, 255)' }}>Bhanu Prakash</span>
            </Typography>
          </motion.div>

          {/* Hero description animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} // Start from slightly below and invisible
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }} // Slight delay for effect
          >
            <Typography
              variant="body1"
              paragraph
              sx={{
                marginBottom: '30px',
                fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' },
                color: '#e0e0e0',
                lineHeight: 1.5,
              }}
            >
              As a passionate MERN stack developer, I specialize in building dynamic web applications using React, Node.js, MongoDB, and Material-UI. With a strong foundation in modern JavaScript frameworks, I create scalable and responsive applications that offer seamless user experiences. In addition to my web development skills, I am deeply interested in machine learning and constantly exploring new ways to integrate AI-driven solutions into web applications to solve complex problems.
            </Typography>
          </motion.div>
          
          {/* Button with hover effects */}
          <motion.div
            whileHover={{ scale: 1.05 }} // Slightly scale up the button on hover
            transition={{ duration: 0.3 }} // Set transition duration for hover effect only
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }} // Delayed appearance of button
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'rgb(92, 217, 255)',
                  '&:hover': { backgroundColor: '#64b5f6' },
                  size: 'large',
                  marginTop: { xs: '20px', sm: '0' },
                }}
                href="https://www.linkedin.com/in/bhanuprakash-kuruva"
              >
                <Typography sx={{ color: 'blue' }}>Connect with me on LinkedIn</Typography>
              </Button>
            </motion.div>
          </motion.div>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={4} container justifyContent="center" sx={{ marginTop: { xs: '20px', md: '0' } }}>
          {/* Hero image animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start from below and invisible
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }} // Delay for smooth transition
            style={{
              position: 'relative',
              width: { xs: '200px', sm: '250px', md: '300px' },
              height: { xs: '200px', sm: '250px', md: '300px' },
              borderRadius: '50%',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
              padding: '5px',
              background: 'linear-gradient(145deg, rgba(92, 217, 255, 0.6), rgba(92, 217, 255, 0.1))',
              overflow: 'hidden',
              marginBottom: { xs: '20px', md: '0' },
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              component="img"
              src={Bhanu}
              alt="Hero Banner"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                transition: 'transform 0.3s ease',
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
