'use client';

import { Box, Typography } from '@mui/material';
import {
  backgroundOnly,
  leftImgStyle,
  leftSide,
  mainContainer,
  rightSide,
  sectionSubtitle,
  sectionTitle,
} from './WhyUs.styles';
import React from 'react';
import WhyUsCards from './WhyUsCards';
import CTAForm from '../Common/CTA/CTAForm';

function WhyUs() {
  return (
    <Box sx={backgroundOnly}>
      <Box sx={mainContainer}>
        <Box sx={leftSide}>
          <img
            style={leftImgStyle}
            loading="lazy"
            src="images/why-choose-us/left-img-fix.webp"
            alt="girl reading a book"
          />
          <Box sx={{ height: 'fit-content' }}>
            <CTAForm
              ctaTextValue="Get the Stories That Matter in Your Inbox"
              flexDirection="column"
              buttonCustomStyles={{
                color: 'var(--blue)',
                backgroundColor: 'var(--white)',
              }}
            />
          </Box>
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
