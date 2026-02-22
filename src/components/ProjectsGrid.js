// components/ProjectsGrid.js
import React, { useState } from 'react';
import { Box, Grid, Container, Button, Text } from '@radix-ui/themes';
import projects from '../files/projectsData';

const ProjectsGrid = () => {
  const itemsPerPage = 15;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box style={{ flex: 2, padding: '5px 80px 40px 80px', marginTop: '-50px', backgroundColor: '#FFE0C2' }}>
        <Container style={{ color: 'purple' }}>
          <Grid columns="3" gap="3" rows="auto" width="auto">
            {currentProjects.map((project) => (
              <Box
                key={project.id}
                style={{
                  padding: '10px',
                  border: '5px solid silver',
                  borderRadius: '8px'
                }}
              >
                <Box>
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                  <h4>{project.name}</h4>

                  {/* Status badge */}
                  <Text
                    style={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      backgroundColor: project.status === 'active' ? '#4caf50' : '#9e9e9e',
                      color: 'white',
                      marginBottom: '10px'
                    }}
                  >
                    {project.status === 'active' ? 'Active' : 'Archived'}
                  </Text>

                  <Box style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                    {/* Show Live View button only if active */}
                    {project.status === 'active' && project.liveViewUrl && (
                      <a href={project.liveViewUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="solid"
                          style={{ padding: '10px', color: 'white', cursor: 'pointer' }}
                        >
                          Live View
                        </Button>
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="solid"
                        style={{ padding: '10px', color: 'white', cursor: 'pointer' }}
                      >
                        Source Code
                      </Button>
                    </a>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Container>

        {/* Pagination */}
        <Box style={{ marginTop: '20px' }}>
          {[...Array(totalPages).keys()].map((number) => (
            <Button
              key={number}
              variant="solid"
              style={{ margin: '5px' }}
              onClick={() => handleClick(number + 1)}
            >
              {number + 1}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsGrid;
