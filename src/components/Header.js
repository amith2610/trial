import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-scroll';

const menuItems = [
  { text: 'Experience', to: 'experience' },
  { text: 'Skills', to: 'skills' },
  { text: 'Education', to: 'education' },
  { text: 'Projects', to: 'projects' },
  { text: 'Contact', to: 'contact' },
];

const Header = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      zIndex: 1200,
      width: '100%',
      bgcolor: 'background.paper',
      py: 1.5,
      px: { xs: 2, md: 8 },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'Poppins, Arial, sans-serif',
      fontWeight: 700,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      background: 'background.paper',
      borderBottom: '1.5px solid #e0e0e0',
    }}
  >
    <Box component="a" href="/" sx={{ fontSize: 28, fontWeight: 700, color: 'text.primary', fontFamily: 'Poppins, Arial, sans-serif', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
      Amith Reddy
    </Box>
    <Box>
      {menuItems.map((item) => (
        <Button
          key={item.text}
          component={Link}
          to={item.to}
          smooth={true}
          duration={500}
          sx={{
            color: 'text.primary',
            fontWeight: 500,
            fontSize: 18,
            textTransform: 'none',
            mx: 1.5,
            fontFamily: 'Poppins, Arial, sans-serif',
            background: 'none',
            boxShadow: 'none',
            '&:hover': { background: 'none', color: 'primary.main' },
          }}
        >
          {item.text}
        </Button>
      ))}
    </Box>
  </Box>
);

export default Header; 