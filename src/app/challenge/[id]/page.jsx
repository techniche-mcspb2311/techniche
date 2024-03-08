"use client";

import { useRef, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Challenge({ params: { id: challengeId }}) {
    // const [code, setCode] = useState();
    const editorRef = useRef(null);


    function handleEditorDidMount(editor) {
        editorRef.current = editor;
    }

    function submit() {
        const submission = editorRef.current.getValue();

        async function actuallySubmit() {
            await fetch('/api/challenges/submit', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ submission, challengeId }),
            });
        }

        actuallySubmit();
    }

    return (
        
        <Box>
          <Typography variant="h2" gutterBottom>Coding Challenge</Typography>
          <Box sx={{ width: '100%', maxWidth: '80em' }}>
            <Editor
              height="90vh"
              defaultLanguage="javascript"
              onMount={handleEditorDidMount} />
            </Box>
            <Button onClick={submit}>Submit</Button>
        </Box>
    );
}
