// src/components/CenteredButtons.js
/*import React from 'react';

const CenteredButtons = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button 1
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Button 2
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Button 3
        </button>
      </div>
    </div>
  );
};

export default CenteredButtons;*/
import React from 'react';

const CenteredButtons = () => {
  return (
    <div className="flex items-center space-x-6"> {/* Increased spacing */}
      <span className="text-2xl font-semibold">Filter Status By:</span> {/* Increased font size */}
      <button style={{ cursor: 'pointer' }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-xl">
        Accepted
      </button>
      <button style={{ cursor: 'pointer' }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-xl">
        Declined
      </button>
      <button style={{ cursor: 'pointer' }} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full text-xl">
        Pending
      </button>
    </div>
  );
};

export default CenteredButtons;













