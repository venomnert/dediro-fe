'use client';

import { Box, Button } from '@mui/material';
import {
  button,
  buttonsContainer,
  container,
  logo,
} from './SynthesisHeader.styles';

import Image from 'next/image';
import React from 'react';
import SynthesisSearchbar from './SynthesisSearchbar';

function SynthesisHeader() {
  return (
    <Box sx={container}>
      <Image
        src="images/dediro-logo-blue.png"
        width={63}
        height={62}
        style={logo}
        alt="Dediro"
      />

      <SynthesisSearchbar />

      <Box sx={buttonsContainer}>
        <Button variant="contained" sx={button}>
          Try Dediro
        </Button>
      </Box>
    </Box>
  );
}

export default SynthesisHeader;
