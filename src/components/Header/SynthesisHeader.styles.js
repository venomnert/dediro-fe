export const container = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '20px',
  borderBottom: '1px solid #000000',
  minHeight: '100px',
};
export const logo = { maxWidth: '63px', width: '100%', color: 'blue' };

export const buttonsContainer = {
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '300px',
  alignItems: 'center',
  justifyContent: { xs: 'right', ml: 'right', lg: 'space-between' },
  width: { xs: 'fit-content', ml: 'fit-content', lg: '100%' },
};

export const iconButton = {
  borderRadius: '100%',
  height: '50px',
  width: '50px',
  backgroundColor: '#343967',
  ':hover': {
    background: '#343967',
    filter: 'brightness(130%)',
    boxShadow: '1px 1px 6px',
  },
  padding: 0,
};

export const button = {
  display: { xs: 'none', ml: 'none', lg: 'block' },
  fontSize: '20px',
  width: '155px',
  height: '50px',
  borderRadius: '100px',
  backgroundColor: '#343967',
  fontWeight: '600',
  textTransform: 'capitalize',
  marginLeft: '10px',
};
