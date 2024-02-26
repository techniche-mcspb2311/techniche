"use client";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

function AuthButton() {
    // hook into the current session:
    // https://next-auth.js.org/getting-started/example#frontend---add-react-hook
    const { data: session } = useSession();

    if (session) {
        console.log('session: ', session);
        return (
            <Link href="/dashboard" passHref>
              <Button variant="contained">Dashboard</Button>
            </Link>
        );
    }
    return (
        // using the signIn function:
        // https://next-auth.js.org/getting-started/example#frontend---add-react-hook
        <Button variant="contained" onClick={() => signIn()}>Login</Button>
    );
}

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography sx={{flexGrow: 1}}>Techniche</Typography>
                <AuthButton />
            </Toolbar>
        </AppBar>
    );
}
