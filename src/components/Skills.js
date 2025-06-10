import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const skillCategories = [
  {
    title: 'Technical Expertise',
    skills: ['Data Structures', 'Algorithms', 'Machine Learning', 'Problem Solving', 'Optimization Techniques', 'Linux'],
  },
  {
    title: 'Languages & Frameworks',
    skills: ['Python', 'Java', 'C++', 'TensorFlow', 'Keras', 'PyTorch', 'C', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Web technologies',
    skills: ['AngularJS', 'ReactJS', 'NodeJS', 'REST APIs', 'JSON', 'XML', 'Flutter'],
  },
  {
    title: 'Database Systems',
    skills: ['MySQL', 'DynamoDB', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Cloud Services',
    skills: ['AWS Lambda', 'Google Cloud Platform (GCP)', 'Amazon DynamoDB', 'Azure Kubernetes Service'],
  },
  {
    title: 'DevOps & Version Control',
    skills: ['Git', 'Github', 'Jenkins', 'Jira'],
  },
];

const Skills = () => (
  <Box id="skills" sx={{ py: 10, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Box>
          <Typography variant="body1" sx={{ color: '#555', fontWeight: 500, textAlign: 'center' }}>
            My
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, textAlign: 'center', fontSize: 36 }}>
            Skills
          </Typography>
        </Box>
      </Box>
      <Paper
        sx={{
          borderRadius: 6,
          border: '2px solid #e0e0e0',
          p: { xs: 2, md: 6 },
          boxShadow: 'none',
          background: '#fff',
        }}
      >
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#222' }}>
                {category.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 2 }}>
                {category.skills.map((skill, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: 999,
                      background: '#fafbfc',
                      color: '#222',
                      fontWeight: 500,
                      fontSize: 16,
                      border: '1px solid #e0e0e0',
                      transition: 'all 0.2s',
                      cursor: 'pointer',
                      '&:hover': {
                        background: '#222',
                        color: '#fff',
                        borderColor: '#222',
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  </Box>
);

export default Skills; 