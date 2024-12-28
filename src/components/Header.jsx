// import React, { useState } from 'react';
// import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, Divider, useMediaQuery } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { NavLink } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detect small screens

//   const handleToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box
//       sx={{
//         backgroundColor: '#121212',
//         color: 'white',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '20px 0',
//       }}
//       onClick={handleToggle}
//     >
//       <Typography variant="h6" color={theme.palette.primary.main} sx={{ mb: 2 }}>
//         My Portfolio
//       </Typography>
//       <Divider sx={{ width: '80%', marginBottom: '20px', backgroundColor: 'gray' }} />
//       <Box component="nav" sx={{ width: '100%' }}>
//         <ul
//           style={{
//             listStyle: 'none',
//             padding: 0,
//             margin: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: '15px',
//           }}
//         >
//           <li>
//             <NavLink
//               to="/"
//               style={({ isActive }) => ({
//                 textDecoration: 'none',
//                 color: isActive ? theme.palette.primary.main : 'white',
//                 fontWeight: isActive ? 'bold' : 'normal',
//                 fontSize: '18px',
//               })}
//             >
//               Home
//             </NavLink>
//           </li>
//           {/* <li>
//             <NavLink
//               to="/about"
//               style={({ isActive }) => ({
//                 textDecoration: 'none',
//                 color: isActive ? theme.palette.primary.main : 'white',
//                 fontWeight: isActive ? 'bold' : 'normal',
//                 fontSize: '18px',
//               })}
//             >
//               About Me
//             </NavLink>
//           </li> */}
//           <li>
//             <NavLink
//               to="/projects"
//               style={({ isActive }) => ({
//                 textDecoration: 'none',
//                 color: isActive ? theme.palette.primary.main : 'white',
//                 fontWeight: isActive ? 'bold' : 'normal',
//                 fontSize: '18px',
//               })}
//             >
//               Projects
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/skills"
//               style={({ isActive }) => ({
//                 textDecoration: 'none',
//                 color: isActive ? theme.palette.primary.main : 'white',
//                 fontWeight: isActive ? 'bold' : 'normal',
//                 fontSize: '18px',
//               })}
//             >
//               Skills
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               style={({ isActive }) => ({
//                 textDecoration: 'none',
//                 color: isActive ? theme.palette.primary.main : 'white',
//                 fontWeight: isActive ? 'bold' : 'normal',
//                 fontSize: '18px',
//               })}
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </Box>
//     </Box>
//   );

//   return (
//     <Box>
//       <IconButton
//         onClick={handleToggle}
//         color="inherit"
//         aria-label="open drawer"
//         edge="start"
//         sx={{
//           display: { sm: 'none' },
//           backgroundColor: 'rgb(235, 235, 235)',
//           color: 'black',
//           position: 'fixed',
//           top: 16,
//           left: 16,
//           zIndex: 1301,
//         }}
//       >
//         <MenuIcon />
//       </IconButton>
     
// <AppBar
//   component="nav"
//   sx={{
//     backgroundColor: 'black',
//     width: '60%',
//     border: '2px solid white',
//     borderRadius: '15px',
//     margin: '16px auto',
//   }}
// >
//   <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//     {isSmallScreen ? (
//       // Render "Home" and "Projects" in AppBar for small devices
//       <Box sx={{ display: 'flex', gap: '15px', color: 'white' }}>
//         <NavLink
//           to="/"
//           style={{
//             textDecoration: 'none',
//             color: 'inherit',
//             padding: '10px',
//             fontSize: '18px',
//           }}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/projects"
//           style={{
//             textDecoration: 'none',
//             color: 'inherit',
//             padding: '10px',
//             fontSize: '18px',
//           }}
//         >
//           Projects
//         </NavLink>
//       </Box>
//     ) : (
//       // Render full navigation for larger screens
//       <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
//         <ul
//           className="nav-menu"
//           style={{
//             display: 'flex',
//             justifyContent: 'space-around',
//             listStyle: 'none',
//             margin: 0,
//             padding: 0,
//           }}
//         >
//           <li>
//             <NavLink
//               to="/"
//               style={{
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 padding: '10px',
//               }}
//             >
//               Home
//             </NavLink>
//           </li>
//           {/* <li>
//             <NavLink
//               to="/about"
//               style={{
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 padding: '10px',
//               }}
//             >
//               About Me
//             </NavLink>
//           </li> */}
//           <li>
//             <NavLink
//               to="/projects"
//               style={{
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 padding: '10px',
//               }}
//             >
//               Projects
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/skills"
//               style={{
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 padding: '10px',
//               }}
//             >
//               Skills
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               style={{
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 padding: '10px',
//               }}
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </Box>
//     )}
//   </Toolbar>
// </AppBar>

//       {/* Drawer for mobile */}
//       <Box component="nav">
//         <Drawer
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': {
//               boxSizing: 'border-box',
//               width: '240px',
//             },
//           }}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleToggle}
//         >
//           {drawer}
//         </Drawer>
      
//         <Toolbar />
//       </Box>
//     </Box>
//   );
// };

// export default Header; 
import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, Divider, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detect small screens

  const handleToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
      }}
      onClick={handleToggle}
    >
      <Typography variant="h6" color={theme.palette.primary.main} sx={{ mb: 2 }}>
        My Portfolio
      </Typography>
      <Divider sx={{ width: '80%', marginBottom: '20px', backgroundColor: 'gray' }} />
      <Box component="nav" sx={{ width: '100%' }}>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? theme.palette.primary.main : 'white',
                fontWeight: isActive ? 'bold' : 'normal',
                fontSize: '18px',
              })}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? theme.palette.primary.main : 'white',
                fontWeight: isActive ? 'bold' : 'normal',
                fontSize: '18px',
              })}
            >
              About Me
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? theme.palette.primary.main : 'white',
                fontWeight: isActive ? 'bold' : 'normal',
                fontSize: '18px',
              })}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? theme.palette.primary.main : 'white',
                fontWeight: isActive ? 'bold' : 'normal',
                fontSize: '18px',
              })}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? theme.palette.primary.main : 'white',
                fontWeight: isActive ? 'bold' : 'normal',
                fontSize: '18px',
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton
        onClick={handleToggle}
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{
          display: { sm: 'none' },
          backgroundColor: 'rgb(235, 235, 235)',
          color: 'black',
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1301,
        }}
      >
        <MenuIcon />
      </IconButton>
     
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'black',
          width: '60%',
          border: '2px solid white',
          borderRadius: '15px',
          margin: '16px auto',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {isSmallScreen ? (
            // Render "Home" and "Projects" in AppBar for small devices
            <Box sx={{ display: 'flex', gap: '15px', color: 'white' }}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? theme.palette.primary.main : 'inherit',
                  padding: '10px',
                  fontSize: '18px',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? theme.palette.primary.main : 'inherit',
                  padding: '10px',
                  fontSize: '18px',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Projects
              </NavLink>
            </Box>
          ) : (
            // Render full navigation for larger screens
            <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
              <ul
                className="nav-menu"
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                }}
              >
                <li>
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? theme.palette.primary.main : 'inherit',
                      padding: '10px',
                      fontWeight: isActive ? 'bold' : 'normal',
                    })}
                  >
                    Home
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? theme.palette.primary.main : 'inherit',
                      padding: '10px',
                      fontWeight: isActive ? 'bold' : 'normal',
                    })}
                  >
                    About Me
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/projects"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? theme.palette.primary.main : 'inherit',
                      padding: '10px',
                      fontWeight: isActive ? 'bold' : 'normal',
                    })}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/skills"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? theme.palette.primary.main : 'inherit',
                      padding: '10px',
                      fontWeight: isActive ? 'bold' : 'normal',
                    })}
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                      textDecoration: 'none',
                      color: isActive ? theme.palette.primary.main : 'inherit',
                      padding: '10px',
                      fontWeight: isActive ? 'bold' : 'normal',
                    })}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Box component="nav">
        <Drawer
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '240px',
            },
          }}
          variant="temporary"
          open={mobileOpen}
          onClose={handleToggle}
        >
          {drawer}
        </Drawer>
      
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
