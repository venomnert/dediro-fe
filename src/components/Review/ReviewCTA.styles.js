export const ctaTitle = {
  fontWeight: 700,
  color: 'var(--white)',
  fontSize: '32px',
  width: 'fit-content',
  marginBottom: '35px',
  textAlign: { xs: 'center', md: 'initial' },
};

export const ctaCard = {
  backgroundColor: 'var(--blue)',
  borderRadius: '50px',
  padding: { xs: '40px', md: '110px' },
  marginTop: '100px',
  width: { xs: '100%', md: '80%' },
  position: 'relative',
  boxShadow: 'var(--hard-shadow)',
  overflow: 'hidden',
};

export const inputStyles = {
  height: '100%',
  width: { xs: '100%', md: '300px' },
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
  color: 'var(--black)',
  backgroundColor: 'var(--green)',
  textTransform: 'none',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: 600,
  borderRadius: 'var(--border-radius)',
  padding: '12px 20px',
  height: '100%',
  marginLeft: { xs: '0px', md: '20px' },
  width: { xs: '100%', md: 'auto' },
  marginTop: { xs: '15px', md: 0 },
  zIndex: 2,
};
