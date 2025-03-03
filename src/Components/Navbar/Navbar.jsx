import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";
import logo from "./logo.png";
import logo1 from "./logo1.png";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAccount, setopenAccount] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const accountRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when screen size exceeds 768px (tablet) or 1100px (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setopenAccount(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const url = "http://localhost:4444/logout";
      const response = await axios.post(url, {}, { withCredentials: true });

      if (response.status === 200) {
        toast.success(response.data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error("Error while logging out!!!");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // If opening the menu, also close the account dropdown
    if (!isMobileMenuOpen) {
      setopenAccount(false);
    }
  };

  // Function to handle link clicks
  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false); // Close the mobile menu
    navigate(path); // Navigate to the desired route
  };

  return (
    <nav className="flex fixed z-50  w-full bg-black  justify-between px-[4%] mb-4 pt-4 items-center font-sans ">
      <div className="flex items-center">
        <Link to="/" className="flex h-24 items-center">
          <div className="flex items-center">
            <img 
              src={logo1} 
              alt="logo.png" 
              className="w-8 sm:w-12 md:w-16 lg:w-[55%] h-auto" 
            />
            <h1 className="kodev-font">
              <span className="kode-col text-xs sm:text-sm md:text-lg lg:text-xl">KODE</span>
              <span className="text-white text-xs sm:text-sm md:text-lg lg:text-xl">VORTEX</span>
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-3">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center font-sans space-x-0.5 text-sm text-white">
          <hr className="w-[1px] h-8 bg-white" />
          <Link
            to="/"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/"
                ? "border-b-2 mx-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 mx-2 hover:border-[#3da9b9]"
            }`}
          >
            Home
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/training"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/training"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            Trainings
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/internship"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/internship"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            Internship
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/about-us"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/about-us"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            About us
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/contact-us"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/contact-us"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            Contact us
          </Link>

          {user ? (
            <div className="relative" ref={accountRef}>
              <MdAccountCircle
                onClick={() => setopenAccount(!openAccount)}
                className="text-4xl cursor-pointer bg-col-7"
              />
              {openAccount && (
                <div className="absolute bg-zinc-800 rounded-xl w-36 top-full mt-2 z-50">
                  <div className="flex flex-col items-center">
                    <h1 className="py-3 rounded-t-xl w-full h-full hover:bg-zinc-900 cursor-pointer text-center">
                      {user.name}
                    </h1>
                    <button
                      onClick={handleLogout}
                      className="py-3 rounded-b-xl h-full cursor-pointer hover:bg-zinc-900 w-full text-center"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/kodebumps">
              <div className="butt text-white rounded-full">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>Kodebumps</span>
              </div>
            </Link>
          )}
        </div>

        {/* Mobile View - Account/Kodebumps button and Hamburger */}
        <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
          {user ? (
            <div className="relative" ref={accountRef}>
              <MdAccountCircle
                onClick={() => setopenAccount(!openAccount)}
                className="text-3xl cursor-pointer bg-col-7"
              />
              {openAccount && (
                <div className="absolute bg-zinc-800 rounded-xl w-36 right-0 top-full mt-2 z-50">
                  <div className="flex flex-col items-center">
                    <h1 className="py-3 rounded-t-xl w-full h-full hover:bg-zinc-900 cursor-pointer text-center">
                      {user.name}
                    </h1>
                    <button
                      onClick={handleLogout}
                      className="py-3 rounded-b-xl h-full cursor-pointer hover:bg-zinc-900 w-full text-center"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/kodebumps" className="transform scale-75 sm:scale-90">
              <div className="butt text-white rounded-full">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-xs sm:text-sm">Kodebumps</span>
              </div>
            </Link>
          )}
          
          {/* Hamburger Menu Icon */}
          <button 
            onClick={toggleMobileMenu} 
            className="text-white text-2xl z-50"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Semi-transparent Overlay */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-0 z-40 flex justify-center items-center"
          style={{ 
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.85)'
          }}
        >
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-80 rounded-xl py-8 px-6 mx-4 max-w-md w-full border border-[#056777]">
            <div className="flex flex-col items-center mb-8">
              <img 
                src={logo} 
                alt="logo.png" 
                className="w-16 h-auto mb-3" 
              />
              <h1 className="kodev-font">
                <span className="kode-col text-2xl">KODE</span>
                <span className="text-white text-2xl">VORTEX</span>
              </h1>
            </div>

            <div className="flex flex-col items-center space-y-4 w-full">
              {/* Adding horizontal rules between nav items, just like desktop */}
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={`w-full text-center text-white px-4 text-lg py-2 rounded-full ${
                  location.pathname === "/"
                    ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                    : "hover:border-b-4 hover:border-[#3da9b9]"
                }`}
              >
                Home
              </Link>
              <hr className="w-full h-[1px] bg-white opacity-20" />

              <Link
                to="/training"
                onClick={() => handleLinkClick("/training")}
                className={`w-full text-center text-white px-4 text-lg py-2 rounded-full ${
                  location.pathname === "/training"
                    ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                    : "hover:border-b-4 hover:border-[#3da9b9]"
                }`}
              >
                Trainings
              </Link>
              <hr className="w-full h-[1px] bg-white opacity-20" />

              <Link
                to="/internship"
                onClick={() => handleLinkClick("/internship")}
                className={`w-full text-center text-white px-4 text-lg py-2 rounded-full ${
                  location.pathname === "/internship"
                    ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                    : "hover:border-b-4 hover:border-[#3da9b9]"
                }`}
              >
                Internship
              </Link>
              <hr className="w-full h-[1px] bg-white opacity-20" />

              <Link
                to="/about-us"
                onClick={() => handleLinkClick("/about-us")}
                className={`w-full text-center text-white px-4 text-lg py-2 rounded-full ${
                  location.pathname === "/about-us"
                    ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                    : "hover:border-b-4 hover:border-[#3da9b9]"
                }`}
              >
                About us
              </Link>
              <hr className="w-full h-[1px] bg-white opacity-20" />

              <Link
                to="/contact-us"
                onClick={() => handleLinkClick("/contact-us")}
                className={`w-full text-center text-white px-4 text-lg py-2 rounded-full ${
                  location.pathname === "/contact-us"
                    ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9] navbar-link-active"
                    : "hover:border-b-4 hover:border-[#3da9b9]"
                }`}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;