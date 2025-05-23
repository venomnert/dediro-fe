import { Box, Typography, Card, CardContent, Avatar, Chip, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const ExpertAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  marginBottom: theme.spacing(2),
  border: `3px solid ${theme.palette.primary.main}`,
}));

const DomainChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: '0.75rem',
  height: 24,
  marginBottom: theme.spacing(1),
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

interface ExpertCardProps {
  name: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  bio: string;
  domain: string;
}

function ExpertCard({ name, title, image, bio, domain }: ExpertCardProps) {
  return (
    <StyledCard elevation={1}>
      <CardContent sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        p: 3,
      }}>
        <ExpertAvatar
          src={image.src}
          alt={image.alt}
        />
        
        <DomainChip label={domain} />

        <Typography variant="h6" sx={{ 
          fontWeight: 600,
          mb: 0.5,
          fontSize: '1.1rem',
        }}>
          {name}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" sx={{
          mb: 2,
          fontSize: '0.9rem',
        }}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{
          mb: 2,
          fontSize: '0.875rem',
          lineHeight: 1.6,
        }}>
          {bio}
        </Typography>

        <Box sx={{ 
          display: 'flex',
          gap: 1,
          mt: 'auto',
        }}>
          <Tooltip title="Follow expert">
            <ActionButton size="small">
              <AddCircleOutlineIcon />
            </ActionButton>
          </Tooltip>
          <Tooltip title="View LinkedIn profile">
            <ActionButton size="small">
              <LinkedInIcon />
            </ActionButton>
          </Tooltip>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default ExpertCard;