"use client";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <Link href="/profile" passHref>
                <Button>Profile</Button>
            </Link>
        );
    }
    return (
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
