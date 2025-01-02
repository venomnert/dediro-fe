'use client';

import { Box, Button, Link, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import {
  btn,
  btnText,
  btnImage,
  btnImageContainer,
  modalContainer,
  modalSubContainer,
  infoContainer,
  infoSubContainer,
  titleStyles,
  cardContainer,
} from './SourcesModal.styles';
import CloseIcon from '@mui/icons-material/Close';
import ModalCard from './ModalCard';

const DATA_EXPERT_CARD = [
  {
    id: 1,
    name: 'John Doe',
    profession: 'Couples Therapists',
    sources: [
      {
        quote:
          '1. Art of Happiness Course: Nurturing Positive Relationships and Social Support',
        link: 'https://www.youtube.com/',
        sourceName: 'YouTube',
        sourceDescription:
          'This video highlights the importance of nurturing positive relationships and social support for overall well-being, explaining how these connections contribute to emotional support, resilience, enhanced well-being, and shared experiences of joy.',
      },
    ],
  },
  {
    id: 2,
    name: 'John Doe',
    profession: 'Couples Therapists',
    sources: [
      {
        quote:
          '1. Art of Happiness Course: Nurturing Positive Relationships and Social Support',
        link: 'https://www.youtube.com/',
        sourceName: 'YouTube',
        sourceDescription:
          'This video highlights the importance of nurturing positive relationships and social support for overall well-being, explaining how these connections contribute to emotional support, resilience, enhanced well-being, and shared experiences of joy.',
      },
    ],
  },
  {
    id: 3,
    name: 'John Doe',
    profession: 'Couples Therapists',
    sources: [
      {
        quote:
          '1. Art of Happiness Course: Nurturing Positive Relationships and Social Support',
        link: 'https://www.youtube.com/',
        sourceName: 'YouTube',
        sourceDescription:
          'This video highlights the importance of nurturing positive relationships and social support for overall well-being, explaining how these connections contribute to emotional support, resilience, enhanced well-being, and shared experiences of joy.',
      },
    ],
  },
  {
    id: 4,
    name: 'John Doe',
    profession: 'Couples Therapists',
    sources: [
      {
        quote:
          '1. Art of Happiness Course: Nurturing Positive Relationships and Social Support',
        link: 'https://www.youtube.com/',
        sourceName: 'YouTube',
        sourceDescription:
          'This video highlights the importance of nurturing positive relationships and social support for overall well-being, explaining how these connections contribute to emotional support, resilience, enhanced well-being, and shared experiences of joy.',
      },
    ],
  },
];

function SourcesModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" sx={btn} onClick={() => handleOpen()}>
        <Box sx={btnImageContainer}>
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...btnImage, position: 'absolute', left: 0 }}
          />
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...btnImage, position: 'absolute', left: 12.5 }}
          />
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...btnImage, position: 'absolute', left: 25 }}
          />
        </Box>
        <Typography sx={btnText}>3 sources</Typography>
      </Button>

      <Modal open={open} onClose={handleClose} sx={modalContainer}>
        <Box sx={modalSubContainer}>
          <Box sx={infoContainer}>
            <Box sx={infoSubContainer}>
              <Typography sx={titleStyles} variant="h3" component="h3">
                3 Sources
              </Typography>
              <Typography>Positive Relationships</Typography>
            </Box>
            <CloseIcon onClick={handleClose} />
          </Box>

          <Box sx={cardContainer}>
            {DATA_EXPERT_CARD?.map((expert, index) => (
              <ModalCard
                key={expert.id}
                id={expert.id}
                name={expert.name}
                profession={expert.profession}
                sources={expert.sources}
              />
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SourcesModal;
