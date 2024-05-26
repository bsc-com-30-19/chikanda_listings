import React from 'react';
import PropertyMngContainer from '../components/propertymange/propmngcontainer';

const PropertyList = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='mb-3 m-6'>
          <h1 className=' text-[20px]'>YOUR PROPERTIES</h1>
      <hr className='border border-black'></hr>
      </div>
      <main className="flex-grow flex justifyp-4 m-9">
        <form className="flex w-full gap-6">
          <PropertyMngContainer />
          <PropertyMngContainer />
        </form>
      </main>
      <button className="p-2 bg-green-900 text-white rounded-md w-36 m-9" >Add Property</button>
    </div>
  );
};

export default PropertyList;
