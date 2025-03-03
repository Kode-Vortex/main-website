import { Link } from "react-router-dom";
import "./NavBar.css";

import logo from "./logo.png";

const Navbar1 = () => {
  

  return (
    <nav className="flex w-full  justify-between px-[5%] pt-4 items-center font-sans">
      <div className="flex items-center ">
        <Link to="/" className="flex  h-24 items-center">
          <div className="flex items-center ">
            <img src={logo} alt="logo.png" className="w-[60%] h-20  " />
            <h1 className="kodev-font ">
              <span className="kode-col text-xl ">KODE</span>
              <span className="text-white text-xl ">VORTEX</span>
            </h1>
          </div>
        </Link>
      </div>

   
      
    </nav>
  );
};

export default Navbar1;
