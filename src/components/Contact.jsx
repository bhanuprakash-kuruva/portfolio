// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Grid, Link, Paper, Container } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Email as EmailIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const publicKey = 'ifiSMYOG0wkyaAglb'
//   const serviceID ='service_c86pfd2'
//   const templateID = 'template_xfa34u9'
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const templateParams={
//   //     from_name:formData.name,
//   //     from_email : formData.email,
//   //     to_name: 'bhanu prakash',
//   //     message:formData.message
//   //   }
//   //   // Sending email using EmailJS
//   //   emailjs
//   //     .sendForm(serviceID, templateID, templateParams, publicKey) // Add your actual EmailJS credentials here
//   //     .then(
//   //       (result) => {
//   //         console.log(result.text);
//   //         formData.name='',
//   //         formData.email='',
//   //         formData.message='',
//   //         setIsSubmitted(true);

//   //       },
//   //       (error) => {
//   //         console.log(error.text);
//   //         setError("There was an error sending your message. Please try again later.");
//   //       }
//   //     );
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const templateParams = {
//       from_name: formData.name,
//       from_email: formData.email,
//       to_name: 'bhanu prakash', // Recipient name
//       message: formData.message,
//     };
  
//     // Sending email using EmailJS
//     emailjs
//       .send(serviceID, templateID, templateParams, publicKey) // Use the `send` method, passing the templateParams
//       .then(
//         (result) => {
//           console.log(result.text);
//           // Clear form data after successful submission
//           setFormData({ name: '', email: '', message: '' });
//           setIsSubmitted(true); // Show success message
//         },
//         (error) => {
//           console.log(error.text);
//           setError('There was an error sending your message. Please try again later.');
//         }
//       );
//   };
  
//   return (
//     <Box sx={{ backgroundColor: 'black', color: 'white', padding: '50px 0' }}>
//       <Container maxWidth="md">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//         >
//           <Typography variant="h4" align="center" gutterBottom>
//             Contact Me
//           </Typography>
//           <Typography variant="h6" align="center" paragraph>
//             Feel free to reach out if you have any questions or would like to collaborate. You can also follow me on my social media profiles.
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, ease: 'easeOut' }}
//             >
//               <Box component="form" onSubmit={handleSubmit} noValidate>
//                 <TextField
//                   label="Full Name"
//                   variant="outlined"
//                   fullWidth
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   sx={{
//                     marginBottom: '16px',
//                     backgroundColor: '#333',
//                     '& .MuiInputBase-root': { color: 'white' },
//                     '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ccc' },
//                     '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2196F3' },
//                   }}
//                   required
//                 />
//                 <TextField
//                   label="Email Address"
//                   variant="outlined"
//                   fullWidth
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   sx={{
//                     marginBottom: '16px',
//                     backgroundColor: '#333',
//                     '& .MuiInputBase-root': { color: 'white' },
//                     '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ccc' },
//                     '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2196F3' },
//                   }}
//                   required
//                 />
//                 <TextField
//                   label="Message"
//                   variant="outlined"
//                   fullWidth
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   sx={{
//                     marginBottom: '16px',
//                     backgroundColor: '#333',
//                     '& .MuiInputBase-root': { color: 'white' },
//                     '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ccc' },
//                     '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2196F3' },
//                   }}
//                   multiline
//                   rows={4}
//                   required
//                 />
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   fullWidth
//                   sx={{
//                     padding: '12px',
//                     textTransform: 'none',
//                     backgroundColor: '#2196F3',
//                     '&:hover': { backgroundColor: '#1976D2' },
//                   }}
//                 >
//                   Send Message
//                 </Button>
//                 {isSubmitted && (
//                   <Typography variant="body1" color="green" sx={{ marginTop: '16px' }}>
//                     Thank you for reaching out! I'll get back to you soon.
//                   </Typography>
//                 )}
//                 {error && (
//                   <Typography variant="body1" color="error" sx={{ marginTop: '16px' }}>
//                     {error}
//                   </Typography>
//                 )}
//               </Box>
//             </motion.div>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, ease: 'easeOut' }}
//             >
//               <Paper sx={{ padding: '20px', backgroundColor: '#333', boxShadow: 3 }}>
//                 <Typography variant="h6" gutterBottom>
//                   You can also find me here:
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item>
//                     <Link href="mailto:bhanuprakashkuruva09@gmail.com" target="_blank" rel="noopener noreferrer">
//                       <Button
//                         variant="outlined"
//                         startIcon={<EmailIcon />}
//                         sx={{
//                           '&:hover': { backgroundColor: '#2196F3', color: '#fff' },
//                           marginRight: '10px',
//                           color: 'white',
//                           borderColor: 'white',
//                         }}
//                       >
//                         Email
//                       </Button>
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="https://github.com/bhanuprakash-kuruva" target="_blank" rel="noopener noreferrer">
//                       <Button
//                         variant="outlined"
//                         startIcon={<GitHubIcon />}
//                         sx={{
//                           '&:hover': { backgroundColor: '#333', color: '#fff' },
//                           marginRight: '10px',
//                           color: 'white',
//                           borderColor: 'white',
//                         }}
//                       >
//                         GitHub
//                       </Button>
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="https://www.linkedin.com/in/bhanuprakash-kuruva" target="_blank" rel="noopener noreferrer">
//                       <Button
//                         variant="outlined"
//                         startIcon={<LinkedInIcon />}
//                         sx={{
//                           '&:hover': { backgroundColor: '#0A66C2', color: '#fff' },
//                           color: 'white',
//                           borderColor: 'white',
//                         }}
//                       >
//                         LinkedIn
//                       </Button>
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Paper>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Link, Paper, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Email as EmailIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';
import emailjs from 'emailjs-com';

// Add your image path here
import contactImage from '../assets/img.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const publicKey = 'ifiSMYOG0wkyaAglb';
  const serviceID = 'service_c86pfd2';
  const templateID = 'template_xfa34u9';
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'bhanu prakash',
      message: formData.message,
    };

    // Sending email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setError('There was an error sending your message. Please try again later.');
        }
      );
  };

  return (
    <Box sx={{ backgroundColor: 'black', color: 'gray', padding: '50px 0' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography variant="h4" align="center" color='aliceblue' gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="h6" align="center" paragraph>
            Feel free to reach out if you have any questions or would like to collaborate. You can also follow me on my social media profiles.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Right Side: Social Links and Image */}
          <Grid item xs={12} md={6} container direction="column" justifyContent="center" alignItems="center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* Contact Image */}
              <img
                src={contactImage} // Add your image here
                alt="Contact"
                style={{
                  width: '80%',
                  maxWidth: '400px', // Adjust as needed
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                  marginTop: '20px',
                }}
              />
              
            </motion.div>
          </Grid>

          {/* Left Side: Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: '#333',
                    '& .MuiInputBase-root': { color: 'white' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ccc' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2196F3' },
                  }}
                  required
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: '#333',
                    '& .MuiInputBase-root': { color: 'white' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ccc' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2196F3' },
                  }}
                  required
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: '#333',
                    '& .MuiInputBase-root': { color: 'white' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ccc' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2196F3' },
                  }}
                  multiline
                  rows={4}
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{
                    padding: '12px',
                    textTransform: 'none',
                    backgroundColor: '#2196F3',
                    '&:hover': { backgroundColor: '#1976D2' },
                  }}
                >
                  Send Message
                </Button>
                {isSubmitted && (
                  <Typography variant="body1" color="green" sx={{ marginTop: '16px' }}>
                    Thank you for reaching out! I'll get back to you soon.
                  </Typography>
                )}
                {error && (
                  <Typography variant="body1" color="error" sx={{ marginTop: '16px' }}>
                    {error}
                  </Typography>
                )}
              </Box>
              
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{width:'400px', display:'flex',justifyContent:'center',mx:'auto',marginTop:2}}>
      <Paper sx={{ padding: '20px', backgroundColor: '#333', boxShadow: 3, marginTop: '20px' }}>
                <Typography variant="h6" gutterBottom>
                  You can also find me here:
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Link href="mailto:bhanuprakashkuruva09@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outlined"
                        startIcon={<EmailIcon />}
                        sx={{
                          '&:hover': { backgroundColor: '#2196F3', color: '#fff' },
                          marginRight: '10px',
                          color: 'white',
                          borderColor: 'white',
                        }}
                      >
                        Email
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="https://github.com/bhanuprakash-kuruva" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        sx={{
                          '&:hover': { backgroundColor: '#333', color: '#fff' },
                          marginRight: '10px',
                          color: 'white',
                          borderColor: 'white',
                        }}
                      >
                        GitHub
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="https://www.linkedin.com/in/bhanuprakash-kuruva" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                        sx={{
                          '&:hover': { backgroundColor: '#0A66C2', color: '#fff' },
                          color: 'white',
                          borderColor: 'white',
                        }}
                      >
                        LinkedIn
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
