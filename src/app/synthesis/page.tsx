import { Box, Container } from '@mui/material';
import { container, sectionsContainer, subContainer } from './page.styles';

import ExpertsHighlights from '@/components/SynthesisPageComponents/ExpertsHighlights/ExpertsHighlights';
import Footer from '@/components/Footer/Footer';
import MainContent from '@/components/SynthesisPageComponents/SynthesisMainContent/MainContent';
import MainContentInfo from '@/components/SynthesisPageComponents/SynthesisMainContent/MainContentInfo/MainContentInfo';
import React from 'react';
import RelatedContent from '@/components/SynthesisPageComponents/RelatedContent/RelatedContent';
import SubscribeToNewsletter from '@/components/SynthesisPageComponents/SubscribeToNewsletter/SubscribeToNewsletter';
import SynthesisFilters from '@/components/SynthesisPageComponents/SynthesisFilters/SynthesisFilters';
import SynthesisHeader from '@/components/Header/SynthesisHeader';
import TableOfContents from '@/components/SynthesisPageComponents/TableOfContents/TableOfContents';
import ThemesSection from '@/components/SynthesisPageComponents/ThemesSection/ThemesSection';
import WeeklyUpdates from '@/components/SynthesisPageComponents/WeeklyUpdates/WeeklyUpdates';

const SYNTHESIS_DATA = {
  title: 'How to live a happier life',
  themesSection: [
    {
      title: 'Positive relationships',
      description:
        'The importance of nurturing positive relationships with family, friends, and colleagues to enhance overall happiness.',
      content: [
        {
          subtitle: 'The importance of Family Relationships',
          description:
            'Family relationships are foundational to individual happiness and well-being. The Harvard Study of Adult Development emphasizes that strong family bonds significantly contribute to long-term health and happiness. These relationships provide emotional support, shared experiences, and a sense of belonging. During challenging times, such as the pandemic, the support from family becomes even more crucial. Nurturing these relationships requires effort, patience, and understanding, but the rewards in terms of happiness and life satisfaction are immense.',
        },
        {
          subtitle: 'Friendships and Social Connections',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste similique atque assumenda minima, quidem natus officia ut culpa, architecto ducimus labore nihil nesciunt! Fuga, inventore earum! Consequatur, eius reiciendis.',
        },
        {
          subtitle: 'Marriage and Long-Term Partnerships',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste similique atque assumenda minima, quidem natus officia ut culpa, architecto ducimus labore nihil nesciunt! Fuga, inventore earum! Consequatur, eius reiciendis.',
        },
      ],
    },
    {
      title: 'Physical Health',
      description:
        'The importance of nurturing positive relationships with family, friends, and colleagues to enhance overall happiness.',
      content: [
        {
          subtitle: 'Exercise and Happiness',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste similique atque assumenda minima, quidem natus officia ut culpa, architecto ducimus labore nihil nesciunt! Fuga, inventore earum! Consequatur, eius reiciendis.',
        },
        {
          subtitle: 'Diet and Mental Health',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste similique atque assumenda minima, quidem natus officia ut culpa, architecto ducimus labore nihil nesciunt! Fuga, inventore earum! Consequatur, eius reiciendis.',
        },
        {
          subtitle: 'Sleep and Emotional Well-being',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste similique atque assumenda minima, quidem natus officia ut culpa, architecto ducimus labore nihil nesciunt! Fuga, inventore earum! Consequatur, eius reiciendis.',
        },
      ],
    },
  ],
};

export default function Synthesis() {
  return (
    <>
      <SynthesisHeader />
      <SynthesisFilters />

      <Container component="main" sx={container}>
        <MainContent />
        <Box sx={subContainer}>
          <Box sx={sectionsContainer}>
            <MainContentInfo />
            <ExpertsHighlights />
            <ThemesSection />
            <WeeklyUpdates />
            <SubscribeToNewsletter />
            <RelatedContent />
          </Box>
          <TableOfContents content={SYNTHESIS_DATA.themesSection} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
