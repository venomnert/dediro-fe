import { Box, Typography } from '@mui/material';
import React from 'react';

import {
  container,
  relatedContentH3,
  cardsContainer,
} from './RelatedContent.styles';
import RelatedContentCard from './RelatedContentCard';

const RELATED_CONTENT_DATA = [
  {
    articleTitle: 'Latest Artificial Intelligence News',
    image: 'images/synthesis-page/related-content.png',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
  {
    articleTitle: 'Latest Artificial Intelligence News',
    image: 'images/synthesis-page/related-content.png',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
  {
    articleTitle: 'Latest Artificial Intelligence News',
    image: 'images/synthesis-page/related-content.png',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
  {
    articleTitle: 'Latest Artificial Intelligence News',
    image: '',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
];

function RelatedContent() {
  return (
    <Box sx={container}>
      <Typography variant="h3" sx={relatedContentH3}>
        Related Content
      </Typography>

      <Box sx={cardsContainer}>
        {RELATED_CONTENT_DATA?.map(({ articleTitle, image, link }, index) => {
          return (
            <RelatedContentCard
              key={index}
              articleTitle={articleTitle}
              image={image}
              link={link}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default RelatedContent;
