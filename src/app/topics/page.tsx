import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Synthesis from '@/components/Synthesis/Synthesis';
import { Box } from '@mui/material';
import React from 'react';

function Topics() {
  return (
    <>
      <Header />
      <Box height="1px" />
      <Box sx={{ marginTop: '80px' }}>
        <Synthesis />
      </Box>
      <Footer />
    </>
  );
}

export default Topics;
