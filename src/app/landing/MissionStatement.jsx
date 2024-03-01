// Notes
/*  Simple stock image of a coding interview (not real), where employees are
    prompted to login to use the dashboard. Also contains mission statement.
*/
import { Typography, Box } from '@mui/material';

export default function MissionStatement() {
    return (
        <Box textAlign='center' bgcolor="#307aff" borderRadius={4}>
            <Box sx={{ p: 1 }}>
                <Typography variant='h4' gutterBottom sx={{ mt: 2 }}>
                    Our Mission Statement
                </Typography>
            </Box>
            <Box sx={{ p: 1 }}>
                <Typography variant='body1' color='textSecondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
                    sed do eiusmod tempor incididunt ut labore et dolore magna\
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis\
                    aute irure dolor in reprehenderit in voluptate velit esse\
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
                    cupidatat non proident, sunt in culpa qui officia deserunt\
                    mollit anim id est laborum.
                </Typography>
            </Box>
        </Box>
    );
}
