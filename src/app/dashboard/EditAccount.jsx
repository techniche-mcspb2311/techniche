import React, { useState } from 'react';
// import { useSession } from 'next-auth/react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const EditAccount = () => {
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('Job Title');
  const [city, setCity] = useState('City');
  const [phoneNumber, setPhoneNumber] = useState('Phone Number');
  const [imageUrl, setImageUrl] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Save changes (you can update your database or perform other actions here)
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Edit Profile
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <h2>Edit Account</h2>
          <input
            type="text"
            value= {jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img src={imageUrl} alt="profile pic" style={{ maxWidth: '10%', height: 'auto' }} />
          </div>
          <br />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditAccount;
