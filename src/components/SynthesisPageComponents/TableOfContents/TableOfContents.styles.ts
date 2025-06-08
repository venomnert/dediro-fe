import { alpha } from '@mui/material';

export const container = {
  position: 'sticky',
  top: '80px',
  maxHeight: 'calc(100vh - 100px)',
  overflowY: 'auto',
  backgroundColor: 'background.paper',
  borderRadius: 1,
  border: '1px solid',
  borderColor: 'divider',
  padding: 2,
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'background.default',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'grey.400',
    borderRadius: '3px',
    '&:hover': {
      background: 'grey.600',
    },
  },
};

export const title = {
  fontWeight: 700,
  fontSize: '1.1rem',
  mb: 2,
  pb: 1,
  borderBottom: '1px solid',
  borderColor: 'divider',
};

export const listItem = (depth: number = 0, isActive: boolean = false) => ({
  py: 0.5,
  px: 1 + depth * 2,
  borderLeft: '2px solid',
  borderColor: isActive ? 'primary.main' : 'transparent',
  bgcolor: isActive ? alpha('#1976d2', 0.08) : 'transparent',
  '&:hover': {
    bgcolor: alpha('#1976d2', 0.04),
  },
  transition: 'background-color 200ms ease, border-left 200ms ease',
});

export const listItemText = (isActive: boolean = false) => ({
  fontSize: '0.9rem',
  color: isActive ? 'primary.main' : 'text.primary',
  fontWeight: isActive ? 600 : 400,
});
