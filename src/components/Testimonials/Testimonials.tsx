import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { cardsData } from './utils';
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

function Testimonials() {
  return (
    <Box sx={mainContainer}>
      <Typography sx={titleStyle}>What our clients say</Typography>
      <Typography sx={subtitleStyle}>
        Hear from our satisfied customers about their experience with our
        products and services.
      </Typography>
      <Box sx={cardsRendererContainer}>
        {cardsData.map(({ text, photoUrl, name }) => (
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
