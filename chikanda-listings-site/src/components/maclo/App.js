import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentForm from './Components/StudentForm';
import SelectForm from './Components/SelectForm';
import LandlordForm from './Components/LandlordForm';


function App() {
  return (      

    <BrowserRouter>
      <Routes>
        
      <Route path = "/selectForm " element={<SelectForm/>}></Route>
       <Route path = "/studentform" element={<StudentForm/>}></Route>
        <Route path = "/" element={<LandlordForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
