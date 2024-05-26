import { Routes, Route } from 'react-router-dom';
import StudentHome from './pages/studentHome';
import MessagePage from './pages/messagepage';
import Layout from './components/layout';
import Login from './pages/login';
import NotificationSystem from './pages/Notification System';
import Propertysearch from './pages/propertysearch';
import SignUp from './pages/signup';
import ToiletTypes from './components/propertymange/toilets';
import RoomAvailability from './components/propertymange/room';
import HostelBathrooms from './components/propertymange/hostelbathroom';
import PropertyView from './pages/propertyview';
import Report from './pages/reports/report';
import ManageBookings from './pages/managebookings';
import MyForm from './components/charles/Components/Myform';
import Form from './components/charles/Form';
import StudentForm from './components/maclo/Components/StudentForm';
import LandlordForm from './components/maclo/Components/LandlordForm';


const Routing = () => {
    return(
        //This routes our pages
      <Routes>
      <Route path="/" element={<Layout />}>{/* Any page route in this route attribute will have the nav bar */}
          <Route index element={<StudentHome />} />
          <Route path="Notif" element={<NotificationSystem />}/>
          <Route path="propsearch" element={<Propertysearch/>}/>
          <Route path="/toilet" element={<ToiletTypes />}/>
          <Route path="/room" element={<RoomAvailability />} />
          <Route path="/hostbathroom" element={<HostelBathrooms />} />
          <Route path="/propmanage" element={<MyForm />}/>
          <Route path="landlord/proplist" element={<Form />}/>
          <Route path="/propview" element={<PropertyView />} />
          <Route path="/report" element={<Report/>} />
          <Route path='landlord/managebookings' element={<ManageBookings />} />
          <Route path="student/manageaccnt" element={<StudentForm />} />
          <Route path="landlord/manageaccnt" element={<LandlordForm />} />
      </Route>
      <Route path="/inbox" element={<MessagePage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
    );
}

export default Routing;


