import { Box, Typography, Chip, Card, CardContent, CardMedia, CardActionArea, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    }
  },
  '&:focus-within': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px'
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  gap: theme.spacing(1)
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  transition: 'transform 0.3s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    height: 160
  }
}));

const NewBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '0.75rem',
  height: '24px'
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: '0.75rem',
  height: '24px'
}));

const UpdateTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  color: theme.palette.text.primary,
  transition: 'color 0.2s ease-in-out',
  lineHeight: 1.4,
  minHeight: '2.8em',
  '&:hover': {
    color: theme.palette.primary.main,
  }
}));

const UpdateSummary = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
  lineHeight: 1.6
}));

const MetaInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: 'auto',
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`
}));

interface WeeklyUpdatesCardProps {
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  category: string;
  isNew: boolean;
  readTime: number;
  url: string;
}

function WeeklyUpdatesCard({
  title,
  summary,
  date,
  imageUrl,
  category,
  isNew,
  readTime,
  url,
}: WeeklyUpdatesCardProps) {
  return (
    <Link href={url} underline="none" tabIndex={-1}>
      <StyledCard elevation={2}>
        <CardActionArea>
          <StyledCardMedia
            component="img"
            image={imageUrl}
            alt={title}
          />
          <CardContent>
            <CardHeader>
              <CategoryChip 
                label={category} 
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle category click
                }}
              />
              {isNew && <NewBadge label="New" size="small" />}
            </CardHeader>
            
            <UpdateTitle variant="h6">
              {title}
            </UpdateTitle>
            
            <UpdateSummary>
              {summary}
            </UpdateSummary>
            
            <MetaInfo>
              <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}>
                {format(new Date(date), 'MMM d, yyyy')}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTimeIcon sx={{ fontSize: '1rem' }} />
                <Typography variant="caption">
                  {readTime} min read
                </Typography>
              </Box>
            </MetaInfo>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </Link>
  );
}

export default WeeklyUpdatesCard;