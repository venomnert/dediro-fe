import React from 'react';
import { cardsData } from './utils';
import { Box, Typography } from '@mui/material';
import {
  cardContainer,
  topContainer,
  imgStyle,
  cardTitle,
  cardText,
} from './WhyUsCards.styles';

function WhyUsCards() {
  return (
    <Box>
      {cardsData.map(({ title, iconUrl, text }) => (
        <Box sx={cardContainer} key={title}>
          <Box sx={topContainer}>
            <img style={imgStyle} src={iconUrl} alt={title} loading="lazy" />
            <Typography sx={cardTitle}>{title}</Typography>
          </Box>
          <Typography sx={cardText}>{text}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default WhyUsCards;
