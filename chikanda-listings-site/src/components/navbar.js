import { Link } from "react-router-dom";
import logo from "../assets/logo/LOGO.png";
import searchico from "../assets/icons/Searchico.png";
import notifico from "../assets/icons/notifico.png";
import messageico from "../assets/icons/messageico.png";
import image from "../assets/img/avatargirl.jpg";

function NavBar() {
  return (
    <nav className="bg-p_cyan text-p_lave justify-between items-center inline-flex w-full">
      <Link to="/" className="p-1.5 inline-flex gap-[3px]">
        <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
        <h1 className=" font-bold text-[30px]">Chikanda Listings</h1>
      </Link>
      <ul className="inline-flex text-[25px]">
        <li className="p-1.5 flex">
          <Link to="/inbox" className="h-[30px] w-[30px] my-auto">
            <img
              src={messageico}
              alt="message"
              className="h-[30px] w-[30px]"
            />
          </Link>
        </li>
        <li className="p-1.5 flex">
          <Link to="/notif" className="h-[30px] w-[30px] my-auto">
            <img
              src={notifico}
              alt="notification"
              className="h-[30px] w-[30px]"
            />
          </Link>
        </li>
        <li className="p-1.5 flex">
          <Link to="/propsearch" className="inline-flex">
            <img
              src={searchico}
              alt="search"
              className="h-[30px] w-[30px] my-auto"
            />
            Search
          </Link>
        </li>
        <li className="p-1.5 ml-[50px] mr-[10px]">
          <div>
            <Link to='/landlord/manageaccnt' >
        <img src={image} alt='profile pic' className=" h-[45px] w-[45px] rounded-full object-cover"/>
            </Link>
          </div>
          </li>
      </ul>
    </nav>
  );
}

export default NavBar;
