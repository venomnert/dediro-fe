export const inputContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  zIndex: 1300,
  padding: '0 16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  borderRadius: '0',
};

export const mainContainer = {
  display: 'flex',
  position: 'relative',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const iconButton = {
  color: 'var(--white)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
};

export const searchIconStyles = {
  fontSize: '24px',
};

export const inputStyles = {
  flexGrow: 1,
  marginRight: '8px',
  '& .MuiInputBase-root': {
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    padding: '4px 8px',
  },
};

export const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

export const logoImage = {
  width: '40px',
  height: '40px',
  userSelect: 'none',
  cursor: 'pointer',
};