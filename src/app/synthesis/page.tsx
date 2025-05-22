'use client';

import { Box, Container, Typography, Tabs, Tab, Divider, Paper, useTheme, useMediaQuery, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// Components
import ExpertsHighlights from '@/components/SynthesisPageComponents/ExpertsHighlights/ExpertsHighlights';
import Footer from '@/components/Footer/Footer';
import MainContent from '@/components/SynthesisPageComponents/SynthesisMainContent/MainContent';
import MainContentInfo from '@/components/SynthesisPageComponents/SynthesisMainContent/MainContentInfo';
import RelatedContent from '@/components/SynthesisPageComponents/RelatedContent/RelatedContent';
import SubscribeToNewsletter from '@/components/SynthesisPageComponents/SubscribeToNewsletter/SubscribeToNewsletter';
import SynthesisHeader from '@/components/Header/SynthesisHeader';
import TableOfContents from '@/components/SynthesisPageComponents/TableOfContents/TableOfContents';
import ThemesSection from '@/components/SynthesisPageComponents/ThemesSection/ThemesSection';
import WeeklyUpdates from '@/components/SynthesisPageComponents/WeeklyUpdates/WeeklyUpdates';

// Data
import SYNTHESIS_DATA from '../../constants/SYNTHESIS_DATA';
import SYNTHESIS_STRUCTURE_MINI from '../../constants/SYNTHESIS_STRUCTURE_MINI';
import * as styles from './page.styles';

// Styles
const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1440px',
  padding: theme.spacing(2, 3),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 6),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4, 8),
  },
}));

const ArticleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    gap: theme.spacing(4),
  },
}));

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  [theme.breakpoints.up('lg')]: {
    width: '280px',
    flexShrink: 0,
    position: 'sticky',
    top: '100px',
    maxHeight: 'calc(100vh - 120px)',
    overflowY: 'auto',
    marginBottom: 0,
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[400],
      borderRadius: '4px',
    },
  },
}));

const MainContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  maxWidth: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px',
  },
}));

const ArticleHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.75rem',
  fontWeight: 500,
  lineHeight: 1.1,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '60px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.2rem',
  },
}));

const RedirectText = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  marginBottom: theme.spacing(1),
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const ArticleInfo = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
  marginTop: theme.spacing(2),
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: '3px',
    borderRadius: '3px 3px 0 0',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    minWidth: 'auto',
    padding: theme.spacing(1.5, 2.5),
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.light,
    },
  },
}));

const FloatingActionButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-4px)',
  },
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  zIndex: 1000,
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  '&.visible': {
    opacity: 1,
    visibility: 'visible',
  },
  '&:focus': {
    outline: `2px solid ${theme.palette.primary.light}`,
    outlineOffset: '2px',
  },
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  position: 'sticky',
  top: theme.spacing(2),
  zIndex: 10,
  width: 'fit-content',
  '& .MuiIconButton-root': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.grey[100],
    transition: 'all 0.2s ease',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      transform: 'translateY(-2px)',
    },
  },
}));

export default function Synthesis() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [tabValue, setTabValue] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: SYNTHESIS_STRUCTURE_MINI.introduction,
          text: 'Check out this synthesis on Dediro',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SynthesisHeader />
      
      <div>
        {/* Article header */}
        <ArticleHeader>
          <PageTitle variant="h1" tabIndex={0}>
  {SYNTHESIS_STRUCTURE_MINI.introduction}
</PageTitle>
<Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 400, mb: 1 }}>
  "Knowledge, synthesized for you."
