import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

const Layout = () => {
  return (
    <div className="bg-p_snow h-fit">
      <NavBar />
      <Outlet />
    </div>
  )
};

export default Layout;