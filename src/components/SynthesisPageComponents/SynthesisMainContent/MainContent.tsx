import { Box, Typography, useMediaQuery, useTheme, Fade, Chip, Stack, Container, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMainContent } from '@/types';
import Image from 'next/image';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

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
  background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
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

const CategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '0.875rem',
  height: 32,
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '3.75rem',
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: theme.spacing(2),
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1.25rem',
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: theme.spacing(3),
  opacity: 0.9,
  maxWidth: '800px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}));

const MetadataChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.15)',
  backdropFilter: 'blur(8px)',
  color: theme.palette.common.white,
  '& .MuiChip-icon': {
    color: theme.palette.common.white,
  },
}));

const AuthorSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: 'rgba(255,255,255,0.5)',
  '&:hover': {
    borderColor: theme.palette.common.white,
    backgroundColor: 'rgba(255,255,255,0.1)',
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
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <CategoryChip label="FEATURED STORY" />
            <MetadataChip 
              icon={<TrendingUpIcon />}
              label="Trending" 
              variant="outlined"
            />
          </Stack>

          <Title variant="h1">
            {title}
          </Title>

          <Subtitle>
            A comprehensive analysis of the latest research and expert insights on achieving lasting happiness and well-being in today's complex world.
          </Subtitle>

          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <MetadataChip 
              icon={<AccessTimeIcon />}
              label="8 min read" 
            />
            <MetadataChip 
              icon={<CalendarTodayIcon />}
              label="Updated Apr 15, 2023" 
            />
            <MetadataChip 
              icon={<LocalOfferIcon />}
              label="Psychology" 
            />
          </Stack>

          <AuthorSection>
            <Avatar 
              src="/path/to/author-image.jpg"
              sx={{ width: 48, height: 48 }}
            />
            <Box>
              <Typography color="white" fontWeight={600}>
                Dr. Sarah Johnson
              </Typography>
              <Typography color="white" variant="body2" sx={{ opacity: 0.7 }}>
                Senior Research Psychologist
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
              <ActionButton startIcon={<BookmarkBorderIcon />} variant="outlined">
                Save
              </ActionButton>
              <ActionButton startIcon={<ShareIcon />} variant="outlined">
                Share
              </ActionButton>
            </Stack>
          </AuthorSection>
        </ContentContainer>
      </HeroContainer>
    </Fade>
  );
}

export default MainContent;