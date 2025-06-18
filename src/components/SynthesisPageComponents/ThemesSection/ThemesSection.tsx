import { Box, Typography, Divider, Paper } from '@mui/material';
import {
  container,
  h3,
  h4,
  themeText,
  sectionContainer,
  sectionTitle,
  citationLink,
  wikiContent,
} from './ThemesSection.styles';
import MarkdownIt from 'markdown-it';

import ExpertQuote from './ExpertQuote';
import { IThemeSection } from '@/types';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import SourcesModal from './SourcesModal/SourcesModal';

// A component that safely renders HTML content
const SafeHtml = ({ content }: { content: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On the server or during initial hydration, render plain text
  if (!mounted) {
    return (
      <span>{content.replace(/<[^>]*>?/gm, '').substring(0, 100)}...</span>
    );
  }

  // After hydration on the client, render the HTML
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

// Client-side only component to render HTML content
const ClientOnlyHtml = dynamic(() => Promise.resolve(SafeHtml), {
  ssr: false,
});

// Define the citation interface based on what's being used
interface ICitation {
  author: string;
  title: string;
}

function ThemesSection({ themesSection, experts }: IThemeSection) {
  // Helper function to ensure HTML content has proper IDs for headers
  const ensureHeaderIds = (content: string): string => {
    if (!content) return '';

    // If the content is already HTML, return it as is
    // This assumes the HTML content already has proper IDs for headers
    return content.trim();
  };
  if (themesSection.length) {
    return (
      <Box>
        {themesSection.map((el, i) => {
          return (
            <Paper key={i} elevation={0} sx={sectionContainer}>
              {/* Wikipedia-style section heading */}
              <Typography id={`section-${i + 1}`} variant="h2" sx={sectionTitle}>
                {el.title}
              </Typography>
              <Divider sx={{ mb: 3 }} />

              {/* Wikipedia-style content */}
              <Box sx={container}>
                {/* Handle content based on whether it's a string or an array */}
                <Box sx={wikiContent}>
                    <div>
                      {el.content.map((item, index) => (
                        <div key={index} style={{ marginBottom: '24px' }}>
                          <Typography
                            variant="h4"
                            sx={h4}
                            id={item.subtitle
                              .toLowerCase()
                              .replace(/[^\w\s-]/g, '')
                              .replace(/\s+/g, '-')}
                          >
                            {item.subtitle}
                          </Typography>
                          <Typography>{item.description}</Typography>
                        </div>
                      ))}
                    </div>
                </Box>

                {el.quote && (
                  <Box
                    sx={{
                      my: 3,
                      pl: 2,
                      borderLeft: '3px solid #c8ccd1',
                      backgroundColor: '#f8f9fa',
                      padding: '16px 20px',
                      borderRadius: '2px',
                    }}
                  >
                    <Typography id={el.quote?.text} variant="h3" sx={h3}>
                      &ldquo;{el.quote?.text}&rdquo;
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1, fontStyle: 'italic' }}
                    >
                      — {el.quote?.expertName}, {el.quote?.profession}
                    </Typography>
                  </Box>
                )}

                {/* Citation section like Wikipedia */}
                {experts && experts.length > 0 && (
                  <Box sx={{ mt: 3, mb: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: '16px', fontWeight: 'bold', mb: 1 }}
                    >
                      References
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                      }}
                    >
                      {experts.slice(0, 3).map((expert, idx: number) => (
                        <Box key={idx} sx={{ display: 'flex', gap: '5px' }}>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 'bold' }}
                          >
                            [{idx + 1}]
                          </Typography>
                          <Typography variant="body2">
                            {expert.name},{' '}
                            <Box component="span" sx={citationLink}>
                              {expert.profession}
                            </Box>
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                <Box sx={{ mt: 2, mb: 3 }}>
                  <SourcesModal experts={experts} />
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Box>
    );
  }
}

export default ThemesSection;
