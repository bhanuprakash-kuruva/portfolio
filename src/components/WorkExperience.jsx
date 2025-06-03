import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import Logo from '../assets/logo.jpeg'
const experiences = [
  {
    year: "April 2025 - Present",
    title: "Web Development Intern",
    org: "PRAGYASHAL – Remote",
    description:
      "Contributed to designing and developing a responsive website using React and Material-UI. Improved UI/UX, collaborated with the team, and ensured smooth frontend functionality.",
    logo: Logo
    }
];


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.6 }
  }
};

// Hover effects for card
const cardHover = {
  scale: 1.03,
  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  transition: { duration: 0.3 },
};

// Hover effects for avatar
const avatarHover = {
  scale: 1.1,
  boxShadow: "0 0 12px #1976d2",
  transition: { duration: 0.3 },
};

const WorkExperience = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, color: "aliceblue", mb: 4 }}
      >
        Work Experience
      </Typography>

      <Box component="section">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={cardHover}
            style={{ borderRadius: 8, marginBottom: 40 }}
          >
            <Grid container spacing={2} alignItems="flex-start">
              {/* Left: Company Logo */}
              <Grid item xs={12} sm={2}>
                <motion.div whileHover={avatarHover} style={{ display: "inline-block" }}>
                  <Avatar
                    alt={exp.org}
                    src={exp.logo}
                    sx={{
                      width: 100,
                      height: 100,
                      mx: { xs: "auto", sm: 0 },
                      border: "2px solid #fff",
                      boxShadow: 3,
                    }}
                  />
                </motion.div>
              </Grid>

              {/* Right: Details */}
              <Grid item xs={12} sm={10}>
                <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "gray", mb: 1 }}>
                  {exp.org} | {exp.year}
                </Typography>
                <Typography variant="body2" sx={{ color: "lightgray" }}>
                  {exp.description}
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default WorkExperience;

