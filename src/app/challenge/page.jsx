"use client";

import Editor from '@monaco-editor/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Challenge() {
    return (
        <>
            <Typography variant="h2" gutterBottom>Coding Challenge</Typography>
            <Box sx={{ width: '100%', maxWidth: '80em' }}>
                <Editor height="90vh" defaultLanguage="javascript" />
            </Box>
        </>
    );
}
