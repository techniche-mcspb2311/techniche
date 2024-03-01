import Image from "next/image";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MissionStatement from './landing/MissionStatement.jsx';

export default function Home() {
    return (
        <Box>
            <MissionStatement />
        </Box>
  );
}
