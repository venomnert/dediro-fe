'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { wordMainContainer, wordPlaceholder, wordStyle } from './AnimatedWords.styles'

const words = [
  'Leadership',
  'Geopolitics',
  'Psychology',
  'Investing',
  'Finance',
  'Environment',
  'History',
  'Health',
  'Business',
  'Physics',
  'Space',
  'Philosophy',
  'Startups',
  'Wars',
  'Conflicts',
  'Politics',
  'Technology'
];


const AnimatedWordList = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={wordMainContainer}>
      <Box sx={wordPlaceholder} />
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: '48px',
            position: 'absolute',
            width: '100%',
            top: 0
          }}
        >
          <Typography sx={wordStyle}>{words[index]}</Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedWordList;