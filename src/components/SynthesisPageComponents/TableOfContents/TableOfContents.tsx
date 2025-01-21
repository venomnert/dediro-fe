import { Box, Typography } from '@mui/material';
import {
  container,
  contentContainer,
  listContainer,
  subTitleStyle,
  tableOfContentsLabel,
  titleStyle,
} from './TableOfContents.styles';

import { IThemeSection } from '@/types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';

export default function TableOfContents({ content }: IThemeSection) {
  return (
    <List
      disablePadding
      sx={container}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={listContainer}
      >
        <Typography
          fontFamily="var(--font-roboto) !important"
          sx={tableOfContentsLabel}
        >
          Table of contents
        </Typography>
        {content.map((el) => (
          <Box key={el.id} sx={contentContainer}>
            <ListItemButton href={`#${el.title}`}>
              <Typography
                fontFamily="var(--font-roboto) !important"
                sx={titleStyle}
              >
                {el.title}
              </Typography>
            </ListItemButton>
            <List component="div" disablePadding>
              {el.content.map((element) => (
                <ListItemButton
                  key={element.subtitle}
                  href={`#${element.subtitle}`}
                  sx={subTitleStyle}
                >
                  <Typography fontFamily="var(--font-roboto) !important">
                    {element.subtitle}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </Box>
        ))}
      </ListSubheader>
    </List>
  );
}
