// src/components/Card.js
// src/components/Card.js


import React from 'react';
import avatar from '../assets/avatar.jpg'; // Ensure this path is correct based on your folder structure
import '../index.css'; // Import the custom CSS file

const Card = () => {
  return (
    <div className="w-96 md:w-120 lg:w-140 h-56 rounded overflow-hidden shadow-lg bg-pink-500 p-8"> {/* Custom width */}
      <div className="flex items-center space-x-6"> {/* Increased spacing */}
        <img className="w-24 h-24 rounded-full" src={avatar} alt="Avatar" /> {/* Increased avatar size */}
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
