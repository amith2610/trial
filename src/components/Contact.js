import React from 'react';
import { Box, Container, Typography, Paper, Stack, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navItems = [
  { text: 'Experience', to: 'experience' },
  { text: 'Skills', to: 'skills' },
  { text: 'Education', to: 'education' },
  { text: 'Projects', to: 'projects' },
  { text: 'Contact', to: 'contact' },
];

const Contact = () => (
  <Box id="contact" sx={{ py: 10, bgcolor: 'background.default', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Container maxWidth="sm">
      <Typography variant="body1" sx={{ color: '#555', textAlign: 'center', mb: 1, fontWeight: 500 }}>
        Get in Touch
      </Typography>
      <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 700, mb: 4, fontSize: 36 }}>
        Contact Me
      </Typography>
      <Paper
        sx={{
          borderRadius: 6,
          border: '2px solid #bfc8ce',
          p: 4,
          mb: 6,
          background: '#fff',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <IconButton
            color="primary"
            href="mailto:amith2610@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#111', fontSize: 28 }}
          >
            <EmailIcon fontSize="inherit" />
            <Typography sx={{ ml: 1, fontWeight: 500, fontSize: 18, color: '#111' }}>
              amith2610@gmail.com
            </Typography>
          </IconButton>
          <IconButton
            color="primary"
            href="https://www.linkedin.com/in/amith-reddy-atla-594483226/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#111', fontSize: 28 }}
          >
            <LinkedInIcon fontSize="inherit" />
            <Typography sx={{ ml: 1, fontWeight: 500, fontSize: 18, color: '#111' }}>
              LinkedIn
            </Typography>
          </IconButton>
        </Stack>
      </Paper>
      {/* Footer nav */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        {navItems.map((item, idx) => (
          <Typography
            key={item.text}
            component="a"
            href={`#${item.to}`}
            sx={{
              color: '#111',
              fontWeight: 500,
              fontSize: 18,
              mx: 2,
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': { color: '#1976d2' },
            }}
          >
            {item.text}
          </Typography>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Contact; 