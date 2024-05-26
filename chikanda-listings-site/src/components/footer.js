import logo from "../assets/logo/LOGO.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" text-p_lave bg-[#105798] mt-auto">
      <div className="flex flex-col mb-[50px]">
        <div className=" flex flex-row flex-wrap-reverse">
          <div className=" text-[18px] block basis-full md:basis-1/3 py-[25px] px-[25px]">
            <img src={logo} alt="logo" className="h-[120px] w-[120px]" />
            <p>
              Chikanda Listings is a web platform that provides students the
              ability to easily find their next place of accommodation in
              Chikanda easily and seamlessly.
            </p>
          </div>
          <div className="flex basis-full md:basis-2/3 flex-row flex-wrap">
            <div className="text-[20px] block basis-full md:basis-1/2 py-[25px] px-[25px]">
              <h1 className="text-[28px] font-bold"> Discover</h1>
              <ul>
                <li>Host properties</li>
                <li>How it works</li>
              </ul>
            </div>
            <div className="text-[20px] basis-full md:basis-1/2 py-[25px] px-[25px]">
              <h1 className="text-[28px] font-bold">Contact us</h1>
              <ul>
                <li>
                  <Link to="/report">Send Request</Link>
                </li>
                <li>
                  <Link to="/report">Make report</Link>
                </li>
                <div>
                  <div className=" pt-[20px]">
                    <h1 className="text-[28px] font-bold">Phone number</h1>
                    +2658839583026
                  </div>
                  <div className=" pt-[20px]">
                    <h1 className="text-[28px] font-bold">E-mail</h1>
                    janedoe@gmail.com
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
