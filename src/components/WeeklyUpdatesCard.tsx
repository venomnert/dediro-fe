import { Box, Link, Typography } from '@mui/material';
import React from 'react';

import { container, title, linkStyles } from './WeeklyUpdatesCard.styles';

interface WeeklyUpdatesCardProps {
  articleTitle: string;
  image: string;
  link: string;
}

function WeeklyUpdatesCard({
  articleTitle,
  image,
  link,
}: WeeklyUpdatesCardProps) {
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
