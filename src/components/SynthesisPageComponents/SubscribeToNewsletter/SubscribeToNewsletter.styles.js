export const container = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  gap: '40px',
  width: '100%',
  backgroundColor: '#f8f9fa',
  borderRadius: '16px',
  padding: '40px',
  marginTop: '48px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
};

export const formContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  flex: 1,
};

export const title = {
  fontSize: { xs: '24px', md: '32px' },
  fontWeight: '700',
  color: '#1a1a1a',
  lineHeight: 1.2,
};

export const description = {
  fontSize: '16px',
  color: '#666',
  lineHeight: 1.6,
  marginBottom: '16px',
};

export const imgContainer = { 
  display: 'flex',
  alignItems: 'center',
  flex: 1,
};

export const img = { 
  width: '100%',
  maxHeight: '400px',
  borderRadius: '12px',
  objectFit: 'cover',
};