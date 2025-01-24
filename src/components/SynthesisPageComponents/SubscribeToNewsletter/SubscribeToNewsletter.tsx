import { Box, Typography } from '@mui/material';
import {
  container,
  formContainer,
  img,
  imgContainer,
  title,
} from './SubscribeToNewsletter.styles';

import CTAForm from '../../Common/CTA/CTAForm';
import React from 'react';

const NEWSLETTER_DATA = {
  title: 'Stay Informed about the Latest News on this Topic',
  text: 'We continuously update our content to reflect new findings and perspectives. Keep up with the latest articles and reports from Dediro.',
  topic: 'Happiness',
};

interface ISubscribeToNewsletter {
  synthesisSlug: string;
}

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
