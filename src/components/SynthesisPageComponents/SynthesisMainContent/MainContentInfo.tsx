import { Box, Typography } from '@mui/material';
import {
  articleInfo,
  synthesisSummary,
  textIcon,
  textTitle,
  textTitleContainer,
} from './MainContentInfo.styles';

import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { IMainContentInfo } from '@/types';
import InfoButton from './InfoButton';
import React from 'react';

function MainContentInfo({ date, summary }: IMainContentInfo) {
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
          <Typography>{date}</Typography>
        </Box>

        <InfoButton />
      </Box>

      <Typography sx={synthesisSummary}>{summary}</Typography>
    </Box>
  );
}

export default MainContentInfo;
