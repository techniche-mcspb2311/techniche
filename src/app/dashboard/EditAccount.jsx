// "use client";

import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//STOP MAKING CHANGES AFTER THIS IS GONE//////////////////////////////////////////
const EditAccount = ({ userEmail }) => {
  const [open, setOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  // const [city, setCity] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [imageUrl, setImageUrl] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
  const [userData, setUserData] = useState(null);
  useEffect(() => {
        fetchUserData();
      }, []);
    
      const fetchUserData = async () => {
        try {
       
          const response = await fetch('/api/users');
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const data = await response.json();
          // console.log('User data:', data); 
          setUserData(data); 
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

  const handleSave = () => {
    handleClose();
  };
  

  return (
    <Container maxWidth="sm">
      {userData ? (
        <div>
          {/* {console.log("here is the image", userData[0].imageURL)} */}
          <Button onClick={handleOpen}>
             {userData && userData[0].imageURL ? (
                <img src={userData[0].imageURL} alt="profile pic" style={{ width: '150px', height: 'auto', borderRadius: '50%' }} />
              ) : (
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile pic" style={{ width: '150px', height: 'auto', borderRadius: '50%' }} />
              )}
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
                  value={userData[0].jobTitle}
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
                  value={userData[0].city}
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
                  value={userData[0].phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                />
              </div>
              <div style={{ width: '100%', textAlign: 'center', marginBottom: 10 }}>
                <label htmlFor="imageUrl">Profile Picture:</label>
                <br />
                {userData && userData[0].imageURL ? ( // Check if imageURL exists
                  <img src={userData[0].imageURL} alt="profile pic" style={{ maxWidth: '100%', height: 'auto' }} />
                ) : (
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile pic" style={{ maxWidth: '100%', height: 'auto' }} />
                )}
              </div>
              <label htmlFor="imageUrl">Image URL:</label>
              <br />
              <input
                type="text"
                id="imageUrl"
                value={userData[0].imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder={userData[0].imageURL}
              />
              <br />
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Modal>
          <span style={{ marginLeft: '10px' }}>Recruiter's name</span>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </Container>
  );
};

export default EditAccount;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TRYING TO FETCH DATA PER USER THAT IS SIGNED IN. VERY SIMPLE CODE

// import React, { useState, useEffect } from 'react';

// const EditAccount = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user data when the component mounts
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
   
//       const response = await fetch('/api/users');
//       if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//       }
//       const data = await response.json();
//       console.log('User data:', data); 
//       setUserData(data); // Update the state with the fetched user data
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>User Information</h2>
//       {userData ? (
//         <ul>
//           <li>Email: {userData[0].email}</li>
//           <li>City: {userData[0].city}</li>
//           <li>Job Title: {userData[0].jobTitle}</li>
//           <li>Phone Number: {userData[0].phoneNumber}</li>
//           <li>Image URL: <img src={userData[0].imageURL} alt="profile pic" /></li>
//         </ul>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// };

// export default EditAccount;

