/*import logo from './logo.svg';
import './App.css';
import 'tailwindcss/tailwind.css';
import CenteredButtons from './Components/CenteredButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CenteredButtons />
    </div>
  );
}

export default App;*/

// App.js
// App.js

// App.js
// App.js

import React from 'react';
import CenteredButtons from '../components/managebookings/CenteredButtons';
import Card from '../components/managebookings/Card';
import EmailTable from '../components/managebookings/EmailTable'; // Import the EmailTable component

function ManageBookings() {
  const [cursorX, setCursorX] = React.useState();
  const [cursorY, setCursorY] = React.useState();

  React.useEffect(() => {
    const handleMouseDown = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="ManageBookings">
      <div className="bg-cobalt h-[30vh] relative" style={{ top: '-20px' }}> {/* Move the text and buttons up */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-4xl">
          <p className="text-center">You have</p>
          <p className="text-green-500 text-6xl">X X</p>
          <p className="text-center">pending booking requests</p>
        </div>
      </div>
      <div className="bg-white h-[40vh] flex justify-between items-start px-8 relative mt-20"> {/* Adjusted margin-top */}
        <div className="absolute top-10 left-10 z-10">
          <CenteredButtons />
        </div>
        <div className="absolute right-10 top-10 z-20">
          <Card />
        </div>
        <div className="absolute top-20 left-10 z-0" style={{ marginTop: '20px' }}> {/* Move the table down */}
          <EmailTable />
        </div>
        <div
          className="cursor"
          style={{
            left: cursorX + 'px',
            top: cursorY + 'px',
            position: 'absolute',
            pointerEvents: 'none',
          }}
        ></div>
      </div>
    </div>
  );
}

export default ManageBookings;
