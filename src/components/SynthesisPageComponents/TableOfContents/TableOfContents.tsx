import {
  Box,
  Typography,
  List,
  ListItemButton,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
  Tooltip,
  Collapse,
  Fade,
  ListItem,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React, { useEffect, useState, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import * as styles from './TableOfContents.styles';

interface TableOfContentsProps {
  themesSection: {
    title: string;
    theme: {
      theme_title: string;
      content: {
        subtopics: {
          subtitle: string;
          description: string;
        }[];
      };
    };
  }[];
}

export default function TableOfContents({
  themesSection,
}: TableOfContentsProps) {
  const [expandedThemes, setExpandedThemes] = useState<{[key: number]: boolean}>({});
  const [activeSection, setActiveSection] = useState<string>('');
  
  const slugify = (text: string): string => {
    if (!text) return '';
    
    // Convert to lowercase
    const lowercased = text.toLowerCase();
    
    // Replace special characters with empty string (keep alphanumeric, spaces, and hyphens)
    const withoutSpecialChars = lowercased.replace(/[^\w\s-]/g, '');
    
    // Replace spaces with hyphens
    const slug = withoutSpecialChars.replace(/\s+/g, '-');
    
    // Remove any consecutive hyphens
    const cleanSlug = slug.replace(/-+/g, '-');
    
    return cleanSlug;
  }
  
  const isSectionActive = (subtitle: string | undefined): boolean => {
    if (!subtitle || !activeSection) return false;
    const isActive = slugify(subtitle) === activeSection;
    if (isActive) {
      console.log(`Section "${subtitle}" is active with slug: ${slugify(subtitle)}`);
    }
    return isActive;
  }

  const checkThemeHeadingVisibility = (element) => {
    if (element.target.localName === 'h2') {
      return element.target.id;
    }
  }

  const useInersectionObserver = (setActiveSection: React.Dispatch<React.SetStateAction<string>>, activeSection: string) => {
    const headingEleRef = useRef<{[key: number]: IntersectionObserverEntry}>({});
    
    useEffect(() => {
      console.log('useInersectionObserver')
      const callback = (headings: IntersectionObserverEntry[]) => {
        headingEleRef.current = headings.reduce((acc, heading) => {
          acc[heading.target.id] = heading;
          return acc;
        }, headingEleRef.current);

        const visibleHeadings = [];
        Object.keys(headingEleRef.current).forEach((key) => {
          const headingElement = headingEleRef.current[key];
          if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
        });


        const getIndexFromId = (id) =>
          headings.findIndex((heading) => heading.target.id === id);

        console.log(visibleHeadings)
        if (visibleHeadings.length === 0) {
          const activeElement = headings.find((el) => el.target.id === activeSection);
          const activeIndex = headings.findIndex(
            (el) => el.target.id === activeSection
          );

          if (checkThemeHeadingVisibility(activeElement)) {
            toggleThemeVisibility(activeElement.target.id);
          }
    
          const activeIdYcoord = activeElement?.boundingClientRect.y;
          if (activeIdYcoord && activeIdYcoord > 150 && activeIndex !== 0) {
            setActiveSection(headings[activeIndex - 1].target.id);
          }
        }

        if (visibleHeadings.length === 1) {
          setActiveSection(visibleHeadings[0].target.id);
          if (checkThemeHeadingVisibility(visibleHeadings[0])) {
            toggleThemeVisibility(visibleHeadings[0].target.id);
          }
        }
        else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
          );
          setActiveSection(sortedVisibleHeadings[0].target.id);
          if (checkThemeHeadingVisibility(sortedVisibleHeadings[0])) {
            toggleThemeVisibility(sortedVisibleHeadings[0].target.id);
          }
        }
      };
      console.log("activeSection: ", activeSection)

      const observer = new IntersectionObserver(callback, {rootMargin: '150px'});

      const headings = Array.from(document.querySelectorAll('h2, h4'));
      headings.forEach((heading) => {
        observer.observe(heading);
      });

      return () => observer.disconnect();
    },[setActiveSection, activeSection])
  }
  
  /**
   * Toggles the expanded/collapsed state of a theme section
   * @param themeIndex - The index of the theme to toggle
   */
  const toggleThemeVisibility = (themeId: string) => {
    // Update the expanded themes state
    setExpandedThemes(currentExpandedState => {
      // Create a copy of the current state
      const updatedExpandedState = { ...currentExpandedState };

      // Toggle the selected theme's expanded state (true becomes false, false becomes true)
      updatedExpandedState[themeId] = !currentExpandedState[themeId];
      
      return updatedExpandedState;
    });
  };

  // Function to scroll to a section when clicking on a subtopic
  const scrollToSection = (id: string) => {
    if (!id) return;
    
    // Set the active section directly when clicking, for immediate feedback
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  useInersectionObserver(setActiveSection, activeSection);
  
  return (
    <Box
      component="nav"
      aria-label="Table of contents"
      sx={{
        position: 'sticky',
        top: '20px',
        maxHeight: 'calc(100vh - 40px)',
        overflow: 'auto',
        padding: '16px',
        borderRadius: '8px',
        bgcolor: 'background.paper',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '3px',
        },
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Table of Contents
      </Typography>
      {themesSection && themesSection.map((theme, index) => (
        <List key={index} sx={{ py: 0 }}>
          <ListItemButton
            onClick={() => toggleThemeVisibility(slugify(theme?.theme?.theme_title))}
            sx={{
              borderRadius: '4px',
              mb: 0.5,
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {theme?.theme?.theme_title}
              </Typography>
              <IconButton size="small">
                {expandedThemes[slugify(theme?.theme?.theme_title)] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
          </ListItemButton>
          <Collapse in={expandedThemes[slugify(theme?.theme?.theme_title)]} timeout="auto" unmountOnExit>
            <List sx={{ pl: 2, py: 0 }}>
              {theme?.theme?.content?.subtopics && theme.theme.content.subtopics.map((subtopic, subtopicIndex) => (
                <ListItemButton 
                  key={subtopicIndex}
                  onClick={() => scrollToSection(slugify(subtopic?.subtitle))}
                  sx={{ 
                    // Apply active styles directly instead of spreading
                    ...(isSectionActive(subtopic?.subtitle) && {
                      backgroundColor: '#e3f2fd',
                      borderLeft: '3px solid #1876d2',
                      fontWeight: 'bold',
                    }),
                    py: 0.5,
                    pl: 1,
                    borderLeft: isSectionActive(subtopic?.subtitle) ? '3px solid #1876d2' : '2px solid',
                    borderColor: isSectionActive(subtopic?.subtitle) ? '#1876d2' : 'divider',
                    '&:hover': {
                      bgcolor: 'action.hover',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontSize: '0.875rem',
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' } 
                    }}
                  >
                    {subtopic?.subtitle} <br />
                    {subtopic?.subtitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      ))}
    </Box>
  );
}
