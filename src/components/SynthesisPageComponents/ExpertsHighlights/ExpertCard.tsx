import { Box, Grid2, IconButton, Typography } from '@mui/material';
import {
  addIcon,
  container,
  expertName,
  expertProfession,
  textContainer,
} from './ExpertCard.styles';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { IExpertCard } from '@/types';
import Image from 'next/image';
import React from 'react';

function ExpertCard({ name, profession, image }: IExpertCard) {
  return (
    <Grid2 container spacing={2} sx={container}>
      <Grid2 size={4}>
        <Image
          src={image.src}
          alt={image.alt}
          width={54}
          height={50}
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
