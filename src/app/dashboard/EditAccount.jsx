import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const EditAccount = ({ userEmail }) => {
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    handleClose();
  };

  return (
    <Container maxWidth="sm">
       <Button onClick={handleOpen}>
        <img src={imageUrl} alt="profile pic" style={{ width: '150px', height: 'auto', borderRadius: '50%' }} />
      </Button>
      <Modal open={open} onClose={handleClose} >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            // borderRadius: 8,
            width: 500,
            maxHeight: '100%',
            overflowY: 'auto',
          }}
        >
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Edit Account</h2>
          <div style={{ marginBottom: 10 }}>
            <label htmlFor="jobTitle">Job Title:</label>
            <br />
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job Title"
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label htmlFor="city">City:</label>
            <br />
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <br />
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <div style={{ width: '100%', textAlign: 'center', marginBottom: 10 }}>
            <label htmlFor="imageUrl">Profile Picture:</label>
            <br />
            <img src={imageUrl} alt="profile pic" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <label htmlFor="imageUrl">Image URL:</label>
          <br />
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
      <span style={{ marginLeft: '10px' }}>Recruiter's name</span>
    </Container>
  );
};

export default EditAccount;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TRYING TO FETCH DATA PER USER THAT IS SIGNED IN
