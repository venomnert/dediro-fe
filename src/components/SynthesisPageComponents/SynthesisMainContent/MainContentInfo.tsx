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
import dynamic from 'next/dynamic';

// HTML content renderer component
const HtmlContent = ({ content }: { content: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

// Client-side only component to render HTML content
const ClientOnlyHtml = dynamic(() => Promise.resolve(HtmlContent), {
  ssr: false,
});

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: '-48px',
  marginBottom: theme.spacing(6),
  borderRadius: '16px',
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  zIndex: 10,
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    marginTop: '-24px',
  },
}));

const AuthorSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const MetadataSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3),
  '& > *': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

const Summary = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.8,
  color: theme.palette.text.primary,
  '&::first-letter': {
    fontSize: '3.5rem',
    float: 'left',
    lineHeight: 1,
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
    fontFamily: 'Georgia, serif',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

function MainContentInfo({ date, summary }: IMainContentInfo) {
  return (
    <Container elevation={0}>
      <AuthorSection>
        <Avatar 
          src="/path/to/author-image.jpg" 
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Author Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Senior Research Analyst • Content Specialist
          </Typography>
        </Box>
        <Box sx={{ marginLeft: 'auto' }}>
          <InfoButton />
        </Box>
      </AuthorSection>

      <MetadataSection>
        <Box>
          <CalendarMonthRoundedIcon fontSize="small" />
          <Typography variant="body2">{date}</Typography>
        </Box>
        <Box>
          <AccessTimeIcon fontSize="small" />
          <Typography variant="body2">8 min read</Typography>
        </Box>
        <Box>
          <PersonIcon fontSize="small" />
          <Typography variant="body2">1,234 readers</Typography>
        </Box>
      </MetadataSection>

      <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
        <StyledChip 
          icon={<LocalOfferIcon />}
          label="Research" 
          variant="outlined"
        />
        <StyledChip 
          label="Psychology" 
          variant="outlined"
        />
        <StyledChip 
          label="Well-being" 
          variant="outlined"
        />
      </Stack>

      <Summary variant="body1">
        {typeof window === 'undefined' ? (
          <p>{summary.substring(0, 100)}...</p>
        ) : (
          <ClientOnlyHtml content={summary} />
        )}
      </Summary>
    </Container>
  );
}

export default MainContentInfo;