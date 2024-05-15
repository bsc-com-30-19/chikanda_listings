import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="bg-p_snow h-screen">
      <NavBar />
      <Outlet />
      {/*What the outlet tag does here is whenever a route is placed inside of it in app.js, 
      it will display The navbar then the page (Tutorial https://www.w3schools.com/react/react_router.asp) */}
      <Footer />
    </div>
      
  )
};

export default Layout;