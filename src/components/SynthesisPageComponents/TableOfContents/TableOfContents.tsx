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
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React, { useEffect, useState, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import * as styles from './TableOfContents.styles';

interface ParsedHeader {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  themesSection: {
    title: string;
    content:
      | string
      | {
          subtitle: string;
          description: string;
        }[];
  }[];
}

// Styled components using the imported styles
const TOCContainer = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: '80px',
  maxHeight: 'calc(100vh - 100px)',
  overflowY: 'auto',
  backgroundColor: 'transparent', // Removed background
  padding: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: alpha(theme.palette.common.black, 0.2),
    borderRadius: '2px',
    '&:hover': {
      background: alpha(theme.palette.common.black, 0.3),
    },
  },
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    top: 'auto',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    maxHeight: 'none',
    padding: 0,
    border: 'none',
    borderRadius: '50%',
    backgroundColor: 'transparent',
  },
}));

const TOCTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  color: theme.palette.common.white,
  letterSpacing: '0.01em',
  display: 'none', // Hide the title as it's not in the reference image
}));

const TOCListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'depth' && prop !== 'active',
})<{ depth?: number; active?: boolean }>(
  ({ theme, depth = 0, active = false }) => ({
    padding: theme.spacing(0.6, 0, 0.6, 1.5),
    marginY: theme.spacing(0.2),
    borderLeft: `2px solid ${active ? 'rgba(0, 0, 0, 0.87)' : alpha(theme.palette.common.black, 0.3)}`,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      borderLeft: `2px solid rgba(0, 0, 0, 0.87)`,
    },
    transition: 'all 200ms ease',
    minHeight: '32px',
    display: 'flex',
    alignItems: 'center',
  })
);

const TOCText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active = false }) => ({
  fontSize: '1rem',
  color: active ? 'rgba(0, 0, 0, 0.87)' : alpha(theme.palette.common.black, 0.6),
  fontWeight: active ? 600 : 400,
  lineHeight: 1.4,
  letterSpacing: '0.01em',
  paddingLeft: theme.spacing(1.5),
}));

const TOCSectionHeading = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active = false }) => ({
  fontSize: '1.05rem',
  fontWeight: active ? 700 : 600,
  color: active ? 'rgba(0, 0, 0, 0.87)' : alpha(theme.palette.common.black, 0.6),
  letterSpacing: '0.02em',
  paddingLeft: theme.spacing(1.5),
}));

const FloatingButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: alpha(theme.palette.common.black, 0.7),
  color: theme.palette.common.white,
  width: '56px',
  height: '56px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.9),
  },
  boxShadow: theme.shadows[4],
  zIndex: 1000,
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: '280px',
  maxWidth: '90vw',
  padding: theme.spacing(2),
  height: '100%',
  overflowY: 'auto',
  backgroundColor: alpha(theme.palette.common.black, 0.9),
  color: theme.palette.common.white,
}));

// Expandable section component for mobile view
const ExpandableSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0.8, 0),
  cursor: 'pointer',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  borderLeft: `2px solid ${alpha(theme.palette.common.white, 0.3)}`,
}));

const themeDescriptions = [
  {
    title: 'Theme 1: Consequences of the Israel-Gaza Conflict',
    subtopics: [
      'Humanitarian Crisis and Civilian Impact',
      'Regional Stability and International Response',
      'Economic and Infrastructure Damage',
    ],
  },
  {
    title: 'Theme 2: Global Economic Implications',
    subtopics: [
      'Market Volatility and Oil Prices',
      'Trade Route Disruptions',
      'International Aid and Support',
    ],
  },
  {
    title: 'Theme 3: Diplomatic Developments',
    subtopics: [
      'Peace Negotiation Efforts',
      'International Mediation',
      'Regional Alliance Shifts',
    ],
  },
  {
    title: 'Theme 4: Humanitarian Response',
    subtopics: [
      'Aid Distribution Challenges',
      'Medical Emergency Management',
      'Civilian Evacuation Efforts',
    ],
  },
];

