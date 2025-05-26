'use client';

import { Box, InputAdornment, TextField } from '@mui/material';
import { links } from './utils';
import {
  ctaButton,
  desktopHeaderContainer,
  mobileHeaderContainer,
  headerStyles,
  inputStyles,
  linksContainer,
  linkStyle,
  logoContainer,
  logoImage,
} from './Header.styles';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import React from 'react';
import BurgerMenu from '../Common/BurgerMenu';
import MobileHeader from './MobileHeader';
import CTAForm from '../Common/CTA/CTAForm';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  disableSearch?: boolean;
}

function Header({ disableSearch = false }: HeaderProps) {
  const router = useRouter();
  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Box sx={headerStyles}>
      <Box sx={desktopHeaderContainer}>
        <Box sx={logoContainer} onClick={handleGoHome}>
          <img
            style={logoImage}
            src="images/dediro-logo-white.webp"
            alt="Dediro"
          />
          <Box sx={linksContainer}>
            {links.map((link) => (
              <Link style={linkStyle} passHref key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </Box>
        </Box>
        
        {!disableSearch && (
          <TextField
            id="search"
            placeholder="Search..."
            sx={inputStyles}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        )}
        
        <CTAForm
          ctaTextValue="Join for free"
          buttonCustomStyles={ctaButton}
          disableEmailInput
        />
        <BurgerMenu addBlackIcon={disableSearch} />
      </Box>
      
      <Box sx={mobileHeaderContainer}>
        <MobileHeader disableSearch={disableSearch} />
      </Box>
    </Box>
  );
}

export default Header;