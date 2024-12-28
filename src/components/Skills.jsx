import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress, Tooltip, Stack, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import { Code as CodeIcon, Web as WebIcon, Memory as MemoryIcon } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Keyframe animation for the skill bars
const barAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const [value, setValue] = useState(0); // State to manage the selected tab

  useEffect(() => {
    // Trigger animation on component mount
    setAnimate(true);
  }, []);

  // Define skills for Programming Languages
  const programmingLanguages = [
    { skill: "C", icon: <CodeIcon />, proficiency: 75, color: '#4CAF50' },
    { skill: "Java", icon: <CodeIcon />, proficiency: 80, color: '#FF9800' },
    { skill: "Python", icon: <CodeIcon />, proficiency: 85, color: '#2196F3' },
  ];

  // Define skills for Web Development
  const webDevelopmentSkills = [
    { skill: "React.js", icon: <WebIcon />, proficiency: 90, color: '#673AB7' },
    { skill: "Node.js", icon: <WebIcon />, proficiency: 85, color: '#3E863D' },
    { skill: "Redis", icon: <MemoryIcon />, proficiency: 70, color: '#D32F2F' },
    { skill: "Socket.IO", icon: <WebIcon />, proficiency: 65, color: '#FF5722' },
    { skill: "Three.js", icon: <WebIcon />, proficiency: 15, color: '#25FF2F' }
  ];

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  // Render skill bars for a given skill group
  const renderSkillBars = (skills) => {
    return (
      <Stack spacing={4} alignItems="center">
        {skills.map((skill, index) => (
          <Box key={index} sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
            {/* Icon at the beginning */}
            <Box sx={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
              {skill.icon}
            </Box>
            <Box sx={{ width: '100%' }}>
              <Tooltip title={`${skill.skill} (${skill.proficiency}%)`} arrow>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                >
                  {/* Progress Bar */}
                  <LinearProgress
                    variant="determinate"
                    value={skill.proficiency}
                    sx={{
                      height: 12, // Increased height for better visibility
                      borderRadius: 5,
                      backgroundColor: '#333', // Dark background for the track of the bar
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: skill.color, // Color of the progress bar
                        animation: animate ? `${barAnimation} 2s ease-in-out` : 'none',
                      },
                    }}
                  />
                </motion.div>
              </Tooltip>
              <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left' }}>
                {skill.skill}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    );
  };

  return (
    <Box sx={{ padding: '40px 20px', color: 'gray' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: 'aliceblue' }}>
        My Skills
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray' }}>
        I am proficient in a variety of programming languages and technologies. Here are a few of my key skills:
      </Typography>
      
      {/* Tabs for Programming Languages and Web Development Skills */}
      <Tabs 
        value={value} 
        onChange={handleTabChange} 
        centered
        sx={{
          '& .MuiTab-root': {
            color: 'white', // Set the tab text color to white
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'white', // White indicator under the active tab
          }
        }}
      >
        <Tab label="Programming Languages" />
        <Tab label="Web Development Skills" />
      </Tabs>

      {/* Display content based on the selected tab */}
      {value === 0 && renderSkillBars(programmingLanguages)}
      {value === 1 && renderSkillBars(webDevelopmentSkills)}
    </Box>
  );
};

export default Skills;
