import React, { useState } from 'react';
import first from "../assets/img/dorm_stuff/first.jpg";
import second from "../assets/img/dorm_stuff/second.jpg";
import three from "../assets/img/dorm_stuff/three.jpg";
import four from "../assets/img/dorm_stuff/four.jpg";
import five from "../assets/img/dorm_stuff/five.jpg";
import six from "../assets/img/dorm_stuff/six.jpg";

const PropertyEdit = () => {
  const [description, setDescription] = useState('');
  const [rent, setRent] = useState('');
  const photos = [first, second, three, four, five, six]; // Store image paths here
  const [deleteButtonColor, setDeleteButtonColor] = useState('bg-red-900');
  const [addButtonColor, setAddButtonColor] = useState('bg-green-900');
  const [allowedSex, setAllowedSex] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleRentChange = (event) => {
    setRent(event.target.value);
  };

  const handleSexChange = (event) => {
    setAllowedSex(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description || photos.includes(null)) {
      alert('Please add photos and a description.');
      return;
    }
    // Submit the form
  };

  const handleDelete = () => {
    // Delete changes
  };

  const handleAdd = () => {
    // Add changes
  };

  return (
    <div className="p-[20px]" style={{ display: 'flex', flexDirection: 'column'}}>
      <div className="rounded-[25px] px-[20px] bg-p_lave">
      <form onSubmit={handleSubmit} style={{ flex: 1 }} className='mt-[20px]'>
      <div className="bg-p_colu rounded-[25px] px-[25px] py-[30px]"> 
      <div className="flex justify-between font-bold text-[24px]">
        <h2>Preview Image</h2>
      </div>
        <div className="flex space-x-4">
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`p ${index + 1}`} className="w-[150px] h-[150px]" />
          ))}
        </div>
        </div>

        <div className="bg-p_colu rounded-[25px] px-[25px] py-[30px] mt-[30px] font-semibold text-[18px] flex flex-col">
          <h3 className='font-bold text-[24px]'>Property Details</h3>
          <label>
            Rent per month:
            <input type="number" value={rent} onChange={handleRentChange} placeholder="Rent Amount" style={{ margin: '10px' }} />
          </label>
          <label>
            Allowed Sex:
            <input type="radio" value="Male" checked={allowedSex === 'Male'} onChange={handleSexChange} /> Male
            <input type="radio" value="Female" checked={allowedSex === 'Female'} onChange={handleSexChange} /> Female
          </label>
        </div>

        <div className="bg-p_colu rounded-[25px] px-[25px] py-[30px] mt-[30px] font-semibold text-[18px] flex flex-col">
          <label htmlFor='description'>
            Description:
          </label>
          <input name="description" style={{ border: '1px solid black' }} value={description} onChange={handleDescriptionChange} placeholder="Description" />
        </div>
        <button type="submit">Submit</button>
        <div className="flex justify-between mt-20">
          <button className={`${addButtonColor}`} onClick={handleAdd}>Add changes</button>
          <button className={`${deleteButtonColor}`} onClick={handleDelete}>Delete Changes</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default PropertyEdit;
