import { Box, Typography } from '@mui/material';
import {
  container,
  formContainer,
  imgContainer,
  img,
  title,
  description,
} from './SubscribeToNewsletter.styles';

import CTAForm from '../../Common/CTA/CTAForm';
import { ISubscribeToNewsletter } from '@/types';
import NEWSLETTER_DATA from '../../../constants/NEWSLETTER_DATA';
import React from 'react';

function SubscribeToNewsletter({ synthesisSlug }: ISubscribeToNewsletter) {
  return (
    <Box sx={container}>
      <Box sx={formContainer}>
        <Typography variant="h2" sx={title}>
          {NEWSLETTER_DATA.title}
        </Typography>
        <Typography sx={description}>
          {NEWSLETTER_DATA.text}
        </Typography>

        <CTAForm 
          isGreenButton={true} 
          synthesisSlug={synthesisSlug}
          buttonCustomStyles={{
            backgroundColor: '#343967',
            '&:hover': {
              backgroundColor: '#2a2e52',
            },
          }}
        />
      </Box>
      
      <Box sx={imgContainer}>
        <img
          style={img}
          src="images/stay-informed/space.webp"
          loading="lazy"
          alt="Stay informed illustration"
        />
      </Box>
    </Box>
  );
}

export default SubscribeToNewsletter;