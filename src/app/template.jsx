import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles';
import darkModeTheme from "./theme/theme";

export default function Template({ children }) {
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
