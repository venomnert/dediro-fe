import { Box, Button, IconButton } from '@mui/material';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import React from 'react';

import {
  container,
  logo,
  buttonsContainer,
  iconButton,
  button,
} from './SynthesisHeader.styles';

import SynthesisSearchbar from './SynthesisSearchbar';

function SynthesisHeader() {
  return (
    <Box sx={container}>
      <img src="images/dediro-logo-blue.png" style={logo} alt="Dediro" />

      <SynthesisSearchbar />

      <Box sx={buttonsContainer}>
        <IconButton sx={iconButton}>
          <TranslateOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
        <Button variant="contained" sx={button}>
          Try Dediro
        </Button>
      </Box>
    </Box>
  );
}

export default SynthesisHeader;
