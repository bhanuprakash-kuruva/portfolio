// import React, { useEffect, useState } from 'react';
// import { Box, Typography, LinearProgress, Tooltip, Stack, Tabs, Tab } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Code as CodeIcon, Web as WebIcon, Memory as MemoryIcon } from '@mui/icons-material';
// import { keyframes } from '@emotion/react';
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // Keyframe animation for the skill bars
// const barAnimation = keyframes`
//   0% {
//     width: 0;
//   }
//   100% {
//     width: 100%;
//   }
// `;

// const Skills = () => {
//   const [animate, setAnimate] = useState(false);
//   const [value, setValue] = useState(0); // State to manage the selected tab

//   useEffect(() => {
//     // Trigger animation on component mount
//     setAnimate(true);
//   }, []);

//   // Define skills for Programming Languages
//   const programmingLanguages = [
//     { skill: "C", icon: <CodeIcon />, proficiency: 75, color: '#4CAF50' },
//     { skill: "Java", icon: <CodeIcon />, proficiency: 85, color: '#FF9800' },
//     { skill: "Python", icon: <CodeIcon />, proficiency: 70, color: '#2196F3' },
//   ];

//   // Define skills for Web Development
//   const webDevelopmentSkills = [
//     { skill: "React.js", icon: <WebIcon />, proficiency: 90, color: '#673AB7' },
//     { skill: "Node.js", icon: <WebIcon />, proficiency: 85, color: '#3E863D' },
//     { skill: "Socket.IO", icon: <WebIcon />, proficiency: 65, color: '#FF5722' },
//     { skill: "Firebase", icon: <WebIcon />, proficiency: 60, color: '#25FF2F' }
//   ];

//   const appSkills=[
//     { skill: "React Native", icon: <WebIcon />, proficiency: 40, color: '#673AB7' },
//   ]

//   const databases =[
//     { skill: "Redis", icon: <MemoryIcon />, proficiency: 70, color: '#D32F2F' },
//     { skill: "MongoDB", icon: <MemoryIcon />, proficiency: 80, color: '#D3212F' },
//     { skill: "MySQL", icon: <MemoryIcon />, proficiency: 85, color: '#F3FF2F' },
//   ]

//   const designSkills = [
//     { skill: "Figma", icon: <WebIcon />, proficiency: 40, color: '#673AB7' },
    
//   ];
//   // Handle tab change
//   const handleTabChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // Render skill bars for a given skill group
//   const renderSkillBars = (skills) => {
//     return (
//       <Stack spacing={4} alignItems="center">
//         {skills.map((skill, index) => (
//           <Box key={index} sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
//             {/* Icon at the beginning */}
//             <Box sx={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
//               {skill.icon}
//             </Box>
//             <Box sx={{ width: '100%' }}>
//               <Tooltip title={`${skill.skill} (${skill.proficiency}%)`} arrow>
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
//                 >
//                   {/* Progress Bar */}
//                   <LinearProgress
//                     variant="determinate"
//                     value={skill.proficiency}
//                     sx={{
//                       height: 12, // Increased height for better visibility
//                       borderRadius: 5,
//                       backgroundColor: '#333', // Dark background for the track of the bar
//                       '& .MuiLinearProgress-bar': {
//                         backgroundColor: skill.color, // Color of the progress bar
//                         animation: animate ? `${barAnimation} 2s ease-in-out` : 'none',
//                       },
//                     }}
//                   />
//                 </motion.div>
//               </Tooltip>
//               <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'left' }}>
//                 {skill.skill}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };

//   return (
//     <Box sx={{ padding: '40px 20px', color: 'gray' }}>
//       <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: 'aliceblue' }}>
//         My Skills
//       </Typography>
//       <Typography variant="subtitle1" align="center" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray' }}>
//         I am proficient in a variety of programming languages and technologies. Here are a few of my key skills:
//       </Typography>
      
//       {/* Tabs for Programming Languages and Web Development Skills */}
//       <Tabs 
//         value={value} 
//         onChange={handleTabChange} 
//         centered
//         sx={{
//           '& .MuiTab-root': {
//             color: 'white', // Set the tab text color to white
//           },
//           '& .MuiTabs-indicator': {
//             backgroundColor: 'white', // White indicator under the active tab
//           }
//         }}
//       >
//         <Tab label="Programming Languages" />
//         <Tab label="Web Development Skills" />
//         <Tab label="UI Design" />
//         <Tab label="Databases" />
//         <Tab label="App Development" />
//       </Tabs>

