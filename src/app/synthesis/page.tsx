import { Box, Container } from '@mui/material';
import { container, sectionsContainer, subContainer } from './page.styles';

import ExpertsHighlights from '@/components/SynthesisPageComponents/ExpertsHighlights/ExpertsHighlights';
import Footer from '@/components/Footer/Footer';
import MainContent from '@/components/SynthesisPageComponents/SynthesisMainContent/MainContent';
import MainContentInfo from '@/components/SynthesisPageComponents/SynthesisMainContent/MainContentInfo';
import React from 'react';
import RelatedContent from '@/components/SynthesisPageComponents/RelatedContent/RelatedContent';
import SYNTHESIS_DATA from '../../constants/SYNTHESIS_DATA';
import SubscribeToNewsletter from '@/components/SynthesisPageComponents/SubscribeToNewsletter/SubscribeToNewsletter';
import SynthesisFilters from '@/components/SynthesisPageComponents/SynthesisFilters/SynthesisFilters';
import SynthesisHeader from '@/components/Header/SynthesisHeader';
import TableOfContents from '@/components/SynthesisPageComponents/TableOfContents/TableOfContents';
import ThemesSection from '@/components/SynthesisPageComponents/ThemesSection/ThemesSection';
import WeeklyUpdates from '@/components/SynthesisPageComponents/WeeklyUpdates/WeeklyUpdates';

export default function Synthesis() {
  return (
    <>
      <SynthesisHeader />
      <SynthesisFilters />

      <Container component="main" sx={container}>
        <MainContent
          title={SYNTHESIS_DATA.title}
          image={SYNTHESIS_DATA.image}
        />
        <Box sx={subContainer}>
          <Box sx={sectionsContainer}>
            <MainContentInfo
              date={SYNTHESIS_DATA.date}
              summary={SYNTHESIS_DATA.summary}
            />
            <ExpertsHighlights experts={SYNTHESIS_DATA.experts} />
            <ThemesSection
              themesSection={SYNTHESIS_DATA.themesSection}
              experts={SYNTHESIS_DATA.experts}
            />
            <WeeklyUpdates />
            <SubscribeToNewsletter synthesisSlug={SYNTHESIS_DATA.slug} />
            <RelatedContent relatedContent={SYNTHESIS_DATA.relatedContent} />
          </Box>
          <TableOfContents themesSection={SYNTHESIS_DATA.themesSection} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
