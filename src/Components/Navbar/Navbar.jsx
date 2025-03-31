import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";
import { FaUser, FaSignOutAlt, FaCog } from "react-icons/fa";
import logo from "./logo.png";
import logo1 from "./logo1.png";
import { VscAccount } from "react-icons/vsc";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAccount, setopenAccount] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const accountRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setuserProfile] = useState(null);

  const [text, setText] = useState("Joint Venture");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Joint Venture" ? "KodeBumps" : "Joint Venture"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when screen size exceeds 768px (tablet) or 1100px (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
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

  useEffect(() => {
    const fetchUserProfile = async () => {

      console.log("harsh berej");
      
      try {
        const response = await axios.get(
          "https://main-server-mu.vercel.app/get-user",
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setIsLoggedIn(true);
          setuserProfile(response.data.user);
        }
      } catch (error) {
        console.error(error);
        setIsLoggedIn(false);
        setuserProfile(null);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    console.log("logout functionality .... ");

    try {
      const response = await axios.get(
        `https://main-server-mu.vercel.app/logout`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setIsLoggedIn(false);
        setuserProfile(null);
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Error while Logout", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setopenAccount(false);
    }
  };

  // Function to handle link clicks
  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // Get first letter of username for avatar display
  const getUserInitial = () => {
    return userProfile?.fullname?.charAt(0).toUpperCase() || "U";
  };

  return (
    <nav className="flex fixed z-50 w-full bg-black justify-between px-[4%] mb-4 pt-4 items-center font-sans">
      <div className="flex items-center">
        <Link to="/" className="flex h-24 items-center">
          <div className="flex items-center">
            <img
              src={logo1}
              alt="logo.png"
              className="w-8 sm:w-12 md:w-16 lg:w-[55%] h-auto"
            />
            <h1 className="kodev-font">
              <span className="kode-col text-xs sm:text-sm md:text-lg lg:text-xl">
                KODE
              </span>
              <span className="text-white text-xs sm:text-sm md:text-lg lg:text-xl">
                VORTEX
              </span>
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

          <Link to="/kodebumps">
                <div className="butt text-white rounded-full">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>
                    <h1 key={text}>{text}</h1>
                  </span>
                </div>
              </Link>

          {isLoggedIn && userProfile ? (
            <div className="relative ml-4 z-50" ref={accountRef}>
              <div
                onClick={() => setopenAccount(!openAccount)} // Toggle openAccount state
                className="flex items-center cursor-pointer  transition-colors duration-300 rounded-full px-4 py-2"
              >
                <div className="w-10 h-10 rounded-full text-xl bg-[#056777] rrounded-full flex items-center justify-center text-white">
                  {getUserInitial()}
                </div>
                <span className="text-white text-sm">{userProfile.name}</span>
              </div>

              {openAccount && (
                <div className="absolute bg-zinc-800 border border-[#056777] rounded-xl w-56 top-full right-0 mt-2 z-50 shadow-lg overflow-hidden">
                  <div className="py-4 px-2  bg-zinc-900 border-b border-[#056777]">
                    <div className="flex items-center space-x-2">
                      <div className="w-9 h-9 rounded-full bg-[#1d3e64] flex items-center justify-center text-white">
                        {getUserInitial()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium">
                          {userProfile.fullname}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {userProfile.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col text-sm">
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-700 transition-colors"
                      onClick={() => setopenAccount(false)}
                    >
                      <FaUser /> My Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-700 transition-colors"
                      onClick={() => setopenAccount(false)}
                    >
                      <FaCog /> Account Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-700 transition-colors w-full text-left border-t border-zinc-700"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
             
              <Link
                to="/login"
                className="text-3xl px-4 flex items-center hover:text-[#3da9b9] transition-colors"
              >
                <VscAccount />
                <span className="ml-1 text-sm">Login</span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile View - Account/Kodebumps button and Hamburger */}
        <div className="lg:hidden flex items-center">
          {isLoggedIn && userProfile ? (
            <div className="relative mr-4" ref={accountRef}>
              <div
                onClick={() => setopenAccount(!openAccount)}
                className="w-8 h-8 rounded-full bg-[#1d3e64] flex items-center justify-center text-white cursor-pointer"
              >
                {getUserInitial()}
              </div>

              {openAccount && (
                <div className="absolute bg-zinc-800 border border-[#056777] rounded-xl w-56 right-0 top-full mt-2 z-50 shadow-lg overflow-hidden">
                  <div className="p-4 bg-zinc-900 border-b border-[#056777]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1d3e64] flex items-center justify-center text-white">
                        {getUserInitial()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-medium">
                          {userProfile.name}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {userProfile.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col text-sm">
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-700 transition-colors"
                      onClick={() => setopenAccount(false)}
                    >
                      <FaUser /> My Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-700 transition-colors"
                      onClick={() => setopenAccount(false)}
                    >
                      <FaCog /> Account Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-700 transition-colors w-full text-left border-t border-zinc-700"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/kodebumps"
              className="transform scale-75 sm:scale-90 mr-4"
            >
              <div className="butt text-white rounded-full">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-xs sm:text-sm">
                  <h1 key={text}>{text}</h1>
                </span>
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
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          }}
        >
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-80 rounded-xl py-8 px-6 mx-4 max-w-md w-full border border-[#056777]">
            <div className="flex flex-col items-center mb-8">
              <img src={logo} alt="logo.png" className="w-16 h-auto mb-3" />
              <h1 className="kodev-font">
                <span className="kode-col text-2xl">KODE</span>
                <span className="text-white text-2xl">VORTEX</span>
              </h1>
            </div>

            <div className="flex flex-col items-center space-y-4 w-full">
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

              {/* Add login/profile options to mobile menu */}
              <hr className="w-full h-[1px] bg-white opacity-20" />

              {isLoggedIn && userProfile ? (
                <div className="w-full flex  flex-col items-center">
                  <Link
                    to="/profile"
                    onClick={() => handleLinkClick("/profile")}
                    className="w-full text-center text-white px-4 text-lg py-2 flex items-center  justify-center gap-2"
                  >
                    <FaUser size={16} /> My Profile
                  </Link>
                  <hr className="w-full h-[1px] bg-white opacity-20" />
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-center text-white px-4 text-lg py-2 flex items-center justify-center gap-2"
                  >
                    <FaSignOutAlt size={16} /> Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => handleLinkClick("/login")}
                  className="w-full text-center text-white px-4 text-lg py-2 flex items-center justify-center gap-2"
                >
                  <VscAccount size={18} /> Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
