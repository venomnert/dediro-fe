'use client';

import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
} from '@mui/material';
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
import SubscribeToNewsletter from '@/components/SynthesisPageComponents/SubscribeToNewsletter/SubscribeToNewsletter';
import SynthesisHeader from '@/components/Header/SynthesisHeader';
import TableOfContents from '@/components/SynthesisPageComponents/TableOfContents/TableOfContents';
import ThemesSection from '@/components/SynthesisPageComponents/ThemesSection/ThemesSection';
import ContinuedReading from '@/components/SynthesisPageComponents/ContinuedReading/ContinuedReading';

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

const MainContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export default function Synthesis() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [isScrolled, setIsScrolled] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

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
    avatar: '/images/default-avatar.png',
  };

  return (
    <>
      <SynthesisHeader />

      <MainContainer>
        <Box sx={styles.articleContainer}>
          {!isMobile && (
            <Box  aria-label="Table of Contents">
              <TableOfContents
                themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes.map(
                  (theme, index) => {
                    // Extract title from content if it's a string and contains an h2 tag
                    let extractedTitle = `Theme ${index + 1}`;
                    if (typeof theme.content === 'string') {
                      const h2Match = theme.content.match(/<h2>(.*?)<\/h2>/i);
                      if (h2Match && h2Match[1]) {
                        extractedTitle = h2Match[1].trim();
                      }
                    }

                    return {
                      id: index,
                      title: extractedTitle,
                      description:
                        typeof theme.content === 'string'
                          ? theme.content.substring(0, 100) + '...'
                          : 'Theme description',
                      content: Array.isArray(theme.content)
                        ? theme.content
                        : [
                            {
                              id: index,
                              subtitle: `Subtopic ${index + 1}`,
                              description:
                                typeof theme.content === 'string'
                                  ? theme.content
                                  : 'Content description',
                            },
                          ],
                    };
                  }
                )}
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
              summary={
                SYNTHESIS_STRUCTURE_MINI.synthesis_themes[0]?.content || ''
              }
            />

            <ExpertsHighlights />

            <Typography
              variant="body1"
              paragraph
              sx={{
                lineHeight: 1.8,
                mb: 4,
                fontSize: '1.05rem',
                color: 'text.primary',
                letterSpacing: '0.015em',
              }}
              component="div"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    SYNTHESIS_STRUCTURE_MINI.synthesis_themes[0]?.content || '',
                }}
              />
            </Typography>

            <ThemesSection
              themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes.map(
                (theme, index) => {
                  // Extract title from content if it's a string and contains an h2 tag
                  let extractedTitle = `Theme ${index + 1}`;
                  if (typeof theme.content === 'string') {
                    const h2Match = theme.content.match(/<h2>(.*?)<\/h2>/i);
                    if (h2Match && h2Match[1]) {
                      extractedTitle = h2Match[1].trim();
                    }
                  }

                  return {
                    id: index,
                    title: extractedTitle,
                    description:
                      typeof theme.content === 'string'
                        ? theme.content.substring(0, 100) + '...'
                        : 'Theme description',
                    content: Array.isArray(theme.content)
                      ? theme.content.map((item, itemIndex) => ({
                          id: itemIndex,
                          subtitle:
                            item.subtitle || `Subtopic ${itemIndex + 1}`,
                          description:
                            item.description ||
                            item.content ||
                            'Content description',
                          quote: item.quote
                            ? {
                                text: item.quote.text,
                                expertName: item.quote.expert_name,
                                profession: 'Expert',
                                image: '',
                              }
                            : undefined,
                        }))
                      : [
                          {
                            id: index,
                            subtitle: `Subtopic ${index + 1}`,
                            description:
                              typeof theme.content === 'string'
                                ? theme.content
                                : 'Content description',
                            quote: theme.quote
                              ? {
                                  text: theme.quote.text,
                                  expertName: theme.quote.expert_name,
                                  profession: 'Expert',
                                  image: '',
                                }
                              : undefined,
                          },
                        ],
                    quote: theme.quote
                      ? {
                          text: theme.quote.text,
                          expertName: theme.quote.expert_name,
                          profession: 'Expert',
                          image: '',
                        }
                      : undefined,
                  };
                }
              )}
              experts={SYNTHESIS_DATA.experts}
            />

            <Divider sx={{ my: 6 }} />

            <SubscribeToNewsletter synthesisSlug={SYNTHESIS_DATA.slug} />

            <ContinuedReading relatedContent={SYNTHESIS_DATA.relatedContent} />
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
