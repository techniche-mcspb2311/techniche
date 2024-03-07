// Notes
/*  Simple stock image of a coding interview (not real), where employees are
    prompted to login to use the dashboard. Also contains mission statement.
*/
import { Typography, Box } from '@mui/material';

export default function MissionStatement() {
    return (
        <Box textAlign='center' pb={5} bgcolor="primary" borderRadius={4} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box>
                <Typography variant='h4' color='primary' gutterBottom sx={{ mt: 2}}>
                    Our Mission
                </Typography>
            </Box>
            <Box textAlign='left' justifyContent='center' sx={{ p: 1, width: '50%' }}>
                <Typography variant='body1' color='primary' justifyContent="center" sx={{ mt: 2, width: '50%' }}>
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
            <Box display="flex" justifyContent="left" pt={3} sx={{ mt: 2, width: '50%' }}>
                <img src="https://cdn-icons-png.freepik.com/256/3206/3206188.png?uid=R138868875&ga=GA1.1.1299048768.1708570662&" alt="Logo" style={{ width: '66%', height: '66%' }} />
            </Box>
        </Box>
    );
}
