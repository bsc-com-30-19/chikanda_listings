import { Routes, Route } from 'react-router-dom';
import StudentHome from './pages/studentHome';
import MessagePage from './pages/messagepage';
import Layout from './components/layout';
import Login from './pages/login';
import NotificationSystem from './pages/Notification System';
import Propertysearch from './pages/propertysearch';
import SignUp from './pages/signup';
import PropertyView from './pages/propertyview';
import Report from './pages/reports/report';
import ManageBookings from './pages/managebookings';
import PropertyEdit from './pages/propertyedit_manage';
import PropertyList from './pages/propertylist';
import StudentForm from './pages/StudentForm';
import LandlordForm from './pages/LandlordForm';


const Routing = () => {
    return(
        //This routes our pages
      <Routes>
      <Route path="/" element={<Layout />}>{/* Any page route in this route attribute will have the nav bar */}
          <Route index element={<StudentHome />} />
          <Route path="Notif" element={<NotificationSystem />}/>
          <Route path="propsearch" element={<Propertysearch/>}/>
          <Route path="/propmanage" element={<PropertyEdit />}/>
          <Route path="landlord/proplist" element={<PropertyList />}/>
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


