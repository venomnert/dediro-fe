import { Box, Typography } from '@mui/material';
import { container, h3, h4, themeText } from './ThemesSection.styles';

import ExpertQuote from './ExpertQuote';
import { IThemeSection } from '@/types';
import React from 'react';
import SourcesModal from './SourcesModal/SourcesModal';
import THEME_SECTION_DATA from '../../../constants/THEME_SECTION_DATA';

function ThemesSection({ content }: IThemeSection) {
  if (content.length) {
    return content.map((el) => {
      return (
        <Box id="title" key={el.id} sx={container}>
          <Typography id={el.title} variant="h3" sx={h3}>
            {el.title}
          </Typography>
          <Typography sx={themeText}>{el.description}</Typography>

          <ExpertQuote
            name={THEME_SECTION_DATA.quote.expertName}
            image={THEME_SECTION_DATA.quote.image}
            profession={THEME_SECTION_DATA.quote.profession}
            text={THEME_SECTION_DATA.quote.text}
          />

          {el.content.map((element) => {
            return (
              <Box
                key={element.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                <Typography id={element.subtitle} variant="h4" sx={h4}>
                  {element.subtitle}
                </Typography>
                <Typography sx={themeText}>{element.description}</Typography>

                <ExpertQuote
                  name={THEME_SECTION_DATA.subTheme.quote.expertName}
                  image={THEME_SECTION_DATA.subTheme.quote.image}
                  profession={THEME_SECTION_DATA.subTheme.quote.profession}
                  text={THEME_SECTION_DATA.subTheme.quote.text}
                />
              </Box>
            );
          })}

          <SourcesModal />
        </Box>
      );
    });
  }
}

export default ThemesSection;
