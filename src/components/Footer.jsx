import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material'; // Import Instagram icon

const Footer = () => {
  return (
    <Box sx={{ color: '#fff', padding: '40px 20px' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
        
        {/* Contact Info */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontSize:'25px', textAlign: 'center' }}>
             Bhanu Prakash
          </Typography>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <IconButton
              color="inherit"
              href="https://github.com/bhanuprakash-kuruva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/bhanuprakash-kuruva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://x.com/Pardhu_kuruva?t=cZFkiWnbzrgMju-Wk4W85Q&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://www.instagram.com/bhanuprakash_785/profilecard/?igsh=ZzI0ZTgwNTE3aWxz" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
