import { Box, Typography, Chip, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const NewBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '0.75rem',
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: '0.75rem',
}));

const UpdateTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

const UpdateSummary = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
}));

const MetaInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: 'auto',
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
}));

interface WeeklyUpdatesCardProps {
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  category: string;
  isNew: boolean;
  readTime: number;
}

function WeeklyUpdatesCard({
  title,
  summary,
  date,
  imageUrl,
  category,
  isNew,
  readTime,
}: WeeklyUpdatesCardProps) {
  return (
    <StyledCard elevation={2}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <CardHeader>
            <CategoryChip label={category} size="small" />
            {isNew && <NewBadge label="New" size="small" />}
          </CardHeader>
          
          <UpdateTitle variant="h6">
            {title}
          </UpdateTitle>
          
          <UpdateSummary>
            {summary}
          </UpdateSummary>
          
          <MetaInfo>
            <Typography variant="caption">
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
  );
}

export default WeeklyUpdatesCard;