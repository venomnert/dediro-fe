import { Box, Typography } from '@mui/material';
import React from 'react';

import {
  container,
  relatedContentH3,
  moreArticlesSpan,
  cardContainer,
} from './RelatedContent.styles';
import RelatedContentCard from './RelatedContentCard';

const RELATED_CONTENT_DATA = [
  {
    title: 'Related Article Title',
    briefDescription:
      'This is a brief description of the related articleThis is a brief description of the related articleThis is a brief description of the related articleThis is a brief description of the related articleThis is a brief description of the related article.',
  },
  {
    title: 'Related Article Title',
    briefDescription: 'This is a brief description of the related article.',
  },
  {
    title: 'Related Article Title',
    briefDescription: 'This is a brief description of the related article.',
  },
  {
    title: 'Related Article Title',
    briefDescription: 'This is a brief description of the related article.',
  },
];

function RelatedContent() {
  return (
    <Box sx={container}>
      <Typography variant="h3" sx={relatedContentH3}>
        Related Content
      </Typography>

      <Typography variant="h4" sx={moreArticlesSpan}>
        More Articles
      </Typography>
      <Box sx={cardContainer}>
        {RELATED_CONTENT_DATA?.map(({ title, briefDescription }, index) => {
          return (
            <RelatedContentCard
              key={index}
              title={title}
              briefDescription={briefDescription}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default RelatedContent;
