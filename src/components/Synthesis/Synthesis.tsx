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

function Synthesis() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
