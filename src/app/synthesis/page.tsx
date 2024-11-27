import Footer from '@/components/Footer/Footer';
import SynthesisHeader from '@/components/Header/SynthesisHeader';
import SynthesisExpertsHighlights from '@/components/SynthesisExpertsHighlights';
import SynthesisFilters from '@/components/SynthesisFilters';
import SynthesisMainContent from '@/components/SynthesisMainContent';
import { Container } from '@mui/material';
import React from 'react';

export default function Synthesis() {
  return (
    <>
      <SynthesisHeader />
      <Container component="main">
        <SynthesisFilters />
        <SynthesisMainContent />
        <SynthesisExpertsHighlights />
      </Container>
      <Footer />
    </>
  );
}
