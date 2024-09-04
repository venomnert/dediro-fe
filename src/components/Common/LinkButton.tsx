/* eslint-disable @next/next/no-img-element */
import { IconButton } from '@mui/material';
import React from 'react'

interface LinkProps {
  href: string;
  logoUrl: string;
}

const linkStyle = {
  color: 'var(--white)',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '18px',
  borderRadius: '50px'
}


function LinkButton({ href, logoUrl }: LinkProps ) {
  return (
    <a style={linkStyle} href={href} rel='noopener noreferrer' target='_blank'>
      <IconButton sx={{userSelect: 'none', borderRadius: '10px'}}>
        <img src={logoUrl} alt='href' />
      </IconButton>
    </a>
  )
}

export default LinkButton