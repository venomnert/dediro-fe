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
  /*  {
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
  }, */
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

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          backdropFilter: 'blur(1px)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#D9D9D9',
            width: '90vw', // Ocupa el 90% del ancho de la pantalla
            maxWidth: { xs: '700px', md: '1000px' }, // Máximo ancho para pantallas grandes
            height: 'auto', // Ajusta la altura automáticamente según el contenido
            maxHeight: '90vh', // Previene que se salga de la pantalla
            overflowY: 'auto', // Agrega scroll vertical si el contenido es demasiado alto
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px', // Opcional: bordes redondeados para estética
            padding: '20px', // Espaciado interno
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              borderBottom: '2px solid #8E8E8E',
              paddingBottom: '15px',
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
              flexDirection: 'column',
              gap: '20px',
              marginTop: '15px',
            }}
          >
            {DATA_EXPERT_CARD?.map((expert, index) => (
              <Box
                key={expert.id}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' }, // Colapsa en pantallas pequeñas
                  gap: '15px',
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0, // Evita que la imagen se reduzca demasiado
                    img: {
                      objectFit: 'cover',
                      borderRadius: '10px',
                      width: { xs: '100%', sm: '200px' }, // Responsivo
                      height: '100%',
                    },
                  }}
                >
                  <img
                    src="images/synthesis-page/modal/source-modal.png"
                    alt="expert"
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: '#AAAAAA',
                    borderRadius: '10px',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
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
                      display: 'flex',
                      alignItems: 'center',
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
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SourcesModal;
