import React, { useState, useEffect } from 'react';
import CenteredButtons from '../components/managebookings/CenteredButtons';
import Card from '../components/managebookings/Card';
import EmailTable from '../components/managebookings/EmailTable'; // Ensure the path is correct
import '../index.css'; // Ensure the path is correct

const ManageBookings = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [statusFilter, setStatusFilter] = useState('Pending'); // Default to showing Pending emails

  useEffect(() => {
    const handleMouseDown = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="App">
      <div className="bg-cobalt h-[30vh] relative flex flex-col justify-center items-center" style={{ top: '-20px' }}>
        <div className="text-white text-4xl text-center">
          <p>You have</p>
          <p className="text-green-500 text-6xl">X X</p>
          <p>pending booking requests</p>
        </div>
      </div>
      <div className="bg-white min-h-[40vh] flex flex-col items-start justify-start mt-20 px-8 space-y-10">
        {/* Adjusted margin-top */}
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col space-y-6">
            <CenteredButtons setStatusFilter={setStatusFilter} />
            <EmailTable statusFilter={statusFilter} />
          </div>
          <Card />
        </div>
        <div
          className="cursor"
          style={{
            left: cursorX + 'px',
            top: cursorY + 'px',
            position: 'absolute',
            pointerEvents: 'none',
          }}
        ></div>
      </div>
    </div>
  );
}

export default ManageBookings;
