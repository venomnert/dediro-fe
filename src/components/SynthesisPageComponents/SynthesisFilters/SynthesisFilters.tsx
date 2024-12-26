'use client';

import { Box, Button } from '@mui/material';
import React from 'react';

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

import { useState } from 'react';
import {
  container,
  btnStyles,
  btnStylesMobile,
} from './SynthesisFilters.styles';

function SynthesisFilters() {
  let [active, setActive] = useState('for-you');

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

  return (
    <Box sx={container}>
      {buttonData.map(({ name, label, icon }, index) => (
        <Button
          key={index}
          variant={active === name ? 'contained' : 'text'}
          onClick={() => setActive(name)}
          startIcon={window.innerWidth < 900 ? null : icon}
          sx={{
            ...btnStylesMobile,
            ...(active === name && { color: '#55D6BE' }),
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}

export default SynthesisFilters;
