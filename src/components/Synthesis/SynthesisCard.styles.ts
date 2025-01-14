import { CSSProperties } from 'react';

export const card = {
  border: '2px solid var(--white)',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  padding: '25px',
};

export const titleStyles = {
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: 'Poppins',
  marginBottom: '8px',
  marginTop: { xs: '20px', md: 0 },
  display: 'flex',
  alignItems: 'center',
};

export const descriptionStyles = {
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: 'Poppins',
  marginBottom: '13px',
};

export const leftSide = {
  width: { xs: '100%', md: '20%' },
  overflow: 'hidden',
};

export const rightSide = {
  width: '100%',
  marginLeft: { xs: '0px', md: '17px' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export const imgStyles: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: '15px',
};

export const fireIcon = {
  marginLeft: '10px',
};

export const authorAndDateTextStyles = {
  fontWeight: 500,
  fontSize: '12px',
  fontFamily: 'Poppins',
  marginLeft: '10px',
};

export const authorAndDateContainer = {
  display: 'flex',
  alignItems: 'center',
};

export const authorPicStyles = {
  width: '21px',
  height: '21px',
};
