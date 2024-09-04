import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import AnimatedWordList from './AnimatedWords';
import {
  contentStyle,
  ctaButton,
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
          <Typography sx={heroSubtitle}>
            Because Somewhere, Something Incredible is Waiting to be Known.
          </Typography>
          <Typography sx={heroTextStyles}>{heroText}</Typography>
          <Button sx={ctaButton}>Start Reading the Stories that matter</Button>
        </Box>
        <Box sx={rightContainer}>
          <Box sx={imageContainer}>
            <img
              style={{ width: '100%' }}
              src="images/hero/side-hero-images.png"
              alt="info images"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
