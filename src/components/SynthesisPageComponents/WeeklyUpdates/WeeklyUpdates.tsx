import { Box, Grid2, Typography } from '@mui/material';
import { container, weeklyContentH3 } from './WeeklyUpdates.styles';

import React from 'react';
import WeeklyUpdatesCard from './WeeklyUpdatesCard';

const WEEKLY_UPDATES_DATA = [
  {
    articleTitle: 'Latest Artificial Intelligence News',
    image: 'images/synthesis-page/weekly-updates.png',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
  {
    articleTitle: 'Latest Artificial Intelligence News',
    image: 'images/synthesis-page/weekly-updates.png',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
  {
    articleTitle: 'Latest Artificial Intelligence News',
    image: 'images/synthesis-page/weekly-updates.png',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
  {
    articleTitle: 'Latest Artificial Intelligence News',
    image: '',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
];

function WeeklyUpdates() {
  return (
    <Box sx={container}>
      <Typography variant="h3" sx={weeklyContentH3}>
        Weekly Updates
      </Typography>

      <Grid2 container spacing={2}>
        {WEEKLY_UPDATES_DATA?.slice(0, 4).map(
          ({ articleTitle, image, link }, index) => {
            return (
              <Grid2 key={index} size={6}>
                <WeeklyUpdatesCard
                  articleTitle={articleTitle}
                  image={image}
                  link={link}
                />
              </Grid2>
            );
          }
        )}
      </Grid2>
    </Box>
  );
}

export default WeeklyUpdates;
