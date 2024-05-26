import React from 'react';
import avatar from '../assets/img/avatargirl.jpg';
import { Link } from 'react-router-dom';



function LandlordForm() {

  return (
    <div className="App p-[20px]">
      
      <main className="p-[20px] rounded-[25px] bg-p_lave">
        <div className="w-full lg:w-1/3 p-4">
          <div className="mt-4">
            <label className="block text-lg font-medium ml-[-4]">Full Name:</label>
            <input
              type="text"
              placeholder="Full Name"
              className="mt-2 p-2 bg-cream placeholder-gray-500 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mt-4">
            <StudentProfile />
          </div>
          <div className="mt-4">
            <ImageUpload />
          </div>
          <div className="mt-4">
            
          </div>
          <div className="mt-4">
            <PhoneNumber />
          </div>
          <div className="mt-8">
            <Link to="/landlord/proplist">
            <ManageListings />
            </Link>
          </div>
          <div className="mt-8">
            <Link to="/landlord/managebookings">
            <ManageBookings />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function StudentProfile() {
  return (
    <div>
      <h2 className="text-xl font-bold">Landlord Profile</h2>
    </div>
  );
}

function ImageUpload() {
  return (
    <div>
      <div className="mt-4 flex items-center">
        <img src={avatar} className="rounded-full" alt="Profile" width="84.68" height="84.68" />
        <input
          type="file"
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer ml-4"
        />
      </div>
    </div> 
  );
}



function PhoneNumber() {
  return (
    <div className="mt-4">
      <label className="block text-align margin"><b>Phone Number:</b> </label>
      <div className="mt-2">
        <input
          type="text"
          placeholder="+2658876543"
          className="p-2 bg-cream placeholder-gray-500 border border-gray-300 rounded-left w-full"
        />
      </div>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="p-2 bg-cream placeholder-gray- border border-gray-300 rounded-left w-full"
        />
      </div>
    </div>
  );
}

function ManageListings() {
  return (
    <div className="bg-blue-500 text-white p-2 rounded  text-left mt-4">
      <h2 className="text-0.5g font-medium">Manage Listings</h2>
    </div>
  );
}

function ManageBookings() {
  return (
    <div className="bg-blue-500 text-white p-2 rounded  text-left mt-4">
      <h2 className="text-0.5g font-medium">Manage Bookings</h2>
    </div>
  );
}

export default LandlordForm;
