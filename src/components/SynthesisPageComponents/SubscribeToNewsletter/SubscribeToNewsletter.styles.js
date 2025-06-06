export const container = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: { xs: '24px', md: '40px' },
  width: '100%',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  padding: { xs: '24px', md: '32px' },
  marginTop: '32px',
  marginBottom: '32px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  border: '1px solid #eaecf0',
};

export const formContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flex: 1,
  maxWidth: { xs: '100%', md: '60%' },
};

export const title = {
  fontSize: { xs: '20px', md: '24px' },
  fontWeight: '600',
  color: '#202122',
  lineHeight: 1.3,
  marginBottom: '8px',
  fontFamily: 'Linux Libertine, Georgia, Times, serif',
};

export const description = {
  fontSize: '15px',
  color: '#54595d',
  lineHeight: 1.6,
  marginBottom: '20px',
  fontFamily: 'Montserrat, sans-serif',
};

export const imgContainer = { 
  display: { xs: 'none', md: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
  flex: '0 0 auto',
  maxWidth: '200px',
};

export const img = { 
  width: '100%',
  maxWidth: '180px',
  height: 'auto',
  borderRadius: '4px',
  objectFit: 'cover',
};

export const ctaContainer = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: '12px',
  alignItems: { xs: 'stretch', sm: 'center' },
  marginTop: '8px',
};