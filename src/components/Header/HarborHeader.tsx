import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderBottom: '1px solid #E5E7EB',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
}));

const HeaderContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3),
  maxWidth: '1200px',
}));

const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Playfair Display, serif',
  fontSize: '1.75rem',
  fontWeight: 700,
  color: '#2C3E50',
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const Navigation = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: '#2C3E50',
  fontSize: '1rem',
  fontWeight: 500,
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#DC143C',
  },
}));

const UtilityLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  color: '#2C3E50',
  '&:hover': {
    color: '#DC143C',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#DC143C',
  color: '#FFFFFF',
  padding: theme.spacing(1, 3),
  fontSize: '0.875rem',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#B91C3C',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#2C3E50',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '280px',
    padding: theme.spacing(2),
  },
}));

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Academics', href: '/academics' },
  { label: 'Research', href: '/research' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact-us' },
];

function HarborHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (href: string) => {
    router.push(href);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        {/* Logo */}
        <Logo onClick={handleLogoClick}>
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: '#DC143C',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'Playfair Display, serif',
              }}
            >
              H
            </Typography>
          </Box>
          <LogoText>Harbor University</LogoText>
        </Logo>

        {/* Desktop Navigation */}
        <Navigation>
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              onClick={() => handleNavigation(item.href)}
            >
              {item.label}
            </NavLink>
          ))}
        </Navigation>

        {/* Utility Links */}
        <UtilityLinks>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <ContactButton onClick={() => handleNavigation('/contact-us')}>
            Contact
          </ContactButton>
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon />
          </MobileMenuButton>
        </UtilityLinks>

        {/* Mobile Menu */}
        <MobileDrawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Playfair Display, serif',
                color: '#2C3E50',
              }}
            >
              Menu
            </Typography>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List>
            {navigationItems.map((item) => (
              <ListItem
                key={item.label}
                button
                onClick={() => handleNavigation(item.href)}
                sx={{
                  '&:hover': {
                    backgroundColor: '#F8F9FA',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiTypography-root': {
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      color: '#2C3E50',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </MobileDrawer>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default HarborHeader;