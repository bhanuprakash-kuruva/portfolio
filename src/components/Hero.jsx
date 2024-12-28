
// import React from 'react';
// import { Grid, Typography, Button, Box } from '@mui/material';
// import { motion } from 'framer-motion'; // For animations
// import Banner from '../assets/man.webp'; // Ensure the image path is correct

// const Hero = () => {
//   return (
//     <Box sx={{ flexGrow: 1, color: 'white', padding: { xs: '40px 20px', sm: '80px 20px' } }}>
//       <Grid container spacing={2} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        
//         {/* Left Side: Text Content */}
//         <Grid item xs={12} md={8}>
//           <Typography sx={{ fontSize: { xs: '30px', sm: '55px' }, marginBottom: '20px' }}>
//             Hey there, I'm <span style={{ color: 'blue' }}>Bhanu Prakash</span>
//           </Typography>

//           <Typography
//             variant="body1"
//             paragraph
//             sx={{
//               marginBottom: '30px',
//               fontSize: { xs: '0.875rem', sm: '1rem' }, // Adjust font size for smaller screens
//             }}
//           >
//             As a passionate MERN stack developer, I specialize in building dynamic web applications using React, Node.js, MongoDB, and Material-UI. With a strong foundation in modern JavaScript frameworks, I create scalable and responsive applications that offer seamless user experiences. In addition to my web development skills, I am deeply interested in machine learning and constantly exploring new ways to integrate AI-driven solutions into web applications to solve complex problems.
//           </Typography>
          
//           {/* Button with hover effects */}
//           <motion.div
//             whileHover={{ scale: 1.05 }} // Slightly scale up the button on hover
//             transition={{ duration: 0.3 }}
//           >
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: 'rgb(92, 217, 255)',
//                 '&:hover': { backgroundColor: '#64b5f6' },
//                 size: 'large',
//                 marginTop: { xs: '20px', sm: '0' }, // Adjust margin for mobile view
//               }}
//               href="https://www.linkedin.com/in/bhanuprakash-kuruva"
//             >
//               <Typography sx={{ color: 'blue' }}>Connect with me on LinkedIn</Typography>
//             </Button>
//           </motion.div>
//         </Grid>

//         {/* Right Side: Image */}
//         <Grid item xs={12} md={4} container justifyContent="center" sx={{ marginTop: { xs: '20px', md: '0' } }}>
//           <motion.div
//             whileHover={{ scale: 1.1 }} // Zoom effect on image hover
//             transition={{ duration: 0.3 }}
//             style={{
//               position: 'relative',
//               width: '200px', // Make the image smaller on mobile
//               height: '200px', // Adjust size for mobile
//               borderRadius: '50%',
//               boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
//               padding: '5px',
//               background: 'linear-gradient(145deg, rgba(92, 217, 255, 0.6), rgba(92, 217, 255, 0.1))',
//               overflow: 'hidden',
//               marginBottom: { xs: '20px', md: '0' }, // Adjust margin for mobile view
//             }}
//           >
//             {/* Hover animation on the image */}
//             <Box
//               component="img"
//               src={Banner} // Replace with your image URL
//               alt="Hero Banner"
//               sx={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 borderRadius: '50%',
//                 transition: 'transform 0.3s ease', // Smooth zoom-in effect on hover
//               }}
//             />
//           </motion.div>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Hero;
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import Banner from '../assets/man.webp'; // Ensure the image path is correct

const Hero = () => {
  return (
    <Box sx={{ flexGrow: 1, color: 'white', padding: { xs: '40px 20px', sm: '80px 20px' } }}>
      <Grid container spacing={2} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
        
        {/* Left Side: Text Content */}
        <Grid item xs={12} md={8}>
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

          <Typography
            variant="body1"
            paragraph
            sx={{
              marginBottom: '30px',
              fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' }, // Adjust font size for larger screens
              color: '#e0e0e0',
              lineHeight: 1.5,
            }}
          >
            As a passionate MERN stack developer, I specialize in building dynamic web applications using React, Node.js, MongoDB, and Material-UI. With a strong foundation in modern JavaScript frameworks, I create scalable and responsive applications that offer seamless user experiences. In addition to my web development skills, I am deeply interested in machine learning and constantly exploring new ways to integrate AI-driven solutions into web applications to solve complex problems.
          </Typography>
          
          {/* Button with hover effects */}
          <motion.div
            whileHover={{ scale: 1.05 }} // Slightly scale up the button on hover
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgb(92, 217, 255)',
                '&:hover': { backgroundColor: '#64b5f6' },
                size: 'large',
                marginTop: { xs: '20px', sm: '0' }, // Adjust margin for mobile view
              }}
              href="https://www.linkedin.com/in/bhanuprakash-kuruva"
            >
              <Typography sx={{ color: 'blue' }}>Connect with me on LinkedIn</Typography>
            </Button>
          </motion.div>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={4} container justifyContent="center" sx={{ marginTop: { xs: '20px', md: '0' } }}>
          <motion.div
            whileHover={{ scale: 1.1 }} // Zoom effect on image hover
            transition={{ duration: 0.3 }}
            style={{
              position: 'relative',
              width: { xs: '200px', sm: '250px', md: '300px' }, // Make the image smaller on mobile
              height: { xs: '200px', sm: '250px', md: '300px' }, // Adjust size for mobile
              borderRadius: '50%',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)', // Increased shadow for depth
              padding: '5px',
              background: 'linear-gradient(145deg, rgba(92, 217, 255, 0.6), rgba(92, 217, 255, 0.1))',
              overflow: 'hidden',
              marginBottom: { xs: '20px', md: '0' }, // Adjust margin for mobile view
              transition: 'all 0.3s ease', // Smooth transition on hover
            }}
          >
            {/* Hover animation on the image */}
            <Box
              component="img"
              src={Banner} // Replace with your image URL
              alt="Hero Banner"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                transition: 'transform 0.3s ease', // Smooth zoom-in effect on hover
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
