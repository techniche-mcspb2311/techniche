import React, { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const EditAccount = ({userEmail}) => {
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('Job Title');
  const [city, setCity] = useState('City');
  const [phoneNumber, setPhoneNumber] = useState('Phone Number'); //userEmail.phoneNumber
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
      <Modal open={open} onClose={handleClose} >
        <div style={{ width: 400, padding: 20 }}>
          <h2>Edit Account</h2>
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
        </div>
      </Modal>
    </div>
  );
};

export default EditAccount;