import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-sky-600 text-white flex justify-between">
        <div>
          <input type="text" placeholder="Search..." className="p-1 rounded-md" />
        </div>
      </header>
      <div className='mb-3 m-6'>
          <h1 className=' text-[20px]'>YOUR PROPERTIES</h1>
      <hr className='border border-black'></hr>
      </div>
      <main className="flex-grow flex justifyp-4 m-9">
        <form className="flex w-full gap-6">
          <img src="https://th.bing.com/th/id/OIP.RqSDOkOoPalkvt2MUoHvwAHaFj?w=244&h=183&c=7&r=0&o=5&pid=1.7" alt="Hostel"/>
          <img className=" border border-black border-6 border-dashed" src="https://th.bing.com/th?q=A+Youth+Hostel&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=MW&setlang=en&adlt=moderate&t=1&mw=247" alt="Hostel"/>

        </form>
      </main>
      <button className="p-2 bg-green-900 text-white rounded-md w-36 m-9" >Add Property</button>
      
      <footer className="p-10 bg-blue-900 text-white">
        <p>ContactUs</p>
      </footer>
    </div>
  );
};

export default App;
