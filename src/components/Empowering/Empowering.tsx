import { Box, Typography } from '@mui/material';
import { cardsData } from './utils';
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

function Empowering() {
  return (
    <Box sx={mainContainer}>
      <Typography sx={sectionTitle}>How Dediro Empowers You</Typography>
      <Typography sx={sectionSubtitle}>
        We go beyond the headlines to provide you with in-depth, accurate
        information. Here’s how we ensure you
        <br />
        get the facts
      </Typography>
      <Box sx={cardsContainer}>
        {cardsData.map(({ title, text, imageUrl }) => (
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
