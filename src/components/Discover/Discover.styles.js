export const titleStyle = {
  fontWeight: '700',
  fontSize: '48px',
  marginBottom: '20px',
};

export const textStyle = {
  fontWeight: '500',
  fontSize: '24px',
  marginBottom: '40px',
};

export const mainContainer = {
  display: 'flex',
  backgroundColor: 'var(--white)',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: { xs: 'var(--xs-padding)', md: 'var(--lg-padding)' },
  paddingY: '120px !important',
  maxWidth: 'var(--max-width) !important',
  margin: '0 auto',
};

export const bottomContainer = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
};

export const inputStyles = {
  height: '100%',
  width: { xs: '100%', md: '70%' },
  boxShadow: 'var(--hard-shadow)',
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

export const ctaButton = {
  color: 'var(--white)',
  backgroundColor: 'var(--orange)',
  textTransform: 'none',
  fontFamily: 'Poppins',
  boxShadow: 'var(--hard-shadow)',
  fontSize: '18px',
  fontWeight: 600,
  borderRadius: 'var(--border-radius)',
  padding: '12px 20px',
  height: '100%',
  width: { xs: '100%', md: '70%' },
  marginTop: '20px',
  zIndex: 2,
};

export const leftSide = {};

export const rightSide = {
  marginTop: { xs: '35px', md: 0 },
};
