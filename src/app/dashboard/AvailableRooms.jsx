"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

function RoomModal({ room, onJoinRoomClick, onDeleteClick, onClose }) {
    return (
        <Box>
            <Box
                textAlign={'center'}
                border='2px solid grey'
                borderRadius={4}
                p={2}
                mb={2}
                >
                <Typography variant='h6'>{`Room ${room._id}`}</Typography>
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
                {room.passcode && <p>Passcode: {room.passcode}</p>}
            </Box>
            <ButtonGroup variant="contained" orientation="vertical" size="large" sx={{ position: "relative", left:"6.5vw" }}>
                <Button onClick={() => onJoinRoomClick(room)}>Join Room</Button>
                <Button onClick={onDeleteClick}>Delete Room</Button>
                <Button onClick={onClose}>Close</Button>
            </ButtonGroup>
        </Box>
    );
}

export default function AvailableRooms() {
    const [rooms, setRooms] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [passcode, setPasscode] = useState('');
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: session } = useSession({ required: true });

    async function getRooms() {
        const res = await fetch('/api/challenges');
        const data = await res.json();
        setRooms(data);
    }

    useEffect(() => {
        getRooms();
    }, []);

    const handleRoomClick = (idx) => {
        setSelectedRoom(idx);
    };

    const handleJoinRoom = (room) => {
        if (room) {
            window.open(`/challenge/${room.id}`, '_blank');
        }
    };

    const handleDeleteRoom = () => {
        if (selectedRoom !== null) {
            async function deleteRoom() {
                await fetch('/api/challenges', {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({ _id: rooms[selectedRoom]._id }),
                });
            }
            deleteRoom();
            setRooms(rooms.filter((x, idx) => idx !== selectedRoom));
            setSelectedRoom(null);
        }
    };

    const handleCloseModal = () => {
        setSelectedRoom(null);
        // setIsModalOpen(false);
    };

    const handleCreateRoom = async () => {
        const res = await fetch('/api/challenges', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ passcode, recruiterId: session.user._id }),
        });
        const newChallengeId = res.json();
        setPasscode('');
        await getRooms();
    };

    return selectedRoom === null ? (
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
          <Box>
            <TextField label="passcode" onChange={(e) => {
                setPasscode(e.target.value);
            }} value={passcode} />
            <Button onClick={handleCreateRoom}>Add Room</Button>
          </Box>
            <div className="room-list">
                <Box sx={{ width: '90%', maxWidth: '70em', justifyContent: 'center' }}>
                    <Stack spacing={2}>
                        {rooms && rooms.map((room, idx) => (
                            <RoomNumberItem key={room._id} onClick={() => handleRoomClick(idx)}>
                                {`Room ${room._id}`}
                            </RoomNumberItem>
                        ))}
                    </Stack>
                </Box>
            </div>
        </div>
        ) : (
        <RoomModal
            room={rooms && rooms[selectedRoom]}
            onJoinRoomClick={handleJoinRoom}
            onDeleteClick={handleDeleteRoom}
            onClose={handleCloseModal}
        />
    );
}
