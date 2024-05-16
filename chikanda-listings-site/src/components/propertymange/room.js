import React, { useState } from 'react';

const RoomAvailability = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room R01', available: true },
    { id: 2, name: 'Room k02', available: false }
  ]);

  const addRoom = (name) => {
    const newRoom = {
      id: rooms.length + 1,
      name,
      available: true
    };
    setRooms([...rooms, newRoom]);
  };

  const editRoom = (id, newName) => {
    setRooms(rooms.map(room => room.id === id ? { ...room, name: newName } : room));
  };

  const deleteRoom = (id) => {
    setRooms(rooms.filter(room => room.id !== id));
  };

  const toggleAvailability = (id) => {
    setRooms(rooms.map(room => room.id === id ? { ...room, available: !room.available } : room));
  };

  return (
    <div>
      <h1>Room Availability</h1>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            {room.name} - {room.available ? 'Available' : 'Not Available'}
            <button className='bg-blue-900 text-white' onClick={() => toggleAvailability(room.id)}>Toggle Availability</button>
            <button className='bg-red-900 text-white' onClick={() => deleteRoom(room.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className='bg-green-900 text-white' onClick={() => addRoom(prompt('Enter room name:'))}>Add Room</button>
    </div>
  );
};

export default RoomAvailability;
