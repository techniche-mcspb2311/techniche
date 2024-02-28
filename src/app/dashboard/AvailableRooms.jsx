import React, { useState } from 'react';

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

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleJoinRoom = (room) => {
    if (room) {
      window.open(room.link, '_blank');
    }
  };

  const handleDeleteRoom = () => {
    if (selectedRoom) {
      const updatedRooms = mockData.filter((room) => room.id !== selectedRoom.id);
      console.log('Room deleted:', selectedRoom);
      setSelectedRoom(null);
      setIsModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="room-list">
        {mockData.map((room) => (
          <div className="room" key={room.id} onClick={() => handleRoomClick(room)}>
            {`Room ${room.id}`}
          </div>
        ))}
      </div>

      {isModalOpen && selectedRoom && (
        <RoomModal
          room={selectedRoom}
          onJoinRoomClick={handleJoinRoom}
          onDeleteClick={handleDeleteRoom}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AvailableRooms;
