import React, { useEffect } from 'react';
import { useState } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import ProfileModal from './ProfileModal';
import Sorting from './Sorting';

const candidates = [
  { id: 0, name: "John Doe", score: 80, interviewDate: "2024-02-25", recruiter: null, earliestStartDate: "2024-02-26", notes: "Impressive technical skills" },
  { id: 1, name: "Jane Smith", score: 90, interviewDate: "2024-02-28", recruiter: null, earliestStartDate: "2024-03-01", notes: "Good communication skills" },
  { id: 2, name: "Mike Johnson", score: 75, interviewDate: "2024-03-02", recruiter: null, earliestStartDate: "2024-03-03", notes: "Strong problem-solving abilities" },
  { id: 3, name: "Emily Brown", score: 85, interviewDate: "2024-03-05", recruiter: null, earliestStartDate: "2024-03-06", notes: "Excellent teamwork" },
  { id: 4, name: "David Lee", score: 95, interviewDate: "2024-03-08", recruiter: "theUser", earliestStartDate: "2024-03-09", notes: "Great leadership potential" },
  { id: 5, name: "Sarah Davis", score: 70, interviewDate: "2024-03-11", recruiter: null, earliestStartDate: "2024-03-12", notes: "Attention to detail" },
  { id: 6, name: "Michael Clark", score: 60, interviewDate: "2024-03-14", recruiter: null, earliestStartDate: "2024-03-15", notes: "Quick learner" },
  { id: 7, name: "Anna Rodriguez", score: 88, interviewDate: "2024-03-17", recruiter: null, earliestStartDate: "2024-03-18", notes: "Adaptable to new technologies" },
  { id: 8, name: "Kevin Martinez", score: 92, interviewDate: "2024-03-20", recruiter: null, earliestStartDate: "2024-03-21", notes: "Strong analytical skills" },
  { id: 9, name: "Jessica Taylor", score: 78, interviewDate: "2024-03-23", recruiter: null, earliestStartDate: "2024-03-24", notes: "Detail-oriented" },
  { id: 10, name: "Ryan White", score: 87, interviewDate: "2024-03-26", recruiter: "theUser", earliestStartDate: "2024-03-27", notes: "Excellent problem-solving abilities" },
  { id: 11, name: "Amanda Thomas", score: 83, interviewDate: "2024-03-29", recruiter: null, earliestStartDate: "2024-03-30", notes: "Good communication skills" },
  { id: 12, name: "Chris Wilson", score: 79, interviewDate: "2024-04-01", recruiter: null, earliestStartDate: "2024-04-02", notes: "Strong technical knowledge" },
  { id: 13, name: "Samantha Garcia", score: 91, interviewDate: "2024-04-04", recruiter: null, earliestStartDate: "2024-04-05", notes: "Great attention to detail" },
  { id: 14, name: "Daniel Brown", score: 76, interviewDate: "2024-04-07", recruiter: null, earliestStartDate: "2024-04-08", notes: "Quick learner" },
  { id: 15, name: "Rachel Miller", score: 84, interviewDate: "2024-04-10", recruiter: null, earliestStartDate: "2024-04-11", notes: "Strong problem-solving abilities" },
  { id: 16, name: "Justin Anderson", score: 82, interviewDate: "2024-04-13", recruiter: null, earliestStartDate: "2024-04-14", notes: "Excellent teamwork" },
  { id: 17, name: "Lauren Martinez", score: 97, interviewDate: "2024-04-16", recruiter: "theUser", earliestStartDate: "2024-04-17", notes: "Great leadership potential" },
  { id: 18, name: "Matthew Taylor", score: 89, interviewDate: "2024-04-19", recruiter: null, earliestStartDate: "2024-04-20", notes: "Adaptable to new technologies" },
  { id: 19, name: "Olivia Harris", score: 93, interviewDate: "2024-04-22", recruiter: null, earliestStartDate: "2024-04-23", notes: "Strong analytical skills" },
  { id: 20, name: "Andrew Johnson", score: 77, interviewDate: "2024-04-25", recruiter: null, earliestStartDate: "2024-04-26", notes: "Detail-oriented" },
  { id: 21, name: "Michelle Davis", score: 68, interviewDate: "2024-04-28", recruiter: null, earliestStartDate: "2024-04-29", notes: "Quick learner" },
  { id: 22, name: "Brandon Jackson", score: 96, interviewDate: "2024-05-01", recruiter: "theUser", earliestStartDate: "2024-05-02", notes: "Excellent problem-solving abilities" },
  { id: 23, name: "Stephanie Thompson", score: 81, interviewDate: "2024-05-04", recruiter: null, earliestStartDate: "2024-05-05", notes: "Good communication skills" },
  { id: 24, name: "Nicholas Wilson", score: 74, interviewDate: "2024-05-07", recruiter: null, earliestStartDate: "2024-05-08", notes: "Strong technical knowledge" },
  { id: 25, name: "Hannah Lewis", score: 86, interviewDate: "2024-05-10", recruiter: null, earliestStartDate: "2024-05-11", notes: "Great attention to detail" },
  { id: 26, name: "William Brown", score: 73, interviewDate: "2024-05-13", recruiter: null, earliestStartDate: "2024-05-14", notes: "Quick learner" },
  { id: 27, name: "Ashley Garcia", score: 98, interviewDate: "2024-05-16", recruiter: "theUser", earliestStartDate: "2024-05-17", notes: "Excellent teamwork" },
  { id: 28, name: "Edward Martinez", score: 90, interviewDate: "2024-05-19", recruiter: null, earliestStartDate: "2024-05-20", notes: "Great leadership potential" },
  { id: 29, name: "Madison Lee", score: 94, interviewDate: "2024-05-22", recruiter: null, earliestStartDate: "2024-05-23", notes: "Adaptable to new technologies" },
  { id: 30, name: "Joshua Harris", score: 72, interviewDate: "2024-05-25", recruiter: null, earliestStartDate: "2024-05-26", notes: "Strong analytical skills" }
];


