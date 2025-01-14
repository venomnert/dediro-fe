import { Box, Typography } from '@mui/material';
import {
  articleInfo,
  synthesisSummary,
  textIcon,
  textTitle,
  textTitleContainer,
} from '../MainContent.styles';

import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import InfoButton from '../InfoButton';
import React from 'react';

function MainContentInfo() {
  return (
    <Box component="article">
      <Box sx={articleInfo}>
        <Box sx={textTitleContainer}>
          <Typography variant="h3" sx={textTitle}>
            Article
          </Typography>
        </Box>

        <Box sx={textIcon}>
          <CalendarMonthRoundedIcon />
          <Typography>April 15, 2023</Typography>
        </Box>

        <InfoButton />
      </Box>

      <Typography sx={synthesisSummary}>
        The pursuit of a happier life is a multifaceted endeavor shaped by
        various themes, including work-life balance, physical health, purpose,
        personal growth, gratitude, positive relationships, and mental
        well-being. Historically, the concept of work-life balance emerged from
        labor unions advocacy for reasonable working hours, evolving into modern
        discussions emphasizing emotional understanding and social networks as
        critical factors for happiness. Notably, Arthur C. Brooks highlights the
        necessity of metacognition and the role of relationships in achieving
        well-being, aligning with research showing the significant impact of
        social connections on career satisfaction. Flexible work arrangements,
        as studied by Phyllis Moen, further illustrate the shift towards work
        environments that support personal lives, enhancing overall happiness.
        Physical health, comprising regular exercise, a balanced diet, and
        sufficient sleep, is foundational to emotional well-being.
      </Typography>
    </Box>
  );
}

export default MainContentInfo;
