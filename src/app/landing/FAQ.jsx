// Notes
/*  FAQ for employees and candidates (may need to be broken to 2 components?
    Employees: 
        tells employees how to sign in,
    Candidates: 
        Should include a 'meet your code editor' section,
        Tell candidates how long to expect the interview to last
        Ways to prepare for your interview
        Show up early
        How long to hear back after an interview?
*/

import {
    Typography, Box, Accordion, AccordionDetails, AccordionSummary
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function EmployeeFAQ() {
    return (
        <Box mt={4} mb={4}>
            <Typography variant='h6' gutterBottom>
                Employee FAQ
            </Typography>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        Q: How do I sign in?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        When you get to the website, there should be a Sign In
                        button on the top right of the page. Click the Sign In
                        button and you'll be redirected to a sign in page. Enter
                        your email address to be sent a verification link.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        Q: How do I get to the Dashboard?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        When you're signed in, there should be a Dashboard button
                        on the top right. Click the Dashboard button.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export function CandidateFAQ() {
    return (
        <Box mt={4}>
            <Typography variant='h6' gutterBottom>
                Candidate FAQ
            </Typography>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        Q: What code editor can I use during the interview?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You will receive an online code editor.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        Q: How long is the interview?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The interview will last 1 hour at most. You'll get a
                        10 minute warning from your recruiter to let you know
                        when your time is almost up.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        Q: How can I prepare for my interview?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There's a host of sites that will help you prepare for
                        your interview. If you google "coding interview questions"
                        there'll be sites like leetcode that pop up to help you
                        learn the data structures and algorithms necessary to
                        crack the coding interview. Youtube is another free and
                        available resource, but make sure you write the code too.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        Q: What time is the interview?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The interview time will be given by your recruiter so
                        make sure to stay in contact with them throughout the
                        process.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        Q: It says I'm not allowed in the coding room?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Your recruiter should have given you a passkey to allow
                        you to enter the room. Enter the passkey or follow the
                        URL link they have provided.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        Q: How long to hear back after an interview?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Usually you'll hear back with the results from your
                        recruiter in a timely manner. There's a lot of candidates
                        to go through and we try and get answers back within a
                        couple of weeks at most.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
