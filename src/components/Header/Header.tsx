import { Box, Button, InputAdornment, TextField } from '@mui/material';
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
import { AnimatedBurger } from '../Common/AnimatedBurger';

function Header() {
  const links = [
    { url: '/', title: 'HOME' },
    { url: '/topics', title: 'EXPLORE TOPICS' },
    { url: '/faq', title: 'FAQ' },
    { url: '/testimonials', title: 'TESTIMONIALS' },
    { url: '/about-us', title: 'OUR STORY' },
  ];

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
        <Button sx={ctaButton}>Subscribe to the stories that matter</Button>
        {/* <AnimatedBurger /> */}
      </Box>
    </Box>
  );
}

export default Header;
