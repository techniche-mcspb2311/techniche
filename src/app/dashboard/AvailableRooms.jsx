"use client";
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { set } from 'zod';

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
    <p>{`Room ${room.id}`}</p>
    {room.link && <p>Link: {room.link}</p>}
    {room.passcode && <p>Passcode: {room.passcode}</p>}
    <button onClick={() => onJoinRoomClick(room)}>Join Room</button>
    <button onClick={onDeleteClick}>Delete Room</button>
    <button onClick={onClose}>Close</button>
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
    
      <div>
        <div className="room-list">
          {mockData.map((room) => (
            <div className="room" key={room.id} onClick={() => handleRoomClick(room)}>
              {`Room ${room.id}`}
            </div>
          ))}
        </div>

        {isModalOpen && selectedRoom && !showChallenge && (
          <RoomModal
            room={selectedRoom}
            onJoinRoomClick={handleJoinRoom}
            onDeleteClick={handleDeleteRoom}
            onClose={handleCloseModal}
          />
        )}

      </div>
        <Routes>
          <Route path="/challenge" element={<Challenge />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AvailableRooms;
