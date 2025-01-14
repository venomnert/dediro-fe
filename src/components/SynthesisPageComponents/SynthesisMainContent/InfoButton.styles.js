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

export const infoIcon = { color: 'white', height: '30px', width: '30px' };

export const modalContainer = {
  backdropFilter: 'blur(1px)',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
};
export const modalSubContainer = {
  backgroundColor: '#FFFFFF',
  width: '90vw',
  maxWidth: { xs: '700px', md: '1000px' },
  height: 'auto',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '10px',
};

export const infoContainer = {
  display: 'flex',
  position: 'relative',
  width: 'auto',
  padding: '20px',
  justifyContent: 'space-between',
  paddingBottom: '15px',
};
export const infoSubContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export const titleStyles = {
  fontSize: { xs: '24px', md: '48px' },
  fontWeight: '700',
  width: { xs: '90%', md: '100%' },
};

export const cardContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px',
};
