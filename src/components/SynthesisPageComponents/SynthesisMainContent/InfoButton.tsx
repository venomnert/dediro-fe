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
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function InfoButton() {
  const DATA = {
    title: 'Explanation of the Process',
    description:
      'Dediro uses artificial intelligence (AI) to filter, analyze, and select the highest quality content for users. Our approach combines a rigorous assessment based on various criteria that ensure the content includes only the best sources and viewpoints.',
    accordion: [
      {
        title: 'Included Content',
        bullets: [
          `Authority and Credibility: We select content written or produced by recognized experts, thought leaders, or highly respected sources in their field. This content is backed by solid research and verifiable sources.`,
          `Depth and Context: The content must provide detailed and well-contextualized analysis of the topic. It's not just about superficial facts; the topic should be addressed comprehensively, providing context that allows for a better understanding of the more complex details.`,
          `Diverse Perspectives: We ensure the inclusion of different viewpoints on the same topic. We value the diversity of opinions to give users a more balanced perspective, even on topics where there is disagreement among experts.`,
          `Intellectual Rigor and Critical Thinking: The content should promote critical thinking, challenge assumptions, and encourage deep understanding. Pieces that offer well-founded arguments and promote reflection are prioritized.`,
        ],
        description:
          'Reason for Inclusion: We want to ensure that users receive accurate, well-researched, and high-quality information that not only informs but also promotes a deeper and more nuanced understanding of topics. By providing multiple and well-supported perspectives, we help users form informed and balanced opinions.',
      },
      {
        title: 'Excluded Content',
        bullets: [
          `Lack of Reliable Sources: We exclude content that is not backed by verifiable sources or lacks credibility. If the author is not a recognized expert or the content is not based on solid facts, it is discarded.`,
          `Excessive Simplicity: Content that reduces complex topics to simplistic explanations, without delving into the nuances or providing critical analysis, is excluded. This includes content that offers quick answers without considering the inherent complexity of the topic.`,
          `Excessive Bias or Sensationalism: If the content is excessively biased or sensationalist, intended only to
        generate clicks or emotions without offering an objective understanding, we exclude it. This also applies to material that reinforces echo chambers or is biased without providing a fair analysis.`,
          `Repetition or Obsolete Information: Content that simply repeats what has already been covered without adding new insights or that is outdated and does not reflect the current reality is excluded.`,
        ],
        description:
          'Reason for Exclusion: We exclude this type of content to ensure that the information reaching users is objective, relevant, and promotes a deep understanding, avoiding misinformation, superficiality, or content that does not add value. We want to protect our users from low-quality content that can generate misinformation or misunderstandings about complex topics.',
      },
    ],
  };

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
                <Typography sx={titleStyles} variant="h2" component="h2">
                  {DATA.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '20px' },
                    textAlign: 'justify',
                  }}
                >
                  {DATA.description}
                </Typography>

                {DATA.accordion.map((el) => {
                  return (
                    <Accordion key={el.title}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                          component="span"
                          sx={{
                            fontSize: { xs: '15px', md: '36px' },
                            fontWeight: '700',
                          }}
                        >
                          {el.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          <li>{el.bullets[0]}</li>
                          <li>{el.bullets[1]}</li>
                          <li>{el.bullets[2]}</li>
                          <li>{el.bullets[3]}</li>
                        </ul>
                        <Typography>{el.description}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}

                <Typography sx={titleStyles} variant="h2" component="h2">
                  Rationale
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '20px' },
                    textAlign: 'justify',
                  }}
                >
                  The content selection process at Dediro aims to offer users
                  only accurate and in-depth information based on high-quality
                  sources. What we include is information backed by experts,
                  well-contextualized, and that fosters critical thinking. What
                  we exclude is content that does not meet these standards of
                  intellectual rigor, diversity of perspectives, and
                  credibility.
                </Typography>
              </Box>
              <CloseIcon
                onClick={handleClose}
                sx={{
                  cursor: 'pointer',
                  position: { xs: 'absolute', md: 'relative' },
                  right: { xs: 20, md: 0 },
                }}
              />
            </Box>
          </Box>
        </>
      </Modal>
    </>
  );
}

export default InfoButton;
