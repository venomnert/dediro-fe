import { Box, Typography } from '@mui/material';
import {
  container,
  formContainer,
  img,
  imgContainer,
  title,
} from './SubscribeToNewsletter.styles';

import CTAForm from '../../Common/CTA/CTAForm';
import { ISubscribeToNewsletter } from '@/types';
import NEWSLETTER_DATA from '../../../constants/NEWSLETTER_DATA';
import React from 'react';

function SubscribeToNewsletter({ synthesisSlug }: ISubscribeToNewsletter) {
  return (
    <Box sx={container}>
      <Box sx={formContainer}>
        <Typography sx={title}>{NEWSLETTER_DATA.title}</Typography>
        <Typography>{NEWSLETTER_DATA.text}</Typography>

        <Box>
          <CTAForm isGreenButton={true} synthesisSlug={synthesisSlug} />
        </Box>
      </Box>
      <Box sx={imgContainer}>
        <img
          style={img}
          src="images/stay-informed/space.webp"
          loading="lazy"
          alt="space"
        />
      </Box>
    </Box>
  );
}

export default SubscribeToNewsletter;
