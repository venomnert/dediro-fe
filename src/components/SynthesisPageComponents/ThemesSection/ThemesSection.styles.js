export const container = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

// Wikipedia-style section styling
export const sectionContainer = {
  width: '100%',
  marginBottom: '30px',
  padding: '0',
  backgroundColor: 'transparent',
};

export const sectionTitle = {
  fontSize: { xs: '20px', md: '24px' },
  fontWeight: 600,
  color: '#000',
  padding: '8px 0',
  borderBottom: 'none',
  fontFamily: 'Linux Libertine, Georgia, Times, serif',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    width: '100%',
    height: '1px',
    backgroundColor: '#a2a9b1',
  },
};

export const wikiContent = {
  '& p': {
    fontSize: '15px',
    lineHeight: 1.6,
    marginBottom: '16px',
    fontFamily: 'Montserrat, sans-serif',
    color: '#202122',
  },
  '& a': {
    color: '#0645ad',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& ul, & ol': {
    paddingLeft: '40px',
    marginBottom: '16px',
  },
  '& li': {
    marginBottom: '8px',
    fontSize: '15px',
  },
  '& h3': {
    fontSize: '1.2em',
    fontWeight: 'bold',
    margin: '0.5em 0',
    borderBottom: '1px solid #a2a9b1',
    paddingBottom: '0.17em',
    fontFamily: 'Linux Libertine, Georgia, Times, serif',
  },
  '& h4': {
    fontSize: '1.1em',
    fontWeight: 'bold',
    margin: '0.5em 0',
    fontFamily: 'Linux Libertine, Georgia, Times, serif',
  },
  '& blockquote': {
    borderLeft: '4px solid #eaecf0',
    padding: '0.5em 1.25em',
    margin: '1em 0',
    color: '#54595d',
    fontSize: '14px',
  },
  '& sup': {
    fontSize: '0.75em',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
    top: '-0.5em',
  },
};

export const citationLink = {
  color: '#0645ad',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
};

export const h3 = {
  fontSize: { xs: '20px', md: '22px' },
  fontWeight: 600,
  lineHeight: 1.4,
};

export const themeText = {
  textAlign: 'justify',
  fontSize: '16px',
  lineHeight: 1.6,
};

export const h4 = {
  fontSize: '18px',
  fontWeight: 600,
  marginTop: '16px',
  marginBottom: '8px',
};
