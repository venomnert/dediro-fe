import { Box, Button, Typography } from '@mui/material';
import {
  cardsContainer,
  container,
  expertsH2,
  expertsParagraph,
  viewMoreButton,
} from './ExpertsHighlights.styles';

import ExpertCard from './ExpertCard';
import { IExpertsHighlightsArray } from '@/types';
import React from 'react';

function ExpertsHighlights({ experts }: IExpertsHighlightsArray) {
  return (
    <Box sx={container}>
      <Box>
        <Typography variant="h2" sx={expertsH2}>
          Expert Highlights
        </Typography>
        <Typography sx={expertsParagraph}>
          Meet the Thought Leaders Behind This Synthesis
        </Typography>
      </Box>

      <Box sx={cardsContainer}>
        {experts.slice(0, 6).map((el, index) => {
          return (
            <ExpertCard
              key={index}
              name={el.name}
              profession={el.profession}
              image={el.image}
            />
          );
        })}
      </Box>

      <Button variant="contained" sx={viewMoreButton}>
        View More Profiles +{experts.length - 6}
      </Button>
    </Box>
  );
}

export default ExpertsHighlights;
