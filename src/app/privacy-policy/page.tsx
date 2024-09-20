'use client';

import React from 'react';
import { Typography, Box, Link, List, ListItem } from '@mui/material';
import {
  containerStyles,
  headerStyles,
  dateStyles,
  listItemStyles,
  sectionStyles,
  subSubHeaderStyles,
  subHeaderStyles,
} from '@/components/Common/privacy-policy/PageComponents';
import Header from '@/components/Header/Header';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header disableSearch />
      <Box sx={{ height: '1px' }} />
      <Box sx={containerStyles}>
        <Typography variant="h1" sx={headerStyles}>
          Dediro Privacy Policy
        </Typography>
        <Typography variant="body2" sx={dateStyles}>
          Last Updated: 8/14/2024
        </Typography>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            1. Introduction
          </Typography>
          <Typography>
            Welcome to Dediro. We&apos;re committed to protecting your privacy
            and ensuring you have a positive experience on our platform. This
            policy outlines our practices concerning the collection, use, and
            sharing of your personal information.
          </Typography>
        </Box>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            2. Information We Collect
          </Typography>

          <Typography variant="h3" sx={subSubHeaderStyles}>
            2.1 Information You Provide to Us
          </Typography>
          <List>
            <ListItem sx={listItemStyles}>
              Account information (e.g., name, email address)
            </ListItem>
            <ListItem sx={listItemStyles}>Profile information</ListItem>
            <ListItem sx={listItemStyles}>
              Content you create, share, or interact with
            </ListItem>
            <ListItem sx={listItemStyles}>Communications with us</ListItem>
          </List>

          <Typography variant="h3" sx={subSubHeaderStyles}>
            2.2 Information We Collect Automatically
          </Typography>
          <List>
            <ListItem sx={listItemStyles}>
              Usage data (e.g., pages visited, time spent on the platform)
            </ListItem>
            <ListItem sx={listItemStyles}>Device information</ListItem>
            <ListItem sx={listItemStyles}>Location information</ListItem>
            <ListItem sx={listItemStyles}>
              Cookies and similar technologies
            </ListItem>
          </List>
        </Box>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            3. How We Use Your Information
          </Typography>
          <Typography>We use your information to:</Typography>
          <List>
            <ListItem sx={listItemStyles}>
              Provide, maintain, and improve our services
            </ListItem>
            <ListItem sx={listItemStyles}>Personalize your experience</ListItem>
            <ListItem sx={listItemStyles}>Communicate with you</ListItem>
            <ListItem sx={listItemStyles}>
              Analyze usage patterns and trends
            </ListItem>
            <ListItem sx={listItemStyles}>Ensure platform security</ListItem>
          </List>
        </Box>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            4. How We Share Your Information
          </Typography>
          <Typography>
            We do not sell your personal information. We may share your
            information:
          </Typography>
          <List>
            <ListItem sx={listItemStyles}>
              With service providers who help us operate our platform
            </ListItem>
            <ListItem sx={listItemStyles}>
              To comply with legal obligations
            </ListItem>
            <ListItem sx={listItemStyles}>With your consent</ListItem>
          </List>
        </Box>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            5. Your Choices and Rights
          </Typography>
          <Typography>You have the right to:</Typography>
          <List>
            <ListItem sx={listItemStyles}>
              Access and update your personal information
            </ListItem>
            <ListItem sx={listItemStyles}>Delete your account</ListItem>
            <ListItem sx={listItemStyles}>
              Opt-out of certain data collection and use
            </ListItem>
            <ListItem sx={listItemStyles}>
              Object to the processing of your personal information
            </ListItem>
          </List>
        </Box>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            6. Data Security
          </Typography>
          <Typography>
            We implement robust security measures to protect your information.
            However, no system is 100% secure, and we cannot guarantee the
            absolute security of your data.
          </Typography>
        </Box>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            7. Children&apos;s Privacy
          </Typography>
          <Typography>
            Our services are not directed to children under 13. We do not
            knowingly collect personal information from children under 13.
          </Typography>
        </Box>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            8. Changes to This Policy
          </Typography>
          <Typography>
            We may update this policy from time to time. We will notify you of
            any significant changes by posting a notice on our website or
            sending you an email.
          </Typography>
        </Box>

        <Box component="section" sx={sectionStyles}>
          <Typography variant="h2" sx={subHeaderStyles}>
            9. Contact Us
          </Typography>
          <Typography>
            If you have any questions about this privacy policy, please contact
            us at{' '}
            <Link href="mailto:privacy@dediro.com" sx={{ color: '#3498db' }}>
              farzad@dediro.com
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
