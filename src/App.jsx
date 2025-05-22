import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import LoginPage from "../src/AuthenticationPages/LoginPage/LoginPage";
import Register from "../src/AuthenticationPages/Register/Register";
import Otp from "../src/AuthenticationPages/Otp/Otp";
import { Toaster } from "react-hot-toast";
import InternshipPage from "./pages/InternshipPage/InternshipPage";
import Navbar1 from "./Components/Navbar/NavBar1";
import Aboutuspage from "./pages/Aboutuspage/Aboutuspage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import KodeBumps from "./pages/KodeBumps/KodeBumps";
import HomePage from "./pages/HomePage/HomePage";
import GridBackground from "./Components/GridBackground/GridBackground";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import LoginPage1 from "./AuthenticationPages/LoginPage/LoginPage1";
import Register1 from "./AuthenticationPages/Register/Register1";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ForgotPasswordPage from "./AuthenticationPages/ForgotPasswordPage/ForgotPasswordPage";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ServicePage from "./pages/ServicePage/ServicePage";
import EventPage from "./pages/EventPage/EventPage";
import FifthSection from "./pages/EventPage/section/FifthSection";
import SixthSection from "./pages/EventPage/section/SixthSection";
const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4444/get-user", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUser(response.data.data); // Set the user data properly
        } else {
          setUser(null); // In case of failure
        }
      } catch (error) {
        setUser(null); // In case of an error
        console.error("Failed to fetch user", error);
      }
    };

    fetchUser();
  }, []);

  const MainLayout = () => (
    <div className="bg-black min-h-screen  overflow-hidden relative">
      <GridBackground/>
      <div className="relative z-10">

      <Navbar user={user} setUser={setUser} />
      <div className="pt-36">
        <Outlet />
      </div>

      <Footer />
      </div>
    </div>
  );
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <div className="overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
        <ScrollToTop/>
      <div>
        <Routes>
        <Route path="*" element={<PageNotFound/>} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />

            <Route path="/events" element={<EventPage/>} />
            <Route path="/event-register" element={<FifthSection/>}/>
            <Route path="/payment" element={<SixthSection/>}/>
            <Route
              path="/internship"
              element={
                <>
                  <InternshipPage />
                </>
              }
            />
            <Route path="/about-us" element={<Aboutuspage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/kodebumps" element={<KodeBumps />} />
          </Route>
          <Route
            path="/login"
            element={
              <div className="bg-black px-[10%]">
                {" "}
                <Navbar1 /> <LoginPage1 />{" "}
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="bg-black px-[10%]">
                {" "}
                <Navbar1 /> <Register1 />{" "}
              </div>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <div className="bg-black px-[10%]">
                {" "}
                <Navbar1 /> <ForgotPasswordPage />{" "}
              </div>
            }
          />

          <Route path="/sendotp" element={<Otp setUser={setUser} />} />
        </Routes>
      </div>
    </div>

    </GoogleOAuthProvider>
  );
};

export default App;
