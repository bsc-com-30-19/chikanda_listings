import React from 'react';

const CenteredButtons = ({ setStatusFilter }) => {
  return (
    <div className="flex items-center space-x-6">
      <span className="text-2xl font-semibold">Filter Status By:</span>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={() => setStatusFilter('Accepted')}>
        Accepted
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={() => setStatusFilter('Declined')}>
        Declined
      </button>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={() => setStatusFilter('Pending')}>
        Pending
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={() => setStatusFilter('All')}>
        Show All
      </button>
    </div>
  );
};

export default CenteredButtons;
