export const container = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
};

export const image = {
  flexShrink: 0,
  img: {
    objectFit: 'cover',
    borderRadius: { xs: '10px', md: '10px 0 0 10px' },
    width: { xs: '100%', sm: '200px' },
    height: '100%',
  },
};

export const informationContainer = {
  backgroundColor: '#8d99ad85',
  borderRadius: { xs: '10px', md: '0px 10px 10px 0' },
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export const expertName = {
  fontSize: '24px',
  fontWeight: '600',
};
export const expertProfession = {
  fontSize: '15px',
  fontWeight: '500',
};
export const sourceLink = {
  color: '#000000',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};
export const sourceSummary = { fontSize: '12px', textAlign: 'justify' };
