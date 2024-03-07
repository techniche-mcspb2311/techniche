"use client"

import React, { createContext, useContext, useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

    const getDesignTokens = () => ({
        palette: {
            mode,
            primary: {
                ...amber,
                ...(mode === 'dark' && {
                    main: amber[300],
                }),
            },
            ...(mode === 'dark' && {
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
            }),
            text: {
                ...(mode === 'light'
                    ? {
                        primary: grey[900],
                        secondary: grey[800],
                    }
                    : {
                        primary: '#fff',
                        secondary: grey[500],
                    }
                ),
            },
        },
    });

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens()),
    [mode],
  );

  return { toggleColorMode, theme };
};

export const useColorModeContext = () => useContext(ColorModeContext);
