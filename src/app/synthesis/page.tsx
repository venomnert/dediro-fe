'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Image from 'next/image';
import HarborHeader from '@/components/Header/HarborHeader';
import Footer from '@/components/Footer/Footer';

const NotificationBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#DC143C',
  color: '#FFFFFF',
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 500,
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '500px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '400px',
  },
}));

const HeroImage = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}));

const HeroOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
  zIndex: 1,
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const HeroText = styled(Box)(({ theme }) => ({
  maxWidth: '500px',
  color: '#FFFFFF',
  textAlign: 'right',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    maxWidth: '400px',
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Playfair Display, serif',
  fontSize: '4rem',
  fontWeight: 700,
  lineHeight: 1.1,
  marginBottom: theme.spacing(2),
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Playfair Display, serif',
  fontSize: '1.5rem',
  fontWeight: 400,
  lineHeight: 1.3,
  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
}));

const ContentSection = styled(Container)(({ theme }) => ({
  maxWidth: '900px',
  margin: '0 auto',
  padding: theme.spacing(8, 3),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Playfair Display, serif',
  fontSize: '2.5rem',
  fontWeight: 600,
  color: '#2C3E50',
  marginBottom: theme.spacing(3),
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#2C3E50',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
  lineHeight: 1.3,
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.6,
  color: '#2C3E50',
  marginBottom: theme.spacing(3),
  fontFamily: 'Inter, sans-serif',
}));

const InlineImageContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  textAlign: 'center',
}));

const ImageCaption = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: '#666',
  fontStyle: 'italic',
  marginTop: theme.spacing(1),
  textAlign: 'center',
}));

const CTASection = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8F9FA',
  padding: theme.spacing(6, 3),
  textAlign: 'center',
  marginTop: theme.spacing(6),
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#DC143C',
  color: '#FFFFFF',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.125rem',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '4px',
  marginTop: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#B91C3C',
  },
}));

