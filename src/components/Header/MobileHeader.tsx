'use client';
import {
  Box,
  IconButton,
  InputBase,
  Slide,
  ClickAwayListener,
} from '@mui/material';
import React, { useState } from 'react';
import BurgerMenu from '../Common/BurgerMenu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {
  inputContainer,
  mainContainer,
  iconButton,
  searchIconStyles,
  inputStyles,
  logoContainer,
  logoImage,
} from './MobileHeader.styles';
import { useRouter } from 'next/navigation';

interface MobileHeaderProps {
  disableSearch?: boolean;
}

function MobileHeader({ disableSearch = false }: MobileHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleClickAway = () => {
    if (searchOpen) {
      setSearchOpen(false);
    }
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={logoContainer}>
        <img
          style={logoImage}
          src="images/dediro-logo-white.webp"
          alt="Dediro"
          onClick={handleGoHome}
        />
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {!disableSearch && (
          <IconButton onClick={toggleSearch} sx={iconButton}>
            <SearchIcon sx={searchIconStyles} />
          </IconButton>
        )}
        <BurgerMenu anchorOrigin="right" addBlackIcon={disableSearch} />
      </Box>

      {searchOpen && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Slide direction="down" in={searchOpen} mountOnEnter unmountOnExit>
            <Box sx={inputContainer}>
              <InputBase
                placeholder="Search..."
                sx={inputStyles}
                autoFocus
              />
              <IconButton onClick={toggleSearch} size="small">
                <CloseIcon />
              </IconButton>
            </Box>
          </Slide>
        </ClickAwayListener>
      )}
    </Box>
  );
}

export default MobileHeader;