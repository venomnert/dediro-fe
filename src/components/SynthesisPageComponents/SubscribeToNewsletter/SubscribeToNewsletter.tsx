import { Box, Typography } from '@mui/material';
import {
  container,
  formContainer,
  imgContainer,
  img,
  title,
  description,
  ctaContainer,
} from './SubscribeToNewsletter.styles';

import CTAForm from '../../Common/CTA/CTAForm';
import { ISubscribeToNewsletter } from '@/types';
import NEWSLETTER_DATA from '../../../constants/NEWSLETTER_DATA';
import React from 'react';

function SubscribeToNewsletter({ synthesisSlug }: ISubscribeToNewsletter) {
  return (
    <Box sx={container}>
      <Box sx={formContainer}>
        <Typography variant="h3" sx={title}>
          {NEWSLETTER_DATA.title}
        </Typography>
        <Typography sx={description}>{NEWSLETTER_DATA.text}</Typography>

        <Box sx={ctaContainer}>
          <CTAForm
            isGreenButton={true}
            synthesisSlug={synthesisSlug}
            buttonCustomStyles={{
              backgroundColor: '#0645ad',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              padding: '8px 16px',
              borderRadius: '2px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#0b4ba0',
              },
            }}
            ctaTextValue="Subscribe to updates"
          />
        </Box>
      </Box>

      <Box sx={imgContainer}>
        <Box
          component="img"
          sx={img}
          src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
          loading="lazy"
          alt="Stay informed with latest updates"
        />
      </Box>
    </Box>
  );
}

export default SubscribeToNewsletter;
