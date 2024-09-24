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
} from './Header.styles';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import React from 'react';
import BurgerMenu from '../Common/BurgerMenu';
import MobileHeader from './MobileHeader';
import CTAForm from '../Common/CTA/CTAForm';

interface HeaderProps {
  disableSearch?: boolean;
}

function Header({ disableSearch = false }: HeaderProps) {
  return (
    <Box sx={headerStyles}>
      <Box sx={desktopHeaderContainer}>
        <img
          style={{ width: '50px', height: '50px' }}
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
        {!disableSearch ? (
          <TextField
            id="search"
            placeholder="Search..."
            sx={inputStyles}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
          />
        ) : null}
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
