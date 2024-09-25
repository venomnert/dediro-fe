'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  backgroundOnly,
  btnContainer,
  leftSide,
  mainContainer,
  rightSide,
  text,
  title,
} from './StayInformed.styles';
import CTAForm from '../Common/CTA/CTAForm';
import useContentful from '@/hooks/useContentful';
import { StayInformedContent } from '@/types';

function StayInformed() {
  const { data } = useContentful<StayInformedContent>('stayInformedSection');

  return (
    <Box sx={backgroundOnly} id="stay-informed-section">
      <Box sx={mainContainer}>
        <Box sx={leftSide}>
          <Typography sx={title}>{data?.title}</Typography>
          <Typography sx={text}>{data?.text}</Typography>
          <Box sx={btnContainer}>
            <CTAForm flexDirection="column" ctaTextValue={data?.ctaText} />
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
