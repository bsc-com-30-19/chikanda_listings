import './App.css';
import { Routes, Route } from 'react-router-dom';
import StudentHome from './pages/studentHome';
import MessagePage from './pages/messagepage';
import Layout from './components/layout';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StudentHome />} />
          <Route path="inbox" element={<MessagePage />}/>
        </Route>
      </Routes>
  );
}
 
export default App;
