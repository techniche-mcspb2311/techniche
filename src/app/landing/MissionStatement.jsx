// Notes
/*  Simple stock image of a coding interview (not real), where employees are
    prompted to login to use the dashboard. Also contains mission statement.
*/
import { Typography, Box } from '@mui/material';

export default function MissionStatement() {
    return (
        <Box textAlign='center' pb={5} bgcolor="primary" borderRadius={4} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box textAlign='center'sx={{ width: '50%' }}>
                <Typography variant='h4' color='primary' gutterBottom sx={{ mt: 2}}>
                    Our Mission
                    <Typography textAlign='left' variant='body1' color='primary' justifyContent="center" sx={{ mt: 2}}>
                    At Techniche, our mission is to revolutionize the recruitment process by empowering both 
                    candidates and employers through innovative coding challenges. We strive to bridge the gap 
                    between talent and opportunity by providing a platform where candidates can showcase their 
                    coding skills and potential employers can identify top technical talent efficiently and accurately. 
                    With a commitment to integrity, transparency, and fairness, we aim to redefine the hiring landscape, 
                    making it more inclusive, merit-based, and rewarding for all stakeholders involved. Together, we&apos;re 
                    shaping the future of recruitment, one code challenge at a time.
                    </Typography>
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" pt={3} sx={{ mt: 2, width: '50%' }}>
                <img src="https://media.istockphoto.com/id/153696622/photo/happy-senior-man-giving-thumb-up.jpg?s=612x612&w=0&k=20&c=b2BI4P4vvgEK9AqxQ_gl7EpWnr1BomTJV24RqtGpaRo=" alt="Logo" style={{ height: '100%' }} />
            </Box>
        </Box>
    );
}
