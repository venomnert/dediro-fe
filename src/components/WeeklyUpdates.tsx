import { Box, Typography } from '@mui/material';
import React from 'react';

import {
  container,
  weeklyContentH3,
  cardsContainer,
} from './WeeklyUpdates.styles';
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

      <Box sx={cardsContainer}>
        {WEEKLY_UPDATES_DATA?.map(({ articleTitle, image, link }, index) => {
          return (
            <WeeklyUpdatesCard
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

export default WeeklyUpdates;
