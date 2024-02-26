"use client";

import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Dashboard() {
    const { data: session } = useSession({
        // required session: https://next-auth.js.org/getting-started/client#require-session
        required: true
    });

    return (
        <Box>
          <Typography>Dashboard</Typography>
          <Box>
            {`Currently logged in as: ${session && session.user.email}`}
          </Box>
        </Box>
    );
}
