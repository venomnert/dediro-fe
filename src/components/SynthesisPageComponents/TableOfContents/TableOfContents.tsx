import { Box, Typography } from '@mui/material';
import {
  container,
  contentContainer,
  listContainer,
  subTitleStyle,
  tableOfContentsLabel,
  titleStyle,
  h2Style,
  h3Style,
} from './TableOfContents.styles';

import { IThemesArray } from '@/types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import React, { useEffect, useState } from 'react';

// Interface for parsed headers
interface ParsedHeader {
  level: number;
  text: string;
  id: string;
}

// Function to parse markdown headers from content
const parseMarkdownHeaders = (content: string): ParsedHeader[] => {
  if (!content) return [];
  
  // Regular expression to match markdown headers
  const headerRegex = /^(#{1,6})\s+(.+?)\s*$/gm;
  const headers: ParsedHeader[] = [];
  let match;

  while ((match = headerRegex.exec(content)) !== null) {
    const level = match[1].length; // Number of # symbols
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    
    headers.push({ level, text, id });
  }

  return headers;
};

export default function TableOfContents({ themesSection }: IThemesArray) {
  const [parsedHeaders, setParsedHeaders] = useState<{[key: number]: ParsedHeader[]}>({});

  useEffect(() => {
    // Parse headers from each theme's content
    const allHeaders: {[key: number]: ParsedHeader[]} = {};
    
    themesSection.forEach((theme, index) => {
      if (typeof theme.content === 'string') {
        allHeaders[index] = parseMarkdownHeaders(theme.content);
      }
    });
    
    setParsedHeaders(allHeaders);
  }, [themesSection]);

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
          Contents
        </Typography>
        
        {/* Main theme sections */}
        {themesSection.map((theme, themeIndex) => (
          <Box key={themeIndex} sx={contentContainer}>
            {/* Theme title */}
            <ListItemButton href={`#section-${themeIndex+1}`}>
              <Typography
                fontFamily="var(--font-roboto) !important"
                sx={titleStyle}
              >
                {themeIndex+1}. {theme.title || `Theme ${themeIndex+1}`}
              </Typography>
            </ListItemButton>
            
            {/* Headers from markdown content */}
            {parsedHeaders[themeIndex] && parsedHeaders[themeIndex].length > 0 && (
              <List component="div" disablePadding>
                {parsedHeaders[themeIndex].map((header, headerIndex) => (
                  <ListItemButton
                    key={headerIndex}
                    href={`#${header.id}`}
                    sx={header.level === 2 ? h2Style : h3Style}
                  >
                    <Typography 
                      fontFamily="var(--font-roboto) !important"
                      sx={{ fontSize: header.level === 2 ? '14px' : '13px' }}
                    >
                      {header.text}
                    </Typography>
                  </ListItemButton>
                ))}
              </List>
            )}
          </Box>
        ))}
      </ListSubheader>
    </List>
  );
}
