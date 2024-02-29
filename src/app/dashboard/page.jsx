"use client";

import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditAccount from './EditAccount';


export default function Dashboard() {
    const { data: session } = useSession({
        // required session: https://next-auth.js.org/getting-started/client#require-session
        required: true
    });

    return (
        <Box>
          <EditAccount userEmail={session && session.user.email} />
          <Typography>Dashboard</Typography>
          <Box>
            {`Currently logged in as: ${session && session.user.email}`}
          </Box>
        </Box>
    );
}
