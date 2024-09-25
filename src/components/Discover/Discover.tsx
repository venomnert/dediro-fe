'use client';
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
import useContentful from '@/hooks/useContentful';
import { DiscoverContent } from '@/types';

function Discover() {
  const { data } = useContentful<DiscoverContent>('discover');
  console.log(data, 'c data');
  return (
    <Box sx={mainContainer}>
      <Box sx={bottomContainer}>
        <Box sx={leftSide}>
          <Typography sx={titleStyle}>{data?.title}</Typography>
          <Typography sx={textStyle}>{data?.text}</Typography>
          <Box sx={{ width: { xs: '100%', md: '70%' } }}>
            <CTAForm flexDirection="column" ctaTextValue={data?.ctaText} />
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
