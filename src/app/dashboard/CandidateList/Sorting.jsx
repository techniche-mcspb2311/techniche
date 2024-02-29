import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Sorting = ({ candidates, setSortedCandidates }) => {
  

  const sortByName = () => {
    const sorted = [...candidates].sort((a, b) => a.name.localeCompare(b.name));
    setSortedCandidates(sorted);
  };

  const sortByStartDate = () => {
    const sorted = [...candidates].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    setSortedCandidates(sorted);
  };

  const sortByScore = () => {
    const sorted = [...candidates].sort((a, b) => b.score - a.score);
    setSortedCandidates(sorted);
  };

  return (
    <>
      <Box variant="outlined" sx={{ position: 'relative', left: '20vw' }}>SORT BY</Box>
      <Button variant="outlined" sx={{ position: 'relative', left: '20vw' }} onClick={sortByName}>name</Button>
      <Button variant="outlined" sx={{ position: 'relative', left: '20vw' }} onClick={sortByStartDate}>start date</Button>
      <Button variant="outlined" sx={{ position: 'relative', left: '20vw' }} onClick={sortByScore}>score</Button>
    </>
  );
};

export default Sorting;
