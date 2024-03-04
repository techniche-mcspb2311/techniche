import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Template({ children }) {
    return (
        <Box>
            <NavBar />
            <Container maxWidth="100%">
                {children}
            </Container>
            <Footer />
        </Box>
    );
}
