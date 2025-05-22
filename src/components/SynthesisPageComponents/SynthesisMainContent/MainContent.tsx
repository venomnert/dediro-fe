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
  height: '75vh',
  minHeight: '600px',
  backgroundColor: theme.palette.background.paper,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '60vh',
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
  background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
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

const TopBar = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2, 0),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 3,
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

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1.25rem',
  fontWeight: 400,
  marginBottom: theme.spacing(4),
  maxWidth: '800px',
  opacity: 0.9,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
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

const ActionButton = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(8px)',
  color: theme.palette.common.white,
  border: '1px solid rgba(255,255,255,0.2)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.2)',
    transform: 'translateY(-2px)',
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
          <TopBar>
            <Stack direction="row" spacing={1}>
              <StyledChip 
                icon={<LocalOfferIcon />}
                label="Synthesis" 
                size="medium" 
              />
              <StyledChip 
                icon={<AccessTimeIcon />}
                label="8 min read" 
                size="medium" 
              />
            </Stack>
            
            <Stack direction="row" spacing={2}>
              <ActionButton
                icon={<BookmarkBorderIcon />}
                label={isMobile ? '' : 'Save'}
                size="medium"
                variant="outlined"
              />
              <ActionButton
                icon={<ShareIcon />}
                label={isMobile ? '' : 'Share'}
                size="medium"
                variant="outlined"
              />
            </Stack>
          </TopBar>

          <Box>
            <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
              <StyledChip label="Psychology" />
              <StyledChip label="Well-being" />
              <StyledChip label="Mental Health" />
            </Stack>

            <Title variant="h1">
              {title}
            </Title>

            <Subtitle variant="subtitle1">
              A comprehensive analysis of the latest research and expert insights on achieving lasting happiness and well-being in today's complex world.
            </Subtitle>
          </Box>
        </ContentContainer>
      </HeroContainer>
    </Fade>
  );
}

export default MainContent;