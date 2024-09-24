'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import AnimatedWordList from './AnimatedWords';
import {
  contentStyle,
  heroBackground,
  heroStyle,
  heroSubtitle,
  heroTextStyles,
  heroTitle,
  imageContainer,
  leftContainer,
  overlayStyle,
  rightContainer,
} from './Hero.styles';
import CTAForm from '../Common/CTA/CTAForm';

const heroText = `Don't let the noise of biased media and social distractions cloud your judgment. 
We cut through the noise, bringing you expert knowledge that is factual, 
unbiased, and rooted in reliable perspectives because the world needs more thinkers, not followers.`;

function Hero() {
  return (
    <Box sx={heroBackground}>
      <Box sx={overlayStyle} />
      <Box sx={{ ...heroStyle, ...contentStyle }}>
        <Box sx={leftContainer}>
          <Typography variant="h1" sx={heroTitle}>
            See All Sides of Every Story
          </Typography>
          <AnimatedWordList />
          <Typography variant="h2" sx={heroSubtitle}>
            Because Somewhere, Something Incredible is Waiting to be Known.
          </Typography>
          <Typography sx={heroTextStyles}>{heroText}</Typography>
          <Box
            sx={{
              maxWidth: '400px',
              margin: { xs: 'auto', md: '0' },
              marginBottom: { xs: '30px', md: '0' },
            }}
          >
            <CTAForm
              ctaTextValue=" Start Reading the Stories that matter"
              flexDirection="column"
            />
          </Box>
        </Box>
        <Box sx={rightContainer}>
          <Box sx={imageContainer}>
            <img
              style={{ width: '100%' }}
              src="images/hero/side-hero-images.webp"
              alt="info images"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
