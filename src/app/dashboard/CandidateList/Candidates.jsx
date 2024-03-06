import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import ProfileModal from './ProfileModal';
import Sorting from './Sorting';


const Candidates = () => {

  const [viewAll, setViewAll] = useState(false);
  const [profile, setProfile] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [sortedCandidates, setSortedCandidates] = useState([]);

  useEffect(() => {
    fetch('/api/candidates')
      .then(response => response.json())
      .then(data => setCandidates(data))
      .catch(error => console.error('Error fetching candidates:', error));
  }, []);

  const handleOpen = () => setViewAll(true);
  const handleClose = () => {
    setViewAll(false)
    setProfile(null);
  };

  function candidateProfile(candidateId) {
    setViewAll(false);
    setProfile(candidateId);
  }
  
  const modalStyle = {
    position: 'absolute',
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
  console.log('candidates:', candidates)

  return (
    <>
      Assigned Candidates
      {/* View All Candidates Modal //////////////////////////////////////////// */}
      {viewAll && (
        <Modal
          open={viewAll}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            {/* Sorting ///////////////////////////////////////////////////////////// */}
            <Sorting candidates={candidates} setSortedCandidates={setSortedCandidates}/>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Candidates
            </Typography>
            {sortedCandidates.map((candidate, index) => {
              if (candidate.recruiter === 'theUser') {
                return (
                  <ListItemButton key={index} onClick={() => candidateProfile(candidate.id)} sx={{ bgcolor: '#6ccc81', outline: 'thin black dotted', borderRadius: '25px' }}>
                    <ListItemText primary={candidate.name} sx={{ color: 'white' }} />
                  </ListItemButton>
                );
              } else {
                return (
                  <ListItemButton key={index} onClick={() => candidateProfile(candidate.id)} sx={{ bgcolor: '', outline: 'thin black dotted', borderRadius: '25px' }}>
                    <ListItemText primary={candidate.name} sx={{ color: '#5d6f9e' }} />
                  </ListItemButton>
                );
              }
            })}
          </Box>
        </Modal>
      )}
      {/* Profile Modal ///////////////////////////////////////////////////// */}
      {profile && (
        <ProfileModal profile={profile} setProfile={setProfile} candidates={candidates} sortedCandidates={sortedCandidates} setViewAll={setViewAll}/>
      )}
      {/* Candidate List //////////////////////////////////////////////////// */}
      <Box sx={{ position:'relative', overflow:'hidden', outline:'black thin dotted', bgcolor:'white', height:'35vh', width:'40vw', borderRadius:'30px', top:'`vh', left:'5vw' }}>
        {sortedCandidates.map((candidate, index) => {
          if(candidate.recruiter === 'theUser') {
            return (
              <ListItemButton key={index} onClick={() => candidateProfile(candidate.id)} sx={{ position: 'relative', marginBottom: '.1vh', bgcolor: '#6ccc81', outline: 'thin white solid', borderRadius: '25px' }}>
                <ListItemText primary={candidate.name} sx={{ color:'white' }}/>
              </ListItemButton>
            );
          }
        })}
        
      </Box>
      <Button variant="outlined" sx={{ position:'relative', left:'21vw' }}
      onClick={handleOpen}
      >view all</Button>
    </>
  );
};

export default Candidates;