export default function TableOfContents({
  themesSection,
}: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{[key: number]: boolean}>({});
  const [parsedHeaders, setParsedHeaders] = useState<{
    [key: number]: ParsedHeader[];
  }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Initialize expanded sections state for mobile accordion view
  useEffect(() => {
    // Default to first section expanded, others collapsed
    const initialExpandedState = themesSection.reduce((acc, _, index) => {
      acc[index] = index === 0; // Only expand first section by default
      return acc;
    }, {} as {[key: number]: boolean});
    
    setExpandedSections(initialExpandedState);
  }, [themesSection.length]);

  // Parse headers from content
  useEffect(() => {
    const allHeaders: { [key: number]: ParsedHeader[] } = {};

    themesSection.forEach((theme, index) => {
      if (typeof theme.content === 'string') {
        const headerRegex = /^(#{1,6})\s+(.+?)\s*$/gm;
        const headers: ParsedHeader[] = [];
        let match;

        while ((match = headerRegex.exec(theme.content)) !== null) {
          const level = match[1].length;
          const text = match[2].trim();
          const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
          headers.push({ level, text, id });
        }

        allHeaders[index] = headers;
      } else {
        allHeaders[index] = theme.content.map((item) => ({
          level: 2,
          text: item.subtitle,
          id: item.subtitle
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-'),
        }));
      }
    });

    setParsedHeaders(allHeaders);
  }, [themesSection]);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0.1,
    });

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle click on TOC item
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use smooth scrolling with a slight offset to account for fixed headers
      const yOffset = -80; // Adjust based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Close drawer on mobile after clicking
      if (isMobile) {
        setDrawerOpen(false);
      }
    }
  };
  
  // Toggle section expansion for mobile accordion view
  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Render TOC content with different approaches for desktop and mobile
  const renderTOCContent = () => (
    <>
      <List disablePadding>
        {themesSection.map((theme, themeIndex) => {
          const isActive = activeSection === `section-${themeIndex + 1}`;
          const sectionTitle = themeDescriptions[themeIndex]?.title || `Theme ${themeIndex + 1}`;
          
          return isMobile ? (
            // Mobile: Collapsible sections with clear headings
            <ExpandableSection key={themeIndex}>
              <SectionHeader onClick={() => toggleSection(themeIndex)}>
                <TOCSectionHeading active={isActive}>
                  {sectionTitle}
                </TOCSectionHeading>
                {expandedSections[themeIndex] ? 
                  <ExpandLessIcon fontSize="small" /> : 
                  <ExpandMoreIcon fontSize="small" />
                }
              </SectionHeader>
              
              <Collapse in={expandedSections[themeIndex]} timeout="auto">
                <List disablePadding>
                  {parsedHeaders[themeIndex]?.map((header, headerIndex) => {
                    const displayText = themeDescriptions[themeIndex]?.subtopics[headerIndex] || header.text;
                    const isSubActive = activeSection === header.id;
                    
                    return (
                      <Fade in={expandedSections[themeIndex]} key={`${themeIndex}-${headerIndex}`}>
                        <TOCListItem
                          depth={header.level - 1}
                          onClick={() => handleClick(header.id)}
                          active={isSubActive}
                        >
                          <TOCText active={isSubActive}>
                            {displayText}
                          </TOCText>
                        </TOCListItem>
                      </Fade>
                    );
                  })}
                </List>
              </Collapse>
            </ExpandableSection>
          ) : (
            // Desktop: Traditional TOC with visual hierarchy
            <Box key={themeIndex}>
              <TOCListItem
                onClick={() => handleClick(`section-${themeIndex + 1}`)}
                active={isActive}
              >
                <TOCSectionHeading active={isActive}>
                  {sectionTitle}
                </TOCSectionHeading>
              </TOCListItem>

              {parsedHeaders[themeIndex]?.map((header, headerIndex) => {
                const displayText = themeDescriptions[themeIndex]?.subtopics[headerIndex] || header.text;
                const isSubActive = activeSection === header.id;

                return (
                  <TOCListItem
                    key={`${themeIndex}-${headerIndex}`}
                    depth={header.level - 1}
                    onClick={() => handleClick(header.id)}
                    active={isSubActive}
                  >
                    <TOCText active={isSubActive}>
                      {displayText}
                    </TOCText>
                  </TOCListItem>
                );
              })}
            </Box>
          );
        })}
      </List>
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          {/* Floating button positioned at bottom for easy thumb access */}
          <Tooltip title="View Table of Contents" arrow placement="left">
            <FloatingButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              aria-label="Open table of contents"
            >
              <MenuIcon />
            </FloatingButton>
          </Tooltip>

          {/* Full-screen drawer on small mobile, right side drawer on larger devices */}
          <Drawer
            anchor={isSmallMobile ? "bottom" : "right"}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: isSmallMobile ? {
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
                maxHeight: '80vh',
              } : {}
            }}
          >
            <DrawerContent>
              <Box
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mb: 2 
                }}
              >
                <TOCTitle>Contents</TOCTitle>
                <IconButton 
                  onClick={() => setDrawerOpen(false)}
                  sx={{ padding: '12px' }} // Increased touch target
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              {renderTOCContent()}
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <TOCContainer ref={tocRef}>
          <TOCTitle>Contents</TOCTitle>
          {renderTOCContent()}
        </TOCContainer>
      )}
    </>
  );
}
