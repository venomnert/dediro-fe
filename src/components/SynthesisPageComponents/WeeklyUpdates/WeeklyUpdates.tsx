import { Box, Typography, Grid2, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import WeeklyUpdatesCard from './WeeklyUpdatesCard';

const UpdatesContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(to right, ${theme.palette.divider}, transparent)`,
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  position: 'relative',
  paddingTop: theme.spacing(4),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '60px',
    height: '3px',
    backgroundColor: theme.palette.primary.main,
  }
}));

const UpdatesGrid = styled(Grid2)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  }
}));

const LoadingPlaceholder = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '200px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  animation: 'pulse 1.5s ease-in-out infinite',
  '@keyframes pulse': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0.5 },
    '100%': { opacity: 1 },
  }
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  textAlign: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.error.light,
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2)
}));

interface WeeklyUpdate {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  category: string;
  isNew: boolean;
  readTime: number;
  url: string;
}

function WeeklyUpdates() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [updates, setUpdates] = useState<WeeklyUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace with actual API call
        const mockUpdates: WeeklyUpdate[] = [
          {
            id: '1',
            title: 'Latest Developments in AI Research',
            summary: 'New breakthroughs in machine learning algorithms show promising results in natural language processing.',
            date: new Date().toISOString(),
            imageUrl: '/images/synthesis-page/weekly-updates.png',
            category: 'Technology',
            isNew: true,
            readTime: 5,
            url: '/articles/ai-research'
          },
          {
            id: '2',
            title: 'Climate Change Impact Analysis',
            summary: 'Recent studies reveal accelerated effects of global warming on polar ice caps.',
            date: new Date(Date.now() - 86400000).toISOString(),
            imageUrl: '/images/synthesis-page/weekly-updates.png',
            category: 'Environment',
            isNew: true,
            readTime: 7,
            url: '/articles/climate-change'
          },
          {
            id: '3',
            title: 'Economic Policy Updates',
            summary: 'Analysis of recent changes in global economic policies and their implications.',
            date: new Date(Date.now() - 172800000).toISOString(),
            imageUrl: '/images/synthesis-page/weekly-updates.png',
            category: 'Economics',
            isNew: false,
            readTime: 6,
            url: '/articles/economic-policy'
          },
          {
            id: '4',
            title: 'Healthcare Innovation Report',
            summary: 'Latest advancements in medical research and healthcare technology.',
            date: new Date(Date.now() - 259200000).toISOString(),
            imageUrl: '/images/synthesis-page/weekly-updates.png',
            category: 'Healthcare',
            isNew: false,
            readTime: 4,
            url: '/articles/healthcare'
          }
        ];
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        setUpdates(mockUpdates);
      } catch (error) {
        setError('Failed to load updates. Please try again later.');
        console.error('Error fetching updates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <UpdatesContainer>
      <SectionTitle variant="h2">
        Weekly Updates
      </SectionTitle>
      
      {loading ? (
        <LoadingPlaceholder>
          <Typography variant="body1" color="textSecondary">
            Loading weekly updates...
          </Typography>
        </LoadingPlaceholder>
      ) : error ? (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      ) : (
        <UpdatesGrid container>
          {updates.map((update) => (
            <Grid2 key={update.id} xs={12} sm={6}>
              <WeeklyUpdatesCard
                title={update.title}
                summary={update.summary}
                date={update.date}
                imageUrl={update.imageUrl}
                category={update.category}
                isNew={update.isNew}
                readTime={update.readTime}
                url={update.url}
              />
            </Grid2>
          ))}
        </UpdatesGrid>
      )}
    </UpdatesContainer>
  );
}

export default WeeklyUpdates;