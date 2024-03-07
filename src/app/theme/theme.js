"use client"

import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
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
                default: '#82859b',
                paper: '#82859b',
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

const darkModeTheme = createTheme(getDesignTokens('dark'));

export default darkModeTheme;
