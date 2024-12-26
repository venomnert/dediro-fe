import { Box, Grid2, IconButton, Typography } from '@mui/material';
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
    <Grid2 container spacing={2} sx={container}>
      <Grid2 size={4}>
        <img
          src={image}
          alt="white man smiling"
          width="54px"
          height="50px"
          style={{ borderRadius: '100%' }}
        />
      </Grid2>
      <Grid2 size={6}>
        <Box sx={textContainer}>
          <Typography component="span" sx={expertName}>
            {name}
          </Typography>
          <Typography component="span" sx={expertProfession}>
            {profession}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={2}>
        <IconButton sx={addIcon}>
          <AddCircleOutlineOutlinedIcon />
        </IconButton>
      </Grid2>
    </Grid2>
  );
}

export default ExpertCard;
