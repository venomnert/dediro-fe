export const container = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  maxWidth: { sm: '330px' },
  height: { xs: '150px', md: 'auto' },
  overflow: 'hidden',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
  padding: '20px',
  boxShadow: 'var(--hard-shadow)',
  borderRadius: '10px',
  gap: '5px',
};

export const textContainer = { width: '100%' };

export const titleStyles = {
  fontSize: { xs: '18px', md: '20px' },
  fontWeight: '600',
  margin: '0 0 5px 0',
};
export const briefDescriptionStyles = {
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
};
export const btn = {
  textTransform: 'capitalize',
  color: '#000000',
  fontSize: '1rem',
  padding: 0,
  width: { xs: 'fit-content', md: '170px' },
};
