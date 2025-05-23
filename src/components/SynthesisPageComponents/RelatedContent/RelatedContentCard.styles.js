export const container = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  },
};

export const textContainer = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

export const titleStyles = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#1a1a1a',
  marginBottom: '12px',
  lineHeight: 1.3,
};

export const briefDescriptionStyles = {
  fontSize: '16px',
  color: '#666',
  lineHeight: 1.5,
  marginBottom: '16px',
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: '3',
  WebkitBoxOrient: 'vertical',
};

export const btn = {
  textTransform: 'none',
  color: '#343967',
  fontSize: '15px',
  fontWeight: '600',
  padding: '8px 16px',
  marginTop: 'auto',
  alignSelf: 'flex-start',
  borderRadius: '6px',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(52, 57, 103, 0.08)',
  },
};