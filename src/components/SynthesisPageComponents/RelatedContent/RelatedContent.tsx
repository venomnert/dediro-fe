import { Box, Typography } from '@mui/material';
import {
  cardContainer,
  container,
  moreArticlesSpan,
  relatedContentH3,
} from './RelatedContent.styles';

import { IRelatedContentArray } from '@/types';
import React from 'react';
import RelatedContentCard from './RelatedContentCard';

function RelatedContent({ relatedContent }: IRelatedContentArray) {
  return (
    <Box sx={container}>
      <Box>
        <Typography variant="h3" sx={relatedContentH3}>
          Related Content
        </Typography>
        <Typography variant="h4" sx={moreArticlesSpan}>
          More Articles
        </Typography>
      </Box>
      
      <Box sx={cardContainer}>
        {relatedContent?.map(({ title, briefDescription }, index) => (
          <RelatedContentCard
            key={index}
            title={title}
            briefDescription={briefDescription}
          />
        ))}
      </Box>
    </Box>
  );
}

export default RelatedContent;