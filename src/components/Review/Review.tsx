import { Box, Typography } from '@mui/material'
import { reviewContainer, cardsContainer, titleStyles } from './Review.styles';
import { reviewData } from './utils'
import React from 'react'
import ReviewCard from './ReviewCard';
import ReviewCTA from './ReviewCTA';

function Review() {
  return (
    <Box sx={reviewContainer}>
      <Typography sx={titleStyles}>Today&apos;s Dediro Review</Typography>
      <Box sx={cardsContainer}>
        {reviewData.map(review => (
          <ReviewCard key={review.title} number={review.number} title={review.title} />
        ))}
      </Box>
      <ReviewCTA />
    </Box>
  )
}

export default Review