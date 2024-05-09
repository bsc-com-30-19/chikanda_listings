import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout'; 
import StudentHome from './pages/studentHome';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<StudentHome/>} />
        </Route>
      </Routes>
  );
}
 
export default App;
