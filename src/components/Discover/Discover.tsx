import { Box, Typography } from '@mui/material';
import {
  bottomContainer,
  leftSide,
  mainContainer,
  rightSide,
  textStyle,
  titleStyle,
} from './Discover.styles';
import React from 'react';
import CTAForm from '../Common/CTA/CTAForm';

function Discover() {
  return (
    <Box sx={mainContainer}>
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
          <Box sx={{ width: { xs: '100%', md: '70%' } }}>
            {/* <TextField sx={inputStyles} placeholder="Email address" />
            <Button sx={ctaButton}>Get our newsletter</Button> */}
            <CTAForm flexDirection="column" />
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
