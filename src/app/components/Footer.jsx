// Notes
/*
    Contains Techniche logo, 'Techniche', and Social Media tags
*/

import React from 'react';
import { Box, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box mt={5} py={3} px={2} position="static" bottom={0} width="100%">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" alignItems="flex-start" pr={5}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Techniche_Logo.jpg" alt="Logo" style={{ width: '100px', borderRadius: '15%' }} />
                </Box>
                <Box display="flex" alignItems="center">
                    <Link href="#" color="inherit" underline="none" mr={2}>
                        <FacebookIcon />
                    </Link>
                    <Link href="#" color="inherit" underline="none" mr={2}>
                        <TwitterIcon />
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                        <LinkedInIcon />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
