'use client';

import React, { useState, useCallback } from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';

import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import MemoryRoundedIcon from '@mui/icons-material/MemoryRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';

import { container, btnStylesMobile } from './SynthesisFilters.styles';

const buttonData = [
  { name: 'for-you', label: 'For you', icon: <WidgetsRoundedIcon /> },
  { name: 'top', label: 'Top', icon: <StarBorderRoundedIcon /> },
  {
    name: 'tech-science',
    label: 'Tech & Science',
    icon: <MemoryRoundedIcon />,
  },
  { name: 'finance', label: 'Finance', icon: <PaidOutlinedIcon /> },
  {
    name: 'arts-culture',
    label: 'Arts & Culture',
    icon: <ColorLensOutlinedIcon />,
  },
  { name: 'sports', label: 'Sports', icon: <SportsSoccerOutlinedIcon /> },
  { name: 'health', label: 'Health', icon: <FavoriteBorderOutlinedIcon /> },
  { name: 'education', label: 'Education', icon: <SchoolOutlinedIcon /> },
  { name: 'food', label: 'Food', icon: <FastfoodOutlinedIcon /> },
  { name: 'fashion', label: 'Fashion', icon: <CheckroomOutlinedIcon /> },
];

function SynthesisFilters() {
  const [activeFilter, setActiveFilter] = useState('for-you');
  const isMobile = useMediaQuery('(max-width: 900px)');

  const handleButtonClick = useCallback((name: string) => {
    setActiveFilter(name);
  }, []);

  return (
    <Box sx={container}>
      {buttonData.map(({ name, label, icon }) => (
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
