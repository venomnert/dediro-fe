import { Box, Typography, List, ListItemButton, IconButton, Drawer, useTheme, useMediaQuery, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React, { useEffect, useState, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  marginBottom: '40px', // Add spacing after header
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
    transition: 'opacity 0.2s ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
}));

const MainHeader = styled(Box)(({ theme }) => ({
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
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.8,
  },
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

const HeaderButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1, 3),
  fontWeight: 600,
  boxShadow: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    boxShadow: 'none',
    transform: 'translateY(-1px)',
    backgroundColor: theme.palette.primary.dark,
  },
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.2s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-1px)',
  },
}));

const NotificationBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 4,
  right: 4,
  width: 8,
  height: 8,
  backgroundColor: theme.palette.error.main,
  borderRadius: '50%',
}));

function SynthesisHeader() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer
      sx={{
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        transform: `translateY(${isScrolled ? 0 : 0}px)`,
      }}
    >
      <TopBar>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/help">Help</Link>
      </TopBar>

      <MainHeader maxWidth="lg">
        <LogoContainer onClick={() => router.push('/')}>
          <Image
            src="/images/dediro-logo-blue.png"
            width={40}
            height={40}
            alt="Dediro"
            priority
          />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold', 
              display: { xs: 'none', sm: 'block' },
              color: theme.palette.primary.main,
            }}
          >
            Dediro
          </Typography>
        </LogoContainer>

        <SynthesisSearchbar />

        <ActionButtons>
          <Tooltip title="Notifications">
            <IconButtonStyled size="large" sx={{ position: 'relative' }}>
              <NotificationsNoneIcon />
              {hasNotifications && <NotificationBadge />}
            </IconButtonStyled>
          </Tooltip>
          
          <Tooltip title="Bookmarks">
            <IconButtonStyled size="large">
              <BookmarkBorderIcon />
            </IconButtonStyled>
          </Tooltip>
          
          <Tooltip title="Share">
            <IconButtonStyled size="large">
              <ShareIcon />
            </IconButtonStyled>
          </Tooltip>

          {!isMobile && (
            <>
              <HeaderButton 
                variant="outlined" 
                color="primary"
                startIcon={<AccountCircleIcon />}
              >
                Sign In
              </HeaderButton>
              <HeaderButton 
                variant="contained" 
                color="primary"
              >
                Try Dediro
              </HeaderButton>
            </>
          )}
        </ActionButtons>
      </MainHeader>
    </HeaderContainer>
  );
}

export default SynthesisHeader;