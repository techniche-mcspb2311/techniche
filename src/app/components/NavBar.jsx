"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import { signIn, useSession } from 'next-auth/react';

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/material/Menu';

import Link from 'next/link';

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
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center'
            }}
        >
            // using the signIn function:
            // https://next-auth.js.org/getting-started/example#frontend---add-react-hook
            <Button
                color="primary"
                variant="contained"
                onClick={() => signIn()}
            >
                Login
            </Button>
        </Box>
    );
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

function NavBar({ mode, toggleColorMode }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                ? 'rgba(255, 255, 255, 0.4)'
                                : 'rgba(0, 0, 0, 0.4)',
                            backgropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ?  `0 0 1px rgba(85, 166, 246, 0.1),\
                                        1px 1.5px 2px -1px rgba(85, 166, 246, 0.15),\
                                        4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    :  '0 0 1px rgba(2, 31, 59, 0.7),\
                                        1px 1.5px 2px -1px rgba(2, 31, 59, 0.65),\
                                        4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Typography
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0
                            }}
                        >
                            Techniche
                        </Typography>
                        <AuthButton />
                        <MovingNavBar toggleDrawer={toggleDrawer} />
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                            <Box
                                sx={{
                                    minWidth: '60dvw',
                                    p: 2,
                                    backgroundColor: 'background.paper',
                                    flexGrow: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'end',
                                        flexGrow: 1,
                                    }}
                                >
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
