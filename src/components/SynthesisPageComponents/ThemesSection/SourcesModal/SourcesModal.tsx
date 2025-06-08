'use client';

import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import {
  btn,
  btnImage,
  btnImageContainer,
  btnText,
  cardContainer,
  infoContainer,
  infoSubContainer,
  modalContainer,
  modalSubContainer,
  titleStyles,
} from './SourcesModal.styles';

import CloseIcon from '@mui/icons-material/Close';
import { IExpertsHighlightsArray } from '@/types';
import ModalCard from './ModalCard';
import { useState } from 'react';

function SourcesModal({ experts }: IExpertsHighlightsArray) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleStyle = (index: number) => {
    if (index === 1)
      return {
        position: 'absolute',
        left: 0,
      };
    if (index === 2) return { position: 'absolute', left: 12.5 };
    if (index === 3) return { position: 'absolute', left: 25 };
  };

  return (
    <>
      <Button variant="contained" sx={btn} onClick={() => handleOpen()}>
        <Box sx={btnImageContainer}>
          {experts.slice(0, 4).map((el, index) => {
            let positionStyles: any = {};
            positionStyles = handleStyle(index);

            return (
              <img
                key={index}
                src={el.image.src}
                alt={el.image.alt}
                style={{ ...btnImage, ...positionStyles }}
              />
            );
          })}
        </Box>
        <Typography sx={btnText}>{experts.length} sources</Typography>
      </Button>

      <Modal open={open} onClose={handleClose} sx={modalContainer}>
        <Box sx={modalSubContainer}>
          <Box sx={infoContainer}>
            <Box sx={infoSubContainer}>
              <Typography sx={titleStyles} variant="h3" component="h3">
                {experts.length} Sources
              </Typography>
              <Typography sx={{ color: '#ffffff' }}>
                Positive Relationships
              </Typography>
            </Box>
            <IconButton>
              <CloseIcon onClick={handleClose} sx={{ color: '#ffffff' }} />
            </IconButton>
          </Box>

          <Box sx={cardContainer}>
            {experts?.map((expert) => (
              <ModalCard
                key={expert.id}
                id={expert.id}
                name={expert.name}
                profession={expert.profession}
                sources={expert.sources}
                image={expert.image}
              />
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SourcesModal;
