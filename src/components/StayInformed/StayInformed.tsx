import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import {
  backgroundOnly,
  btnContainer,
  ctaButton,
  inputStyles,
  leftSide,
  mainContainer,
  rightSide,
  text,
  title,
} from './StayInformed.styles';

function StayInformed() {
  return (
    <Box sx={backgroundOnly}>
      <Box sx={mainContainer}>
        <Box sx={leftSide}>
          <Typography sx={title}>
            Stay Informed with the
            <br />
            Latest Insights
          </Typography>
          <Typography sx={text}>
            We continuously update our content to reflect new
            <br />
            findings and perspectives. Keep up with the latest
            <br />
            articles and reports from Dediro.
          </Typography>
          <Box sx={btnContainer}>
            <TextField sx={inputStyles} placeholder="Email address" />
            <Button sx={ctaButton}>Subscribe</Button>
          </Box>
        </Box>
        <Box sx={rightSide}>
          <img
            style={{ width: '100%', borderRadius: '20px' }}
            src="images/stay-informed/space.webp"
            loading="lazy"
            alt="space"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default StayInformed;
