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
import React, { useEffect, useState, useRef } from 'react';

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
  const [activeSection, setActiveSection] = useState<string>('');
  const [activeThemeIndex, setActiveThemeIndex] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headerRefs = useRef<Map<string, HTMLElement>>(new Map());
  const activeItemRef = useRef<HTMLElement | null>(null);
  const tocContainerRef = useRef<HTMLDivElement | null>(null);
  
  // Function to set the active item ref
  const setActiveRef = (element: HTMLElement | null) => {
    if (element) {
      activeItemRef.current = element;
    }
  };

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
  
  // Set up intersection observer to track which sections are in view
  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Get all section elements
    const sectionElements: HTMLElement[] = [];
    
    // Add theme section headers
    themesSection.forEach((_, index) => {
      const sectionEl = document.getElementById(`section-${index+1}`);
      if (sectionEl) {
        sectionElements.push(sectionEl);
        headerRefs.current.set(`section-${index+1}`, sectionEl);
      }
    });
    
    // Add content headers
    Object.values(parsedHeaders).flat().forEach(header => {
      const headerEl = document.getElementById(header.id);
      if (headerEl) {
        sectionElements.push(headerEl);
        headerRefs.current.set(header.id, headerEl);
      }
    });
    
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entries that are currently visible
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Use the first visible entry as the active section
          const activeId = visibleEntries[0].target.id;
          setActiveSection(activeId);
          
          // Determine active theme index from the section ID
          const sectionMatch = activeId.match(/^section-(\d+)$/);
          if (sectionMatch) {
            setActiveThemeIndex(parseInt(sectionMatch[1]) - 1);
          } else {
            // If it's a sub-section, find which theme it belongs to
            themesSection.forEach((theme, index) => {
              // Check if the active section is within this theme's content
              const isInTheme = parsedHeaders[index]?.some(header => header.id === activeId);
              if (isInTheme) {
                setActiveThemeIndex(index);
              }
            });
          }
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px', // Adjust these values to control when a section is considered active
        threshold: 0.1
      }
    );
    
    // Observe all section elements
    sectionElements.forEach(element => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [themesSection, parsedHeaders]);
  
  // Auto-scroll the table of contents to keep the active section in view
  useEffect(() => {
    if (activeItemRef.current && tocContainerRef.current) {
      const container = tocContainerRef.current;
      const activeItem = activeItemRef.current;
      
      // Calculate the position of the active item relative to the container
      const containerRect = container.getBoundingClientRect();
      const activeItemRect = activeItem.getBoundingClientRect();
      
      // Check if the active item is outside the visible area of the container
      const isAbove = activeItemRect.top < containerRect.top;
      const isBelow = activeItemRect.bottom > containerRect.bottom;
      
      if (isAbove || isBelow) {
        // Scroll the active item into view with some padding
        activeItem.scrollIntoView({
          behavior: 'smooth',
          block: isBelow ? 'end' : 'start',
        });
        
        // Add some padding to avoid the item being at the very edge
        if (isAbove) {
          container.scrollTop -= 20; // Add padding at the top
        } else if (isBelow) {
          container.scrollTop += 20; // Add padding at the bottom
        }
      }
    }
  }, [activeSection]);

  return (
    <Box ref={tocContainerRef} sx={{ maxHeight: '100%', overflowY: 'auto' }}>
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
            <ListItemButton 
              ref={activeSection === `section-${themeIndex+1}` ? setActiveRef : null}
              href={`#section-${themeIndex+1}`}
              sx={{
                ...titleStyle,
                backgroundColor: activeSection === `section-${themeIndex+1}` ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                borderLeft: activeSection === `section-${themeIndex+1}` ? '3px solid #1976d2' : '3px solid transparent',
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <Typography
                fontFamily="var(--font-roboto) !important"
                sx={{
                  ...titleStyle,
                  fontWeight: activeSection === `section-${themeIndex+1}` ? 600 : 400,
                  color: activeSection === `section-${themeIndex+1}` ? 'primary.main' : 'text.primary',
                }}
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
                    ref={activeSection === header.id ? setActiveRef : null}
                    href={`#${header.id}`}
                    sx={{
                      ...(header.level === 2 ? h2Style : h3Style),
                      backgroundColor: activeSection === header.id 
                        ? 'rgba(25, 118, 210, 0.08)' 
                        : (activeThemeIndex === themeIndex ? 'rgba(25, 118, 210, 0.03)' : 'transparent'),
                      borderLeft: activeSection === header.id 
                        ? '3px solid #1976d2' 
                        : (activeThemeIndex === themeIndex ? '3px solid rgba(25, 118, 210, 0.3)' : '3px solid transparent'),
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    <Typography 
                      fontFamily="var(--font-roboto) !important"
                      sx={{ 
                        fontSize: header.level === 2 ? '14px' : '13px',
                        fontWeight: activeSection === header.id 
                          ? 600 
                          : (activeThemeIndex === themeIndex ? 500 : 400),
                        color: activeSection === header.id 
                          ? 'primary.main' 
                          : (activeThemeIndex === themeIndex ? 'primary.light' : 'text.secondary'),
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
    </Box>
  );
}
