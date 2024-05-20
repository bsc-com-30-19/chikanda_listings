import React from 'react';

const HostelBathrooms = () => {
  const hostels = [
    { name: 'Hostel A', type: 'Modern' },
    { name: 'Hostel B', type: 'Traditional' },
    { name: 'Hostel C', type: 'Both' },
    // Add more hostels and their bathroom types here
  ];

  return (
    <div>
      <h1>Hostel Bathrooms</h1>
      <ul>
        {hostels.map((hostel, index) => (
          <li key={index}>
            {hostel.name}: {hostel.type} bathroom
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostelBathrooms;
