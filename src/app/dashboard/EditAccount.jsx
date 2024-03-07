
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const EditAccount = ({ userEmail }) => {
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
  const [userData, setUserData] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    fetchUserData();
  }, [userEmail]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`/api/users?email=${encodeURIComponent(userEmail)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUserData(data);
      if (data && data.length > 0) {
        const { jobTitle, city, phoneNumber, imageURL } = data[0];
        setJobTitle(jobTitle);
        setCity(city);
        setPhoneNumber(phoneNumber);
        setImageUrl(imageURL);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    const updatedUserData = {
      email: userEmail,
      jobTitle,
      city,
      phoneNumber,
      imageURL: imageUrl
    };

    try {
      const response = await fetch('/api/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUserData)
      });

      if (response.ok) {
        console.log('User updated successfully');
        handleClose();
        setSnackbarSeverity('success');
        setSnackbarMessage('User updated successfully');
        setSnackbarOpen(true);
      } else {
        console.error('Failed to update user');
        setSnackbarSeverity('error');
        setSnackbarMessage('Failed to update user');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Error updating user data');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm">
      {userData ? (
        <div>
          <Button onClick={handleOpen}>
          {userData && userData[0].imageURL ? (
              <img src={userData[0].imageURL} alt="profile pic" style={{ width: '150px', height: 'auto', borderRadius: '50%' }} />
            ) : (
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile pic" style={{ width: '150px', height: 'auto', borderRadius: '50%' }} />
            )}
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                width: 500,
                maxHeight: 5000,
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
                {imageUrl ? (
                  <img src={imageUrl} alt="profile pic" style={{ maxWidth: '100%', height: 'auto' }} />
                ) : (
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile pic" style={{ maxWidth: '100%', height: 'auto' }} />
                )}
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
          <div>Logged in as {userEmail}</div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default EditAccount;