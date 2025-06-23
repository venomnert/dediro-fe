import { alpha, Theme } from '@mui/material';

// Enhanced Typography System
export const typography = {
  // Primary font stack with fallbacks
  fontFamily: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    secondary: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  
  // Font size scale (16px base)
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
  },
  
  // Font weight scale
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line height scale
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.625,
  },
  
  // Letter spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
};

// Enhanced Color Palette
export const colors = {
  // Primary blues
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Neutral grays
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Semantic colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  
  // Background variants
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
  },
};

// Enhanced spacing system (8px base)
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
};

// Enhanced container styles
export const container = {
  position: 'sticky' as const,
  top: '80px',
  maxHeight: 'calc(100vh - 100px)',
  width: '280px',
  minWidth: '260px',
  overflowY: 'auto' as const,
  backgroundColor: colors.background.primary,
  borderRadius: '12px',
  border: `1px solid ${colors.neutral[200]}`,
  boxShadow: `
    0 1px 3px 0 ${alpha('#000000', 0.1)},
    0 1px 2px 0 ${alpha('#000000', 0.06)}
  `,
  padding: spacing[6],
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Enhanced scrollbar styling
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: colors.neutral[50],
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: colors.neutral[300],
    borderRadius: '3px',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      background: colors.neutral[400],
    },
  },
  
  // Hover effect for entire container
  '&:hover': {
    boxShadow: `
      0 4px 6px -1px ${alpha('#000000', 0.1)},
      0 2px 4px -1px ${alpha('#000000', 0.06)}
    `,
  },
};

// Mobile-specific container
export const mobileContainer = (theme: Theme) => ({
  width: '100%',
  maxWidth: '100%',
  padding: spacing[4],
  borderRadius: 0,
  borderTop: `1px solid ${colors.neutral[200]}`,
  borderBottom: `1px solid ${colors.neutral[200]}`,
  borderLeft: 'none',
  borderRight: 'none',
  boxShadow: 'none',
  position: 'static' as const,
  maxHeight: 'none',
});

// Enhanced title styling
export const title = {
  fontFamily: typography.fontFamily.primary,
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.bold,
  lineHeight: typography.lineHeight.tight,
  letterSpacing: typography.letterSpacing.tight,
  color: colors.neutral[900],
  marginBottom: spacing[5],
  paddingBottom: spacing[3],
  borderBottom: `2px solid ${colors.primary[100]}`,
  position: 'relative' as const,
  
  // Decorative accent
  '&::after': {
    content: '""',
    position: 'absolute' as const,
    bottom: '-2px',
    left: 0,
    width: '32px',
    height: '2px',
    backgroundColor: colors.primary[500],
    borderRadius: '1px',
  },
};

// Enhanced list item styling with depth-based indentation
export const listItem = (depth: number = 0, isActive: boolean = false) => ({
  paddingTop: spacing[2],
  paddingBottom: spacing[2],
  paddingLeft: `${12 + depth * 16}px`, // Progressive indentation
  paddingRight: spacing[3],
  marginBottom: spacing[1],
  borderRadius: '8px',
  borderLeft: '3px solid',
  borderColor: isActive ? colors.primary[500] : 'transparent',
  backgroundColor: isActive 
    ? alpha(colors.primary[50], 0.8)
    : 'transparent',
  cursor: 'pointer',
  transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  minHeight: '44px', // Touch target compliance
  display: 'flex',
  alignItems: 'center',
  position: 'relative' as const,
  
  // Hover effects
  '&:hover': {
    backgroundColor: isActive 
      ? alpha(colors.primary[100], 0.6)
      : alpha(colors.neutral[100], 0.8),
    borderColor: isActive 
      ? colors.primary[600]
      : colors.neutral[300],
    transform: 'translateX(2px)',
  },
  
  // Focus styles for accessibility
  '&:focus-visible': {
    outline: `2px solid ${colors.primary[500]}`,
    outlineOffset: '2px',
    backgroundColor: alpha(colors.primary[50], 0.8),
  },
  
  // Active press state
  '&:active': {
    transform: 'translateX(1px)',
    transition: 'transform 0.1s ease',
  },
  
  // Depth-based visual cues
  ...(depth > 0 && {
    '&::before': {
      content: '""',
      position: 'absolute' as const,
      left: `${8 + (depth - 1) * 16}px`,
      top: '50%',
      width: '8px',
      height: '1px',
      backgroundColor: colors.neutral[300],
      transform: 'translateY(-50%)',
    },
  }),
});

