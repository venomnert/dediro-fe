'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';
import { links } from '../Header/utils';
import { Button, InputAdornment, TextField } from '@mui/material';
import { ctaButton, inputStyles } from '../Header/Header.styles';
import {
  containerStyles,
  linkStyle,
  menuBtnStyle,
  slotPaperStyles,
} from './BurgerMenu.styles';
import Link from 'next/link';

export default function BurgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={containerStyles}>
        <Tooltip title="Open Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'open-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {open ? (
              <MenuOpenIcon sx={menuBtnStyle} />
            ) : (
              <MenuIcon sx={menuBtnStyle} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="links-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: slotPaperStyles,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Button sx={ctaButton}>Join for free</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TextField
            id="search"
            placeholder='Search...'
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
        </MenuItem>
        <Divider /> */}
        {links.map((link) => (
          <MenuItem key={`menu-${link.title}`} onClick={handleClose}>
            {/* <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account */}
            <Link style={linkStyle} href={link.url}>
              {link.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
