import { Box, Typography } from '@mui/material'
import {
  copyrightStyle,
  linkStyle,
  linksContainer,
  mainContainer,
  socialLinksContainer
} from './Footer.styles'
import { footerLinks, socialLinks } from './utils'
import Link from 'next/link'
import React from 'react'
import LinkButton from '../Common/LinkButton'


function Footer() {
  return (
    <Box sx={mainContainer}>
      <Box sx={linksContainer}>
        {footerLinks.map(({ title, url }) => (
          <Link style={linkStyle} key={title} href={url}>{title}</Link>
        ))}
      </Box>
      <Box sx={socialLinksContainer}>
        {socialLinks.map(({ logo, url }) => (
          <LinkButton key={url} href={url} logoUrl={logo}/>
        ))}
      </Box>
      <Typography sx={copyrightStyle}>© 2024 Dediro. All rights reserved.</Typography>
    </Box>
  )
}

export default Footer