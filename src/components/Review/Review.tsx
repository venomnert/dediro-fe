'use client';
import { Box, Typography } from '@mui/material';
import { reviewContainer, cardsContainer, titleStyles } from './Review.styles';
import React from 'react';
import ReviewCard from './ReviewCard';
import ReviewCTA from './ReviewCTA';
import useContentful from '@/hooks/useContentful';
import { ReviewContent } from '@/types';

function Review() {
  const { data, loading, error } =
    useContentful<ReviewContent>('reviewSection');

  console.log(data, 'revierData');
  return (
    <Box sx={reviewContainer} id="review-section">
      <Typography sx={titleStyles}>Today&apos;s Dediro Review</Typography>
      <Box sx={cardsContainer}>
        {data?.reviewData?.map((review) => (
          <ReviewCard
            key={review.title}
            number={review.number}
            title={review.title}
          />
        ))}
      </Box>
      <ReviewCTA
        ctaButtonText={data?.ctaButtonText}
        ctaHeader={data?.ctaHeader}
      />
    </Box>
  );
}

export default Review;
