'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { links } from '../Header/utils';
import { containerStyles, linkStyle, menuBtnStyle } from './BurgerMenu.styles';
import Link from 'next/link';

interface BurgerProps {
  anchorOrigin?: number | 'right' | 'center' | 'left';
  addBlackIcon: boolean;
}

export default function BurgerMenu({
  anchorOrigin = 'right',
  addBlackIcon,
}: BurgerProps) {
  console.log(anchorOrigin);
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
            sx={{
              ml: { xs: 0, md: 2 },
              backgroundColor: addBlackIcon ? 'black' : 'transparent',
            }}
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
        sx={{ marginTop: '15px' }}
      >
        {links.map((link) => (
          <MenuItem key={`menu-${link.title}`} onClick={handleClose}>
            <Link style={linkStyle} href={link.url}>
              {link.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
