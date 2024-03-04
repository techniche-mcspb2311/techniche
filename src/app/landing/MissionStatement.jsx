// Notes
/*  Simple stock image of a coding interview (not real), where employees are
    prompted to login to use the dashboard. Also contains mission statement.
*/
import { Typography, Box } from '@mui/material';

export default function MissionStatement() {
    return (
        <Box textAlign='center' pb={5} bgcolor="#307aff" borderRadius={4}>
            <Box display="flex" justifyContent="center" pt={3}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Techniche_Logo.jpg" alt="Logo" style={{ width: '250px', height: '84px' }} />
            </Box>
            <Box>
                <Typography variant='h4' gutterBottom sx={{ mt: 2 }}>
                    Our Mission
                </Typography>
            </Box>
            <Box sx={{ p: 1 }}>
                <Typography variant='body1' color='textSecondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" pt={3}>
                <img src="https://media.istockphoto.com/id/153696622/photo/happy-senior-man-giving-thumb-up.jpg?s=612x612&w=0&k=20&c=b2BI4P4vvgEK9AqxQ_gl7EpWnr1BomTJV24RqtGpaRo=" alt="Logo" style={{ width: '66%', height: '66%' }} />
            </Box>
        </Box>
    );
}
