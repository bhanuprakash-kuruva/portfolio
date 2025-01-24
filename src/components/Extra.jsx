import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VolunteerIcon from '@mui/icons-material/VolunteerActivism';

const activities = [
  {
    title: 'NSS Volunteer',
    description:
      'Actively participated in social service activities as part of the National Service Scheme (NSS), contributing to community development and social responsibility initiatives.',
    icon: <VolunteerIcon sx={{ fontSize: 50, color: '#1976d2' }} />,
    date: '2023 - Present',
  },
  
];

const ExtraCurricular = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
  };

  return (
    <Box
      sx={{
        padding: { xs: '1.5rem', sm: '3rem' },
        minHeight: '70vh',
        
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 'bold', color: 'aliceblue' }}
      >
        Extra-Curricular Activities
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        gutterBottom
        sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'gray' }}
      >
        Scroll through my activities that go beyond academics.
      </Typography>
      <Box sx={{ height: '30px' }}></Box>

      {/* Carousel */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
          overflow: 'hidden',
        }}
      >
        <Button
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 0,
            zIndex: 2,
            backgroundColor: '#1976d2',
            color: '#fff',
            borderRadius: '50%',
            minWidth: '40px',
            height: '40px',
            '&:hover': { backgroundColor: '#115293' },
          }}
        >
          <ArrowBackIosIcon />
        </Button>

        {/* Activity Display */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            transition: 'transform 0.5s ease-in-out',
            width: '100%',
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              backgroundColor: '#e3f2fd',
              marginBottom: '1rem',
            }}
          >
            {activities[currentIndex].icon}
          </Avatar>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {activities[currentIndex].title}
          </Typography>
          <Typography
            variant="body2"
            textAlign="center"
            color="aliceblue"
            sx={{ maxWidth: '80%' }}
          >
            {activities[currentIndex].description}
          </Typography>
          <Typography
            variant="caption"
            sx={{ marginTop: '0.5rem', color: '#555', fontStyle: 'italic' }}
          >
            {activities[currentIndex].date}
          </Typography>
        </Box>

        <Button
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 2,
            backgroundColor: '#1976d2',
            color: '#fff',
            borderRadius: '50%',
            minWidth: '40px',
            height: '40px',
            '&:hover': { backgroundColor: '#115293' },
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ExtraCurricular;
