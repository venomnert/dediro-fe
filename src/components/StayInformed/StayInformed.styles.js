export const inputStyles = {
  height: '100%',
  width:'100%',
  boxShadow: 'var(--hard-shadow)',
  backgroundColor: 'var(--white)',
  borderRadius: 'var(--border-radius)',
  "& .MuiOutlinedInput-root": {
      "& fieldset": {
          border: 'none'
      },
      "&.Mui-focused fieldset": {
          border: 'none'
      },
      "&:hover fieldset": {
          border: 'none'
      },
  }
}

export const ctaButton = {
  color: 'var(--white)',
  backgroundColor: 'var(--orange)',
  textTransform: 'none',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: 600,
  boxShadow: 'var(--hard-shadow)',
  borderRadius: 'var(--border-radius)',
  padding: '12px 20px',
  height: '100%',
  width: '100%',
  marginTop: '20px',
  zIndex: 2
}

export const leftSide = {
  width: { xs: '100%', md: '50%' },
  marginBottom: { xs: '50px', md: 0}
}

export const rightSide = {
  width: { xs: '100%', md: '45%' },
}

export const mainContainer = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  backgroundColor: 'var(--gray)',
  justifyContent: 'space-between',
  padding: { xs: 'var(--xs-padding)', md: 'var(--lg-padding)' },
  paddingY: '120px !important',
  maxWidth: 'var(--max-width) !important',
  margin: '0 auto',
}

export const backgroundOnly = {
  backgroundColor: 'var(--gray)',
}

export const title = {
  fontWeight: 700,
  fontSize: '48px',
  color: 'var(--white)',
  marginBottom: '25px'
}

export const text = {
  fontWeight: 500,
  fontSize: '24px',
  color: 'var(--white)',
  marginBottom: '40px'
}

export const btnContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: { xs: '100%', md: '450px' }
}