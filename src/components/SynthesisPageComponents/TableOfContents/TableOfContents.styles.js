export const container = {
  display: { xs: 'none', md: 'block' },
  bgcolor: '#f8f9fa',
  maxWidth: '250px',
  border: '1px solid #a2a9b1',
  borderRadius: '2px',
  zIndex: 1300,
  padding: 0,
  fontFamily: 'var(--font-roboto)',
};

export const listContainer = {
  fontWeight: '700',
  fontSize: '25px',
  color: '#000000',
  maxHeight: '600px',
  overflow: 'auto',
  padding: '0',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
};

export const tableOfContentsLabel = {
  fontWeight: '700',
  fontSize: '18px',
  padding: '15px 10px',
  borderBottom: '1px solid #a2a9b1',
};

export const contentContainer = {
  marginBottom: '10px',
};

export const h2Style = {
  padding: '3px 10px 3px 20px',
  fontSize: '14px',
  transition: 'color 0.2s ease',
};

export const h3Style = {
  padding: '2px 10px 2px 30px',
  fontSize: '13px',
  transition: 'color 0.2s ease',
};

export const titleStyle = {
  padding: '5px 10px',
  fontSize: '15px',
  fontWeight: 500,
  transition: 'color 0.2s ease',
};