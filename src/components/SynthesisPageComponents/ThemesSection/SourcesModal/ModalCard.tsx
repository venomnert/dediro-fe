import { Box, Link, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';
import {
  container,
  expertName,
  expertProfession,
  image,
  informationContainer,
  sourceLink,
  sourceSummary,
} from './ModalCard.style';

interface ISources {
  quote: string;
  link: string;
  sourceName: string;
  sourceDescription: string;
}

interface IModalCard {
  id: number;
  name: string;
  profession: string;
  sources: ISources[];
}

function ModalCard({ id, name, profession, sources }: IModalCard) {
  return (
    <Box key={id} sx={container}>
      <Box sx={image}>
        <img src="images/synthesis-page/modal/source-modal.png" alt="expert" />
      </Box>
      <Box sx={informationContainer}>
        <Typography variant="h2" sx={expertName}>
          {name}
        </Typography>
        <Typography variant="h4" sx={expertProfession}>
          {profession}
        </Typography>
        <Typography fontSize={14}>{sources[0].quote}</Typography>
        <Link href={sources[0].link} underline="none" sx={sourceLink}>
          <YouTubeIcon />
          <Typography fontSize={10}>{sources[0].sourceName}</Typography>
        </Link>
        <Typography sx={sourceSummary}>
          {sources[0].sourceDescription}
        </Typography>
      </Box>
    </Box>
  );
}

export default ModalCard;
