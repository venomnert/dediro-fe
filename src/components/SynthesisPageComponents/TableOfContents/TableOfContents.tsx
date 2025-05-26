import { Box, Typography, List, ListItemButton, IconButton, Drawer, useTheme, useMediaQuery } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React, { useEffect, useState, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface ParsedHeader {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  themesSection: {
    title: string;
    content: string | {
      subtitle: string;
      description: string;
    }[];
  }[];
}

const TOCContainer = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: '80px',
  maxHeight: 'calc(100vh - 100px)',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
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
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.default,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.grey[400],
    borderRadius: '3px',
    '&:hover': {
      background: theme.palette.grey[600],
    },
  },
}));

const TOCTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const TOCListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'depth' && prop !== 'active',
})<{ depth?: number; active?: boolean }>(({ theme, depth = 0, active = false }) => ({
  padding: theme.spacing(0.5, 1, 0.5, 1 + depth * 2),
  borderLeft: `2px solid ${active ? theme.palette.primary.main : 'transparent'}`,
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
  },
  transition: theme.transitions.create(['background-color', 'border-left'], {
    duration: theme.transitions.duration.shorter,
  }),
}));

const TOCText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active = false }) => ({
  fontSize: '0.9rem',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: active ? 600 : 400,
}));

const FloatingButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  boxShadow: theme.shadows[4],
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 280,
  padding: theme.spacing(2),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}));

const themeDescriptions = [
  {
    title: "Theme 1: Consequences of the Israel-Gaza Conflict",
    subtopics: [
      "Humanitarian Crisis and Civilian Impact",
      "Regional Stability and International Response",
      "Economic and Infrastructure Damage"
    ]
  },
  {
    title: "Theme 2: Global Economic Implications",
    subtopics: [
      "Market Volatility and Oil Prices",
      "Trade Route Disruptions",
      "International Aid and Support"
    ]
  },
  {
    title: "Theme 3: Diplomatic Developments",
    subtopics: [
      "Peace Negotiation Efforts",
      "International Mediation",
      "Regional Alliance Shifts"
    ]
  },
  {
    title: "Theme 4: Humanitarian Response",
    subtopics: [
      "Aid Distribution Challenges",
      "Medical Emergency Management",
      "Civilian Evacuation Efforts"
    ]
  }
];

export default function TableOfContents({ themesSection }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [parsedHeaders, setParsedHeaders] = useState<{[key: number]: ParsedHeader[]}>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const allHeaders: {[key: number]: ParsedHeader[]} = {};
    
    themesSection.forEach((theme, index) => {
      if (typeof theme.content === 'string') {
        const headerRegex = /^(#{1,6})\s+(.+?)\s*$/gm;
        const headers: ParsedHeader[] = [];
        let match;

        while ((match = headerRegex.exec(theme.content)) !== null) {
          const level = match[1].length;
          const text = match[2].trim();
          const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
          headers.push({ level, text, id });
        }
        
        allHeaders[index] = headers;
      } else {
        allHeaders[index] = theme.content.map(item => ({
          level: 2,
          text: item.subtitle,
          id: item.subtitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
        }));
      }
    });
    
    setParsedHeaders(allHeaders);
  }, [themesSection]);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
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
    sections.forEach(section => {
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

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) {
        setDrawerOpen(false);
      }
    }
  };

  const renderTOCContent = () => (
    <>
      <List disablePadding>
        {themesSection.map((theme, themeIndex) => (
          <Box key={themeIndex}>
            <TOCListItem
              onClick={() => handleClick(`section-${themeIndex + 1}`)}
              active={activeSection === `section-${themeIndex + 1}`}
            >
              <TOCText active={activeSection === `section-${themeIndex + 1}`}>
                {themeDescriptions[themeIndex]?.title || `Theme ${themeIndex + 1}`}
              </TOCText>
            </TOCListItem>

            {parsedHeaders[themeIndex]?.map((header, headerIndex) => {
              const displayText = themeDescriptions[themeIndex]?.subtopics[headerIndex] || header.text;
              
              return (
                <TOCListItem
                  key={`${themeIndex}-${headerIndex}`}
                  depth={header.level - 1}
                  onClick={() => handleClick(header.id)}
                  active={activeSection === header.id}
                >
                  <TOCText active={activeSection === header.id}>
                    {displayText}
                  </TOCText>
                </TOCListItem>
              );
            })}
          </Box>
        ))}
      </List>
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          <FloatingButton
            onClick={() => setDrawerOpen(true)}
            size="large"
            aria-label="Open table of contents"
          >
            <MenuIcon />
          </FloatingButton>
          
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <DrawerContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <TOCTitle>Contents</TOCTitle>
                <IconButton onClick={() => setDrawerOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              {renderTOCContent()}
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <TOCContainer ref={tocRef}>
          {renderTOCContent()}
        </TOCContainer>
      )}
    </>
  );
}