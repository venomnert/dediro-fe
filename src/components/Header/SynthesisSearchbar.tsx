import { Box, InputBase, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 3,
  backgroundColor: alpha(theme.palette.common.black, 0.04),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '600px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: alpha(theme.palette.common.black, 0.4),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '0.95rem',
  },
}));

function SynthesisSearchbar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for topics..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

export default SynthesisSearchbar;