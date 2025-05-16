export const container = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  maxWidth: { xs: '100%', md: '1200px' },
  padding: { xs: '10px', md: '20px' },
};

export const subContainer = {
  display: 'flex',
  gap: '40px',
};

export const sectionsContainer = {
  display: 'flex',
  gap: '100px',
  flexDirection: 'column',
  width: { xs: '100%', md: '85%' },
};

// Wikipedia-style layout
export const articleHeader = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
};

export const pageTitle = {
  fontSize: { xs: '28px', md: '32px' },
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '5px',
};

export const redirectText = {
  fontSize: '14px',
  color: '#54595d',
  marginBottom: '10px',
};

export const articleInfo = {
  fontSize: '14px',
  padding: '7px 9px',
  backgroundColor: '#f8f9fa',
  border: '1px solid #eaecf0',
  borderRadius: '2px',
  marginBottom: '10px',
};

export const tabsContainer = {
  borderBottom: '1px solid #a2a9b1',
  marginBottom: '20px',
  '& .MuiTabs-indicator': {
    backgroundColor: '#343967',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    minWidth: 'auto',
    padding: '8px 16px',
    fontSize: '14px',
    color: '#0645ad',
    '&.Mui-selected': {
      color: '#343967',
      fontWeight: 'bold',
    },
  },
};

export const articleContainer = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: { xs: '20px', md: '30px' },
};

export const sidebarContainer = {
  width: { xs: '100%', md: '250px' },
  flexShrink: 0,
  border: '1px solid #a2a9b1',
  borderRadius: '2px',
  padding: '15px',
  backgroundColor: '#f8f9fa',
  alignSelf: 'flex-start',
  position: { md: 'sticky' },
  top: { md: '20px' },
};

export const mainContentContainer = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
};

