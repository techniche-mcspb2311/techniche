"use client";

import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

function AuthButton({ session }) {
    if (session) {
        return (
            <Link href="/dashboard" passHref>
                <Button color="primary" variant="contained">Dashboard</Button>
            </Link>
        );
    } else {
        return (
            <Button color="primary" variant="contained" onClick={() => signIn()}>
                Login
            </Button>
        );
    }
}

function MovingNavBar({ toggleDrawer }) {
    return (
        <Box sx={{ display: { sm: '', md: 'none' } }}>
            <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
            >
                <MenuIcon />
            </Button>
        </Box>
    );
}

function NavBar() {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div style={{ paddingTop: '90px' }}>
            <AppBar position="fixed" sx={{ boxShadow: 0, bgcolor: 'transparent', mt: 2 }}>
                <Container maxWidth="100%">
                    <Toolbar
                        variant="regular"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor: 'primary',
                            backgropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow: `0 0 1px rgba(85, 166, 246, 0.1),\
                                        1px 1.5px 2px -1px rgba(85, 166, 246, 0.15),\
                                        4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
                        }}
                    >
                        <Box display="flex" justifyContent="center" pt={3} sx={{ mt: -3 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Techniche_Logo.jpg" alt="Logo" style={{ width: '125px', height: '41px', borderRadius: '15%' }} />
                        </Box>
                        <AuthButton session={session} />
                        <MovingNavBar toggleDrawer={toggleDrawer} />
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                            <Box sx={{ minWidth: '60dvw', p: 2, backgroundColor: 'primary', flexGrow: 1 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'end',
                                        flexGrow: 1
                                    }}
                                >
                                    {/* Drawer content */}
                                </Box>
                            </Box>
                        </Drawer>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default NavBar;
