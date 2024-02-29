import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProfileModal = ({profile, setProfile, candidates}) => {

  const handleClose = () => setProfile(null);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 800,
    width: 800,
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
      open={profile}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {candidates[profile].name}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Coding Challenge Score: {candidates[profile].score}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Earliest Start Date: {candidates[profile].earliestStartDate}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Interview Date: {candidates[profile].interviewDate}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Notes: {candidates[profile].notes}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ProfileModal;
