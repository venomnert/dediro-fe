import { Box, Link, Typography } from '@mui/material';
import { container, linkStyles, title } from './WeeklyUpdatesCard.styles';

import { IWeeklyUpdatesCard } from '@/types';
import React from 'react';

function WeeklyUpdatesCard({ articleTitle, image, link }: IWeeklyUpdatesCard) {
  return (
    <Link href={link} target="_blank" sx={linkStyles}>
      <Box
        sx={{
          ...container,
          backgroundImage: `URL(${image})`,
        }}
      >
        <Typography sx={title}>{articleTitle}</Typography>
      </Box>
    </Link>
  );
}

export default WeeklyUpdatesCard;
