import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const CreateCandidate = ({ setNewCandidate }) => {
    const [candidateData, setCandidateData] = useState({
        name: 'Name Here',
        score: 'Score Here',
        earliestStartDate: 'Start Date Here',
        interviewDate: 'Interview Date Here',
        notes: 'Notes Here'
    });

    const handleClose = () => {
        setNewCandidate(false);
    }

    const handleSave = async () => {
        try {
            const response = await fetch('api/candidates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(candidateData),
            });

            if (response.ok) {
                console.log('Candidate saved successfully');
                // Optionally, you can close the modal or reset the form here
            } else {
                console.error('Failed to save candidate');
            }
        } catch (error) {
            console.error('Error occurred while saving candidate:', error);
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCandidateData(prevData => ({
            ...prevData,
            [name]: value,
            "recruiter": null,
            "id": Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000,
        }));
    }

    const modalStyle = {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '85vh',
        width: '40vw',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        overflow: 'scroll',
    };

    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <>
                    <TextField sx={{ position: 'relative', marginBottom: 2}}
                        id="name"
                        name="name"
                        label="Name"
                        multiline
                        rows={1}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <TextField sx={{ position: 'relative', marginBottom: 2}}
                        id="score"
                        name="score"
                        label="Score"
                        multiline
                        rows={1}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <TextField sx={{ position: 'relative', marginBottom: 2}}
                        id="earliestStartDate"
                        name="earliestStartDate"
                        label="Earliest Start Date"
                        multiline
                        rows={1}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <TextField sx={{ position: 'relative', marginBottom: 2}}
                        id="interviewDate"
                        name="interviewDate"
                        label="Interview Date"
                        multiline
                        rows={1}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                    <TextField sx={{ position: 'relative', marginBottom: 2}}
                        id="notes"
                        name="notes"
                        label="Notes"
                        multiline
                        rows={15}
                        onChange={handleInputChange}
                        variant="outlined"
                    />
                </>
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Save
                </Button>
            </Box>
        </Modal>
    );
};

export default CreateCandidate;