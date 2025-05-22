import { Box, Typography, useMediaQuery, useTheme, Fade, Chip, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMainContent } from '@/types';
import Image from 'next/image';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '85vh',
  minHeight: '600px',
  marginTop: '104px', // Account for fixed header
  backgroundColor: theme.palette.background.paper,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '70vh',
    minHeight: '400px',
  },
}));

const ImageWrapper = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}));

const Overlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
  zIndex: 1,
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '3.5rem',
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: theme.spacing(3),
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.15)',
  backdropFilter: 'blur(8px)',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  '& .MuiChip-icon': {
    color: theme.palette.common.white,
  },
}));

function MainContent({ title, image }: IMainContent) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fade in={true} timeout={1000}>
      <HeroContainer>
        <ImageWrapper>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Overlay />
        </ImageWrapper>

        <ContentContainer maxWidth="lg">
          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            <StyledChip label="Psychology" />
            <StyledChip label="Well-being" />
            <StyledChip label="Mental Health" />
          </Stack>

          <Title variant="h1">
            {title}
          </Title>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <StyledChip 
              icon={<AccessTimeIcon />}
              label="8 min read" 
              size="medium"
            />
            <StyledChip 
              icon={<LocalOfferIcon />}
              label="Featured" 
              size="medium"
            />
          </Stack>
        </ContentContainer>
      </HeroContainer>
    </Fade>
  );
}

export default MainContent;