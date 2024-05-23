// src/components/Card.js
// src/components/Card.js


import React from 'react';

const Card = () => {
  return (
    <div className="w-96 md:w-120 lg:w-140 h-56 rounded overflow-hidden shadow-lg bg-pink-500 p-8"> {/* Custom width */}
      <div className="flex items-center space-x-6"> {/* Increased spacing */}
        <div className="text-2xl"> {/* Increased text size */}
          <p className="font-bold">Justice Campus</p>
          <p className="text-gray-700">Software Engineer</p>
          <p className="text-white">Message</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
