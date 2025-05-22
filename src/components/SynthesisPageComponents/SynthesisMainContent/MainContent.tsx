import { Box, Typography, useMediaQuery, useTheme, Fade, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMainContent } from '@/types';
import Image from 'next/image';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// Styled components for better organization and reusability
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)'
  }
}));

const HeroImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '60vh',
  maxHeight: '600px',
  minHeight: '300px',
  [theme.breakpoints.down('md')]: {
    height: '40vh',
    minHeight: '250px',
  },
}));

const HeroOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
  zIndex: 1,
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(4, 5),
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: '3.5rem',
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1.25rem',
  fontWeight: 400,
  marginBottom: theme.spacing(3),
  maxWidth: '800px',
  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ReadTimeChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.2)',
  color: theme.palette.common.white,
  backdropFilter: 'blur(4px)',
  '& .MuiChip-icon': {
    color: theme.palette.common.white,
  },
}));

const TopicChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.15)',
  color: theme.palette.common.white,
  backdropFilter: 'blur(4px)',
  '& .MuiChip-icon': {
    color: theme.palette.common.white,
  },
}));

function MainContent({ title, image }: IMainContent) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Fade in={true} timeout={800}>
      <HeroContainer>
        <HeroImageWrapper>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <HeroOverlay />
        </HeroImageWrapper>
        
        <HeroContent>
          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            <CategoryChip 
              icon={<LocalOfferIcon />}
              label="Synthesis" 
              size="medium" 
            />
            <ReadTimeChip 
              icon={<AccessTimeIcon />} 
              label="8 min read" 
              size="medium" 
            />
            <TopicChip 
              label="Psychology" 
              size="medium" 
            />
            <TopicChip 
              label="Well-being" 
              size="medium" 
            />
          </Stack>
          
          <HeroTitle variant="h1">
            {title}
          </HeroTitle>
          
          <HeroSubtitle variant="subtitle1">
            A comprehensive analysis of the latest research and expert insights on achieving lasting happiness and well-being.
          </HeroSubtitle>
        </HeroContent>
      </HeroContainer>
    </Fade>
  );
}

export default MainContent;