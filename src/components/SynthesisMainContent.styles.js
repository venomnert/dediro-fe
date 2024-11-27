import { color } from 'framer-motion';

export const container = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
};

export const mainTitle = {
  fontWeight: 700,
  fontSize: '68px',
};

export const imageStyle = {
  maxHeight: '500px',
  width: '100%',
  borderRadius: '20px',
};

export const articleInfo = {
  display: 'flex',
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
  height: '50px',
  width: '50px',
  ':hover': {
    background: '#343967',
    filter: 'brightness(130%)',
    boxShadow: '1px 1px 6px',
  },
  padding: 0,
};
export const infoIcon = { color: 'white', height: '30px', width: '30px' };

export const textTitle = { fontWeight: 700, fontSize: '20px' };

export const textIcon = { display: 'flex', gap: '10px', alignItems: 'center' };

export const synthesisSummary = { width: '75%', textAlign: 'justify' };
