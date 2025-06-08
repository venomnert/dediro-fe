import {
  Box,
  Typography,
  Grid,
  Button,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import ExpertCard from './ExpertCard';

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0, 6),
  width: '100%',
}));

const Header = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(3),
  justifyContent: 'center',
}));

const ViewMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  borderRadius: 100,
  textTransform: 'none',
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Introduction = styled(Typography)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
  textAlign: 'center',
  lineHeight: 1.6,
}));

const experts = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    title: 'AI Ethics Researcher',
    image: {
      src: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
      alt: 'Dr. Sarah Chen',
    },
    bio: 'Leading researcher in AI ethics and algorithmic bias at MIT, focusing on creating more equitable artificial intelligence systems.',
    domain: 'Technology & Ethics',
  },
  {
    id: 2,
    name: 'Prof. James Rodriguez',
    title: 'Climate Scientist',
    image: {
      src: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg',
      alt: 'Prof. James Rodriguez',
    },
    bio: 'Distinguished professor of Environmental Science at Stanford, pioneering research in climate change mitigation strategies.',
    domain: 'Environmental Science',
  },
  {
    id: 3,
    name: 'Dr. Aisha Patel',
    title: 'Neuroscience Pioneer',
    image: {
      src: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg',
      alt: 'Dr. Aisha Patel',
    },
    bio: 'Breakthrough researcher in neuroplasticity and cognitive enhancement at Johns Hopkins University.',
    domain: 'Neuroscience',
  },
  {
    id: 4,
    name: 'Marcus Thompson',
    title: 'Policy Innovator',
    image: {
      src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      alt: 'Marcus Thompson',
    },
    bio: 'Former UN advisor and current director of the Institute for Future Policy, specializing in global governance frameworks.',
    domain: 'Policy & Governance',
  },
  {
    id: 5,
    name: 'Dr. Elena Kovac',
    title: 'Quantum Computing Expert',
    image: {
      src: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      alt: 'Dr. Elena Kovac',
    },
    bio: 'Leading quantum computing researcher at IBM, developing next-generation quantum systems.',
    domain: 'Quantum Computing',
  },
  {
    id: 6,
    name: 'Dr. Michael Chang',
    title: 'Biotech Innovator',
    image: {
      src: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg',
      alt: 'Dr. Michael Chang',
    },
    bio: 'Pioneering researcher in CRISPR technology and founder of GenomeTech Solutions.',
    domain: 'Biotechnology',
  },
];

function ExpertsHighlights() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showAll, setShowAll] = useState(false);

  const displayedExperts = showAll ? experts : experts.slice(0, 4);
  const remainingExperts = experts.length - displayedExperts.length;

  return (
    <Container>
      <Header>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '24px', md: '36px' },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Expert Highlights
        </Typography>
        <Introduction variant="body1">
          Our synthesis draws from the insights of world-leading experts across
          multiple disciplines. These thought leaders bring diverse perspectives
          and cutting-edge research to provide you with the most comprehensive
          understanding of the topic.
        </Introduction>
      </Header>

      <GridContainer container>
        {displayedExperts.map((expert) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={expert.id}>
            <ExpertCard
              name={expert.name}
              title={expert.title}
              image={expert.image}
              bio={expert.bio}
              domain={expert.domain}
            />
          </Grid>
        ))}
      </GridContainer>

      {remainingExperts > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ViewMoreButton onClick={() => setShowAll(true)} variant="contained">
            View More Profiles +{remainingExperts}
          </ViewMoreButton>
        </Box>
      )}
    </Container>
  );
}

export default ExpertsHighlights;
