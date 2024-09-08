import { CSSProperties } from 'react';

export const slotPaperStyles = {
  overflow: 'visible',
  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
  mt: 1.5,
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 1,
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: 'background.paper',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0,
  },
};

export const menuBtnStyle = { color: 'var(--white)', width: 32, height: 32 };

export const containerStyles = {
  display: { xs: 'flex', lg: 'none' },
  alignItems: 'center',
  textAlign: 'center',
};

export const linkStyle: CSSProperties = {
  color: 'var(--black)',
  textDecoration: 'none',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '15px',
  borderRadius: '50px',
};

export const ctaButton = {
  color: 'var(--white)',
  backgroundColor: 'var(--orange)',
  width: '100%',
  height: '100%',
  fontWeight: 600,
  fontSize: { xs: '16px', md: '12px' },
  textTransform: 'none',
  boxShadow: 'var(--hard-shadow)',
  borderRadius: 'var(--border-radius)',
  fontFamily: 'Poppins',
  // padding: '5px 15px',
  display: 'block',
};
