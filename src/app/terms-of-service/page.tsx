import React from 'react';
import { Box, Typography, Link, List, ListItem } from '@mui/material';
import Header from '@/components/Header/Header';

const containerSx = {
  padding: '20px',
  maxWidth: '900px',
  margin: '150px auto',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  lineHeight: '1.6',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerSx = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#55d6be',
};

const dateSx = {
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '30px',
};

const sectionSx = {
  marginBottom: '40px',
};

const subHeaderSx = {
  fontSize: '1.8rem',
  marginBottom: '15px',
  color: '#2c3e50',
};

const subSubHeaderSx = {
  fontSize: '1.4rem',
  marginBottom: '10px',
  color: '#34495e',
};

const textSx = {
  marginBottom: '15px',
};

const listSx = {
  paddingLeft: '20px',
  marginBottom: '20px',
};

const listItemSx = {
  marginBottom: '10px',
};

const linkSx = {
  color: '#3498db',
  textDecoration: 'none',
};

const TermsOfService: React.FC = () => {
  return (
    <>
      <Header disableSearch />
      <Box sx={{ height: '1px' }} />
      <Box sx={containerSx}>
        <Typography variant="h1" sx={headerSx}>
          Dediro Terms of Service
        </Typography>
        <Typography sx={dateSx}>Last Updated: 8/14/2024</Typography>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            1. Acceptance of Terms
          </Typography>
          <Typography sx={textSx}>
            By accessing or using Dediro&apos;s services, you agree to be bound
            by these Terms of Service (&quot;Terms&quot;). If you disagree with
            any part of the terms, you may not access the service.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            2. Description of Service
          </Typography>
          <Typography sx={textSx}>
            Dediro provides an AI-powered platform for curating and synthesizing
            knowledge from diverse expert sources, offering personalized,
            in-depth understanding on various topics.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            3. User Accounts
          </Typography>
          <Typography variant="h3" sx={subSubHeaderSx}>
            3.1. Account Creation
          </Typography>
          <Typography sx={textSx}>
            You must create an account to use certain features of our service.
            You are responsible for maintaining the confidentiality of your
            account and password.
          </Typography>
          <Typography variant="h3" sx={subSubHeaderSx}>
            3.2. Accuracy of Information
          </Typography>
          <Typography sx={textSx}>
            You agree to provide accurate, current, and complete information
            during the registration process and to update such information to
            keep it accurate, current, and complete.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            4. User Conduct
          </Typography>
          <Typography sx={textSx}>
            You agree not to use the service to:
          </Typography>
          <List sx={listSx}>
            <ListItem sx={listItemSx}>Violate any laws or regulations</ListItem>
            <ListItem sx={listItemSx}>
              Infringe on the rights of others
            </ListItem>
            <ListItem sx={listItemSx}>
              Distribute spam, malware, or other harmful content
            </ListItem>
            <ListItem sx={listItemSx}>
              Attempt to gain unauthorized access to any part of the service
            </ListItem>
          </List>
          <Typography sx={textSx}>
            You agree to use the service for personal, non-commercial use unless
            explicitly authorized by Dediro.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            5. Intellectual Property
          </Typography>
          <Typography variant="h3" sx={subSubHeaderSx}>
            5.1. Ownership
          </Typography>
          <Typography sx={textSx}>
            The service and its original content, features, and functionality
            are owned by Dediro and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </Typography>
          <Typography variant="h3" sx={subSubHeaderSx}>
            5.2. Restrictions
          </Typography>
          <Typography sx={textSx}>
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, publicly perform, republish, download, store,
            or transmit any of the material on our service, except as incidental
            to normal web browsing.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            6. User-Generated Content
          </Typography>
          <Typography variant="h3" sx={subSubHeaderSx}>
            6.1. License Grant
          </Typography>
          <Typography sx={textSx}>
            By posting content to the service, you grant us the right to use,
            modify, publicly perform, publicly display, reproduce, and
            distribute such content on and through the service.
          </Typography>
          <Typography variant="h3" sx={subSubHeaderSx}>
            6.2. Usage Rights
          </Typography>
          <Typography sx={textSx}>
            You agree that this license includes the right for us to make your
            content available to other users of the service, who may also use
            your content subject to these Terms.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            7. Termination
          </Typography>
          <Typography sx={textSx}>
            We may terminate or suspend your account and bar access to the
            service immediately, without prior notice or liability, under our
            sole discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of the Terms.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            8. Limitation of Liability
          </Typography>
          <Typography sx={textSx}>
            In no event shall Dediro, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or
            inability to access or use the service.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            9. Disclaimer
          </Typography>
          <Typography sx={textSx}>
            Your use of the service is at your sole risk. The service is
            provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
            The service is provided without warranties of any kind, whether
            express or implied.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            10. Governing Law
          </Typography>
          <Typography sx={textSx}>
            These Terms shall be governed and construed in accordance with the
            laws of [Jurisdiction], without regard to its conflict of law
            provisions.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            11. Changes to Terms
          </Typography>
          <Typography sx={textSx}>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. We will provide notice of any significant
            changes. By continuing to access or use our service after those
            revisions become effective, you agree to be bound by the revised
            terms.
          </Typography>
        </Box>

        <Box sx={sectionSx}>
          <Typography variant="h2" sx={subHeaderSx}>
            12. Contact Us
          </Typography>
          <Typography sx={textSx}>
            If you have any questions about these Terms, please contact us at{' '}
            <Link href="mailto:farzad@dediro.com" sx={linkSx}>
              farzad@dediro.com
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TermsOfService;
