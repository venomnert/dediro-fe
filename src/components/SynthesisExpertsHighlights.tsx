import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ExpertCard from './ExpertCard';

import {
  container,
  expertsH2,
  expertsParagraph,
  cardsContainer,
  viewMoreButton,
} from './SynthesisExpertsHighlights.styles';

const EXPERTS_DATA = [
  {
    id: 1,
    name: 'Bill Gates',
    profession: 'American businessman',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695167344576?e=1737590400&v=beta&t=U88-qdsyfBJ_2IjA08tPPNCpAAKXDQ9NbsI-rqoeiNo',
  },
  {
    id: 2,
    name: 'Bill Gates',
    profession: 'American businessman',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695167344576?e=1737590400&v=beta&t=U88-qdsyfBJ_2IjA08tPPNCpAAKXDQ9NbsI-rqoeiNo',
  },
  {
    id: 3,
    name: 'Bill Gates',
    profession: 'American businessman',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695167344576?e=1737590400&v=beta&t=U88-qdsyfBJ_2IjA08tPPNCpAAKXDQ9NbsI-rqoeiNo',
  },
  {
    id: 4,
    name: 'Bill Gates',
    profession: 'American businessman',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695167344576?e=1737590400&v=beta&t=U88-qdsyfBJ_2IjA08tPPNCpAAKXDQ9NbsI-rqoeiNo',
  },
  {
    id: 5,
    name: 'Bill Gates',
    profession: 'American businessman',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695167344576?e=1737590400&v=beta&t=U88-qdsyfBJ_2IjA08tPPNCpAAKXDQ9NbsI-rqoeiNo',
  },
  {
    id: 6,
    name: 'Bill Gates',
    profession: 'American businessman',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695167344576?e=1737590400&v=beta&t=U88-qdsyfBJ_2IjA08tPPNCpAAKXDQ9NbsI-rqoeiNo',
  },
];

function SynthesisExpertsHighlights() {
  return (
    <Box sx={container}>
      <Box>
        <Typography variant="h2" sx={expertsH2}>
          Expert Highlights
        </Typography>
        <Typography sx={expertsParagraph}>
          Meet the Thought Leaders Behind This Synthesis
        </Typography>
      </Box>

      <Box sx={cardsContainer}>
        {EXPERTS_DATA.map((el, index) => {
          return (
            <ExpertCard
              key={index}
              name={el.name}
              profession={el.profession}
              image={el.image}
            />
          );
        })}
      </Box>

      <Button variant="contained" sx={viewMoreButton}>
        View More Profiles +25
      </Button>
    </Box>
  );
}

export default SynthesisExpertsHighlights;
