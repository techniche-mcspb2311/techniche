"use client";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            "foo"
        )
    }
    return (
        <Button></Button>
    );
}

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                "Foobar"
            </Toolbar>
        </AppBar>
    );
}
