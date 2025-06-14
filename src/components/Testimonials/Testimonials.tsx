'use client';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import {
  avatarStyles,
  cardsRendererContainer,
  cardStyles,
  cardTextStyle,
  mainContainer,
  nameStyle,
  quoteStyle,
  subtitleStyle,
  titleStyle,
} from './Testimonials.styles';
import useContentful from '@/hooks/useContentful';
import { TestimonialsContent } from '@/types';
import { useSearchParams } from 'next/navigation';

function Testimonials() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('isPreview') ? true : false;

  const { data } = useContentful<TestimonialsContent>(
    'testimonials',
    isPreview
  );

  return (
    <Box sx={mainContainer} id="testimonials">
      <Typography sx={titleStyle}>{data?.title}</Typography>
      <Typography sx={subtitleStyle}>{data?.subtitle}</Typography>
      <Box sx={cardsRendererContainer}>
        {data?.cardsData?.map(({ text, photoUrl, name }) => (
          <Box key={name} sx={cardStyles}>
            <FormatQuoteRoundedIcon sx={quoteStyle} />
            <Typography sx={cardTextStyle}>{text}</Typography>
            <Avatar src={photoUrl} alt={name} sx={avatarStyles} />
            <Typography sx={nameStyle}>{name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Testimonials;
