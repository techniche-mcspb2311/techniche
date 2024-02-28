import React, { useState } from 'react';
// import { useSession } from 'next-auth/react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const EditAccount = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        profile pic
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div>
          <h2>Edit Account</h2>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile pic" width="100" height="100"/>
          <p>Job title</p>
          <p>City</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>

      </Modal>
    </div>
  );
};

export default EditAccount;
