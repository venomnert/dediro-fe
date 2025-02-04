import { Box, Typography } from '@mui/material';
import {
  ExpertInfoContainer,
  container,
  img,
  quoteExpertInfo,
  quoteText,
} from './ExpertQuote.styles';

import { IExpertQuote } from '@/types';
import React from 'react';

function ExpertQuote({ name, image, profession, text }: IExpertQuote) {
  return (
    <Box sx={container}>
      <Typography component="span" sx={quoteText}>
        {text}
      </Typography>
      <Box sx={ExpertInfoContainer}>
        <img
          src={`images/synthesis-page/experts/${image}`}
          alt="expert"
          style={img}
        />
        <Box sx={quoteExpertInfo}>
          <Typography fontWeight={600}>{name}</Typography>
          <Typography fontSize={12}>{profession}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ExpertQuote;
