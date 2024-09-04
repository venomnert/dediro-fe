import { Box, Typography } from '@mui/material';
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

interface ReviewProps {
  number: number;
  title: string;
}

const titleStyles = {
  color: 'var(--black)',
  fontWeight: 500,
  fontSize: '16px',
  marginTop: '10px',
  width: '300px',
};

const cardContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
};

function ReviewCard({ number, title }: ReviewProps) {
  return (
    <Box sx={cardContainer}>
      <AnimatedCounter from={0} to={number} />
      <Typography sx={titleStyles}>{title}</Typography>
    </Box>
  );
}

export default ReviewCard;
