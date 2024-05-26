import React from 'react';

const SelectForm = () => {
  const handleMessageIconClick = () => console.log('Message icon clicked');
  const handleNotificationIconClick = () => console.log('Notification icon clicked');
  const handleSearchIconClick = () => console.log('Search icon clicked');
  const handleProfileIconClick = () => console.log('Profile icon clicked');

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" className="w-8 h-8 mr-2" alt="logo" />
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handleMessageIconClick} title="Message">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button><button onClick={handleNotificationIconClick} title="Notification">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 20a2 2 0 100-4 2 2 0 000 4zM4 16a4 4 0 018-1.333V16a4 4 0 01-8 0zm12-7a5.999 5.999 0 00-1.618-4.237A6 6 0 006 6V4a8 8 0 0112 6h-2zm-7 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button><button onClick={handleSearchIconClick} title="Search">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 1a7 7 0 017 7v1.184l.307.307A1 1 0 0114.184 12H15a1 1 0 110 2h-.816a1 1 0 01-.877-.53l-.306-.306V15a7 7 0 11-2.12-5.001l.82-.82A5 5 0 108 6V5a7 7 0 010-4zM6 6v1a5 5 0 0010 0V6a5 5 0 00-10 0z" clipRule="evenodd" />
            </svg>
          </button><button onClick={handleProfileIconClick} title="Profile">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
          </button>
        </div>
      </header>
      <main className="p-4">
        <div className="w-3/4 p-4">
          <a href='/studentform'>Student</a>
          <div className="mt-4">
            <label className="block text-lg font-medium">Full Name:</label>
            <input type="text" placeholder="Full Name" className="mt-2 p-1 bg-cream placeholder-gray-500 border border-gray-300 rounded-md w-1/2" />
          </div>
          <div className="mt-4"><StudentProfile /></div>
          <div className="mt-4"><ImageUpload /></div>
          <div className="mt-4"><PhoneNumber /></div>
        
        </div>
      </main>
    </div>
  );
}

function StudentProfile() {
  return (
    <div><h2 className="text-xl font-bold">Student Profile</h2></div>
  );
}

function ImageUpload() {
  return (
    <div className="mt-4 flex items-center">
      <img src="profile.jpg" alt="Student" className="w-16 h-16 mr-4 rounded-md" />
      <input type="file" className="bg-blue-500 text-white p-1 rounded-md cursor-pointer" />
    </div>
  );
}

function PhoneNumber() {
  return (
    <div>
      <label className="block text-lg font-medium">Phone number:</label>
      <input type="text" placeholder="Phone number" className="mt-2 p-1 bg-cream placeholder-gray-200 border border-gray-140 rounded-md w-1/2" />
      
      <label className="block text-lg font-medium">Additional Info:</label>
      <input type="text" placeholder="Additional Info" className="mt-2 p-1 bg-cream placeholder-gray-200 border border-gray-140 rounded-md w-3/4" />
    </div>
    
  );
}



    
    



export default SelectForm;