</Typography> {/* Tagline for clarity and personality */}
          
          <RedirectText>
            <Typography variant="body2">
              From Dediro, the free knowledge platform
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              (Redirected from{' '}
              <Box component="a" href="#" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Previous Synthesis
              </Box>)
            </Typography>
          </RedirectText>
          
          <ArticleInfo variant="body2">
            This article is about the synthesis. For other uses, see{' '}
            <Box component="a" href="#" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Related Synthesis (disambiguation)
            </Box>.
          </ArticleInfo>
        </ArticleHeader>

        <ActionButtons>
          <Tooltip title="Save this synthesis for later" arrow>
            <IconButton aria-label="Save for later">
              <BookmarkBorderIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share this page" arrow>
            <IconButton aria-label="Share" onClick={handleShare}>
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </ActionButtons>

        {/* Navigation tabs */}
        <Paper 
          elevation={1} 
          sx={{ 
            mb: 4, 
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.98)', 
            backdropFilter: 'blur(8px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}
        >
          <StyledTabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="synthesis navigation tabs"
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{ style: { transition: 'all .3s cubic-bezier(.4,2,.6,1)' } }}
          >
            <Tab icon={<Box component="span" sx={{ fontSize: '1.2rem', mr: 1 }}>📄</Box>} label="Article" aria-label="View article" />
            <Tab icon={<Box component="span" sx={{ fontSize: '1.2rem', mr: 1 }}>💬</Box>} label="Talk" aria-label="View talk" />
            <Tab icon={<Box component="span" sx={{ fontSize: '1.2rem', mr: 1 }}>📖</Box>} label="Read" aria-label="Read mode" />
            <Tab icon={<Box component="span" sx={{ fontSize: '1.2rem', mr: 1 }}>✏️</Box>} label="Edit" aria-label="Edit mode" />
            <Tab icon={<Box component="span" sx={{ fontSize: '1.2rem', mr: 1 }}>🕒</Box>} label="History" aria-label="View history" />
            <Tab icon={<Box component="span" sx={{ fontSize: '1.2rem', mr: 1 }}>🔧</Box>} label="Tools" aria-label="View tools" />
          </StyledTabs>
        </Paper>

        <Box sx={styles.articleContainer}>
          {!isMobile && (
            <SidebarContainer aria-label="Table of Contents">
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'primary.main', letterSpacing: 0.5 }}>
                Contents
              </Typography>
              <TableOfContents 
                themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes.map((theme, index) => ({
                  id: index,
                  title: `Theme ${index + 1}`,
                  description: theme.content.substring(0, 100) + '...',
                  content: [{
                    id: index,
                    subtitle: `Subtopic ${index + 1}`,
                    description: theme.content
                  }]
                }))}
              />
            </SidebarContainer>
          )}

          <Box sx={styles.mainContentContainer} ref={mainContentRef}>
            <MainContent
              title={SYNTHESIS_STRUCTURE_MINI.introduction}
              image={SYNTHESIS_DATA.image}
            />
            
            <MainContentInfo
              date={SYNTHESIS_DATA.date}
              summary={SYNTHESIS_STRUCTURE_MINI.synthesis_themes[0]?.content || ''}
            />
            
            <ExpertsHighlights experts={SYNTHESIS_DATA.experts} />
            
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 4, fontSize: '1.05rem', color: 'text.primary', letterSpacing: '0.015em' }}>
              {SYNTHESIS_STRUCTURE_MINI.synthesis_themes[0]?.content || ''}
            </Typography>
            
            {/* Map data to match IThemes interface */}
            <ThemesSection
              themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes.map((theme, index) => ({
                id: index,
                title: `Theme ${index + 1}`,
                description: theme.content.substring(0, 100) + '...',
                content: [{
                  id: index,
                  subtitle: `Subtopic ${index + 1}`,
                  description: theme.content,
                  quote: theme.quote ? {
                    text: theme.quote.text,
                    expertName: theme.quote.expert_name,
                    profession: 'Expert',
                    image: ''
                  } : undefined
                }],
                quote: theme.quote ? {
                  text: theme.quote.text,
                  expertName: theme.quote.expert_name,
                  profession: 'Expert',
                  image: ''
                } : undefined
              }))}
              experts={SYNTHESIS_DATA.experts}
            />
            
            <WeeklyUpdates />
            
            <Divider sx={{ my: 6 }} />
            
            <SubscribeToNewsletter synthesisSlug={SYNTHESIS_DATA.slug} />
            
            <RelatedContent relatedContent={SYNTHESIS_DATA.relatedContent} />
          </Box>
        </Box>
      </div>
      
      {/* Back to top button */}
      <Tooltip title="Back to top" placement="left" arrow>
        <FloatingActionButton 
          onClick={scrollToTop}
          className={isScrolled ? 'visible' : ''}
          aria-label="Back to top"
          size="large"
        >
          <ArrowUpwardIcon fontSize="medium" />
        </FloatingActionButton>
      </Tooltip>
      
      <Footer />
    </>
  );
}