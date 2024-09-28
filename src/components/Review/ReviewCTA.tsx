import { Box, Typography } from '@mui/material';
import { ctaCard, ctaTitle } from './ReviewCTA.styles';
import React from 'react';
import './reviewCta.css';
import CTAForm from '../Common/CTA/CTAForm';

function ReviewCTA({ ctaHeader, ctaButtonText }: any) {
  return (
    <Box sx={ctaCard} id="subscribe">
      <Typography sx={ctaTitle}>{ctaHeader}</Typography>
      <Box>
        <CTAForm ctaTextValue={ctaButtonText} isGreenButton />
      </Box>
      <img className="ctaImage" src="images/review/circles.svg" alt="circles" />
    </Box>
  );
}

export default ReviewCTA;
