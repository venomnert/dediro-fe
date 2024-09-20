'use client';
import Header from '@/components/Header/Header';
import { Box, Typography } from '@mui/material';
import React from 'react';
// import HeaderNotHome from '../header/Header2';

const styles: React.CSSProperties = {
  padding: '20px',
  maxWidth: '900px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  lineHeight: '1.6',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '150px',
  textAlign: 'center',
};

const linkStyles = {
  color: '#3498db',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const titleStyles = {
  color: '#55d6be',
  fontSize: '2.5rem',
  marginBottom: '20px',
};

const paragraphStyles = { fontSize: '1.2rem', marginBottom: '20px' };

const ContactUs = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ height: '10px' }} />
      <Header disableSearch />
      <Box style={styles}>
        <Typography component="h1" style={titleStyles}>
          Contact Us
        </Typography>
        <Typography style={paragraphStyles}>
          We’d love to hear from you! For any inquiries, feedback, or support,
          please reach out to us via email.
        </Typography>
        <Typography style={paragraphStyles}>
          You can contact us at:{' '}
          <a style={linkStyles} href="mailto:farzad@dediro.com">
            farzad@dediro.com
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
