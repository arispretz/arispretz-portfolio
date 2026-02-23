// pages/Projects.js
import React from 'react';
import { Box, Text } from '@radix-ui/themes';
import ProjectsGrid from '../components/ProjectsGrid';

const Projects = () => {
  return (
    <>
      <Box style={{ padding: '50px', backgroundColor: '#FFE0C2', width: '100vw' }}>
        <Text
          as="div"
          style={{
            textAlign: 'center',
            margin: '0 auto',
            backgroundColor: '#FFFFE9',
            border: '2px solid #664282',
            color: 'purple',
            width: '500px',
            height: '100px',
            borderRadius: '7%'
          }}
        >
          <h2>These are some of my Projects</h2>
        </Text>
      </Box>
      <ProjectsGrid />
    </>
  );
};

export default Projects;
