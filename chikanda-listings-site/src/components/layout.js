import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
};

export default Layout;