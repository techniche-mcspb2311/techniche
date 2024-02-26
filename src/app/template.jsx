import Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import Box from './components/Box';

export default function Template({ children }) {
    return (
        <Box>
            <NavBar />
            <Container maxWidth="md">
                {children}
            </Container>
        </Box>
    );
}
