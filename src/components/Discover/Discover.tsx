import { Box, Button, TextField, Typography } from '@mui/material';
import {
  bottomContainer,
  ctaButton,
  inputStyles,
  leftSide,
  mainContainer,
  rightSide,
  textStyle,
  titleStyle,
} from './Discover.styles';
import React from 'react';

function Discover() {
  return (
    <Box sx={mainContainer}>
      <img
        style={{
          width: '100%',
          borderRadius: '100px',
          marginBottom: '90px',
        }}
        loading="lazy"
        src="images/discover/large-app.webp"
        alt="app screenshot"
      />
      <Box sx={bottomContainer}>
        <Box sx={leftSide}>
          <Typography sx={titleStyle}>
            Discover the World as It
            <br />
            Truly Is, Not as They Want
            <br />
            You to See It
          </Typography>
          <Typography sx={textStyle}>
            Dediro is your clarity sorter in a world dominated by
            <br />
            misinformation and bias. We cut through the noise,
            <br />
            bringing you expert knowledge that is factual,
            <br />
            unbiased, and rooted in reliable perspectives.
          </Typography>
          <Box>
            <TextField sx={inputStyles} placeholder="Email address" />
            <Button sx={ctaButton}>Get our newsletter</Button>
          </Box>
        </Box>
        <Box sx={rightSide}>
          <img
            style={{
              borderRadius: '10px',
              width: '100%',
            }}
            loading="lazy"
            src="images/discover/open-mind.webp"
            alt="open mind"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Discover;
