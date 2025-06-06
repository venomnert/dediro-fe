import { Box, Typography, Grid, Chip, Card, CardContent, CardMedia, CardActionArea, Link, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { format } from 'date-fns';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArticleIcon from '@mui/icons-material/Article';
import UpdateIcon from '@mui/icons-material/Update';
import React, { useState, useEffect } from 'react';

const SectionContainer = styled(Box)(({ theme }) => ({
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
  fontSize: '1.8rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  position: 'relative',
  paddingTop: theme.spacing(4),
  color: '#202122',
  fontFamily: 'Linux Libertine, Georgia, Times, serif',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '60px',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
  }
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  color: '#54595d',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  fontFamily: 'Montserrat, sans-serif',
}));

const ContentGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid #eaecf0',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.02)',
    }
  },
  '&:focus-within': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px'
  }
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 160,
  transition: 'transform 0.3s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    height: 140
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1),
  gap: theme.spacing(1)
}));

const ContentTypeChip = styled(Chip)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '0.75rem',
  height: '24px'
}));

const UpdateChip = styled(ContentTypeChip)(({ theme }) => ({
  backgroundColor: '#e3f2fd',
  color: '#1565c0',
  '& .MuiChip-icon': {
    color: '#1565c0',
  }
}));

const ArticleChip = styled(ContentTypeChip)(({ theme }) => ({
  backgroundColor: '#f3e5f5',
  color: '#7b1fa2',
  '& .MuiChip-icon': {
    color: '#7b1fa2',
  }
}));

const NewBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '0.7rem',
  height: '20px'
}));

const ContentTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
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

