"use client";

import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditAccount from './EditAccount';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AvailableRooms from './AvailableRooms';
import Calendar from './Calendar';
import Candidates from './CandidateList/Candidates';
import Notifications from './Notifications/Notifications';



export default function Dashboard() {
    const { data: session } = useSession({
        // required session: https://next-auth.js.org/getting-started/client#require-session
        required: true
    });

    return (
        // <Box>
        //   <Typography>Dashboard</Typography>
        //   <Box>
        //     {`Currently logged in as: ${session && session.user.email}`}
        //   </Box>
        // </Box>
      <>
        <CssBaseline />
        <Container maxWidth="100vw" sx={{ display: 'flex' }}>
          {/* left-most column component */}
          <Box sx={{ width: '25%', position:'relative', bgcolor: 'white', height: '90vh', border: 'thin grey dotted' }}>
            <EditAccount userEmail={session && session.user.email} />
            <Box sx={{ position:'relative', bgcolor: 'white', height: '45vh', border: 'thin grey dotted' }} />
            <AvailableRooms sx={{ position:'relative', bgcolor: 'white', height: '45vh', border: 'thin grey dotted' }} />
          </Box>
          {/* middle column component */}
          <Box sx={{ width: '55%', position:'relative', bgcolor: 'white', height: '90vh', border: 'thin grey dotted' }}>
            <Box sx={{ position:'relative', bgcolor: 'white', height: '45vh', border: 'thin grey dotted' }}>
              <Calendar />
            </Box>
            <Box sx={{ position:'relative', bgcolor: 'white', height: '45vh', border: 'thin grey dotted' }}>
              <Candidates />
              </Box>
            </Box>
          {/* right-most column component */}
          <Box sx={{ width: '25%', position:'relative', bgcolor: 'white', height: '90vh', border: 'thin grey dotted' }}>
            <Notifications />
          </Box>
        </Container>
      </>
    );
}