export default function SynthesisPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {/* Top Notification Bar */}
      <NotificationBar>
        Important: Fall 2024 Research Symposium registration now open - Apply by December 15th
      </NotificationBar>

      {/* Header */}
      <HarborHeader />

      {/* Hero Section */}
      <HeroSection>
        <HeroImage>
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Research collaboration and synthesis"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <HeroOverlay />
        </HeroImage>
        
        <HeroContent>
          <HeroText>
            <HeroTitle variant="h1">
              Synthesis
            </HeroTitle>
            <HeroSubtitle>
              Bridging Knowledge<br />
              Across Disciplines.
            </HeroSubtitle>
          </HeroText>
        </HeroContent>
      </HeroSection>

      {/* Main Content */}
      <ContentSection>
        {/* Section 1: What is Synthesis Research? */}
        <SectionTitle variant="h2">
          What is Synthesis Research?
        </SectionTitle>
        
        <BodyText>
          Synthesis research represents the convergence of knowledge across traditional academic boundaries, 
          creating new understanding through the integration of diverse perspectives, methodologies, and insights. 
          At Harbor University, we believe that the most pressing challenges of our time require collaborative 
          approaches that transcend individual disciplines.
        </BodyText>

        <BodyText>
          Our synthesis research initiative brings together faculty and students from multiple departments 
          to tackle complex problems that cannot be solved through single-discipline approaches. By combining 
          expertise from fields such as environmental science, economics, psychology, engineering, and the 
          humanities, we create innovative solutions and generate new knowledge that advances both academic 
          understanding and real-world applications.
        </BodyText>

        {/* Section 2: Interdisciplinary Collaboration */}
        <SectionSubtitle variant="h3">
          Interdisciplinary Collaboration
        </SectionSubtitle>

        <BodyText>
          Our collaborative research model emphasizes the importance of diverse perspectives in addressing 
          complex challenges. Faculty members from different departments work together in research clusters, 
          sharing methodologies, theoretical frameworks, and empirical findings to create comprehensive 
          approaches to multifaceted problems.
        </BodyText>

        <BodyText>
          Recent synthesis projects have included climate change adaptation strategies that combine 
          environmental science with urban planning and social policy, healthcare innovations that 
          integrate medical research with behavioral psychology and technology design, and sustainable 
          development initiatives that merge economic analysis with environmental conservation and 
          community engagement.
        </BodyText>

        {/* Inline Image */}
        <InlineImageContainer>
          <Image
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
            alt="Faculty and students in collaborative research"
            width={800}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
          <ImageCaption>
            Faculty and Students in Collaborative Research
          </ImageCaption>
        </InlineImageContainer>

        {/* Section 3: Current Synthesis Projects */}
        <SectionSubtitle variant="h3">
          Current Synthesis Projects
        </SectionSubtitle>

        <BodyText>
          Our active synthesis research portfolio includes several groundbreaking initiatives that 
          demonstrate the power of interdisciplinary collaboration. The Urban Resilience Project 
          combines expertise from civil engineering, sociology, and environmental science to develop 
          adaptive infrastructure solutions for climate change impacts in metropolitan areas.
        </BodyText>

        <BodyText>
          The Digital Wellness Initiative brings together computer scientists, psychologists, and 
          public health researchers to understand and address the complex relationships between 
          technology use and human well-being. Meanwhile, our Sustainable Innovation Lab integrates 
          business strategy, materials science, and environmental policy to develop commercially 
          viable solutions for environmental challenges.
        </BodyText>

        {/* Section 4: Methodology and Approach */}
        <SectionSubtitle variant="h3">
          Research Methodology and Approach
        </SectionSubtitle>

        <BodyText>
          Our synthesis research methodology emphasizes systematic integration of knowledge from 
          multiple sources and disciplines. We employ mixed-methods approaches that combine 
          quantitative analysis with qualitative insights, ensuring that our research captures 
          both the measurable aspects of complex problems and the nuanced human experiences 
          that shape them.
        </BodyText>

        <BodyText>
          Collaborative teams participate in regular cross-disciplinary seminars, joint data 
          collection efforts, and integrated analysis sessions. This approach ensures that 
          different disciplinary perspectives are not merely combined but truly synthesized 
          into new frameworks for understanding and action.
        </BodyText>

        {/* Section 5: Resources and Support */}
        <SectionSubtitle variant="h3">
          Resources and Support
        </SectionSubtitle>

        <BodyText>
          Harbor University provides comprehensive support for synthesis research through dedicated 
          funding opportunities, collaborative workspace facilities, and specialized research tools. 
          Our Synthesis Research Center offers access to advanced computational resources, 
          interdisciplinary databases, and expert consultation services to support complex 
          research projects.
        </BodyText>

        <BodyText>
          Faculty and students engaged in synthesis research also benefit from professional 
          development opportunities, including workshops on interdisciplinary collaboration, 
          grant writing for complex projects, and communication strategies for diverse audiences. 
          We maintain partnerships with industry, government, and non-profit organizations to 
          ensure that our research has real-world impact and application.
        </BodyText>
      </ContentSection>

      {/* Call to Action Section */}
      <CTASection>
        <Container maxWidth="md">
          <SectionTitle variant="h2" sx={{ mb: 2 }}>
            Get Involved in Synthesis Research
          </SectionTitle>
          
          <BodyText sx={{ mb: 0 }}>
            Join our community of researchers who are breaking down disciplinary barriers 
            to address the world's most complex challenges. Whether you're a faculty member 
            interested in collaborative research opportunities or a student seeking to engage 
            in interdisciplinary studies, we invite you to explore how synthesis research 
            can advance your academic and professional goals.
          </BodyText>
          
          <CTAButton variant="contained">
            Contact Research Office
          </CTAButton>
        </Container>
      </CTASection>

      <Footer />
    </>
  );
}