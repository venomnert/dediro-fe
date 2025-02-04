'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { container, mainTitle } from './MainContent.styles';

import { IMainContent } from '@/types';
import Image from 'next/image';
import React from 'react';

function MainContent({ title, image }: IMainContent) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Box sx={container}>
      <Typography variant="h1" sx={mainTitle}>
        {title}
      </Typography>

      <Image
        style={{ width: '100%', borderRadius: '20px', objectFit: 'fill' }}
        height={isMobile ? 200 : 505}
        width={0}
        src={image.src}
        alt={image.alt}
      />
    </Box>
  );
}

export default MainContent;
