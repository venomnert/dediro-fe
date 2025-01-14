'use client';

import { Box, Typography } from '@mui/material';
import { container, imageStyle, mainTitle } from './MainContent.styles';

import React from 'react';

function MainContent() {
  return (
    <Box sx={container}>
      <Typography variant="h1" sx={mainTitle}>
        How to live a happier life
      </Typography>

      <img
        style={imageStyle}
        src="images/synthesis-page/main-content.png"
        alt="happy blonde girl"
      />
    </Box>
  );
}

export default MainContent;
