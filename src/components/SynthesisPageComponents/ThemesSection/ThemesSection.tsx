import { Box, Typography } from '@mui/material';
import { container, h3, h4, themeText } from './ThemesSection.styles';
import MarkdownIt from 'markdown-it';

import ExpertQuote from './ExpertQuote';
import { IThemeSection } from '@/types';
import React from 'react';
import SourcesModal from './SourcesModal/SourcesModal';

function ThemesSection({ themesSection, experts }: IThemeSection) {
  const md = new MarkdownIt();
  if (themesSection.length) {
    return themesSection.map((el, i) => {
      return (
        <Box key={i} sx={container}>
          <div
            dangerouslySetInnerHTML={{ __html: md.render(el.content) }}
            style={{ marginBottom: '1em' }}
          />
          <Typography id={el.quote?.text} variant="h3" sx={h3}>
            {el.quote?.text}
          </Typography>

          {el.quote && (
            <ExpertQuote
              name={el.quote?.expert_name}
              image={el.quote?.image}
              profession={el.quote?.profession}
              text={el.quote?.text}
            />
          )}

          {/* {el.content.map((element) => {
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
          })} */}

          <SourcesModal experts={el.citations} />
        </Box>
      );
    });
  }
}

export default ThemesSection;
