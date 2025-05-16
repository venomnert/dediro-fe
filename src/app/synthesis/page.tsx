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

// Styles
const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1440px',
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 6),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(0, 8),
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
  [theme.breakpoints.up('lg')]: {
    width: '280px',
    flexShrink: 0,
    position: 'sticky',
    top: '100px',
    maxHeight: 'calc(100vh - 120px)',
    overflowY: 'auto',
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
  fontSize: '2.5rem',
  fontWeight: 400,
  lineHeight: 1.2,
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
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
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    minWidth: 'auto',
    padding: theme.spacing(1, 2),
    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
  },
}));

const FloatingActionButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  boxShadow: theme.shadows[4],
  zIndex: 1000,
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease',
  '&.visible': {
    opacity: 1,
    visibility: 'visible',
  },
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
  '& .MuiIconButton-root': {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
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

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
      // Fallback for browsers that don't support Web Share API
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SynthesisHeader />
      
      <StyledContainer component="main" maxWidth={false}>
        {/* Article header */}
        <ArticleHeader>
          <PageTitle variant="h1" tabIndex={0}>
  {SYNTHESIS_STRUCTURE_MINI.introduction}
</PageTitle>
<Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 400, mb: 1 }}>
  "Knowledge, synthesized for you."
</Typography> {/* Tagline for clarity and personality */}
          
          <RedirectText>
            <Typography variant="body2" component="div">
              From Dediro, the free knowledge platform
            </Typography>
            <Typography variant="body2" component="div" sx={{ mt: 0.5 }}>
              (Redirected from{' '}
              <Box component="a" href="#" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Previous Synthesis
              </Box>)
            </Typography>
          </RedirectText>
          
          <ArticleInfo variant="body2" component="div">
            This article is about the synthesis. For other uses, see{' '}
            <Box component="a" href="#" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Related Synthesis (disambiguation)
            </Box>.
          </ArticleInfo>
        </ArticleHeader>

        {/* Action buttons */}
        <ActionButtons>
  <Tooltip title="Save this synthesis for later!" arrow>
    <IconButton aria-label="Save for later" tabIndex={0}>
      <BookmarkBorderIcon />
    </IconButton>
  </Tooltip>
  <Tooltip title="Share this page" arrow>
    <IconButton aria-label="Share" onClick={handleShare} tabIndex={0}>
      <ShareIcon />
    </IconButton>
  </Tooltip>
</ActionButtons>

        {/* Navigation tabs */}
        <Paper elevation={0} sx={{ mb: 4, borderBottom: 1, borderColor: 'divider', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(2px)' }}>
  <StyledTabs
    value={tabValue}
    onChange={handleTabChange}
    aria-label="synthesis navigation tabs"
    variant="scrollable"
    scrollButtons="auto"
    TabIndicatorProps={{ style: { transition: 'all .3s cubic-bezier(.4,2,.6,1)' } }}
  >
    <Tab label="Article" aria-label="View article" />
    <Tab label="Talk" aria-label="View talk" />
    <Tab label="Read" aria-label="Read mode" />
    <Tab label="Edit" aria-label="Edit mode" />
    <Tab label="View history" aria-label="View history" />
    <Tab label="Tools" aria-label="View tools" />
  </StyledTabs>
</Paper>

        <ArticleContainer>
          {/* Left sidebar with table of contents */}
          {!isMobile && (
            <SidebarContainer aria-label="Table of Contents">
  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: 'primary.main', letterSpacing: 0.5 }}>
    Contents
  </Typography>
  <TableOfContents themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes} />
</SidebarContainer>
          )}

          {/* Main content area */}
          <MainContentContainer ref={mainContentRef}>
            <MainContent
              title={SYNTHESIS_STRUCTURE_MINI.introduction}
              image={SYNTHESIS_DATA.image}
            />
            
            <MainContentInfo
              date={SYNTHESIS_DATA.date}
              summary={SYNTHESIS_STRUCTURE_MINI.conclusion}
            />
            
            <ExpertsHighlights experts={SYNTHESIS_DATA.experts} />
            
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 4 }}>
              {SYNTHESIS_STRUCTURE_MINI.synthesis}
            </Typography>
            
            <ThemesSection
              themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes}
              experts={SYNTHESIS_DATA.experts}
            />
            
            <WeeklyUpdates />
            
            <Divider sx={{ my: 6, borderColor: 'divider' }} />
            
            <SubscribeToNewsletter synthesisSlug={SYNTHESIS_DATA.slug} />
            
            <RelatedContent relatedContent={SYNTHESIS_DATA.relatedContent} />
          </MainContentContainer>
        </ArticleContainer>
      </StyledContainer>
      
      {/* Back to top button */}
      <FloatingActionButton 
        onClick={scrollToTop}
        className={isScrolled ? 'visible' : ''}
        aria-label="Back to top"
      >
        <ArrowUpwardIcon />
      </FloatingActionButton>
      
      <Footer />
    </>
  );
}
