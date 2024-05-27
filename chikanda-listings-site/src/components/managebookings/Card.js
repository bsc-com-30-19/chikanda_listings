// src/components/Card.js
// src/components/Card.js
import messageico from '../../assets/icons/messageicocy.png';
import avatar from '../../assets/img/avatargirl.jpg';
import React from 'react';

const Card = () => {
  return (
    <div className="w-96 md:w-120 lg:w-140 h-56 rounded overflow-hidden shadow-lg bg-p_lave p-8"> {/* Custom width */}
      <div className="flex items-center space-x-6"> {/* Increased spacing */}
        <div className="text-2xl"> {/* Increased text size */}
          <div className='inline-flex gap-[20px]'> 
          <img src={avatar} alt="avatar" className='h-[50px] w-[50px] rounded-full'/>
          <p className="font-bold leading-[50px]">Justice Campus</p>
          </div>
          <p className="text-gray-700 text-left">Software Engineer</p>
          <div className='flex'>
          <p className="text-gray-700 leading-[60px]">Message</p>
          <img src={messageico} alt='message' className='h-[60px] w-[60px]'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
