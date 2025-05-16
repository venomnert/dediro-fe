'use client';

import { Box, Container, Typography, Tabs, Tab, Divider, Paper } from '@mui/material';
import { container, mainContentContainer, sidebarContainer, articleContainer, tabsContainer, pageTitle, articleHeader, redirectText, articleInfo } from './page.styles';

import ExpertsHighlights from '@/components/SynthesisPageComponents/ExpertsHighlights/ExpertsHighlights';
import Footer from '@/components/Footer/Footer';
import MainContent from '@/components/SynthesisPageComponents/SynthesisMainContent/MainContent';
import MainContentInfo from '@/components/SynthesisPageComponents/SynthesisMainContent/MainContentInfo';
import React, { useState } from 'react';
import RelatedContent from '@/components/SynthesisPageComponents/RelatedContent/RelatedContent';
import SYNTHESIS_DATA from '../../constants/SYNTHESIS_DATA';
import SYNTHESIS_STRUCTURE_MINI from '../../constants/SYNTHESIS_STRUCTURE_MINI';
import SubscribeToNewsletter from '@/components/SynthesisPageComponents/SubscribeToNewsletter/SubscribeToNewsletter';
import SynthesisFilters from '@/components/SynthesisPageComponents/SynthesisFilters/SynthesisFilters';
import SynthesisHeader from '@/components/Header/SynthesisHeader';
import TableOfContents from '@/components/SynthesisPageComponents/TableOfContents/TableOfContents';
import ThemesSection from '@/components/SynthesisPageComponents/ThemesSection/ThemesSection';
import WeeklyUpdates from '@/components/SynthesisPageComponents/WeeklyUpdates/WeeklyUpdates';
import Image from 'next/image';

export default function Synthesis() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <SynthesisHeader />
      
      <Container component="main" sx={container}>
        {/* Wikipedia-style header */}
        <Box sx={articleHeader}>
          <Typography variant="h1" sx={pageTitle}>
            {SYNTHESIS_STRUCTURE_MINI.introduction}
          </Typography>
          <Box sx={redirectText}>
            <Typography variant="body2" color="text.secondary">
              From Dediro, the free knowledge platform
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              (Redirected from <Box component="span" sx={{ color: '#0645ad', textDecoration: 'underline', cursor: 'pointer' }}>Previous Synthesis</Box>)
            </Typography>
          </Box>
          <Typography variant="body2" sx={articleInfo}>
            This article is about the synthesis. For other uses, see <Box component="span" sx={{ color: '#0645ad', textDecoration: 'underline', cursor: 'pointer' }}>Related Synthesis (disambiguation)</Box>.
          </Typography>
        </Box>

        {/* Tabs like Wikipedia */}
        <Paper elevation={0} sx={tabsContainer}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="synthesis navigation tabs">
            <Tab label="Article" />
            <Tab label="Talk" />
            <Tab label="Read" />
            <Tab label="Edit" />
            <Tab label="View history" />
            <Tab label="Tools" />
          </Tabs>
        </Paper>

        <Box sx={articleContainer}>
          {/* Left sidebar with table of contents */}
          <Box sx={sidebarContainer}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Contents</Typography>
            <TableOfContents themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes} />
          </Box>

          {/* Main content area */}
          <Box sx={mainContentContainer}>
            <MainContent
              title={SYNTHESIS_STRUCTURE_MINI.introduction}
              image={SYNTHESIS_DATA.image}
            />
            <MainContentInfo
              date={SYNTHESIS_DATA.date}
              summary={SYNTHESIS_STRUCTURE_MINI.conclusion}
            />
            <ExpertsHighlights experts={SYNTHESIS_DATA.experts} />
            <Typography variant="body1" paragraph>
              {SYNTHESIS_STRUCTURE_MINI.synthesis}
            </Typography>
            <ThemesSection
              themesSection={SYNTHESIS_STRUCTURE_MINI.synthesis_themes}
              experts={SYNTHESIS_DATA.experts}
            />
            <WeeklyUpdates />
            <Divider sx={{ my: 4 }} />
            <SubscribeToNewsletter synthesisSlug={SYNTHESIS_DATA.slug} />
            <RelatedContent relatedContent={SYNTHESIS_DATA.relatedContent} />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
