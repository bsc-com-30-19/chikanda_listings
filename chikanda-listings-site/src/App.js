import './App.css';
import { Routes, Route } from 'react-router-dom';
import StudentHome from './pages/studentHome';
import MessagePage from './pages/messagepage';
import Layout from './components/layout';
import Login from './pages/login';

function App() {
  return (
    //This routes our pages
      <Routes>
        <Route path="/" element={<Layout />}>{/*  Anything page route in this route attribute will have the nav bar */}
          <Route index element={<StudentHome />} />
          <Route path="inbox" element={<MessagePage />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
  );
}
 
export default App;
