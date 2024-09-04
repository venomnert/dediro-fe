export const mainContainer = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  padding: { xs: 'var(--xs-padding)', md: 'var(--lg-padding)' },
  paddingY: '120px !important',
  color: 'var(--white)',
  maxWidth: 'var(--max-width) !important',
  margin: '0 auto',
};

export const leftSide = {
  width: { xs: '100%', md: '50%' },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
export const rightSide = {
  width: { xs: '100%', md: '40%' },
};

export const sectionTitle = {
  fontWeight: 700,
  fontSize: '64px',
  marginBottom: '20px',
  marginTop: { xs: '70px', md: 0 },
};

export const sectionSubtitle = {
  fontWeight: 500,
  fontSize: '18px',
  marginBottom: '60px',
};

export const leftImgStyle = {
  width: '100%',
};

export const ctaButton = {
  color: 'var(--blue)',
  backgroundColor: 'var(--white)',
  textTransform: 'none',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: 600,
  borderRadius: 'var(--border-radius)',
  padding: '12px 20px',
  height: 'auto',
  width: { xs: '100%', md: 'auto' },
  maxWidth: '430px',
  marginTop: '40px',
  zIndex: 2,
};
export const backgroundOnly = {
  backgroundColor: 'var(--blue)',
};
