export const heroSubtitle = {
  fontWeight: 600,
  fontSize: { xs: '24px', md: '32px' },
  color: 'var(--white)',
  marginBottom: '15px',
  marginTop: { xs: '10px', md: '30px' }
};

export const heroStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: { xs: 'column', md:'row' },
  padding: { xs: '30px', md: '80px' },
  paddingTop: { xs: '137px', md: '137px'},
  paddingBottom: { xs: '20px', md: '40px'},
  boxSizing: 'border-box',
  maxWidth: 'var(--max-width) !important',
  margin: '0 auto',
}

export const heroBackground = {
  position: 'relative',
  backgroundImage: 'url("images/hero/hero-bg.png")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
};

export const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
};

export const contentStyle = {
  position: 'relative',
  zIndex: 2,
};

export const leftContainer = {
  width: { xs: '100%', md:'50%' },
  marginBottom: { xs: '35px' },
  flexGrow: 1
}

export const rightContainer = {
  position: 'relative',
  width: { xs: '100%', md: '45%' },
  display: 'flex',
  justifyContent: { xs: 'center', md: 'flex-end'}
}

export const heroTitle = {
  fontWeight: 700,
  fontSize: { xs: '32px', md: '48px'},
  color: 'var(--white)'
}

export const imageContainer = {
  width:'470px',
}

export const heroTextStyles = {
  fontWeight: { xs: 400, md:500 },
  fontSize: '16px',
  color: 'var(--white)',
  width: { xs: '100%', md: '80%' },
  marginBottom: '60px'
}

export const ctaButton = {
  color: 'var(--white)',
  backgroundColor: 'var(--orange)',
  textTransform: 'none',
  fontFamily: 'Poppins',
  boxShadow: 'var(--hard-shadow)',
  fontSize: '18px',
  fontWeight: 600,
  borderRadius: 'var(--border-radius)',
  padding: '10px 20px'
}