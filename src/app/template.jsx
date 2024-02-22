import Container from '@mui/material/Container';
import NavBar from './components/NavBar';

export default function Template({ children }) {
    return (
        <>
            <NavBar />
            <Container maxWidth="md">
                {children}
            </Container>
        </>
    );
}
