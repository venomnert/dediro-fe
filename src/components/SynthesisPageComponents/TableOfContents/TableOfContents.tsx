import { Box, Typography } from '@mui/material';
import {
  container,
  contentContainer,
  listContainer,
  tableOfContentsLabel,
  h2Style,
  h3Style,
} from './TableOfContents.styles';

import { IThemesArray } from '@/types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import React, { useEffect, useState } from 'react';

interface ParsedHeader {
  level: number;
  text: string;
  id: string;
}

const parseMarkdownHeaders = (content: string): ParsedHeader[] => {
  if (!content) return [];
  
  const headerRegex = /^(#{1,6})\s+(.+?)\s*$/gm;
  const headers: ParsedHeader[] = [];
  let match;

  while ((match = headerRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    
    headers.push({ level, text, id });
  }

  return headers;
};

export default function TableOfContents({ themesSection }: IThemesArray) {
  const [parsedHeaders, setParsedHeaders] = useState<{[key: number]: ParsedHeader[]}>({});
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const allHeaders: {[key: number]: ParsedHeader[]} = {};
    
    themesSection.forEach((theme, index) => {
      if (typeof theme.content === 'string') {
        allHeaders[index] = parseMarkdownHeaders(theme.content);
      }
    });
    
    setParsedHeaders(allHeaders);
  }, [themesSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    // Observe all section headings
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
        
        {themesSection.map((theme, themeIndex) => (
          <Box key={themeIndex} sx={contentContainer}>
            <ListItemButton 
              href={`#section-${themeIndex+1}`}
              selected={activeSection === `section-${themeIndex+1}`}
              sx={{
                backgroundColor: activeSection === `section-${themeIndex+1}` ? '#eaecf0' : 'transparent',
                '&:hover': {
                  backgroundColor: '#eaecf0',
                },
              }}
            >
              <Typography
                fontFamily="var(--font-roboto) !important"
                sx={{
                  ...h2Style,
                  color: activeSection === `section-${themeIndex+1}` ? '#000' : '#0645ad',
                }}
              >
                {themeIndex+1}. {theme.title || `Theme ${themeIndex+1}`}
              </Typography>
            </ListItemButton>
            
            {parsedHeaders[themeIndex] && parsedHeaders[themeIndex].length > 0 && (
              <List component="div" disablePadding>
                {parsedHeaders[themeIndex].map((header, headerIndex) => (
                  <ListItemButton
                    key={headerIndex}
                    href={`#${header.id}`}
                    selected={activeSection === header.id}
                    sx={{
                      backgroundColor: activeSection === header.id ? '#eaecf0' : 'transparent',
                      '&:hover': {
                        backgroundColor: '#eaecf0',
                      },
                    }}
                  >
                    <Typography 
                      fontFamily="var(--font-roboto) !important"
                      sx={{
                        ...h3Style,
                        color: activeSection === header.id ? '#000' : '#0645ad',
                      }}
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