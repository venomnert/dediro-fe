export const linksContainer = {
  color: 'var(--white) !important',
  fontSize: '14px',
  fontWeight: 600,
  height: '100%',
  display: { xs: 'none', md: 'flex' },
  gap: '64px',
};

export const linkStyle = {
  color: 'var(--white) !important',
  textDecoration: 'none',
};

export const headerStyles = {
  position: 'fixed',
  width: '100%',
  zIndex: 3,
};

export const headerContainer = {
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingX: { xs: 'var(--xs-padding)', md: 'var(--lg-padding)' },
  paddingTop: { xs: '20px', md: '30px' },
  zIndex: 3,
  maxWidth: 'var(--max-width) !important',
  margin: '0 auto',
};

export const ctaButton = {
  color: 'var(--white)',
  backgroundColor: 'var(--orange)',
  width: '155px',
  fontWeight: 600,
  fontSize: '12px',
  textTransform: 'none',
  boxShadow: 'var(--hard-shadow)',
  borderRadius: 'var(--border-radius)',
  fontFamily: 'Poppins',
  padding: '5px 15px',
};

export const inputStyles = {
  backgroundColor: 'var(--white)',
  borderRadius: 'var(--border-radius)',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
  },
};