//       {/* Display content based on the selected tab */}
//       {value === 0 && renderSkillBars(programmingLanguages)}
//       {value === 1 && renderSkillBars(webDevelopmentSkills)}
//       {value === 2 && renderSkillBars(designSkills)}
//       {value === 3 && renderSkillBars(databases)}
//       {value === 4 && renderSkillBars(appSkills)}
//     </Box>
//   );
// };

// export default Skills;
import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Tooltip,
  Stack,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { Code as CodeIcon, Web as WebIcon, Memory as MemoryIcon } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { keyframes } from '@emotion/react';

// Animation for progress bar
const barAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    // Optional scroll to content
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const skillGroups = [
    { label: 'Programming Languages', data: [
        { skill: 'C', icon: <CodeIcon />, proficiency: 75, color: '#4CAF50' },
        { skill: 'Java', icon: <CodeIcon />, proficiency: 85, color: '#FF9800' },
        { skill: 'Python', icon: <CodeIcon />, proficiency: 70, color: '#2196F3' }
      ]
    },
    { label: 'Web Development Skills', data: [
      { skill: 'HTML', icon: <WebIcon />, proficiency: 90, color: '#FF11FF' },
      { skill: 'CSS', icon: <WebIcon />, proficiency: 80, color: '#1131B7' },
      { skill: 'JavaScript', icon: <WebIcon />, proficiency: 75, color: '#67FAB7' },
        { skill: 'React.js', icon: <WebIcon />, proficiency: 90, color: '#673AB7' },
        { skill: 'Node.js', icon: <WebIcon />, proficiency: 85, color: '#3E863D' },
        { skill: 'Socket.IO', icon: <WebIcon />, proficiency: 65, color: '#FF5722' },
        { skill: 'Firebase', icon: <WebIcon />, proficiency: 60, color: '#25FF2F' }
      ]
    },
    { label: 'UI Design', data: [
        { skill: 'Figma', icon: <WebIcon />, proficiency: 80, color: '#673AB7' }
      ]
    },
    { label: 'Databases', data: [
        { skill: 'Redis', icon: <MemoryIcon />, proficiency: 70, color: '#D32F2F' },
        { skill: 'MongoDB', icon: <MemoryIcon />, proficiency: 80, color: '#00FF00' },
        { skill: 'MySQL', icon: <MemoryIcon />, proficiency: 85, color: '#0000FF' }
      ]
    },
    { label: 'App Development', data: [
        { skill: 'React Native', icon: <WebIcon />, proficiency: 70, color: '#6700FF' }
      ]
    }
  ];

  const renderSkillBars = (skills) => (
    <Stack spacing={4} alignItems="center">
      {skills.map((skill, index) => (
        <Box key={index} sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
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
                <Box sx={{ position: 'relative' }}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.proficiency}
                    sx={{
                      height: 12,
                      borderRadius: 5,
                      backgroundColor: '#333',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: skill.color,
                        animation: animate ? `${barAnimation} 2s ease-in-out` : 'none'
                      }
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: '-22px',
                      fontWeight: 600,
                      color: skill.color
                    }}
                  >
                    {skill.proficiency}%
                  </Typography>
                </Box>
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

  return (
    <Box sx={{ padding: '40px 20px', color: 'gray' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: 'aliceblue' }}
      >
        My Skills
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray' }}
      >
        I am proficient in a variety of programming languages and technologies. Here are a few of my key skills:
      </Typography>

      {/* Mobile: Accordions */}
      {isMobile ? (
        <Box mt={4}>
          {skillGroups.map((group, idx) => (
            <Accordion
              key={idx}
              sx={{
                backgroundColor: '#1e1e1e',
                color: 'white',
                borderRadius: 1,
                mb: 1,
                '&.Mui-expanded': {
                  backgroundColor: '#2b2b2b'
                },
                '&::before': { display: 'none' }
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                <Typography fontWeight={600}>{group.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>{renderSkillBars(group.data)}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ) : (
        <>
          {/* Desktop: Tabs */}
          <Tabs
            value={value}
            onChange={handleTabChange}
            centered
            sx={{
              mt: 3,
              '& .MuiTab-root': {
                color: 'white',
                transition: 'all 0.3s ease-in-out'
              },
              '& .Mui-selected': {
                fontWeight: 'bold',
                color: '#90caf9'
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#90caf9'
              }
            }}
          >
            {skillGroups.map((item, index) => (
              <Tab key={index} label={item.label} />
            ))}
          </Tabs>
          <Box mt={4} ref={scrollRef}>
            {renderSkillBars(skillGroups[value].data)}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Skills;
