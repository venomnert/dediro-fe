import { Avatar, Box, Typography } from '@mui/material';
import { Synthesis } from './utils';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import React from 'react';
import moment from 'moment';
import {
  authorAndDateContainer,
  authorAndDateTextStyles,
  authorPicStyles,
  card,
  descriptionStyles,
  fireIcon,
  imgStyles,
  leftSide,
  rightSide,
  titleStyles,
} from './SynthesisCard.styles';

function SynthesisCard({
  title,
  isTrending,
  briefDescription,
  imageUrl,
  updatedAt,
  author,
}: Synthesis) {
  const dateToShow = moment(updatedAt).fromNow();

  return (
    <Box sx={card}>
      <Box sx={leftSide}>
        <img style={imgStyles} src={imageUrl} alt={title} />
      </Box>
      <Box sx={rightSide}>
        <Box>
          <Typography sx={titleStyles}>
            {title}
            {isTrending ? <WhatshotIcon sx={fireIcon} /> : null}
          </Typography>
          <Typography sx={descriptionStyles}>{briefDescription}</Typography>
        </Box>
        <Box sx={authorAndDateContainer}>
          <Avatar src={author.profilePicture} sx={authorPicStyles} alt={author.name} />
          <Typography sx={authorAndDateTextStyles}>
            {author.name} | Last updated: {dateToShow}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SynthesisCard;
