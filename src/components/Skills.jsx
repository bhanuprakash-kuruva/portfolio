
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
  Container,
  IconButton,
  AppBar,
  Toolbar,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  textAlign: 'center',
  backgroundColor: '#1e1e1e',
  border: '1px solid #333',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    borderColor: '#555',
  },
}));

const SkillAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  margin: '0 auto 6px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const skillGroups = [
  {
    label: 'Programming Languages',
    data: [
      { skill: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', color: '#A8B9CC' },
      { skill: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#ED8B00' },
      { skill: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' }
    ]
  },
  {
    label: 'Frontend',
    data: [
      { skill: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
      { skill: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
      { skill: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
      { skill: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
      { skill: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' }
    ]
  },  
  {
    label: 'Backend',
    data: [
      { skill: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
      { skill: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000' },
      { skill: 'Socket.IO', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', color: '#010101' },
      { skill: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28' }
    ]
  },
  {
    label: 'Databases',
    data: [
      { skill: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
      { skill: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
      { skill: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' }
    ]
  },
  {
    label: 'Mobile Development',
    data: [
      { skill: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' }
    ]
  },
  {
    label: 'UI Design',
    data: [
      { skill: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' }
    ]
  },
  {
    label: 'Testing',
    data: [
      { skill: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg', color: '#17202C' }
    ]
  },
  {
    label: 'Tools',
    data: [
      { skill: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
      { skill: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
      { skill: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' }
    ]
  }
];

const Skills = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      pb: 8
    }}>
      
      <Container maxWidth="xl" sx={{ pt: 8 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, color: 'aliceblue' }}
          >
            Skills & Tools
          </Typography>
          <Box sx={{ 
            width: 100, 
            height: 4, 
            backgroundColor: '#8B5CF6', 
            mx: 'auto', 
            mb: 3,
            borderRadius: 2
          }} />
          <Typography 
            variant="subtitle1" align="center" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray' }}
          >
            My web development toolkit, organized for quick overview.
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Grid container spacing={4}>
          {skillGroups.map((group, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <StyledPaper elevation={8}>
                <Typography
                  variant="h6"
                  sx={{ color: '#8B5CF6', fontWeight: 'bold', mb: 3 }}
                >
                  {group.label}
                </Typography>

                <Box sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 2
                }}>
                  {group.data.map((skill, index) => (
                    <Box key={index} sx={{ 
                      textAlign: 'center',
                      minWidth: '60px',
                      flex: '0 0 auto'
                    }}>
                      <SkillAvatar
                        src={skill.icon}
                        alt={skill.skill}
                        sx={{
                          backgroundColor: '#fff',
                          '& img': {
                            width: '70%',
                            height: '70%',
                            objectFit: 'contain'
                          }
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'white',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                          lineHeight: 1.2
                        }}
                      >
                        {skill.skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;