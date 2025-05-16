'use client';

import { Box, Button, Typography, Link } from '@mui/material';
import {
  button,
  buttonsContainer,
  container,
  logo,
  wikiNavContainer,
  wikiNavLink,
  wikiUserMenu,
  wikiLogo
} from './SynthesisHeader.styles';

import Image from 'next/image';
import React from 'react';
import SynthesisSearchbar from './SynthesisSearchbar';
import { useRouter } from 'next/navigation';

function SynthesisHeader() {
  const router = useRouter();

  return (
    <>
      {/* Wikipedia-style personal tools menu */}
      <Box sx={wikiUserMenu}>
        <Box sx={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
          <Link href="#" sx={wikiNavLink}>Not logged in</Link>
          <Link href="#" sx={wikiNavLink}>Talk</Link>
          <Link href="#" sx={wikiNavLink}>Contributions</Link>
          <Link href="#" sx={wikiNavLink}>Create account</Link>
          <Link href="#" sx={wikiNavLink}>Log in</Link>
        </Box>
      </Box>

      <Box sx={container}>
        {/* Left side with logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            onClick={() => router.push('/')}
            src="images/dediro-logo-blue.png"
            width={63}
            height={62}
            style={wikiLogo}
            alt="Dediro"
          />
          <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold', fontSize: '18px' }}>
            Dediro
          </Typography>
        </Box>

        {/* Center with search */}
        <SynthesisSearchbar />

        {/* Right side with buttons */}
        <Box sx={buttonsContainer}>
          <Button variant="contained" sx={button}>
            Try Dediro
          </Button>
        </Box>
      </Box>

      {/* Wikipedia-style navigation links */}
      <Box sx={wikiNavContainer}>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Link href="#" sx={wikiNavLink}>Main page</Link>
          <Link href="#" sx={wikiNavLink}>Contents</Link>
          <Link href="#" sx={wikiNavLink}>Current events</Link>
          <Link href="#" sx={wikiNavLink}>Random article</Link>
          <Link href="#" sx={wikiNavLink}>About Dediro</Link>
          <Link href="#" sx={wikiNavLink}>Contact us</Link>
          <Link href="#" sx={wikiNavLink}>Donate</Link>
        </Box>
      </Box>
    </>
  );
}

export default SynthesisHeader;
