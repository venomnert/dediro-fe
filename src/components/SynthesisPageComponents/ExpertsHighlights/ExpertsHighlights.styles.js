export const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: { xs: '10px', md: '30px' },
  width: '100%',
};

export const expertsH2 = {
  fontWeight: '700',
  fontSize: { xs: '24px', md: '36px' },
  textAlign: 'center',
};

export const expertsParagraph = {
  textAlign: 'center',
  fontSize: { xs: '12px', sm: '1rem' },
  margin: { xs: '5px 0', md: '15px 0' },
};

export const cardsContainer = {
  display: 'flex',
  flexWrap: { xs: 'no-wrap', sm: 'wrap' },
  gap: '15px',
  overflow: { xs: 'scroll', sm: 'auto' },
  maxWidth: '850px',
  minWidth: '269px',
  width: '100%',
  justifyContent: { xs: 'start', sm: 'center' },
};

export const viewMoreButton = {
  backgroundColor: '#343967',
  borderRadius: '100px',
  padding: '15px',
  textTransform: 'capitalize',
  fontWeight: '600',
  width: '230px',
  display: { xs: 'none', md: 'block' },
};
