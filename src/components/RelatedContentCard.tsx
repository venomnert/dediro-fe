import { Box, Link, Typography } from '@mui/material';
import React from 'react';

import { container, title } from './RelatedContentCard.styles';

interface RelatedContentCardProps {
  articleTitle: string;
  image: string;
  link: string;
}

function RelatedContentCard({
  articleTitle,
  image,
  link,
}: RelatedContentCardProps) {
  return (
    <Link href={link} target="_blank" sx={{ textDecoration: 'none' }}>
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

export default RelatedContentCard;
