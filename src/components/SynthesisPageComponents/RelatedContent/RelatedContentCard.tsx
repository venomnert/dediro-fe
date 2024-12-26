import { Box, Button, Typography } from '@mui/material';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

import React from 'react';

import {
  container,
  textContainer,
  titleStyles,
  briefDescriptionStyles,
  btn,
} from './RelatedContentCard.styles';

interface RelatedContentCardProps {
  title: string;
  briefDescription: string;
}

function RelatedContentCard({
  title,
  briefDescription,
}: RelatedContentCardProps) {
  return (
    <Box sx={container}>
      <Box sx={textContainer}>
        <Typography variant="h5" sx={titleStyles}>
          {title}
        </Typography>
        <Typography sx={briefDescriptionStyles}>{briefDescription}</Typography>
      </Box>
      <Button endIcon={<EastRoundedIcon />} sx={btn}>
        Read more
      </Button>
    </Box>
  );
}

export default RelatedContentCard;
