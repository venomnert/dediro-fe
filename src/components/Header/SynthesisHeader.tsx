'use client';

import { Box, Button, Typography, Link, Container, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';
import SynthesisSearchbar from './SynthesisSearchbar';
import { useRouter } from 'next/navigation';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
}));

const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5),
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  fontSize: '0.875rem',
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const MainHeader = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  gap: theme.spacing(3),
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const HeaderButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1, 3),
  fontWeight: 600,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.dark,
  },
}));

function SynthesisHeader() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeaderContainer>
      <TopBar>
        <Link href="#">Sign in</Link>
        <Link href="#">Create account</Link>
      </TopBar>

      <MainHeader maxWidth="lg">
        <LogoContainer onClick={() => router.push('/')}>
          <Image
            src="/images/dediro-logo-blue.png"
            width={40}
            height={40}
            alt="Dediro"
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}>
            Dediro
          </Typography>
        </LogoContainer>

        <SynthesisSearchbar />

        <ActionButtons>
          <IconButton size="large" sx={{ color: 'primary.main' }}>
            <BookmarkBorderIcon />
          </IconButton>
          <IconButton size="large" sx={{ color: 'primary.main' }}>
            <ShareIcon />
          </IconButton>
          {!isMobile && (
            <HeaderButton variant="contained" color="primary">
              Try Dediro
            </HeaderButton>
          )}
        </ActionButtons>
      </MainHeader>
    </HeaderContainer>
  );
}

export default SynthesisHeader;