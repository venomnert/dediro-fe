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
import useContentful from '@/hooks/useContentful';
import { WhyUsContent } from '@/types';
import { useSearchParams } from 'next/navigation';

function WhyUs() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('isPreview') ? true : false;

  const { data } = useContentful<WhyUsContent>('whyUs', isPreview);

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
              ctaTextValue={data?.ctaText}
              flexDirection="column"
              buttonCustomStyles={{
                color: 'var(--blue)',
                backgroundColor: 'var(--white)',
              }}
            />
          </Box>
        </Box>
        <Box sx={rightSide}>
          <Typography sx={sectionTitle}>{data?.title}</Typography>
          <Typography sx={sectionSubtitle}>{data?.subtitle}</Typography>
          <WhyUsCards cardsData={data?.cardsData} />
        </Box>
      </Box>
    </Box>
  );
}

export default WhyUs;
