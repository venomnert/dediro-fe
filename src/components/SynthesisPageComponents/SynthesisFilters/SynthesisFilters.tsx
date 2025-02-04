'use client';

import { Box, Button, useMediaQuery } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { btnStylesMobile, container } from './SynthesisFilters.styles';

import FILTERS_DATA from '../../../constants/FILTERS_DATA';

function SynthesisFilters() {
  const [activeFilter, setActiveFilter] = useState('for-you');
  const isMobile = useMediaQuery('(max-width: 900px)');

  const handleButtonClick = useCallback((name: string) => {
    setActiveFilter(name);
  }, []);

  return (
    <Box sx={container}>
      {FILTERS_DATA.map(({ name, label, icon }) => (
        <Button
          key={name}
          variant={activeFilter === name ? 'contained' : 'text'}
          onClick={() => handleButtonClick(name)}
          startIcon={!isMobile ? icon : null}
          sx={{
            ...btnStylesMobile,
            ...(activeFilter === name && { color: '#55D6BE' }),
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}

export default SynthesisFilters;
