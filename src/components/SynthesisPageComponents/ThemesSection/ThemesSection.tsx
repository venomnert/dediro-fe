import { Box, Typography } from '@mui/material';
import { container, h3, h4, themeText } from './ThemesSection.styles';

import ExpertQuote from './ExpertQuote';
import { IThemeSection } from '@/types';
import React from 'react';
import SourcesModal from './SourcesModal/SourcesModal';

function ThemesSection({ themesSection }: IThemeSection) {
  if (themesSection.length) {
    return themesSection.map((el) => {
      return (
        <Box key={el.id} sx={container}>
          <Typography id={el.title} variant="h3" sx={h3}>
            {el.title}
          </Typography>
          <Typography sx={themeText}>{el.description}</Typography>

          {el.quote && (
            <ExpertQuote
              name={el.quote.expertName}
              image={el.quote.image}
              profession={el.quote.profession}
              text={el.quote.text}
            />
          )}

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

                {element.quote && (
                  <ExpertQuote
                    name={element.quote.expertName}
                    image={element.quote.image}
                    profession={element.quote.profession}
                    text={element.quote.text}
                  />
                )}
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
