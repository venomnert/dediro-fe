import { alpha, Theme } from '@mui/material';

// Container for the Table of Contents with enhanced mobile support
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
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
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

// Mobile-specific container styles
export const mobileContainer = (theme: Theme) => ({
  width: '100%',
  maxWidth: '100%',
  padding: theme.spacing(2),
  borderRadius: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  borderLeft: 'none',
  borderRight: 'none',
  boxShadow: 'none',
});

// Enhanced title with better visual hierarchy
export const title = {
  fontWeight: 700,
  fontSize: '1.2rem',
  mb: 2,
  pb: 1,
  borderBottom: '1px solid',
  borderColor: 'divider',
  letterSpacing: '0.01em',
};

export const active = {
  backgroundColor: '#e3f2fd',
  borderLeft: '3px solid #1876d2',
  transition: 'background 0.2s, border-color 0.2s',
}

// Enhanced list item with improved touch targets for mobile
export const listItem = (depth: number = 0, isActive: boolean = false) => ({
  py: 0.8, // Increased vertical padding for better touch targets
  px: 1 + depth * 1.5, // Adjusted indentation for better readability
  my: 0.3, // Add margin for better visual separation
  borderLeft: '3px solid', // Slightly thicker border for better visibility
  borderColor: isActive ? 'primary.main' : 'transparent',
  bgcolor: isActive ? alpha('#1976d2', 0.08) : 'transparent',
  borderRadius: '4px', // Rounded corners for a more modern look
  '&:hover': {
    bgcolor: alpha('#1976d2', 0.04),
  },
  transition: 'all 200ms ease',
  minHeight: '44px', // Ensure minimum height for touch targets (7-10mm)
  display: 'flex',
  alignItems: 'center',
});

// Enhanced text with better readability and contrast
export const listItemText = (isActive: boolean = false) => ({
  fontSize: '1rem', // Increased to 16px for better readability on mobile
  color: isActive ? 'primary.main' : 'text.primary',
  fontWeight: isActive ? 600 : 400,
  lineHeight: 1.4, // Improved line height for readability
  letterSpacing: '0.01em', // Slight letter spacing for better readability
});

// Floating button styles for mobile
export const floatingButton = (theme: Theme) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  width: '56px',
  height: '56px', // Large enough for comfortable tapping (10mm)
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  boxShadow: theme.shadows[4],
  zIndex: 1000,
});

// Drawer content styles
export const drawerContent = {
  width: '280px',
  maxWidth: '90vw', // Responsive width
  padding: 2,
  height: '100%',
  overflowY: 'auto',
};

// Section heading style for better hierarchy
export const sectionHeading = (isActive: boolean = false) => ({
  fontSize: '1.05rem',
  fontWeight: isActive ? 700 : 600,
  color: isActive ? 'primary.main' : 'text.primary',
  letterSpacing: '0.02em',
});
