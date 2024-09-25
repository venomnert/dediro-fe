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
import { HeroContent } from '@/types';
import useContentful from '@/hooks/useContentful';

function Hero() {
  const { data } = useContentful<HeroContent>('heroText');
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
            {data?.title}
          </Typography>
          <Typography sx={heroTextStyles}>{data?.subtitle}</Typography>
          <Box
            sx={{
              maxWidth: '400px',
              margin: { xs: 'auto', md: '0' },
              marginBottom: { xs: '30px', md: '0' },
            }}
          >
            <CTAForm ctaTextValue={data?.heroCTA} flexDirection="column" />
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
