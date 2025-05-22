import { Box, Typography, List, ListItemButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React, { useEffect, useState, useRef } from 'react';

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

const ReadingProgress = styled(Box)(({ theme }) => ({
  height: '4px',
  backgroundColor: theme.palette.grey[200],
  borderRadius: '2px',
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 'inherit',
    transition: 'width 0.3s ease',
  },
}));

export default function TableOfContents({ themesSection }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [parsedHeaders, setParsedHeaders] = useState<{[key: number]: ParsedHeader[]}>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLDivElement>(null);

  // Parse headers from content
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

  // Set up intersection observer for sections
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          
          // Update reading progress
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrolled = window.scrollY;
          const progress = (scrolled / (documentHeight - windowHeight)) * 100;
          setReadingProgress(Math.min(progress, 100));
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0.1,
    });

    // Observe all section elements
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
    }
  };

  return (
    <TOCContainer ref={tocRef}>
      <TOCTitle>Contents</TOCTitle>
      <ReadingProgress>
        <Box
          sx={{
            width: `${readingProgress}%`,
            height: '100%',
            backgroundColor: 'primary.main',
            borderRadius: 'inherit',
            transition: 'width 0.3s ease',
          }}
        />
      </ReadingProgress>
      
      <List disablePadding>
        {themesSection.map((theme, themeIndex) => (
          <Box key={themeIndex}>
            <TOCListItem
              onClick={() => handleClick(`section-${themeIndex + 1}`)}
              active={activeSection === `section-${themeIndex + 1}`}
            >
              <TOCText active={activeSection === `section-${themeIndex + 1}`}>
                {themeIndex + 1}. {theme.title || `Theme ${themeIndex + 1}`}
              </TOCText>
            </TOCListItem>

            {parsedHeaders[themeIndex]?.map((header, headerIndex) => (
              <TOCListItem
                key={`${themeIndex}-${headerIndex}`}
                depth={header.level - 1}
                onClick={() => handleClick(header.id)}
                active={activeSection === header.id}
              >
                <TOCText active={activeSection === header.id}>
                  {header.text}
                </TOCText>
              </TOCListItem>
            ))}
          </Box>
        ))}
      </List>
    </TOCContainer>
  );
}