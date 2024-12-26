'use client';

import { Box, Button, Link, Modal, Typography } from '@mui/material';
import { useState } from 'react';

import { btn, btnText, image, imageContainer } from './SourcesModal.styles';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
        <Box sx={imageContainer}>
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...image, position: 'absolute', left: 0 }}
          />
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...image, position: 'absolute', left: 12.5 }}
          />
          <img
            src={`images/synthesis-page/experts/bill-gates.png`}
            alt="expert"
            style={{ ...image, position: 'absolute', left: 25 }}
          />
        </Box>
        <Typography sx={btnText}>3 sources</Typography>
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: '#D9D9D9',
            width: 'fit-content',
            height: '100%',
            overflow: 'scroll',
            padding: '20px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              margin: '0 0 20px 0',
            }}
          >
            <Typography
              sx={{ fontSize: '28px', fontWeight: '600' }}
              variant="h3"
              component="h3"
            >
              3 Sources
            </Typography>
            <Typography>Positive Relationships</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
              width: 'fit-content',
            }}
          >
            {DATA_EXPERT_CARD?.map((expert, index) => {
              return (
                <Box
                  key={expert.id}
                  sx={{ display: 'flex', minWidth: '600px', height: '200' }}
                >
                  <img
                    src="images/synthesis-page/modal/source-modal.png"
                    alt="expert"
                    style={{
                      objectFit: 'cover',
                      borderRadius: '20px 0 0 20px',
                      minWidth: '200px',
                    }}
                  />
                  <Box
                    sx={{
                      backgroundColor: '#AAAAAA',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '15px',
                      borderRadius: '0 20px 20px 0',
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{ fontSize: '24px', fontWeight: '700' }}
                    >
                      {expert.name}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontSize: '15px', fontWeight: '600' }}
                    >
                      {expert.profession}
                    </Typography>
                    <Typography sx={{ fontSize: '15px' }}>
                      {expert.sources[0].quote}
                    </Typography>
                    <Link
                      href={expert.sources[0].link}
                      underline="none"
                      sx={{
                        color: '#000000',
                        alignItems: 'center',
                        display: 'flex',
                        gap: '5px',
                      }}
                    >
                      <YouTubeIcon />
                      <Typography sx={{ fontSize: '13px' }}>
                        {expert.sources[0].sourceName}
                      </Typography>
                    </Link>
                    <Typography sx={{ fontSize: '12px', textAlign: 'justify' }}>
                      {expert.sources[0].sourceDescription}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SourcesModal;
