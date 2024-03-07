import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useTheme, ThemeProvider,  } from '@mui/material/styles';
import darkModeTheme from "./theme/theme";
import { useColorMode } from './theme/ColorMode';

export default function Template({ children }) {
    const { toggleColorMode, theme } = useColorMode();

    return (
        <Box>
            <ThemeProvider theme={darkModeTheme}>
                <NavBar />
                <Container maxWidth="100%">
                    {children}
                </Container>
                <Footer />
            </ThemeProvider>
        </Box>
    );
}
