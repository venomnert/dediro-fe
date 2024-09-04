/* eslint-disable @next/next/no-img-element */
import { Box, Button, TextField, Typography } from '@mui/material'
import { ctaCard, ctaButton, ctaTitle, inputStyles } from './ReviewCTA.styles';
import React from 'react';
import './reviewCta.css';

function ReviewCTA() {
  return (
    <Box sx={ctaCard}>
      <Typography sx={ctaTitle}>
        Subscribe to Get the<br />
        Top Stories in your <br />
        inbox
      </Typography>
      <Box>
        <TextField sx={inputStyles} placeholder='Email address'/>
        <Button sx={ctaButton}>Sign Up Today</Button>
      </Box>
      <img
        className="ctaImage"
        src="images/review/circles.svg" alt='circles'
      />
    </Box>
  )
}

export default ReviewCTA