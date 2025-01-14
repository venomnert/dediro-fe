import { Box, Typography } from '@mui/material';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';

interface ITableOfContents {
  title: string;
  description: string;
  content: { subtitle: string; description: string }[];
}

export default function TableOfContents({ content }: any) {
  return (
    <List
      disablePadding
      sx={{
        display: { xs: 'none', md: 'block' },
        bgcolor: 'background.paper',
        maxWidth: '375px',
        zIndex: 1300,
        padding: 0,
        fontFamily: 'var(--font-roboto)',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={{
          fontWeight: '700',
          fontSize: '25px',
          color: '#000000',
          padding: 0,
        }}
      >
        <Typography
          fontFamily="var(--font-roboto) !important"
          sx={{ padding: '20px 0', fontWeight: '700', fontSize: '25px' }}
        >
          Table of contents
        </Typography>
        {content.map((el: ITableOfContents) => (
          <Box
            key={el.title}
            sx={{
              borderLeft: '3px solid #343967 ',
              marginBottom: '20px',
            }}
          >
            <ListItemButton
              href="#title"
              sx={{
                padding: '0px 0px 15px 20px',
              }}
            >
              <Typography
                fontFamily="var(--font-roboto) !important"
                sx={{
                  fontWeight: '600',
                  fontSize: '17px',
                }}
              >
                {el.title}
              </Typography>
            </ListItemButton>
            <List component="div" disablePadding>
              {el.content.map((element) => (
                <ListItemButton
                  key={element.subtitle}
                  href="#subtitle"
                  sx={{
                    padding: 0,
                    paddingLeft: 2,
                    marginLeft: 4,
                    borderLeft: '3px solid #343967 ',
                    marginBottom: '20px',
                  }}
                >
                  <Typography fontFamily="var(--font-roboto) !important">
                    {element.subtitle}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </Box>
        ))}
      </ListSubheader>
    </List>
  );
}
