import { Box, Link, Typography } from '@mui/material';
import {
  container,
  expertName,
  expertProfession,
  imageStyle,
  informationContainer,
  sourceLink,
  sourceSummary,
} from './ModalCard.style';

import { IModalCard } from '@/types';
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';

function ModalCard({ id, name, profession, sources, image }: IModalCard) {
  return (
    <Box key={id} sx={container}>
      <Box sx={imageStyle}>
        <img src={image.src} alt={image.alt} />
      </Box>
      <Box sx={informationContainer}>
        <Typography variant="h2" sx={expertName}>
          {name}
        </Typography>
        <Typography variant="h4" sx={expertProfession}>
          {profession}
        </Typography>
        {sources && (
          <>
            <Typography fontSize={14}>{sources[0].quote}</Typography>
            <Link href={sources[0].link} underline="none" sx={sourceLink}>
              <YouTubeIcon />
              <Typography fontSize={10}>{sources[0].sourceName}</Typography>
            </Link>
            <Typography sx={sourceSummary}>
              {sources[0].sourceDescription}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ModalCard;
