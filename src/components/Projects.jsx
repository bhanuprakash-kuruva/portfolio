
import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button, Link, useMediaQuery } from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion'; // Import framer-motion for animation effects
import Blog from '../assets/blog.jpeg';
import Bot from '../assets/bot.jpeg';
import Banner from '../assets/banner.jpeg';
import Hero from '../assets/main.png'
import Duniya from '../assets/weather.png'
import IdeaBridge from '../assets/IdeaBridge.png'
import Foodify from '../assets/Foodify.png'
import TaskManager from '../assets/TaskManager.png'

const projects = [
  {
    title: 'Blogging App',
    description: 'A blogging application built using Node.js, EJS for templating, and Bootstrap for styling. Users can create, edit, and delete blog posts.',
    image: Blog,
    githubLink: 'https://github.com/bhanuprakash-kuruva/Blog-app',
    liveLink: 'http://username.github.io/blogging-app',
  },
  {
    title: 'Chatbot Application',
    description: 'A chatbot application built using the MERN stack (MongoDB, Express, React, Node.js) with natural language processing for conversation handling.',
    image: Bot,
    githubLink: 'https://github.com/bhanuprakash-kuruva/chatbot',
    liveLink: 'http://username.github.io/chatbot-app',
  },
  {
    title: 'Table Tales',
    description: 'A restaurant website built using the MERN stack (MongoDB, Express, React, Node.js) with Material UI for a modern, responsive design.',
    image: Banner,
    githubLink: 'https://github.com/bhanuprakash-kuruva/restaurant-app',
    liveLink: 'https://restaurant-app-table-tales.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Material UI and the MERN stack to showcase my skills, educational highlights, projects and certifications.',
    image: Hero,
    githubLink: 'https://github.com/bhanuprakash-kuruva/portfolio',
    liveLink: 'https://bhanu-prakash-kuruva-portfolio.vercel.app/',
  },
  {
    title: 'Duniya App',
    description: 'A MERN stack app delivering real-time news, weather, maps, and global insights, designed with Material-UI for a sleek and responsive user experience.',
    image: Duniya,
    githubLink: 'https://github.com/bhanuprakash-kuruva/Duniya',
    liveLink: 'https://duniya-flame.vercel.app/',
  },
  {
    title: 'IdeaBridge',
    description: 'A collaborative innovation platform built using the MERN stack that enables users to submit ideas, manage projects, track real-time progress, and engage in nested discussions.',
    image: IdeaBridge,
    githubLink: 'https://github.com/bhanuprakash-kuruva/Idea-Bridge',
    liveLink: 'https://idea-bridge-frontend.vercel.app/', // replace with actual live link if available
  },
  {
    title: 'Task Manager',
    description: 'A task management application built using the MERN stack that allows owners to create tasks, assign them to workers, and track progress analytics with interactive charts.',
    image: TaskManager, // replace with your imported image variable
    githubLink: 'https://github.com/bhanuprakash-kuruva/task-manager', // replace with actual GitHub repo link
    liveLink: 'https://task-manager-seven-sandy-96.vercel.app/',
  },

  {
    title: 'Foodify (Figma Prototype)',
    description: 'A visually engaging e-commerce food delivery website prototype designed in Figma. Includes interactive user flows and pages such as Home, About, Services, Menu, Sign In/Up, Profile, and Terms & Conditions, focusing on responsive layout and user experience.',
    image: Foodify,
    githubLink: '',  // No GitHub link since it's a Figma prototype
    liveLink: 'https://www.figma.com/proto/qDKQJT0UjmtqRB3wutVHX6/Mini-project?node-id=1-2&t=0xHg8n9yMyVPUbCo-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
  }


];

const Projects = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ padding: '40px 20px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: 'aliceblue' }}>
          My Projects
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray' }}>
          Here are some of the projects I've worked on. Click on the links below to check them out.
        </Typography>
      </motion.div>

      <Box sx={{ height: '30px' }}></Box>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {/* Motion added to the Card for hover animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start from below and invisible
              animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
              transition={{ delay: 0.3 * index, duration: 0.8, ease: 'easeOut' }} // Staggered entrance
            >
              <motion.div
                whileHover={{ scale: 1.05 }}  // Scale up on hover
                whileTap={{ scale: 0.95 }}    // Scale down on tap
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card sx={{
                  backgroundColor: 'rgb(235, 235, 235)', color: 'black',
                  maxWidth: 345,
                  borderRadius: '12px',
                  boxShadow: 3,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',  // Slight upward movement on hover
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',  // Enhanced shadow effect on hover
                  },
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',  // Zoom effect on image hover
                      },
                    }}
                  />
                  <CardContent sx={{ padding: '16px' }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px', }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '16px',
                    backgroundColor: "rgb(235, 235, 235)",
                    borderTop: '1px solid #ddd',
                    '&:hover': {
                      backgroundColor: '#e0e0e0', // Change background color on hover
                    },
                  }}>
                    {
                      project.githubLink && (
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            sx={{
                              '&:hover': { color: '#fff', backgroundColor: 'gray' },
                              marginRight: '10px',
                              color: '#333',
                              borderColor: '#333',
                            }}
                          >
                            GitHub
                          </Button>
                        </Link>
                      )
                    }
                    {
                      project.liveLink && project.liveLink.trim().startsWith("https://") && (
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<LaunchIcon />}
                            sx={{
                              backgroundColor: "rgb(235, 235, 235)",
                              '&:hover': { color: '#fff', backgroundColor: '#1976d2' },
                            }}
                          >
                            Live Demo
                          </Button>
                        </Link>
                      )
                    }

                    {/* <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<LaunchIcon />}
                        sx={{
                          backgroundColor: "rgb(235, 235, 235)",
                          '&:hover': { color: '#fff', backgroundColor: '#1976d2' },
                        }}
                      >
                        Live Demo
                      </Button>
                    </Link> */}
                  </Box>
                </Card>
              </motion.div>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
