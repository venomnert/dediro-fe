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
  margin: '0 auto',
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

const MainContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
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

  const defaultAuthor = {
    name: 'Anonymous',
    role: 'Contributor',
    avatar: '/images/default-avatar.png'
  };

  return (
    <>
      <SynthesisHeader />
      
      <MainContainer>
        <Box sx={styles.articleHeader}>
          <Typography variant="h1" sx={styles.pageTitle} tabIndex={0}>
            {SYNTHESIS_STRUCTURE_MINI.introduction}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 400, mb: 1 }}>
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
          
          <Box sx={styles.articleInfo}>
            <Typography variant="body2">
              This article is about the synthesis. For other uses, see{' '}
              <Box component="a" href="#" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Related Synthesis (disambiguation)
              </Box>.
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

        <Paper 
          elevation={1} 
          sx={styles.tabsContainer}
        >
          <Tabs
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
          </Tabs>
        </Paper>

        <Box sx={styles.articleContainer}>
          {!isMobile && (
            <Box sx={styles.sidebarContainer} aria-label="Table of Contents">
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
            </Box>
          )}

          <Box sx={styles.mainContentContainer} ref={mainContentRef}>
            <MainContent
              title={SYNTHESIS_STRUCTURE_MINI.introduction}
              image={SYNTHESIS_DATA.image}
              author={defaultAuthor}
              publishDate={new Date().toISOString()}
              readingTime={5}
            />
            
            <MainContentInfo
              date={SYNTHESIS_DATA.date}
              summary={SYNTHESIS_STRUCTURE_MINI.synthesis_themes[0]?.content || ''}
            />
            
            <ExpertsHighlights experts={SYNTHESIS_DATA.experts} />
            
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ lineHeight: 1.8, mb: 4, fontSize: '1.05rem', color: 'text.primary', letterSpacing: '0.015em' }}
              component="div"
            >
              <div dangerouslySetInnerHTML={{ __html: SYNTHESIS_STRUCTURE_MINI.synthesis_themes[0]?.content || '' }} />
            </Typography>
            
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
      </MainContainer>
      
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