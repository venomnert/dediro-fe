import {
  Box,
  Typography,
  List,
  ListItemButton,
  IconButton,
  Collapse,
  useTheme,
  useMediaQuery,
  Drawer,
  Fab,
  LinearProgress,
} from '@mui/material';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CloseIcon from '@mui/icons-material/Close';
import {
  container,
  mobileContainer,
  title,
  listItem,
  listItemText,
  sectionHeading,
  expandIcon,
  floatingButton,
  drawerContent,
  progressIndicator,
  animations,
  a11y,
  performance,
  colors,
  spacing,
} from './TableOfContents.enhanced.styles';

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

export default function EnhancedTableOfContents({
  themesSection,
}: TableOfContentsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // State management
  const [expandedThemes, setExpandedThemes] = useState<{[key: number]: boolean}>({});
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Refs
  const headingEleRef = useRef<{[key: string]: IntersectionObserverEntry}>({});
  const lastScrollY = useRef(0);

  // Utility function to create URL-friendly slugs
  const slugify = useCallback((text: string): string => {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }, []);

  // Check if section is currently active
  const isSectionActive = useCallback((subtitle: string | undefined): boolean => {
    if (!subtitle || !activeSection) return false;
    return slugify(subtitle) === activeSection;
  }, [activeSection, slugify]);

  // Handle scroll-based visibility (auto-hide on scroll down)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      // Calculate reading progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / documentHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
      
      // Auto-hide on mobile when scrolling down
      if (isMobile && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsVisible(!scrollingDown || currentScrollY < 100);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Enhanced intersection observer for active section tracking
  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      const visibleHeadings: IntersectionObserverEntry[] = [];
      
      // Update refs
      headingEleRef.current = headings.reduce((acc, heading) => {
        acc[heading.target.id] = heading;
        return acc;
      }, headingEleRef.current);

      // Find visible headings
      Object.values(headingEleRef.current).forEach((heading) => {
        if (heading.isIntersecting) {
          visibleHeadings.push(heading);
        }
      });

      // Determine active section
      if (visibleHeadings.length === 0) {
        // Handle case when no headings are visible
        const activeElement = Object.values(headingEleRef.current)
          .find((el) => el.target.id === activeSection);
        
        if (activeElement && activeElement.boundingClientRect.y > 0) {
          const allHeadings = Object.values(headingEleRef.current);
          const activeIndex = allHeadings.findIndex(
            (el) => el.target.id === activeSection
          );
          if (activeIndex > 0) {
            setActiveSection(allHeadings[activeIndex - 1].target.id);
          }
        }
      } else if (visibleHeadings.length === 1) {
        setActiveSection(visibleHeadings[0].target.id);
        handleThemeExpansion(visibleHeadings[0]);
      } else {
        // Multiple visible headings - choose the topmost
        const sortedHeadings = visibleHeadings.sort((a, b) => {
          const aIndex = Object.values(headingEleRef.current).findIndex(
            (el) => el.target.id === a.target.id
          );
          const bIndex = Object.values(headingEleRef.current).findIndex(
            (el) => el.target.id === b.target.id
          );
          return aIndex - bIndex;
        });
        setActiveSection(sortedHeadings[0].target.id);
        handleThemeExpansion(sortedHeadings[0]);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-100px 0px -50% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    // Observe all headings
    const headings = document.querySelectorAll('.themeHeading, .subThemeHeading');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [activeSection]);

  // Handle theme expansion based on active section
  const handleThemeExpansion = useCallback((entry: IntersectionObserverEntry) => {
    const isThemeHeading = entry.target.classList.contains('themeHeading');
    
    if (isThemeHeading) {
      setExpandedThemes(prev => ({
        ...prev,
        [entry.target.id]: true,
      }));
    } else {
      const parentThemeId = entry.target.getAttribute('data-parent-theme-id');
      if (parentThemeId) {
        setExpandedThemes(prev => ({
          ...prev,
          [parentThemeId]: true,
        }));
      }
    }
  }, []);

  // Toggle theme expansion
  const toggleThemeExpansion = useCallback((themeId: string) => {
    setExpandedThemes(prev => ({
      ...prev,
      [themeId]: !prev[themeId],
    }));
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((id: string) => {
    if (!id) return;
    
    setActiveSection(id);
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    
    // Close mobile drawer after navigation
    if (isMobile) {
      setMobileDrawerOpen(false);
    }
  }, [isMobile]);

  // Handle mobile drawer toggle
  const toggleMobileDrawer = useCallback(() => {
    setMobileDrawerOpen(prev => !prev);
  }, []);

  // Render table of contents content
  const renderTOCContent = () => (
    <Box
      sx={{
        ...animations.fadeInScale,
        ...performance,
      }}
    >
      {/* Progress indicator */}
      <Box sx={progressIndicator(readingProgress)} />
      
      {/* Title */}
      <Typography
        variant="h6"
        sx={title}
        role="heading"
        aria-level={2}
      >
        Table of Contents
      </Typography>

      {/* Navigation list */}
      <Box component="nav" role="navigation" aria-label="Article sections">
        {themesSection?.map((theme, index) => {
          const themeId = slugify(theme?.theme?.theme_title);
          const isExpanded = expandedThemes[themeId];
          
          return (
            <List key={index} sx={{ py: 0 }} disablePadding>
              {/* Theme heading */}
              <ListItemButton
                onClick={() => toggleThemeExpansion(themeId)}
                sx={{
                  ...listItem(0, activeSection === themeId),
                  ...a11y.focusRing,
                }}
                aria-expanded={isExpanded}
                aria-controls={`theme-${index}-content`}
                role="button"
                tabIndex={0}
              >
                <Box 
                  display="flex" 
                  alignItems="center" 
                  width="100%" 
                  justifyContent="space-between"
                  gap={spacing[2]}
                >
                  <Typography
                    sx={{
                      ...sectionHeading(activeSection === themeId),
                      flex: 1,
                    }}
                  >
                    {theme?.theme?.theme_title}
                  </Typography>
                  <IconButton
                    size="small"
                    sx={{
                      ...expandIcon(isExpanded),
                      ...a11y.focusRing,
                    }}
                    aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                  >
                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>
              </ListItemButton>

              {/* Subtopics */}
              <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                id={`theme-${index}-content`}
              >
                <List sx={{ pl: 0, py: 0 }} disablePadding>
                  {theme?.theme?.content?.subtopics?.map((subtopic, subtopicIndex) => {
                    const subtopicId = slugify(subtopic?.subtitle);
                    const isActive = isSectionActive(subtopic?.subtitle);
                    
                    return (
                      <ListItemButton
                        key={subtopicIndex}
                        onClick={() => scrollToSection(subtopicId)}
                        sx={{
                          ...listItem(1, isActive),
                          ...a11y.focusRing,
                        }}
                        role="link"
                        aria-current={isActive ? 'location' : undefined}
                      >
                        <Typography
                          sx={listItemText(isActive, 1)}
                          title={subtopic?.subtitle}
                        >
                          {subtopic?.subtitle}
                        </Typography>
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          );
        })}
      </Box>
    </Box>
  );

  // Mobile view with floating action button and drawer
  if (isMobile) {
    return (
      <>
        {/* Floating action button */}
        <Fab
          sx={{
            ...floatingButton(theme),
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
            ...a11y.focusRing,
          }}
          onClick={toggleMobileDrawer}
          aria-label="Open table of contents"
          color="primary"
        >
          <MenuBookIcon />
        </Fab>

        {/* Mobile drawer */}
        <Drawer
          anchor="right"
          open={mobileDrawerOpen}
          onClose={toggleMobileDrawer}
          PaperProps={{
            sx: {
              ...drawerContent,
              ...animations.slideInLeft,
            },
          }}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
        >
          {/* Drawer header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={spacing[4]}
          >
            <Typography variant="h6" sx={sectionHeading(false)}>
              Navigation
            </Typography>
            <IconButton
              onClick={toggleMobileDrawer}
              sx={a11y.focusRing}
              aria-label="Close navigation"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Table of contents content */}
          {renderTOCContent()}
        </Drawer>
      </>
    );
  }

  // Desktop view
  return (
    <Box
      sx={{
        ...container,
        ...animations.fadeInScale,
        ...performance,
      }}
      component="aside"
      aria-label="Table of contents"
    >
      {renderTOCContent()}
    </Box>
  );
}