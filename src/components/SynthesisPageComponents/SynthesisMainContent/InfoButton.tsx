'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import {
  accordionTitle,
  description,
  iconButton,
  infoButton,
  infoContainer,
  infoIcon,
  infoSubContainer,
  modalContainer,
  modalSubContainer,
  titleStyles,
} from './InfoButton.styles';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import INFO_BUTTON_DATA from '../../../constants/INFO_BUTTON_DATA';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function InfoButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton sx={infoButton} onClick={() => handleOpen()}>
        <InfoOutlinedIcon sx={infoIcon} />
      </IconButton>

      <Modal open={open} onClose={handleClose} sx={modalContainer}>
        <>
          <Box sx={modalSubContainer}>
            <Box sx={infoContainer}>
              <Box sx={infoSubContainer}>
                <Typography
                  sx={titleStyles}
                  variant="h2"
                  component="h2"
                  fontFamily="var(--font-roboto) !important"
                >
                  {INFO_BUTTON_DATA.title}
                </Typography>
                <Typography
                  fontFamily="var(--font-roboto) !important"
                  sx={description}
                >
                  {INFO_BUTTON_DATA.description}
                </Typography>

                {INFO_BUTTON_DATA.accordion.map((el) => {
                  return (
                    <Accordion key={el.title}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                          fontFamily="var(--font-roboto) !important"
                          component="span"
                          sx={accordionTitle}
                        >
                          {el.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul
                          style={{
                            fontFamily: 'var(--font-roboto) !important',
                          }}
                        >
                          <li>{el.bullets[0]}</li>
                          <li>{el.bullets[1]}</li>
                          <li>{el.bullets[2]}</li>
                          <li>{el.bullets[3]}</li>
                        </ul>
                        <Typography fontFamily="var(--font-roboto) !important">
                          {el.description}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}

                <Typography
                  fontFamily="var(--font-roboto) !important"
                  sx={titleStyles}
                  variant="h2"
                  component="h2"
                >
                  {INFO_BUTTON_DATA.subtitle}
                </Typography>
                <Typography
                  fontFamily="var(--font-roboto) !important"
                  sx={description}
                >
                  {INFO_BUTTON_DATA.subDescription}
                </Typography>
              </Box>
              <IconButton onClick={handleClose} sx={iconButton}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </>
      </Modal>
    </>
  );
}

export default InfoButton;
