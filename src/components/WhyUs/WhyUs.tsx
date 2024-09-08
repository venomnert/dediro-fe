import { Box, Button, Typography } from '@mui/material';
import {
  backgroundOnly,
  ctaButton,
  leftImgStyle,
  leftSide,
  mainContainer,
  rightSide,
  sectionSubtitle,
  sectionTitle,
} from './WhyUs.styles';
import React from 'react';
import WhyUsCards from './WhyUsCards';

function WhyUs() {
  return (
    <Box sx={backgroundOnly}>
      <Box sx={mainContainer}>
        <Box sx={leftSide}>
          <img
            style={leftImgStyle}
            loading='lazy'
            src="images/why-choose-us/left-img-fix.webp"
            alt="girl reading a book"
          />
          <Button sx={ctaButton}>
            Get the Stories That Matter in Your Inbox
          </Button>
        </Box>
        <Box sx={rightSide}>
          <Typography sx={sectionTitle}>Why Choose Dediro?</Typography>
          <Typography sx={sectionSubtitle}>
            In a world where information is often
            <br />
            manipulated to serve those in power,
            <br />
            Dediro stands apart.
          </Typography>
          <WhyUsCards />
        </Box>
      </Box>
    </Box>
  );
}

export default WhyUs;
