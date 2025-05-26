export const linksContainer = {
  color: 'var(--white) !important',
  fontSize: '14px',
  fontWeight: 600,
  height: '100%',
  alignItems: 'center',
  display: { xs: 'none', lg: 'flex' },
  gap: { xs: '35px', xl: '64px' },
  marginLeft: { xs: '35px', xl: '68px' },
};

export const linkStyle = {
  color: 'var(--white) !important',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
};

export const blackLinkStyle = {
  color: 'var(--black) !important',
  textDecoration: 'none',
};

export const headerStyles = {
  position: 'fixed',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

export const desktopHeaderContainer = {
  boxSizing: 'border-box',
  display: { xs: 'none', sm: 'flex' },
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '70px',
  width: '100%',
  paddingX: { xs: '16px', md: '40px' },
  maxWidth: 'var(--max-width)',
  margin: '0 auto',
};

export const mobileHeaderContainer = {
  boxSizing: 'border-box',
  display: { xs: 'flex', sm: 'none' },
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '60px',
  width: '100%',
  padding: '0 16px',
  maxWidth: 'var(--max-width)',
  margin: '0 auto',
};

export const ctaButton = {
  color: 'var(--white)',
  backgroundColor: 'var(--orange)',
  minWidth: '120px',
  height: '40px',
  fontWeight: 600,
  fontSize: '14px',
  textTransform: 'none',
  boxShadow: 'var(--hard-shadow)',
  borderRadius: 'var(--border-radius)',
  fontFamily: 'Poppins',
  display: { xs: 'none', md: 'block' },
  marginLeft: '16px',
  '&:hover': {
    backgroundColor: '#a93300',
  },
};

export const inputStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  display: { xs: 'none', sm: 'block' },
  borderRadius: 'var(--border-radius)',
  minWidth: '200px',
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--orange)',
    },
  },
  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
};

export const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.9,
  },
};

export const logoImage = {
  width: { xs: '40px', sm: '50px' },
  height: { xs: '40px', sm: '50px' },
  userSelect: 'none',
};