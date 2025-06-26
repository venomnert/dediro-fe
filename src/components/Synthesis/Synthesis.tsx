'use client';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import {
  backgroundOnly,
  exploreMoreBtn,
  mainContainer,
  selectedTabStyle,
  subtitle,
  tabsContainer,
  tabStyle,
  title,
} from './Synthesis.styles';
import React, { useState } from 'react';
import SynthesisList from './SynthesisList';
import { topics } from './utils';
import { SynthesisContent } from '@/types';
import useContentful from '@/hooks/useContentful';
import { fetchContentTypes } from '@/lib/contentfulApi';

function Synthesis() {
  const [tabValue, setTabValue] = useState(0);
  const { data, loading, error } = useContentful<SynthesisContent>('completeSynthesis', true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  console.log('loading:', loading);
  console.log('error:', error);
  console.log('content data:', data);

  // Debug function to check available content types (proper client-side)
  const debugContentTypes = async () => {
    console.log('=== DEBUGGING CONTENT TYPES (Browser Console) ===');
    
    try {
      const result = await fetchContentTypes();
      console.log('API Response:', result);
      console.log('All content types:', result.allContentTypes);
      console.log('Content types with entries:', result.contentTypesWithEntries);
      console.log('Success:', result.success);
      if (result.message) {
        console.log('Message:', result.message);
      }
    } catch (error) {
      console.error('Error fetching content types:', error);
    }
    
    console.log('=== END DEBUG ===');
  };

  // Uncomment this line to run the debug function
  debugContentTypes();


  return (
    <Box sx={backgroundOnly}>
      <Box sx={mainContainer}>
        <Typography sx={title}>
          Uncover the Stories That Shape Our World
        </Typography>
        <Typography sx={subtitle}>
          From history&apos;s unsung heroes to today&apos;s critical issues,
          dive deep into expertly curated topics that challenge
          <br />
          the mainstream narrative and expand your understanding.
        </Typography>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable category tabs"
          sx={tabsContainer}
          TabIndicatorProps={{
            style: {
              backgroundColor: 'var(--white)',
            },
          }}
        >
          {topics.map((c, i) => (
            <Tab
              label={c.title}
              key={c.title}
              sx={tabValue === i ? selectedTabStyle : tabStyle}
            />
          ))}
        </Tabs>
        <SynthesisList selectedCategory={topics[tabValue]} />
        <Button sx={exploreMoreBtn}>Explore more</Button>
      </Box>
    </Box>
  );
}

export default Synthesis;
