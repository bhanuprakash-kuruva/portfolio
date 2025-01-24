import React, { useState } from 'react';
import { Box, Typography, useMediaQuery, Card, CardContent, CardActionArea, CardActions, Button, Collapse } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web'; // For MERN Stack
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const timelineData = [
  {
    year: '2020',
    title: 'Completed 10th Standard',
    description: 'Completed 10th class with a CGPA of 10.0, laying the foundation for a career in technology.',
    icon: <SchoolIcon />,
  },
  {
    year: '2021',
    title: 'Joined RGUKT CET for PUC',
    description: 'Secured a seat in the RGUKT CET and joined the Pre-University Course (PUC) to continue academic excellence.',
    icon: <BookIcon />,
  },
  {
    year: '2022',
    title: 'Completed PUC',
    description: 'Completed PUC with a CGPA of 9.92 and joined Computer Science and Engineering for a BTech degree.',
    icon: <SchoolIcon />,
  },
  {
    year: '2023',
    title: 'Mastered C Programming and Java',
    description: 'Gained proficiency in C programming and Java, along with mastering Data Structures and Algorithms (DSA).',
    icon: <CodeIcon />,
  },
  {
    year: '2024',
    title: 'Completed MERN Stack Course',
    description: 'Successfully completed a MERN stack course and gained in-depth knowledge of web development using MongoDB, Express, React, and Node.js.',
    icon: <WebIcon />,
  },
];

const CustomTimeline = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Detect mobile screens
  const currentYear = new Date().getFullYear();

  const [expandedIndex, setExpandedIndex] = useState(null); // State for expanded content
  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expanded state
  };

  // Slide-up animation for the timeline items
  const slideUpAnimation = {
    animate: {
      y: isSmallScreen?["+5%", "-10%"]:["+30%", "-20%"], // Slide-up effect
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8, // Speed of the slide
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: { xs: '20px 10px', sm: '40px 20px' } }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: 'aliceblue' }}>
          Educational Highlights
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: '#777' }}>
          A summary of my educational and professional journey
          <Typography
          variant="body1"
          align="center"
          sx={{ marginTop: '40px', fontSize: { xs: '0.9rem', sm: '1rem' }, color: 'gray' }}
        >
          This is just the beginning of my journey. I look forward to embracing new opportunities and challenges that lie ahead. Want to know more about my work? Check out my <a href="/" style={{ color: '#1976d2', textDecoration: 'none' }}><Link to={'/projects'}>projects</Link></a> or <a href="/" style={{ color: '#1976d2', textDecoration: 'none' }}><Link to={'/contact'}>get in touch</Link></a> with me!
        </Typography>
        </Typography>

      </Box>
      <Box sx={{height:'30px'}}></Box>
      <Timeline position={isSmallScreen ? "right" : "alternate"}> {/* Remove the "right" positioning for mobile */}
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator
              sx={{
                flexDirection: isSmallScreen ? "column" : "row", // Stack items in column for mobile
                alignItems: isSmallScreen ? "start" : "center", // Align to left for mobile
                marginTop: isSmallScreen ? "20px" : "0", // Add space between items for mobile
                left: isSmallScreen ? "0px" : 'auto', // Align timeline dot to the left with 30px margin for mobile
                position: isSmallScreen ? 'absolute' : 'relative', // Position absolute for mobile view
                transition: 'all 0.3s ease', // Smooth transition on hover
              }}
              className="timeline-separator" 
            >
              {/* Timeline Dot with hover effect */}
              <motion.div
                whileHover={{ scale: 1.3 }} // Scale the dot on hover for interactivity
                whileTap={{ scale: 0.9 }} // Make the dot shrink on click
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '4px',
                  borderRadius: '50%',
                  backgroundColor: item.year === currentYear ? "#1976d2" : "#4caf50", // Highlight current year
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                {item.icon}
              </motion.div>

              {index < timelineData.length - 1 && (
                <TimelineConnector sx={{ 
                  borderColor: item.year === currentYear ? '#1976d2' : '#4caf50', // Color of the line
                  transition: 'all 0.3s ease',
                  '&:hover': { borderColor: '#1976d2' }, // Change color on hover
                }} />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{marginLeft:isSmallScreen?'-300px':'0px'}}>
              <motion.div
                {...slideUpAnimation}
                whileHover={{ scale: 1.05 }}  // Slightly scale up on hover for interactivity
                style={{
                  padding: '16px',
                  backgroundColor: item.year === currentYear ? '#e0f7fa' : '#f5f5f5', // Highlight background for current year
                  borderRadius: '8px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  marginBottom: '16px',
                  transition: 'all 0.3s ease', // Smooth transition for hover effect
                }}
              >
                <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', boxShadow: 3 }}>
                  <CardActionArea onClick={() => handleClick(index)}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' }, color: '#444' }}>
                        {item.year}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' }, color: '#555' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ marginTop: '8px', fontSize: { xs: '0.875rem', sm: '1rem' }, color: '#666' }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                {/* Toggle content with collapse */}
                {/* <Collapse in={expandedIndex === index}>
                  <Box sx={{ padding: '10px', backgroundColor: '#f0f0f0', marginTop: '10px', borderRadius: '8px' }}>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      Here are some additional details about this milestone!
                    </Typography>
                    <Button size="small" sx={{ marginTop: '10px' }} color="primary">
                      Learn More
                    </Button>
                  </Box>
                </Collapse> */}
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default CustomTimeline;
