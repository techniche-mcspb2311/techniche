import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';

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
