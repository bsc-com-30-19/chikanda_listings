import React from 'react';
import avatar from '../assets/img/avatargirl.jpg';


function App() {

  return (
    <div className="App">
      <main className="p-4">
        <div className="w-1/3 p-4">
          <div className="mt-4">
            <label className="block text-lg font-medium ml-[-4]">Full Name:</label>
            <input
              type="text"
              placeholder="Full Name"
              className="mt-2 p-2 bg-cream placeholder-gray-500 border border-gray-300 rounded-md w-full mr-[8]"
            />
          </div>
          <div className="mt-4">
            <StudentProfile />
          </div>
          <div className="mt-4">
            <ImageUpload />
          </div>
          <div className="mt-4">
            <HostelPreference />
          </div>
        </div>
      </main>
    </div>
  );
}

function StudentProfile() {
  return (
    <div>
      <h2 className="text-xl font-bold ml-[-4*4]">Student Profile</h2>
    </div>
  );
}

function ImageUpload() {
  return (
    <div>
      <div className="mt-4 flex items-center">
        <img src={avatar} className="rounded-full" alt="..." width="84.68" height="84.68" />
        <input
          type="file"
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer ml-12"
        />
      </div>
      
    </div> 
  );
}

function HostelPreference() {
  return (
    <div className="mt-4">
      <div>
        <h2 className="text-xl font-bold ml-[-4*4]">Hostel Preference</h2>
      </div>
      <br />
      <div className="flex items-center">
        <div className="bg-blue-500 text-white p-2 rounded-md mr-4">Hostel 1</div>
        <div className="bg-blue-500 text-white p-2 rounded-md mr-4">Hostel 2</div>
        <div className="bg-blue-500 text-white p-2 rounded-md mr-4">Hostel 3</div>
        <div className="bg-blue-500 text-white p-2 rounded-md">Hostel 4</div>
      </div>
      <br />
      <PhoneNumber />
    </div>
  );
}

function PhoneNumber() {
  return (
    <div className="mt-8 ml-[8*4]">
      <div>
        <label className="block text-lg font-medium">Phone Number:</label>
        <div className="ml-8">
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="mt-4 p-4 bg-cream placeholder-gray- 400 border border-gray-300 rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
