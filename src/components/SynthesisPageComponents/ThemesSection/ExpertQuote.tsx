import { Box, Typography } from '@mui/material';
import React from 'react';

import {
  container,
  quoteText,
  ExpertInfoContainer,
  img,
  quoteExpertInfo,
} from './ExpertQuote.styles';

interface ExpertQuoteProps {
  name: string;
  image: string;
  profession: string;
  text: string;
}

function ExpertQuote({ name, image, profession, text }: ExpertQuoteProps) {
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
