import React from 'react';
import { Box, Typography, Button, Container, Avatar, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const profileImg = '/IMG_8500-2.jpg'; // Updated profile image path

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 8,
        pb: 4,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Left: Profile Image */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Avatar
              src={profileImg}
              alt="Profile"
              loading="lazy"
              sx={{
                width: 220,
                height: 220,
                border: '8px solid #bfc8ce',
                boxSizing: 'border-box',
                bgcolor: '#e0e0e0',
              }}
            />
          </Box>
          {/* Right: Text and Buttons */}
          <Box sx={{ flex: 2, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="body1" sx={{ color: '#555', fontWeight: 500, mb: 1, fontSize: 16 }}>
              Hello, I'm
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: 32, md: 40 }, mb: 1 }}>
              Amith Reddy Atla
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 600, color: '#555', fontSize: { xs: 20, md: 28 }, mb: 3 }}>
              Master's graduate in Computer Science
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="outlined"
                size="large"
                href="/Amith_Resume.pdf"
                target="_blank"
                sx={{
                  borderRadius: 999,
                  px: 3,
                  fontWeight: 600,
                  border: '2px solid #111',
                  color: '#111',
                  background: '#fff',
                  '&:hover': { background: '#f5f5f5', borderColor: '#111' },
                }}
              >
                Download Resume
              </Button>
              <Button
                variant="contained"
                size="large"
                href="#contact"
                sx={{
                  borderRadius: 999,
                  px: 3,
                  fontWeight: 600,
                  background: '#222',
                  color: '#fff',
                  boxShadow: 'none',
                  '&:hover': { background: '#111' },
                }}
              >
                Contact Info
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton
                href="mailto:amith2610@gmail.com"
                target="_blank"
                sx={{ color: '#111', fontSize: 32 }}
              >
                <EmailIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/amith-reddy-atla-594483226/"
                target="_blank"
                sx={{ color: '#111', fontSize: 32 }}
              >
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Stack>
            <Typography variant="body2" sx={{ color: '#555', mt: 2, fontSize: 16 }}>
              Email: amith2610@gmail.com &nbsp; | &nbsp; Mobile: (313)-817-9162
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 