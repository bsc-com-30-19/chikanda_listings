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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="flex justify-between mt-4">
        <h2>Preview Image</h2>
      </div>
      <form onSubmit={handleSubmit} style={{ flex: 1 }}>
        <div className="flex space-x-4">
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`p ${index + 1}`} className="w-40 h-20" />
          ))}
        </div>
        <div className="property-details mt-20">
          <h3>Property Details</h3>
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
        <div className="description mt-20">
          <label>
            Description:
            <textarea style={{ border: '1px solid black' }} value={description} onChange={handleDescriptionChange} placeholder="Description" />
          </label>
        </div>
        <button type="submit">Submit</button>
        <div className="flex justify-between mt-20">
          <button className={`${addButtonColor}`} onClick={handleAdd}>Add changes</button>
          <button className={`${deleteButtonColor}`} onClick={handleDelete}>Delete Changes</button>
        </div>
      </form>
    </div>
  );
};

export default PropertyEdit;
