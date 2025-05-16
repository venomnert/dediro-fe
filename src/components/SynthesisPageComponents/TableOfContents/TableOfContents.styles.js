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

export const titleStyle = {
  fontWeight: '600',
  fontSize: '15px',
  padding: '5px 10px',
  color: '#0645ad',
};

export const subTitleStyle = {
  padding: '2px 10px',
  paddingLeft: 15,
  fontSize: '14px',
  marginBottom: '5px',
};

// Wikipedia-style h2 heading in table of contents
export const h2Style = {
  padding: '3px 10px 3px 20px',
  fontSize: '14px',
  color: '#0645ad',
  '&:hover': {
    backgroundColor: '#eaecf0',
  },
};

// Wikipedia-style h3 heading in table of contents
export const h3Style = {
  padding: '2px 10px 2px 30px',
  fontSize: '13px',
  color: '#0645ad',
  '&:hover': {
    backgroundColor: '#eaecf0',
  },
};
