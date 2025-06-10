import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const education = [
  {
    period: 'Aug 2023 – May 2025',
    school: 'Michigan State University',
    degree: 'Masters, Computer Science',
    cgpa: 'CGPA: 3.8/4.0',
    coursework: 'Artificial Intelligence, AIoT, Operating Systems, Cloud Computing',
  },
];

const Education = () => (
  <Box id="education" sx={{ py: 10, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      {/* <Typography variant="body1" sx={{ color: '#555', textAlign: 'center', mb: 1, fontWeight: 500 }}>
        My Academic
      </Typography> */}
      <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 700, mb: 6, fontSize: 36 }}>
        Education
      </Typography>
      <Box sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
        {/* Vertical line */}
        <Box sx={{
          position: 'absolute',
          left: 32,
          top: 0,
          bottom: 0,
          width: 3,
          bgcolor: '#d1d5db',
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }} />
        <Box>
          {education.map((edu, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 6, position: 'relative' }}>
              {/* Dot */}
              <Box sx={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                bgcolor: '#222',
                border: '3px solid #fff',
                position: 'absolute',
                left: { md: 25, xs: -8 },
                top: 18,
                zIndex: 2,
                display: { xs: 'none', md: 'block' },
              }} />
              {/* Content */}
              <Box sx={{ ml: { md: 7, xs: 0 }, width: '100%' }}>
                <Typography variant="subtitle2" sx={{ color: '#555', fontWeight: 500, mb: 0.5 }}>
                  {edu.period}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {edu.school}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#555', mb: 1 }}>
                  {edu.degree} &nbsp; <span style={{ color: '#888', fontWeight: 400 }}>{edu.cgpa}</span>
                </Typography>
                <Typography variant="body1" sx={{ color: '#222', fontWeight: 500, mb: 0.5 }}>
                  <span style={{ fontWeight: 700 }}>Relevant Coursework:</span> {edu.coursework}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Education; 