'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import {
  accordionContainer,
  backgroundOnly,
  mainContainer,
  questionsContainer,
  questionStyle,
  responseStyle,
  sectionTitle,
} from './FAQs.styles';
import { FAQsContent } from '@/types';
import useContentful from '@/hooks/useContentful';
import { useSearchParams } from 'next/navigation';

function FAQs() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('isPreview') ? true : false;

  const { data } = useContentful<FAQsContent>('faQs', isPreview);

  return (
    <Box sx={backgroundOnly} id="faqs">
      <Box sx={mainContainer}>
        <Typography sx={sectionTitle}>{data?.title}</Typography>
        <Box sx={questionsContainer}>
          {data?.questionsList?.map(({ question, response }) => (
            <Accordion key={question} sx={accordionContainer}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${question}-content`}
                id={`${question}-header`}
                sx={questionStyle}
              >
                {question}
              </AccordionSummary>
              <AccordionDetails sx={responseStyle}>{response}</AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default FAQs;
