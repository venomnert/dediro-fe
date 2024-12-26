import Footer from '@/components/Footer/Footer';
import SynthesisHeader from '@/components/Header/SynthesisHeader';
import WeeklyUpdates from '@/components/SynthesisPageComponents/WeeklyUpdates/WeeklyUpdates';
import ExpertsHighlights from '@/components/SynthesisPageComponents/ExpertsHighlights/ExpertsHighlights';
import SynthesisFilters from '@/components/SynthesisPageComponents/SynthesisFilters/SynthesisFilters';
import SynthesisMainContent from '@/components/SynthesisPageComponents/SynthesisMainContent/SynthesisMainContent';
import { Container } from '@mui/material';
import React from 'react';
import RelatedContent from '@/components/SynthesisPageComponents/RelatedContent/RelatedContent';
import ThemesSection from '@/components/SynthesisPageComponents/ThemesSection/ThemesSection';
import SubscribeToNewsletter from '@/components/SynthesisPageComponents/SubscribeToNewsletter/SubscribeToNewsletter';

export default function Synthesis() {
  return (
    <>
      <SynthesisHeader />
      <SynthesisFilters />

      <Container
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        <SynthesisMainContent />
        <ExpertsHighlights />
        <ThemesSection />
        <WeeklyUpdates />
        <SubscribeToNewsletter />
        <RelatedContent />
      </Container>
      <Footer />
    </>
  );
}
