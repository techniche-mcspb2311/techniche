import React from 'react';
import { useState } from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ProfileModal = ({profile, setProfile, candidates, sortedCandidates, setViewAll}) => {

  const [edit, setEdit] = useState(false);

  const handleClose = () => {
    setProfile(null);
    setViewAll(false);
  }
  const goBack = () => {
    setProfile(null);
    setViewAll(true);
  }
  const openEdit = () => {
    setEdit(true);
  }
  const saveChanges = () => {
    console.log('save changes');
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
                <TextField sx={{ position: 'relative', marginBottom: 2}}
                  id="outlined-multiline-static"
                  label="Name"
                  multiline
                  rows={1}
                  defaultValue={candidates[profile - 1].name}
                  variant="outlined"
                />
                <TextField sx={{ position: 'relative', marginBottom: 2}}
                  id="outlined-multiline-static"
                  label="Score"
                  multiline
                  rows={1}
                  defaultValue={candidates[profile - 1].score}
                  variant="outlined"
                />
                <TextField sx={{ position: 'relative', marginBottom: 2}}
                  id="outlined-multiline-static"
                  label="Earliest Start Date"
                  multiline
                  rows={1}
                  defaultValue={candidates[profile - 1].earliestStartDate}
                  variant="outlined"
                />
                <TextField sx={{ position: 'relative', marginBottom: 2}}
                  id="outlined-multiline-static"
                  label="Interview Date"
                  multiline
                  rows={1}
                  defaultValue={candidates[profile - 1].interviewDate}
                  variant="outlined"
                />
                <TextField sx={{ position: 'relative', marginBottom: 2}}
                  id="outlined-multiline-static"
                  label="Notes"
                  multiline
                  rows={15}
                  defaultValue={candidates[profile - 1].notes}
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
              <Button variant="outlined" sx={{ position: 'relative' }} onClick={saveChanges}>save</Button>
            ) : (
              <Button variant="outlined" sx={{ position: 'relative' }} onClick={openEdit}>edit</Button>
            )}
            <Button variant="outlined" sx={{ position: 'relative' }} onClick={goBack}>back</Button>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;
