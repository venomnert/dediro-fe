import { Box, InputBase, IconButton, Paper, Tooltip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import React, { useState } from 'react';

const Search = styled(Paper)(({ theme }) => ({
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
  transition: 'all 0.2s ease',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 2),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: alpha(theme.palette.common.black, 0.4),
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(1),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '0.95rem',
    width: '100%',
    transition: theme.transitions.create('width'),
  },
}));

const FilterButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: alpha(theme.palette.common.black, 0.4),
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

function SynthesisSearchbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <Search
      elevation={searchFocused ? 2 : 0}
      sx={{
        transform: searchFocused ? 'scale(1.01)' : 'scale(1)',
      }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for topics..."
        inputProps={{ 'aria-label': 'search' }}
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
      />
      <Tooltip title="Filter search">
        <FilterButton size="small" aria-label="filter search">
          <TuneIcon />
        </FilterButton>
      </Tooltip>
    </Search>
  );
}

export default SynthesisSearchbar;