import {
  Box,
  Typography,
  List,
  ListItemButton,
  IconButton,
  Collapse,
} from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
    return isActive;
  }

  const isThemeHeading = (el: IntersectionObserverEntry) => {
    if (el.target.className.includes('themeHeading')) {
      return true;
    }
  }

  const useInersectionObserver = (setActiveSection: React.Dispatch<React.SetStateAction<string>>, activeSection: string) => {
    console.log('useInersectionObserver initialized')
    const headingEleRef = useRef<{[key: number]: IntersectionObserverEntry}>({});
    
    useEffect(() => {
      console.log('effect called')
      
      const callback = (headings: IntersectionObserverEntry[]) => {
        console.log('callback called')
        
        const visibleHeadings = [];
        headingEleRef.current = headings.reduce((acc, heading) => {
          acc[heading.target.id] = heading;
          return acc;
        }, headingEleRef.current);
        
        // check if any of the headings are intersecting and push them to visibleHeadings
        Object.keys(headingEleRef.current).forEach((key) => {
          const headingElement = headingEleRef.current[key];
          if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
        });

        // helper function to get index of heading element
        const getIndexFromId = (id) =>
          headings.findIndex((heading) => heading.target.id === id);

        console.log('visibleHeadings: ', visibleHeadings)
        console.log("before activeSection: ", activeSection)
        
        if (visibleHeadings.length === 0) {
          const activeElement = headings.find((el) => el.target.id === activeSection);
          const activeIndex = headings.findIndex(
            (el) => el.target.id === activeSection
          );

          console.log('activeElement: ', activeElement)

          // check if element existt and on toggle if element is theme heading
          if (activeElement) {
            toggleThemeVisibility(activeElement);
          }
          const activeIdYcoord = activeElement?.boundingClientRect.y;
          console.log('activeIdYcoord: ', activeIdYcoord)
          if (activeIdYcoord && activeIdYcoord > 0 && activeIndex !== 0) {
            console.log('activeSection: ', headings[activeIndex - 1].target.id)
            setActiveSection(headings[activeIndex - 1].target.id);
          }
        }
        else if (visibleHeadings.length === 1) {
          console.log('SINGLE length ', visibleHeadings[0].target.id)
          setActiveSection(visibleHeadings[0].target.id);
            // check if element existt and on toggle if element is theme heading
            toggleThemeVisibility(visibleHeadings[0]);
        }
        else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
          );
          console.log('MULTIPLE length ', sortedVisibleHeadings[0].target.id)
          setActiveSection(sortedVisibleHeadings[0].target.id);
          toggleThemeVisibility(sortedVisibleHeadings[0]);
        }
        console.log("after activeSection: ", activeSection)
      };

      const observer = new IntersectionObserver(callback, {rootMargin: '-500px'});

      const headings = Array.from(document.querySelectorAll('.themeHeading, .subThemeHeading'));
      headings.forEach((heading) => {
        observer.observe(heading);
      });

      return () => observer.disconnect();
    },[])
  }
  
  const toggleThemeVisibility = (el: IntersectionObserverEntry) => {
    // Theme heading click event
    if(el.constructor.name.includes('SyntheticBaseEvent')) {
      console.log('SyntheticBaseEvent')
      const themeId = el.currentTarget.getAttribute('data-theme-id');
      console.log('themeId: ', themeId)
      setExpandedThemes(currentExpandedState => {
        return {
          [themeId]: !currentExpandedState[themeId]
        }
      })
    }
    // Theme heading intersection event
    else {
      console.log('themeId: ', el.target.id)
      setExpandedThemes(currentExpandedState => {
        if (isThemeHeading(el)) {
          return {
            [el.target.id]: true
          }
        }
        else {
          const parentThemeId = el.target.getAttribute('data-parent-theme-id');
          // check if subtopic heading is different from active section, if true replace active section with new subtopic parent
          if (!currentExpandedState[parentThemeId]) {
            return {
              [parentThemeId]: true
            }
          }
          return currentExpandedState;
        }
      })
    }
  };

  const scrollToSection = (id: string) => {
    if (!id) return;
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
            onClick={(e) => toggleThemeVisibility(e)}
            data-theme-id={slugify(theme?.theme?.theme_title)}
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
