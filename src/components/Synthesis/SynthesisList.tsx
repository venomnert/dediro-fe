import { Box, Typography } from '@mui/material';
import { Synthesis, synthesisMock } from './utils';
import React, { useEffect, useState } from 'react';
import { cardsContainer, noSynthesisText } from './SynthesisList.styles';
import SynthesisCard from './SynthesisCard';

interface Category {
  title: string;
  value: string | number;
}

interface SynthesisListProps {
  selectedCategory: Category;
}

function SynthesisList({ selectedCategory }: SynthesisListProps) {
  const [synthesisListData, setSynthesisListData] = useState<Synthesis[]>([]);

  useEffect(() => {
    if (selectedCategory.title === 'Featured Feed') {
      setSynthesisListData(synthesisMock);
    } else {
      const res: Synthesis[] = synthesisMock.filter((s) =>
        s.topics.includes(selectedCategory.title.toLowerCase())
      );
      console.log(res, 'infoooo');
      setSynthesisListData(res);
    }

    return () => {
      setSynthesisListData([]);
    };
  }, [selectedCategory, synthesisMock]);
  return (
    <Box sx={cardsContainer}>
      {synthesisListData?.map((synthesis) => (
        <SynthesisCard key={synthesis?.title} {...synthesis} />
      ))}
      {synthesisListData.length === 0 ? (
        <Box>
          <Typography sx={noSynthesisText}>
            No Synthesis in this category yet.
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}

export default SynthesisList;
