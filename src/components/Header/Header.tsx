import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { links } from './utils';
import {
  ctaButton,
  headerContainer,
  headerStyles,
  inputStyles,
  linksContainer,
  linkStyle,
} from './Header.styles';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import React from 'react';
import BurgerMenu from '../Common/BurgerMenu';

function Header() {
  return (
    <Box sx={headerStyles}>
      <Box sx={headerContainer}>
        <img src="images/dediro-logo.svg" alt="Dediro" />
        <Box sx={linksContainer}>
          {links.map((link) => (
            <Link style={linkStyle} passHref key={link.title} href={link.url}>
              {link.title}
            </Link>
          ))}
        </Box>
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
        <Button sx={ctaButton}>Join for free</Button>
        <BurgerMenu />
      </Box>
    </Box>
  );
}

export default Header;
