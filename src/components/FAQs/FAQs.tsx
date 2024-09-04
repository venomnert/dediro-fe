import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { questionsList } from './utils';
import {
  accordionContainer,
  backgroundOnly,
  mainContainer,
  questionsContainer,
  questionStyle,
  responseStyle,
  sectionTitle,
} from './FAQs.styles';

function FAQs() {
  return (
    <Box sx={backgroundOnly}>
      <Box sx={mainContainer}>
        <Typography sx={sectionTitle}>Frequently Asked Questions</Typography>
        <Box sx={questionsContainer}>
          {questionsList.map(({ question, response }) => (
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
