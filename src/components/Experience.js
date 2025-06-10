import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Collapse } from '@mui/material';

const experiences = [
  {
    period: 'Jan 2023 – May 2023',
    title: 'Software Engineer Intern',
    company: 'Estate Dekho',
    location: 'Hyderabad, India',
    details: [
      'Implemented real-time property listing updates using Node.js (Express.js) and AngularJS, enabling live data synchronization without page refreshes, which enhanced user interaction and increased retention by 30%',
      'Redesigned front-end interfaces with AngularJS, React, and Redux, dynamically displaying property updates, leading to a 25% improvement in user engagement and experience',
      'Optimized backend API services using Java (Spring Boot) and Hibernate, improving database transaction efficiency and attaining a 40% reduction in data retrieval times',
      'Deployed backend services on Linux-based environments, utilizing Google Cloud Platform (GCP), AWS Lambda, and Docker for scalability, efficient execution, and seamless real-time integration',
    ],
  },
  {
    period: 'Jun 2022 – Aug 2022',
    title: 'Software Development Engineer Intern',
    company: 'Gap Inc.',
    location: 'Hyderabad, India',
    details: [
      'Engineered ETL pipelines using Java (Spring Boot) and Apache Kafka for data extraction, transformation, and load tasks, ensuring 99.9% data integrity and maintaining stable pipelines to support critical business insights',
      'Developed custom dashboards and reporting interfaces using React, Node.js, and PostgreSQL, streamlining data access and reducing report generation time by 30%, while improving user engagement by 40%',
      'Leveraged Agile and Scrum methodologies, utilizing JIRA and Confluence to enhance team productivity, achieving 100% on-time delivery of sprint goals and significantly contributing to project milestones',
    ],
  },
  {
    period: 'Aug 2024 – May 2025',
    title: 'Teaching Assistant',
    company: 'Michigan State University',
    location: 'East Lansing, MI',
    details: [
      'Facilitated in delivering course content on Computer Systems to over 300 students, guiding through C++, system architecture, memory management, and operating systems, resulting in improved student performance and engagement',
    ],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(Array(experiences.length).fill(false));

  const handleExpandClick = (idx) => {
    setExpanded((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <Box id="experience" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* <Typography variant="body1" sx={{ color: '#555', textAlign: 'center', mb: 1, fontWeight: 500 }}>
          Dive Into My
        </Typography> */}
        <Typography variant="h2" sx={{ textAlign: 'center', fontWeight: 700, mb: 6, fontSize: 36 }}>
          Work Experience
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
            {experiences.map((exp, idx) => {
              const hasMore = exp.details.length > 2;
              return (
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
                    top: 24,
                    zIndex: 2,
                    display: { xs: 'none', md: 'block' },
                  }} />
                  {/* Card */}
                  <Card
                    sx={{
                      ml: { md: 7, xs: 0 },
                      width: { xs: '100%', md: 'calc(100vw - 320px)' },
                      maxWidth: '100%',
                      borderRadius: 4,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      border: '1px solid #e0e0e0',
                      px: { xs: 1, md: 4 },
                    }}
                  >
                    <CardContent>
                      <Typography variant="subtitle2" sx={{ color: '#555', fontWeight: 500, mb: 0.5 }}>
                        {exp.period} &nbsp; <span style={{ color: '#888', fontWeight: 400 }}>{exp.location}</span>
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#555', mb: 1 }}>
                        {exp.company}
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, mb: 1 }}>
                        {exp.details.slice(0, 2).map((point, i) => (
                          <Typography component="li" key={i} sx={{ color: '#222', mb: 0.5, fontSize: 16 }}>
                            {point}
                          </Typography>
                        ))}
                        {hasMore && (
                          <Collapse in={expanded[idx]}>
                            {exp.details.slice(2).map((point, i) => (
                              <Typography component="li" key={i + 2} sx={{ color: '#222', mb: 0.5, fontSize: 16 }}>
                                {point}
                              </Typography>
                            ))}
                          </Collapse>
                        )}
                      </Box>
                      {hasMore && (
                        <Button
                          size="small"
                          onClick={() => handleExpandClick(idx)}
                          sx={{ textTransform: 'none', fontWeight: 600, color: '#1976d2', pl: 0 }}
                        >
                          {expanded[idx] ? 'See less' : 'See more'}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 