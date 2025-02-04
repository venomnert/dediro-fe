import { Box, Button, Typography } from '@mui/material';
import {
  briefDescriptionStyles,
  btn,
  container,
  textContainer,
  titleStyles,
} from './RelatedContentCard.styles';

import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { IRelatedContentCard } from '@/types';
import React from 'react';

function RelatedContentCard({ title, briefDescription }: IRelatedContentCard) {
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
