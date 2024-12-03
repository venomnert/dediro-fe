import { Box, Button, Typography } from '@mui/material';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import React from 'react';

import { relatedContentH3, moreArticlesSpan } from './RelatedContent.styles';

const RELATED_CONTENT_DATA = [
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
  {
    title: 'Related Article Title',
    briefDescription: 'This is a brief description of the related article.',
  },
];

function RelatedContent() {
  return (
    <>
      <Typography variant="h3" sx={relatedContentH3}>
        Related Content
      </Typography>

      <Typography variant="h4" sx={moreArticlesSpan}>
        More Articles
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {RELATED_CONTENT_DATA?.map(({ title, briefDescription }, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                maxWidth: '413px',
                padding: '20px',
                boxShadow: 'var(--hard-shadow)',
                borderRadius: '10px',
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontSize: '20px', fontWeight: '600', margin: '5px 0' }}
                >
                  {title}
                </Typography>
                <Typography sx={{ fontSize: '15px' }}>
                  {briefDescription}
                </Typography>
              </Box>
              <Button
                endIcon={<EastRoundedIcon />}
                sx={{
                  textTransform: 'capitalize',
                  color: '#000000',
                  fontSize: '16px',
                  fontWeight: '600',
                  padding: 0,
                }}
              >
                Read more
              </Button>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default RelatedContent;
