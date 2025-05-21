import { Box, Typography, Divider, Avatar, Chip, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { IMainContentInfo } from '@/types';
import InfoButton from './InfoButton';
import React from 'react';

// Styled components
const MetadataContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  borderRadius: '16px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  position: 'relative',
  top: '-40px',
  marginTop: '-20px',
  zIndex: 10,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    top: '-20px',
  },
}));

const MetadataHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));

const AuthorSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

const CategorySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const MetadataItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}));

const SummaryText = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.7,
  color: theme.palette.text.primary,
  marginTop: theme.spacing(2),
  fontWeight: 400,
  '&::first-letter': {
    fontSize: '2.5rem',
    fontWeight: 500,
    float: 'left',
    lineHeight: 1,
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

function MainContentInfo({ date, summary }: IMainContentInfo) {
  return (
    <MetadataContainer elevation={0}>
      <MetadataHeader>
        <AuthorSection>
          <Avatar alt="Author Name" src="/path/to/author-image.jpg" />
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>Author Name</Typography>
            <Typography variant="body2" color="text.secondary">Content Specialist</Typography>
          </Box>
        </AuthorSection>
        
        <Stack direction="row" spacing={1}>
          <InfoButton />
          <Chip 
            icon={<BookmarkIcon />} 
            label="Save" 
            variant="outlined" 
            size="small" 
            clickable 
          />
        </Stack>
      </MetadataHeader>
      
      <Divider sx={{ my: 2 }} />
      
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
        <MetadataItem>
          <CalendarMonthRoundedIcon fontSize="small" />
          <Typography variant="body2">{date}</Typography>
        </MetadataItem>
        
        <MetadataItem>
          <AccessTimeIcon fontSize="small" />
          <Typography variant="body2">8 min read</Typography>
        </MetadataItem>
        
        <MetadataItem>
          <PersonIcon fontSize="small" />
          <Typography variant="body2">1,234 readers</Typography>
        </MetadataItem>
      </Stack>
      
      <CategorySection>
        <Chip 
          icon={<LocalOfferIcon />} 
          label="Knowledge Synthesis" 
          size="small" 
          color="primary" 
          variant="outlined"
        />
        <Chip 
          label="Research" 
          size="small" 
          variant="outlined" 
        />
        <Chip 
          label="Education" 
          size="small" 
          variant="outlined" 
        />
      </CategorySection>
      
      <SummaryText variant="body1">{summary}</SummaryText>
    </MetadataContainer>
  );
}

export default MainContentInfo;
