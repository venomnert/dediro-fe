import { Box, Typography } from '@mui/material';
import { ctaCard, ctaTitle } from './ReviewCTA.styles';
import React from 'react';
import './reviewCta.css';
import CTAForm from '../Common/CTA/CTAForm';

function ReviewCTA() {
  return (
    <Box sx={ctaCard} id="subscribe">
      <Typography sx={ctaTitle}>
        Subscribe to Get the
        <br />
        Top Stories in your <br />
        inbox
      </Typography>
      <Box>
        <CTAForm ctaTextValue="Sign Up Today" isGreenButton />
      </Box>
      <img className="ctaImage" src="images/review/circles.svg" alt="circles" />
    </Box>
  );
}

export default ReviewCTA;
