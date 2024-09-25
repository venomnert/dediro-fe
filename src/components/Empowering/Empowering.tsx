'use client';
import { Box, Typography } from '@mui/material';
import {
  cardsContainer,
  empoweringCard,
  mainContainer,
  sectionSubtitle,
  sectionTitle,
  textStyle,
  titleStyle,
} from './Empowering.styles';
import React from 'react';
import useContentful from '@/hooks/useContentful';
import { EmpoweringContent } from '@/types';

function Empowering() {
  const { data } = useContentful<EmpoweringContent>('empowerSection');

  return (
    <Box sx={mainContainer}>
      <Typography sx={sectionTitle}>{data?.sectionTitle}</Typography>
      <Typography sx={sectionSubtitle}>{data?.sectionSubtitle}</Typography>
      <Box sx={cardsContainer}>
        {data?.cardsData?.map(({ title, text, imageUrl }) => (
          <Box key={title} sx={empoweringCard}>
            <Typography sx={titleStyle}>{title}</Typography>
            <Typography sx={textStyle}>{text}</Typography>
            <img
              style={{
                borderRadius: '500px',
                objectFit: 'cover',
                width: '260px',
                height: '260px',
              }}
              loading="lazy"
              src={imageUrl}
              alt={title}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Empowering;
