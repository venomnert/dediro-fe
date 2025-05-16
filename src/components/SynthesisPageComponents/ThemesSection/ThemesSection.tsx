import { Box, Typography, Divider, Paper } from '@mui/material';
import { container, h3, h4, themeText, sectionContainer, sectionTitle, citationLink, wikiContent } from './ThemesSection.styles';
import MarkdownIt from 'markdown-it';

import ExpertQuote from './ExpertQuote';
import { IThemeSection } from '@/types';
import React from 'react';
import SourcesModal from './SourcesModal/SourcesModal';

// Define the citation interface based on what's being used
interface ICitation {
  author: string;
  title: string;
}

function ThemesSection({ themesSection, experts }: IThemeSection) {
  const md = new MarkdownIt();
  
  // Helper function to add IDs to headers in markdown content
  const addIdsToHeaders = (content: string): string => {
    if (!content) return '';
    
    // Process the content line by line
    return content.split('\n').map(line => {
      // Check if the line is a header
      const headerMatch = line.match(/^(#{1,6})\s+(.+?)\s*$/);
      if (headerMatch) {
        const level = headerMatch[1].length; // Number of # symbols
        const text = headerMatch[2].trim();
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        
        // Replace the header with one that has an ID
        return `<h${level} id="${id}">${text}</h${level}>`;
      }
      return line;
    }).join('\n');
  };
  if (themesSection.length) {
    return themesSection.map((el, i) => {
      return (
        <Paper key={i} elevation={0} sx={sectionContainer}>
          {/* Wikipedia-style section heading */}
          <Typography id={`section-${i+1}`} variant="h2" sx={sectionTitle}>
            {i+1}. {el.title || `Theme ${i+1}`}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          
          {/* Wikipedia-style content */}
          <Box sx={container}>
            {/* Handle content based on whether it's a string or an array */}
            <Box sx={wikiContent}>
              {typeof el.content === 'string' ? (
                <div dangerouslySetInnerHTML={{ 
                  __html: md.render(addIdsToHeaders(el.content)) 
                }} />
              ) : (
                <div>
                  {el.content.map((item, index) => (
                    <div key={index}>
                      <Typography 
                        variant="h4" 
                        sx={h4}
                        id={item.subtitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}
                      >
                        {item.subtitle}
                      </Typography>
                      <Typography sx={themeText}>
                        {item.description}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
            </Box>
            
            {el.quote && (
              <Box sx={{ my: 2, pl: 2, borderLeft: '3px solid #c8ccd1' }}>
                <Typography id={el.quote?.text} variant="h3" sx={h3}>
                  "{el.quote?.text}"
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
                  — {el.quote?.expertName}, {el.quote?.profession}
                </Typography>
              </Box>
            )}

            {el.quote && (
              <ExpertQuote
                name={el.quote?.expertName}
                image={el.quote?.image}
                profession={el.quote?.profession}
                text={el.quote?.text}
              />
            )}

            {/* Citation section like Wikipedia */}
            {/* Using experts array as citations for demonstration */}
            {experts && experts.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', mb: 1 }}>
                  References
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {experts.map((expert, idx: number) => (
                    <Box key={idx} sx={{ display: 'flex', gap: '5px' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>[{idx + 1}]</Typography>
                      <Typography variant="body2">
                        {expert.name}, <Box component="span" sx={citationLink}>{expert.profession}</Box>
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            <SourcesModal experts={experts} />
          </Box>
        </Paper>
      );
    });
  }
}

export default ThemesSection;