// Enhanced text styling with better hierarchy
export const listItemText = (isActive: boolean = false, depth: number = 0) => ({
  fontFamily: typography.fontFamily.primary,
  fontSize: depth === 0 ? typography.fontSize.base : typography.fontSize.sm,
  fontWeight: isActive 
    ? typography.fontWeight.semibold 
    : depth === 0 
      ? typography.fontWeight.medium 
      : typography.fontWeight.normal,
  lineHeight: typography.lineHeight.normal,
  letterSpacing: typography.letterSpacing.normal,
  color: isActive 
    ? colors.primary[700]
    : depth === 0 
      ? colors.neutral[800]
      : colors.neutral[600],
  transition: 'color 0.15s ease',
  
  // Text overflow handling
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical' as const,
  
  // Hover text color
  '.MuiListItemButton-root:hover &': {
    color: isActive 
      ? colors.primary[800]
      : colors.neutral[900],
  },
});

// Floating action button for mobile
export const floatingButton = (theme: Theme) => ({
  position: 'fixed' as const,
  bottom: spacing[6],
  right: spacing[6],
  width: '56px',
  height: '56px',
  backgroundColor: colors.primary[600],
  color: '#ffffff',
  borderRadius: '50%',
  boxShadow: `
    0 10px 15px -3px ${alpha('#000000', 0.1)},
    0 4px 6px -2px ${alpha('#000000', 0.05)}
  `,
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 1000,
  
  '&:hover': {
    backgroundColor: colors.primary[700],
    transform: 'translateY(-2px)',
    boxShadow: `
      0 20px 25px -5px ${alpha('#000000', 0.1)},
      0 10px 10px -5px ${alpha('#000000', 0.04)}
    `,
  },
  
  '&:active': {
    transform: 'translateY(0)',
  },
});

// Drawer content for mobile
export const drawerContent = {
  width: '320px',
  maxWidth: '90vw',
  padding: spacing[6],
  height: '100%',
  overflowY: 'auto' as const,
  backgroundColor: colors.background.primary,
};

// Section heading with enhanced styling
export const sectionHeading = (isActive: boolean = false) => ({
  fontSize: typography.fontSize.base,
  fontWeight: isActive 
    ? typography.fontWeight.bold 
    : typography.fontWeight.semibold,
  lineHeight: typography.lineHeight.tight,
  letterSpacing: typography.letterSpacing.normal,
  color: isActive 
    ? colors.primary[700] 
    : colors.neutral[800],
  marginBottom: spacing[2],
  transition: 'color 0.15s ease',
});

// Collapse/expand icon styling
export const expandIcon = (isExpanded: boolean = false) => ({
  color: colors.neutral[500],
  fontSize: '1.25rem',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
  
  '&:hover': {
    color: colors.primary[600],
  },
});

// Progress indicator for reading progress
export const progressIndicator = (progress: number = 0) => ({
  position: 'absolute' as const,
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  backgroundColor: colors.neutral[200],
  
  '&::after': {
    content: '""',
    position: 'absolute' as const,
    top: 0,
    left: 0,
    height: '100%',
    width: `${progress}%`,
    backgroundColor: colors.primary[500],
    transition: 'width 0.3s ease',
  },
});

// Loading skeleton styles
export const skeletonStyles = {
  backgroundColor: colors.neutral[200],
  borderRadius: '4px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  
  '@keyframes pulse': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.5,
    },
  },
};

// Responsive breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Media query helpers
export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  
  // Touch device detection
  touch: '@media (hover: none) and (pointer: coarse)',
  hover: '@media (hover: hover) and (pointer: fine)',
};

// Animation presets
export const animations = {
  // Smooth slide in from left
  slideInLeft: {
    '@keyframes slideInLeft': {
      '0%': {
        transform: 'translateX(-100%)',
        opacity: 0,
      },
      '100%': {
        transform: 'translateX(0)',
        opacity: 1,
      },
    },
    animation: 'slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Fade in with scale
  fadeInScale: {
    '@keyframes fadeInScale': {
      '0%': {
        transform: 'scale(0.95)',
        opacity: 0,
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 1,
      },
    },
    animation: 'fadeInScale 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Accessibility enhancements
export const a11y = {
  // Screen reader only text
  srOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap' as const,
    border: 0,
  },
  
  // Focus ring
  focusRing: {
    '&:focus-visible': {
      outline: `2px solid ${colors.primary[500]}`,
      outlineOffset: '2px',
    },
  },
  
  // High contrast mode support
  highContrast: {
    '@media (prefers-contrast: high)': {
      borderColor: 'ButtonText',
      color: 'ButtonText',
    },
  },
};

// Performance optimizations
export const performance = {
  // GPU acceleration for smooth animations
  willChange: 'transform, opacity',
  
  // Contain layout shifts
  contain: 'layout style paint',
  
  // Optimize repaints
  backfaceVisibility: 'hidden' as const,
  perspective: 1000,
};