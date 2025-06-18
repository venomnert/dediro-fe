import {
  Box,
  Typography,
  List,
  ListItemButton,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
  Tooltip,
  Collapse,
  Fade,
  ListItem,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React, { useEffect, useState, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import * as styles from './TableOfContents.styles';

interface TableOfContentsProps {
  themesSection: {
    title: string;
    theme: {
      theme_title: string;
      content: {
        subtopics: {
          subtitle: string;
          description: string;
        }[];
      };
    };
  }[];
}

export default function TableOfContents({
  themesSection,
}: TableOfContentsProps) {
  const [expandedThemes, setExpandedThemes] = useState<{[key: number]: boolean}>({});

  /**
   * Toggles the expanded/collapsed state of a theme section
   * @param themeIndex - The index of the theme to toggle
   */
  const toggleThemeVisibility = (themeIndex: number) => {
    // Update the expanded themes state
    setExpandedThemes(currentExpandedState => {
      // Create a copy of the current state
      const updatedExpandedState = { ...currentExpandedState };

      // Toggle the selected theme's expanded state (true becomes false, false becomes true)
      updatedExpandedState[themeIndex] = !currentExpandedState[themeIndex];
      
      return updatedExpandedState;
    });
  };

  return (
    <nav aria-label="Table of contents">
      {themesSection && themesSection.map((theme, index) => (
        <List key={index}>
          <ListItemButton onClick={() => toggleThemeVisibility(index)}>
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle1">{theme?.theme?.theme_title}</Typography>
              <IconButton size="small">
                {expandedThemes[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
          </ListItemButton>
          <Collapse in={expandedThemes[index]} timeout="auto" unmountOnExit>
            <List>
              {theme?.theme?.content?.subtopics && theme.theme.content.subtopics.map((subtopic, subtopicIndex) => (
                <ListItem key={subtopicIndex}>
                  <Typography variant="subtitle2">{subtopic?.subtitle}</Typography>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      ))}
    </nav>
  );
}
