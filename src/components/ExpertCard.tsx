import { Box, IconButton, Typography } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React from 'react';

import {
  container,
  textContainer,
  expertName,
  expertProfession,
  addIcon,
} from './ExpertCard.styles';

interface ExpertCardProps {
  name: string;
  profession: string;
  image: string;
}

function ExpertCard({ name, profession, image }: ExpertCardProps) {
  return (
    <Box sx={container}>
      <img
        src={image}
        alt="white man smiling"
        width="54px"
        height="50px"
        style={{ borderRadius: '100%' }}
      />
      <Box sx={textContainer}>
        <Typography component="span" sx={expertName}>
          {name}
        </Typography>
        <Typography component="span" sx={expertProfession}>
          {profession}
        </Typography>
      </Box>
      <IconButton sx={addIcon}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Box>
  );
}

export default ExpertCard;
