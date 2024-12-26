export const container = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
};

export const mainTitle = {
  fontWeight: 700,
  fontSize: { xs: '36px', sm: '52px', md: '68px' },
};

export const imageStyle = {
  maxHeight: { sm: '200px', md: '505px' },
  width: '100%',
  borderRadius: '20px',
  objectFit: 'cover',
};

export const articleInfo = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  marginBottom: '15px',
};

export const textTitleContainer = {
  display: 'flex',
  alignItems: 'center',
};

export const infoButton = {
  backgroundColor: '#343967',
  color: 'white',
  borderRadius: '100%',
  height: { sm: 'auto', md: '50px' },
  width: { sm: 'auto', md: '50px' },
  ':hover': {
    background: '#343967',
    filter: 'brightness(130%)',
    boxShadow: '1px 1px 6px',
  },
  padding: 0,
};

export const textTitle = { fontWeight: 700, fontSize: '20px' };

export const textIcon = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
};

export const infoIcon = { color: 'white', height: '30px', width: '30px' };

export const synthesisSummary = {
  width: { sm: '100%', md: '75%' },
  textAlign: 'justify',
  fontSize: '20px',
};
