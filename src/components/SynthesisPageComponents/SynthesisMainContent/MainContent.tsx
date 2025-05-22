import { Box, Typography, useMediaQuery, useTheme, Fade, Chip, Stack, Container, Avatar, Button, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { format, isValid, parseISO } from 'date-fns';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import React, { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const HeroContainer = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '85vh',
  minHeight: '600px',
  marginTop: '64px',
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
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
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
  padding: theme.spacing(2),
  backgroundColor: 'rgba(0,0,0,0.3)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius,
}));

const ActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: 'rgba(255,255,255,0.5)',
  '&:hover': {
    borderColor: theme.palette.common.white,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
}));

const ShareMenu = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  backgroundColor: 'rgba(0,0,0,0.3)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius,
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  color: theme.palette.common.white,
  backgroundColor: 'rgba(0,0,0,0.3)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}));

interface MainContentProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  category?: string;
  publishDate: string;
  readingTime: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  subtitle?: string;
  onBack?: () => void;
}

function MainContent({ 
  title, 
  image,
  category = "Featured",
  publishDate,
  readingTime,
  author,
  subtitle,
  onBack
}: MainContentProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  const formatDate = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      if (!isValid(date)) {
        return 'Date unavailable';
      }
      return format(date, 'MMM d, yyyy');
    } catch (error) {
      return 'Date unavailable';
    }
  };

  return (
    <HeroContainer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
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

      {onBack && (
        <BackButton onClick={onBack} aria-label="Go back">
          <ArrowBackIcon />
        </BackButton>
      )}

      <ContentContainer maxWidth="lg">
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <CategoryChip 
            label={category.toUpperCase()} 
            onClick={() => {}} 
          />
          <MetadataChip 
            icon={<TrendingUpIcon />}
            label="Trending" 
            variant="outlined"
          />
        </Stack>

        <Title variant="h1">
          {title}
        </Title>

        {subtitle && (
          <Subtitle>
            {subtitle}
          </Subtitle>
        )}

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <MetadataChip 
            icon={<AccessTimeIcon />}
            label={`${readingTime} min read`} 
          />
          <MetadataChip 
            icon={<CalendarTodayIcon />}
            label={formatDate(publishDate)} 
          />
          <MetadataChip 
            icon={<LocalOfferIcon />}
            label={category} 
          />
        </Stack>

        <AuthorSection>
          <Avatar 
            src={author.avatar}
            alt={author.name}
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <Typography color="white" fontWeight={600}>
              {author.name}
            </Typography>
            <Typography color="white" variant="body2" sx={{ opacity: 0.7 }}>
              {author.role}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
            <Tooltip title={isBookmarked ? "Remove bookmark" : "Save article"}>
              <ActionButton 
                startIcon={<BookmarkBorderIcon />} 
                variant="outlined"
                onClick={handleBookmark}
                aria-label={isBookmarked ? "Remove bookmark" : "Save article"}
              >
                {isBookmarked ? 'Saved' : 'Save'}
              </ActionButton>
            </Tooltip>
            <Tooltip title="Share article">
              <ActionButton 
                startIcon={<ShareIcon />} 
                variant="outlined"
                onClick={handleShare}
                aria-label="Share article"
              >
                Share
              </ActionButton>
            </Tooltip>
          </Stack>
        </AuthorSection>

        {showShareMenu && (
          <ShareMenu>
            <FacebookShareButton url={shareUrl}>
              <IconButton size="small" sx={{ color: 'white' }}>
                <img src="/images/social/facebook.svg" alt="Share on Facebook" width={24} height={24} />
              </IconButton>
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <IconButton size="small" sx={{ color: 'white' }}>
                <img src="/images/social/twitter.svg" alt="Share on Twitter" width={24} height={24} />
              </IconButton>
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <IconButton size="small" sx={{ color: 'white' }}>
                <img src="/images/social/linked-in.svg" alt="Share on LinkedIn" width={24} height={24} />
              </IconButton>
            </LinkedinShareButton>
          </ShareMenu>
        )}
      </ContentContainer>
    </HeroContainer>
  );
}

export default MainContent;