// Notes
/*
    Contains Techniche logo, 'Techniche', and Social Media tags
*/

import React from 'react';
import { Box, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../../public/yellowlogo.png';

export default function Footer() {
    return (
        <Box mt={5} py={3} px={2} position="static" bottom={0} width="100%">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" alignItems="flex-start" pr={5}>
                    <img src={logo.src} alt="Logo" style={{ width: '125px', borderRadius: '15%' }} />
                </Box>
                <Box display="flex" alignItems="center">
                    <Link href="https://www.facebook.com/Dylan.W.Gordon" target="_blank" rel="noopener noreferrer" color="inherit" underline="none" mr={2}>
                        <FacebookIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/dylan-w-gordon/" target="_blank" rel="noopener noreferrer" color="inherit" underline="none" mr={2}>
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://media.licdn.com/dms/image/D5603AQFMT0Q9UtFn6w/profile-displayphoto-shrink_800_800/0/1686541619902?e=2147483647&v=beta&t=_zqxuLa_n5K36gn22lP3V4iQy2Bfnb_TI4hPHW0Gj4o" target="_blank" rel="noopener noreferrer" color="inherit" underline="none" mr={2}>
                        <TwitterIcon />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
