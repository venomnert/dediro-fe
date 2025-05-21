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
import * as styles from './page.styles';

const FloatingActionButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
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
      
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.articleHeader}>
          <Typography variant="h1" sx={styles.pageTitle}>
            {SYNTHESIS_STRUCTURE_MINI.introduction}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2 }}>
            "Knowledge, synthesized for you."
          </Typography>
          
          <Box sx={styles.redirectText}>
            <Typography variant="body2">
              From Dediro, the free knowledge platform
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              (Redirected from{' '}
              <Box component="a" href="#" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Previous Synthesis
              </Box>)
            </Typography>
          </Box>
        </Box>

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

        <Paper elevation={0} sx={styles.tabsContainer}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="synthesis navigation tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Article" />
            <Tab label="Talk" />
            <Tab label="Read" />
            <Tab label="Edit" />
            <Tab label="View history" />
            <Tab label="Tools" />
          </Tabs>
        </Paper>

        <Box sx={styles.articleContainer}>
          {!isMobile && (
            <Box sx={styles.sidebarContainer}>
              <TableOfContents themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes} />
            </Box>
          )}

          <Box sx={styles.mainContentContainer} ref={mainContentRef}>
            <MainContent
              title={SYNTHESIS_STRUCTURE_MINI.introduction}
              image={SYNTHESIS_DATA.image}
            />
            
            <MainContentInfo
              date={SYNTHESIS_DATA.date}
              summary={SYNTHESIS_STRUCTURE_MINI.conclusion}
            />
            
            <ExpertsHighlights experts={SYNTHESIS_DATA.experts} />
            
            <ThemesSection
              themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes}
              experts={SYNTHESIS_DATA.experts}
            />
            
            <WeeklyUpdates />
            
            <Divider sx={{ my: 6 }} />
            
            <SubscribeToNewsletter synthesisSlug={SYNTHESIS_DATA.slug} />
            
            <RelatedContent relatedContent={SYNTHESIS_DATA.relatedContent} />
          </Box>
        </Box>
      </Container>
      
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