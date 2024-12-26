import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ExpertQuote from './ExpertQuote';

import {
  btn,
  btnText,
  container,
  h3,
  h4,
  image,
  imageContainer,
  themeText,
} from './ThemesSection.styles';

const THEME_SECTION_DATA = {
  themeTitle: 'Positive Relationships',
  description:
    'The importance of nurturing positive relationships with family, friends, and colleagues to enhance overall happiness.',
  quote: {
    text: '“Good relationships lead to health and happiness. The trick is that those relationships must be nurtured. ”',
    expertName: 'Sarah Lee',
    profession: 'Data Scientist',
    image: 'sarah-lee.png',
  },
  subTheme: {
    title: 'The Importance of Family Relationships',
    description:
      'Family relationships are foundational to individual happiness and well-being. The Harvard Study of Adult Development emphasizes that strong family bonds significantly contribute to long-term health and happiness. These relationships provide emotional support, shared experiences, and a sense of belonging. During challenging times, such as the pandemic, the support from family becomes even more crucial. Nurturing these relationships requires effort, patience, and understanding, but the rewards in terms of happiness and life satisfaction are immense.',
    quote: {
      text: '“Happiness is love. Full stop.”',
      expertName: 'Jane Smith',
      profession: 'Product Manager',
      image: 'jane-smith.png',
    },
  },
};

function ThemesSection() {
  return (
    <Box sx={container}>
      <Typography variant="h3" sx={h3}>
        {THEME_SECTION_DATA.themeTitle}
      </Typography>
      <Typography sx={themeText}>{THEME_SECTION_DATA.description}</Typography>

      <ExpertQuote
        name={THEME_SECTION_DATA.quote.expertName}
        image={THEME_SECTION_DATA.quote.image}
        profession={THEME_SECTION_DATA.quote.profession}
        text={THEME_SECTION_DATA.quote.text}
      />
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <Typography variant="h4" sx={h4}>
          {THEME_SECTION_DATA.subTheme.title}
        </Typography>
        <Typography sx={themeText}>
          {THEME_SECTION_DATA.subTheme.description}
        </Typography>

        <ExpertQuote
          name={THEME_SECTION_DATA.subTheme.quote.expertName}
          image={THEME_SECTION_DATA.subTheme.quote.image}
          profession={THEME_SECTION_DATA.subTheme.quote.profession}
          text={THEME_SECTION_DATA.subTheme.quote.text}
        />
      </Box>

      <Button variant="contained" sx={btn}>
        <Box sx={imageContainer}>
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...image, position: 'absolute', left: 0 }}
          />
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...image, position: 'absolute', left: 12.5 }}
          />
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...image, position: 'absolute', left: 25 }}
          />
        </Box>
        <Typography sx={btnText}>3 sources</Typography>
      </Button>
    </Box>
  );
}

export default ThemesSection;
