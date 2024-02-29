import Image from "next/image";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home() {
    return (
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" gutterBottom>
                    h1. Heading
                </Typography>
                <Button>Check 1 2</Button>
            </Box>
  );
}
