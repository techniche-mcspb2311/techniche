"use client";
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { set } from 'zod';

const RoomNumberItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2, 
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary, 
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#41525B' : '#f0f0f0', 
  },
}));

function Challenge() {
    return (
        <Box>
            <Typography variant="h2" gutterBottom>Coding Challenge</Typography>
            <Box sx={{ width: '100%', maxWidth: '80em' }}>
                <Editor height="90vh" defaultLanguage="javascript" />
            </Box>
        </Box>
    );
}



const mockData = [
  {
    id: 1,
    link: 'https://room1.example.com',
    passcode: '123456'
  },
  {
    id: 2,
    link: 'https://room2.example.com',
    passcode: 'abcdef'
  },
  {
    id: 3,
    link: 'https://room3.example.com',
    passcode: 'qwerty'
  },
  {
    id: 4,
    link: 'https://room4.example.com',
    passcode: 'zxcvbn'
  }
];

const RoomModal = ({ room, onJoinRoomClick, onDeleteClick, onClose }) => (
  <div className="room-modal">
    <Box
      textAlign={'center'}
      border='2px solid grey'
      borderRadius={4}
      p={2}
      mb={2}
    >
      <Typography variant='h6'>{`Room ${room.id}`}</Typography>
    </Box>
    <Box
      height={80}
      width={200}
      my={4}
      display="flexwrap"
      fontSize={10}
      alignItems="center"
      gap={4}
      p={2}
      sx={{ 
        border: '2px solid grey', 
        left: '5vw', 
        position: 'relative',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
       }}
    >
    {room.link && <p>Link: {room.link}</p>}
    {room.passcode && <p>Passcode: {room.passcode}</p>}
    </Box>
    <ButtonGroup variant="contained" orientation="vertical" size="large" sx={{ position: "relative", left:"6.5vw" }}>
      <Button onClick={() => onJoinRoomClick(room)}>Join Room</Button>
      <Button onClick={onDeleteClick}>Delete Room</Button>
      <Button onClick={onClose}>Close</Button>
    </ButtonGroup>
  </div>
);

const AvailableRooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showChallenge, setShowChallenge] = useState(false);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
    setShowChallenge(false);
  };

  const handleJoinRoom = (room) => {
    if (room) {
      setShowChallenge(true);
      window.open('/challenge', '_blank');
    } 
  };

  const handleDeleteRoom = () => {
    if (selectedRoom) {
      const updatedRooms = mockData.filter((room) => room.id !== selectedRoom.id);
      console.log('Room deleted:', selectedRoom);
      setSelectedRoom(null);
      setIsModalOpen(false);
      setShowChallenge(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
    setIsModalOpen(false);
    setShowChallenge(false);
  };

  return (
    <BrowserRouter>
      {!isModalOpen ? (
        <div 
          style={{ 
            textAlign: 'center', 
            alignItems: 'center', 
            justifyContent: 'center', 
            left: '50%',  
            top: '50%',
            }}
          >
            <Box borderBottom="2px solid grey" pb={2} mb={2} mt={2}>
              <Typography variant="h5" fontWeight='bold'>
                Coding Challenge Rooms
              </Typography>
            </Box>
          <div className="room-list">
              <Box sx={{ width: '90%', maxWidth: '70em', justifyContent: 'center' }}>
                <Stack spacing={2}>
                  {mockData.map((room) => (
                  <RoomNumberItem key={room.id} onClick={() => handleRoomClick(room)}>
                    {`Room ${room.id}`}
                  </RoomNumberItem>
                ))}
                </Stack>
              </Box>
          </div>
        </div>
      ) : (
        <RoomModal
          room={selectedRoom}
          onJoinRoomClick={handleJoinRoom}
          onDeleteClick={handleDeleteRoom}
          onClose={handleCloseModal}
        />
      
      )}
        <Routes>
          <Route path="/challenge" element={<Challenge />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AvailableRooms;
