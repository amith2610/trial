import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Stack, Collapse } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Graph Neural Network Ensemble for Node Classification',
    description: 'Developed an ensemble of Graph Neural Networks (GNN) models, including GCN, GAT, APPNP, and GraphSAGE, to classify nodes in large-scale graphs with millions of nodes and edges, achieving high accuracy and robustness in real-world datasets. Improved model performance through advanced data preprocessing, feature engineering, and majority voting ensemble techniques, increasing validation accuracy to over 90% and enhancing prediction stability by 30% on imbalanced datasets.',
    technologies: ['Python', 'PyTorch Geometric', 'Graph Neural Networks', 'Ensemble Learning'],
    github: '',
  },
  {
    title: 'Neural-Enhanced LoRa Signal Decoding (NENLoRa) for Low SNR Environments',
    description: 'Implemented and fine-tuned a neural-enhanced decoding model (NENLoRa) for LoRa signals, achieving a 50% reduction in Signal Error Rate (SER) under low SNR conditions, with an SER under 10% at -17dB. Enhanced signal decoding accuracy through targeted fine-tuning on a specified SNR range (-20dB to -10dB), surpassing baseline models by 25% and achieving reliable demodulation critical for IoT and low-power communication networks.',
    technologies: ['MATLAB', 'PyTorch', 'Neural Networks', 'Signal Processing'],
    github: '',
  },
  {
    title: 'Conv-AI Medical Chatbot',
    description: `A conversational AI chat-bot aiming to provide diagnoses for less priviledged society developed by Finetuning LLM's such as Llama, GPT.`,
    technologies: ['Python', 'Llama', 'GPT', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/hruday-tej/conv-ai-medical-chatbot',
  },
  {
    title: 'Dummy Project One',
    description: 'This is a dummy project for layout testing. It demonstrates how a project card looks in the grid.',
    technologies: ['React', 'CSS', 'HTML'],
    github: '',
  },
  {
    title: 'Dummy Project Two',
    description: 'Another dummy project to fill the grid. Useful for visualizing the 3-column layout.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    github: '',
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const handleExpandClick = (idx) => {
    setExpanded((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box>
            <Typography variant="body1" sx={{ color: '#555', fontWeight: 500, textAlign: 'center' }}>
              My Recent
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, textAlign: 'center', fontSize: 36 }}>
              Projects
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Paper
                sx={{
                  borderRadius: 6,
                  border: '2px solid #bfc8ce',
                  p: 4,
                  minHeight: 340,
                  width: { xs: '100%', md: 350 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#fff',
                  boxShadow: 'none',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s, border-color 0.3s, height 0.3s',
                  '&:hover': {
                    boxShadow: '0 6px 24px 0 rgba(6, 6, 6, 0.12)',
                    borderColor: '#060606',
                  },
                }}
              >
                <Box sx={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, textAlign: 'center', fontSize: 24 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#222',
                      mb: 3,
                      textAlign: 'justify',
                      fontSize: 16,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 6,
                      WebkitBoxOrient: 'vertical',
                      minHeight: 96,
                      maxHeight: 96,
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
                <Button
                  size="small"
                  onClick={() => handleExpandClick(index)}
                  sx={{ mt: 2, textTransform: 'none', fontWeight: 600, color: '#1976d2', alignSelf: 'center', mb: expanded[index] ? 2 : 0 }}
                >
                  Technologies Used
                </Button>
                <Collapse in={expanded[index]} sx={{ width: '100%' }}>
                  <Box sx={{ mb: 2, width: '100%' }}>
                    <Stack direction="row" spacing={1} rowGap={1} columnGap={1} justifyContent="center" flexWrap="wrap">
                      {project.technologies.map((tech, i) => (
                        <Box
                          key={i}
                          sx={{
                            px: 1,
                            py: 1,
                            borderRadius: 999,
                            background: '#fafbfc',
                            color: '#222',
                            fontWeight: 500,
                            fontSize: 15,
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
                          {tech}
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Collapse>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', width: '100%', mt: 'auto' }}>
                  <Button
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: 999,
                      px: 3,
                      fontWeight: 600,
                      border: '2px solid #111',
                      color: '#111',
                      background: '#fff',
                      boxShadow: 'none',
                      '&:hover': { background: '#f5f5f5', borderColor: '#111' },
                    }}
                  >
                    Github
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 