const ContentSummary = styled(Typography)(({ theme }) => ({
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
  justifyContent: 'space-between',
  marginTop: 'auto',
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`
}));

const SubsectionDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(4, 0, 3, 0),
  '&::before, &::after': {
    borderColor: '#c8ccd1',
  }
}));

const SubsectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 500,
  color: '#202122',
  fontFamily: 'Linux Libertine, Georgia, Times, serif',
}));

interface ContentItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  category: string;
  isNew: boolean;
  readTime: number;
  url: string;
  type: 'update' | 'article';
}

interface ContinuedReadingProps {
  relatedContent?: Array<{
    title: string;
    briefDescription: string;
  }>;
}

function ContinuedReading({ relatedContent }: ContinuedReadingProps) {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        // Mock data combining updates and related articles
        const mockUpdates: ContentItem[] = [
          {
            id: '1',
            title: 'Latest Developments in AI Research',
            summary: 'New breakthroughs in machine learning algorithms show promising results in natural language processing and decision-making capabilities.',
            date: new Date().toISOString(),
            imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
            category: 'Technology',
            isNew: true,
            readTime: 5,
            url: '/articles/ai-research',
            type: 'update'
          },
          {
            id: '2',
            title: 'Climate Change Impact Analysis',
            summary: 'Recent studies reveal accelerated effects of global warming on polar ice caps and ocean currents.',
            date: new Date(Date.now() - 86400000).toISOString(),
            imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
            category: 'Environment',
            isNew: true,
            readTime: 7,
            url: '/articles/climate-change',
            type: 'update'
          }
        ];

        const mockRelatedArticles: ContentItem[] = [
          {
            id: '3',
            title: 'Understanding Happiness Through Psychology',
            summary: 'A comprehensive look at psychological research on happiness, well-being, and life satisfaction across different cultures.',
            date: new Date(Date.now() - 172800000).toISOString(),
            imageUrl: 'https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg',
            category: 'Psychology',
            isNew: false,
            readTime: 8,
            url: '/articles/psychology-happiness',
            type: 'article'
          },
          {
            id: '4',
            title: 'The Science of Positive Relationships',
            summary: 'How social connections impact our mental health and overall life satisfaction according to recent research.',
            date: new Date(Date.now() - 259200000).toISOString(),
            imageUrl: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
            category: 'Psychology',
            isNew: false,
            readTime: 6,
            url: '/articles/positive-relationships',
            type: 'article'
          },
          {
            id: '5',
            title: 'Physical Health and Mental Well-being',
            summary: 'Exploring the connection between exercise, nutrition, sleep, and psychological health.',
            date: new Date(Date.now() - 345600000).toISOString(),
            imageUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
            category: 'Health',
            isNew: false,
            readTime: 9,
            url: '/articles/physical-mental-health',
            type: 'article'
          }
        ];

        // Add related content from props if available
        if (relatedContent) {
          const additionalArticles: ContentItem[] = relatedContent.map((item, index) => ({
            id: `related-${index}`,
            title: item.title,
            summary: item.briefDescription,
            date: new Date(Date.now() - (index + 6) * 86400000).toISOString(),
            imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
            category: 'Research',
            isNew: false,
            readTime: 5,
            url: `/articles/related-${index}`,
            type: 'article'
          }));
          mockRelatedArticles.push(...additionalArticles);
        }

        await new Promise(resolve => setTimeout(resolve, 800));
        setContent([...mockUpdates, ...mockRelatedArticles]);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [relatedContent]);

  const updates = content.filter(item => item.type === 'update');
  const articles = content.filter(item => item.type === 'article');

  const renderContentCard = (item: ContentItem) => (
    <Link href={item.url} underline="none" tabIndex={-1} key={item.id}>
      <StyledCard elevation={0}>
        <CardActionArea>
          <StyledCardMedia
            component="img"
            image={item.imageUrl}
            alt={item.title}
          />
          <CardContent>
            <CardHeader>
              {item.type === 'update' ? (
                <UpdateChip 
                  label="Update" 
                  size="small"
                  icon={<UpdateIcon />}
                />
              ) : (
                <ArticleChip 
                  label="Article" 
                  size="small"
                  icon={<ArticleIcon />}
                />
              )}
              {item.isNew && <NewBadge label="New\" size="small" />}
            </CardHeader>
            
            <ContentTitle variant="h6">
              {item.title}
            </ContentTitle>
            
            <ContentSummary>
              {item.summary}
            </ContentSummary>
            
            <MetaInfo>
              <Typography variant="caption">
                {format(new Date(item.date), 'MMM d, yyyy')}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTimeIcon sx={{ fontSize: '1rem' }} />
                <Typography variant="caption">
                  {item.readTime} min read
                </Typography>
              </Box>
            </MetaInfo>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </Link>
  );

  if (loading) {
    return (
      <SectionContainer>
        <SectionTitle>Continued Reading</SectionTitle>
        <Typography>Loading content...</Typography>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <SectionTitle>Continued Reading</SectionTitle>
      <SectionDescription>
        Stay current with the latest developments and explore related topics to deepen your understanding.
      </SectionDescription>

      {/* Latest Updates Subsection */}
      {updates.length > 0 && (
        <Box>
          <SubsectionTitle variant="h3">
            Latest Updates
          </SubsectionTitle>
          <Typography variant="body2" sx={{ 
            color: '#54595d', 
            mb: 2, 
            fontSize: '14px',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Recent developments and new insights on this topic
          </Typography>
          <ContentGrid container>
            {updates.map(renderContentCard)}
          </ContentGrid>
        </Box>
      )}

      {/* Related Articles Subsection */}
      {articles.length > 0 && (
        <Box>
          <SubsectionDivider>
            <SubsectionTitle variant="h3">
              Related Articles
            </SubsectionTitle>
          </SubsectionDivider>
          <Typography variant="body2" sx={{ 
            color: '#54595d', 
            mb: 2, 
            fontSize: '14px',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            Explore related topics and complementary perspectives
          </Typography>
          <ContentGrid container>
            {articles.map(renderContentCard)}
          </ContentGrid>
        </Box>
      )}
    </SectionContainer>
  );
}

export default ContinuedReading;