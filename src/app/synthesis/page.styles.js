export const container = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  maxWidth: { xs: '100%', md: '1200px' },
  margin: '0 auto',
  padding: { xs: '20px', md: '40px' },
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

export const articleHeader = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px',
  borderBottom: '1px solid #a2a9b1',
  paddingBottom: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  padding: { xs: '20px', md: '0' },
};

export const pageTitle = {
  fontSize: { xs: '32px', md: '48px' },
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '10px',
  fontFamily: 'Linux Libertine, Georgia, Times, serif',
};

export const redirectText = {
  fontSize: '14px',
  color: '#54595d',
  marginBottom: '10px',
};

export const articleInfo = {
  fontSize: '14px',
  padding: '10px',
  backgroundColor: '#f8f9fa',
  border: '1px solid #eaecf0',
  borderRadius: '2px',
  marginBottom: '20px',
};

export const tabsContainer = {
  borderBottom: '1px solid #a2a9b1',
  marginBottom: '20px',
  position: 'sticky',
  top: 0,
  backgroundColor: '#fff',
  zIndex: 100,
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  padding: { xs: '0 20px', md: '0' },
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
  gap: { xs: '20px', md: '40px' },
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  padding: { xs: '0 20px', md: '0' },
};

export const sidebarContainer = {
  width: { xs: '100%', md: '280px' },
  flexShrink: 0,
  border: '1px solid #a2a9b1',
  borderRadius: '2px',
  padding: '15px',
  backgroundColor: '#f8f9fa',
  alignSelf: 'flex-start',
  position: { md: 'sticky' },
  top: { md: '80px' },
  maxHeight: { md: 'calc(100vh - 100px)' },
  overflowY: 'auto',
};

export const mainContentContainer = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%',
};