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
import Form from './components/charles/Form'


const Routing = () => {
    return(
        //This routes our pages
      <Routes>
      <Route path="/" element={<Layout />}>{/*  Anything page route in this route attribute will have the nav bar */}
          <Route index element={<StudentHome />} />
          <Route path="Notif" element={<NotificationSystem />}/>
          <Route path="propsearch" element={<Propertysearch/>}/>
          <Route path="/toilet" element={<ToiletTypes />}/>
          <Route path="/room" element={<RoomAvailability />} />
          <Route path="/hostbathroom" element={<HostelBathrooms />} />
          <Route path="/propmanage" element={<MyForm />}/>
          <Route path="/form" element={<Form />}/>
          <Route path="/propview" element={<PropertyView />} />
          <Route path="/report" element={<Report/>} />
          <Route path='/managebookings' element={<ManageBookings />} />
      </Route>
      <Route path="/inbox" element={<MessagePage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
    );
}

export default Routing;


