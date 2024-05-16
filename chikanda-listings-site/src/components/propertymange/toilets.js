import React, { useState } from 'react';

const ToiletTypes = () => {
  const [hostels, setHostels] = useState([
    { id: 1, name: 'Hostel A', toilets: { modern: 3, traditional: 1 } },
    { id: 2, name: 'Hostel B', toilets: { modern: 2, traditional: 2 } },
    // Add more hostels as needed
  ]);
  
  // Function to add toilets to a hostel
  const addToilet = (hostelId, type) => {
    setHostels(hostels.map(hostel => {
      if (hostel.id === hostelId) {
        return {
          ...hostel,
          toilets: {
            ...hostel.toilets,
            [type]: hostel.toilets[type] + 1
          }
        };
      }
      return hostel;
    }));
  };

  // Function to remove toilets from a hostel
  const removeToilet = (hostelId, type) => {
    setHostels(hostels.map(hostel => {
      if (hostel.id === hostelId && hostel.toilets[type] > 0) {
        return {
          ...hostel,
          toilets: {
            ...hostel.toilets,
            [type]: hostel.toilets[type] - 1
          }
        };
      }
      return hostel;
    }));
  };

  return (
    <div>
      <h1>Hostel Toilet Types</h1>
      {hostels.map(hostel => (
        <div key={hostel.id}>
          <h2>{hostel.name}</h2>
          <p>Modern Toilets: {hostel.toilets.modern}</p>
          <p>Traditional Toilets: {hostel.toilets.traditional}</p>
          <button className="bg-green-900 text-white" onClick={() => addToilet(hostel.id, 'modern')}>Add Modern Toilet</button>
          <button className="bg-red-900 text-white" onClick={() => removeToilet(hostel.id, 'modern')}>Remove Modern Toilet</button>
          <button className="bg-green-900 text-white" onClick={() => addToilet(hostel.id, 'traditional')}>Add Traditional Toilet</button>
          <button className="bg-red-800 text-white" onClick={() => removeToilet(hostel.id, 'traditional')}>Remove Traditional Toilet</button>
        </div>
      ))}
    </div>
  );
};

export default ToiletTypes;
