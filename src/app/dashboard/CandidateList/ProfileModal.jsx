import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ProfileModal = ({ profile, setProfile, candidates, setViewAll }) => {
  const [edit, setEdit] = useState(false);
  console.log(candidates[profile].name, profile)
  const [updatedProfile, setUpdatedProfile] = useState({
    name: candidates[profile].name,
    score: candidates[profile].score,
    earliestStartDate: candidates[profile].earliestStartDate,
    interviewDate: candidates[profile].interviewDate,
    notes: candidates[profile].notes
  });

  const handleClose = () => {
    setProfile(null);
    setViewAll(false);
  };

  const goBack = () => {
    setProfile(null);
    setViewAll(true);
  };

  const openEdit = () => {
    setEdit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const deleteCandidate = async () => {
    if (window.confirm('Are you sure you want to delete this candidate?')) {
        try {
            const deleteResponse = await fetch(`api/candidates/${profile}`, {
                method: 'DELETE',
            });

            if (deleteResponse.ok) {
                console.log('Candidate deleted successfully');

                const notifyResponse = await fetch('api/notifications', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: `Candidate ${updatedProfile.name} has been deleted`,
                        isNew: true,
                        date: new Date(),
                        time: new Date().toLocaleTimeString(),
                    }),
                });

                if (notifyResponse.ok) {
                    console.log('Notification sent successfully');
                } else {
                    console.error('Failed to send notification');
                }
            } else {
                console.error('Failed to delete candidate');
            }
        } catch (error) {
            console.error('Error occurred while deleting candidate:', error);
        }

        setProfile(null);
        setViewAll(true);
    } else {
        console.log('Canceled');
    }
};

  const saveChanges = async () => {
    try {
      const response = await fetch(`api/candidates/${profile}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        console.log('Candidate updated successfully');
      } else {
        console.error('Failed to update candidate');
      }
      try {
        const response = await fetch('api/notifications', {
          method: 'POST',
          headers: {
        'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: `Candidate ${updatedProfile.name} has been updated`,
            isNew: true,
            date: new Date(),
            time: new Date().toLocaleTimeString(),
          }),
        });

        if (response.ok) {
          console.log('Candidate updated successfully');
        } else {
          console.error('Failed to update candidate');
        }
      } catch (error) {
          console.error('Error updating candidate:', error);
      }
    } catch (error) {
      console.error('Error occurred while updating candidate:', error);
    }
  };

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
    overflow: 'hidden',
  };

  return (
    <>
      {profile !== null && (
        <Modal
          open={true}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            {edit ? (
              <>
                <TextField
                  sx={{ position: 'relative', marginBottom: 2 }}
                  id="name"
                  name="name"
                  label="Name"
                  multiline
                  rows={1}
                  value={updatedProfile.name}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  sx={{ position: 'relative', marginBottom: 2 }}
                  id="score"
                  name="score"
                  label="Score"
                  multiline
                  rows={1}
                  value={updatedProfile.score}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  sx={{ position: 'relative', marginBottom: 2 }}
                  id="earliestStartDate"
                  name="earliestStartDate"
                  label="Earliest Start Date"
                  multiline
                  rows={1}
                  value={updatedProfile.earliestStartDate}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  sx={{ position: 'relative', marginBottom: 2 }}
                  id="interviewDate"
                  name="interviewDate"
                  label="Interview Date"
                  multiline
                  rows={1}
                  value={updatedProfile.interviewDate}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  sx={{ position: 'relative', marginBottom: 2 }}
                  id="notes"
                  name="notes"
                  label="Notes"
                  multiline
                  rows={15}
                  value={updatedProfile.notes}
                  onChange={handleChange}
                  variant="outlined"
                />
              </>
            ) : (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {candidates[profile - 1].name}
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Coding Challenge Score: {candidates[profile - 1].score}
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Earliest Start Date: {candidates[profile - 1].earliestStartDate}
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Interview Date: {candidates[profile - 1].interviewDate}
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Notes: {candidates[profile - 1].notes}
                </Typography>
              </>
            )}
            {edit ? (
              <Button variant="outlined" sx={{ position: 'relative' }} onClick={saveChanges}>Save</Button>
            ) : (
              <>
                <Button variant="outlined" sx={{ position: 'relative' }} onClick={openEdit}>Edit</Button>
                <Button variant="outlined" sx={{ position: 'relative' }} onClick={deleteCandidate}>Delete</Button>
              </>
            )}
            <Button variant="outlined" sx={{ position: 'relative' }} onClick={goBack}>Back</Button>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;