const Candidates = () => {

  const [viewAll, setViewAll] = useState(false);
  const [profile, setProfile] = useState(null);
  const [sortedCandidates, setSortedCandidates] = useState(candidates);

  const handleOpen = () => setViewAll(true);
  const handleClose = () => {
    setViewAll(false)
    setProfile(null);
  };

  function candidateProfile(index) {
    setViewAll(false);
    const originalIndex = sortedCandidates.findIndex(candidate => candidate.id === index);
    setProfile(originalIndex);
  }

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
    <>
      Assigned Candidates
      {/* View All Candidates Modal //////////////////////////////////////////// */}
      {viewAll && (
        <Modal
          open={handleOpen}
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
                  <ListItemButton key={index} onClick={() => candidateProfile(candidate.id)} sx={{ bgcolor: '#6ccc81', outline: 'thin grey dotted', borderRadius: '25px' }}>
                    <ListItemText primary={candidate.name} sx={{ color: 'white' }} />
                  </ListItemButton>
                );
              } else {
                return (
                  <ListItemButton key={index} onClick={() => candidateProfile(candidate.id)} sx={{ bgcolor: '', outline: 'thin grey dotted', borderRadius: '25px' }}>
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
      <Box sx={{ position:'relative', overflow:'hidden', outline:'grey thin dotted', bgcolor:'white', height:'35vh', width:'40vw', borderRadius:'30px', top:'`vh', left:'5vw' }}>
        {sortedCandidates.map((candidate, index) => {
          if(candidate.recruiter === 'theUser') {
            return (
              <ListItemButton key={index} onClick={() => candidateProfile(candidate.id)} sx={{ bgcolor: '#6ccc81', outline:'thin grey dotted', borderRadius:'25px' }}>
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