// Wikipedia-style user menu at the top
export const wikiUserMenu = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '5px 20px',
  backgroundColor: '#f8f9fa',
  borderBottom: '1px solid #eaecf0',
};

// Main header container
export const container = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  justifyContent: 'space-between',
  padding: '20px',
  borderBottom: '1px solid #a2a9b1',
  minHeight: '80px',
};

// Logo styles
export const logo = {
  maxWidth: '63px',
  width: '100%',
  color: 'blue',
  cursor: 'pointer',
};

export const wikiLogo = {
  maxWidth: '45px',
  width: '100%',
  cursor: 'pointer',
};

// Navigation links container
export const wikiNavContainer = {
  display: 'flex',
  padding: '5px 20px',
  backgroundColor: '#f8f9fa',
  borderBottom: '1px solid #a2a9b1',
};

// Navigation link style
export const wikiNavLink = {
  color: '#0645ad',
  textDecoration: 'none',
  fontSize: '14px',
  '&:hover': {
    textDecoration: 'underline',
  },
};

// Button container
export const buttonsContainer = {
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
};

// Button style
export const button = {
  display: { xs: 'none', sm: 'block' },
  fontSize: '16px',
  width: '120px',
  height: '40px',
  borderRadius: '4px',
  backgroundColor: '#343967',
  fontWeight: '600',
  textTransform: 'capitalize',
  marginLeft: '10px',
};
