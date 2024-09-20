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
} from './MobileHeader.styles';

interface MobileHeaderProps {
  disableSearch?: boolean;
}

function MobileHeader({ disableSearch = false }: MobileHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleClickAway = () => {
    if (searchOpen) {
      setSearchOpen(false);
    }
  };

  return (
    <Box
      sx={mainContainer}
      flexDirection={disableSearch ? 'row-reverse' : 'row'}
    >
      <BurgerMenu anchorOrigin="left" addBlackIcon={disableSearch} />
      <img
        style={{ width: '50px', height: '50px' }}
        src="images/dediro-logo-white.webp"
        alt="Dediro"
      />
      {!disableSearch ? (
        <IconButton onClick={toggleSearch} sx={iconButton}>
          <SearchIcon sx={searchIconStyles} />
        </IconButton>
      ) : null}
      {searchOpen && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Slide direction="down" in={searchOpen} mountOnEnter unmountOnExit>
            <Box sx={inputContainer}>
              <InputBase placeholder="Search..." sx={inputStyles} />
              <IconButton onClick={toggleSearch} color={'inherit'}>
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
