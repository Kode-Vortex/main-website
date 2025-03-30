import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import RegisterState from "../../recoil/state/RegisterState.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import x from "./x.png";
import toast from "react-hot-toast";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

import "./Register.css";
const Register1 = () => {
  const navigate = useNavigate();
  const [paswordVisibility, setpaswordVisibility] = useState(false);

  const [registerCredentials , setregisterCredentials] = useRecoilState(RegisterState);

  console.log(registerCredentials);
  

   const handleCredentials = (event) => {
    setregisterCredentials((prev) =>( {
      ...prev,
      [event.target.name]: event.target.value
    }))

  }

  const handleRegistration = async (event) => {
    event.preventDefault();
  
    try {
      const { fullname , email , phone_no , password , message } = registerCredentials;

      console.log(fullname , email , phone_no , password , message);

      console.log(`${import.meta.env.VITE_REACT_APP_URL}/register`);
      
      
  
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/register`, 
        { fullname , email , phone_no , password , message }, 
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
  
      if([201,202].includes(response.status)){
        toast.error(response.data.message)
      }else if(response.status == 200){
        toast.success(response.data.message)
        setregisterCredentials({
          fullname: "",
         
          email: "",
          phone_no:"",
          password: "",
          message:""
        });

        navigate("/login")
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  

  return (
    <div className="h-[680px] relative w-[124.3%] right-36 overflow-hidden ">
      <div className="bg-grad-signuppage absolute top-24 left-[-200px]"></div>

      <div className="flex  w-full px-[10%]">
        {/* Left half */}
        <div className="w-[45%] pt-11   justify-center flex  bg-black">
          <div className="flex flex-col items-start space-y-2 ">
            <div className="pb-10 ">
              <button className="text-white px-10 py-3 rounded-full bg-[#363739]  focus:outline-0 font-outfit text-[24px] font-normal leading-[23.87px] text-left">
                Contact Us
              </button>
            </div>

            <h1 className="text-white font-outfit text-[35px] font-normal leading-[23.87px] text-left pb-10">
              How can we help you ?
            </h1>

            <p className="text-white font-outfit text-[20px] font-normal leading-[23.87px] text-left">
              You can fill the form or drop an email to <br />
            </p>
            <p className="text-white pb-6 font-outfit text-[20px] font-normal leading-[23.87px] text-left">
              vijay.singh@kodevortex.in
            </p>

            <div className="flex flex-col items-start space-y-6 pt-6 ">
              <button className="flex items-center bg-[#23565F] justify-center text-white rounded-full  w-44 h-12  space-x-2">
                <FaGoogle className="text-xl" />
                <span>kodevortex</span>
              </button>

              <button className="flex items-center bg-[#23565F] justify-center text-white rounded-full  w-44 h-12  space-x-2">
                <img className="w-8" src={insta} alt="" />
                <span>kodevortex</span>
              </button>

              <button className="flex items-center bg-[#23565F] justify-center text-white rounded-full  w-44 h-12  space-x-2">
                <img className="w-8" src={linkedin} alt="" />
                <span>KodeVortex</span>
              </button>

              <button className="flex items-center bg-[#23565F] justify-center text-white rounded-full  w-44 h-12  space-x-2">
                <img className="w-8" src={x} alt="" />
                <span>KodeVortex</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right half */}
        <div className=" w-[55%] pr-[8%] ">
          <div className=" bg-black  text-white flex pt-4 justify-center">
            <form className="space-y-5" onSubmit={handleRegistration}>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px]"
                >
                  Full Name
                </label>
                <input
                  className="w-[150%] px-2 pl-4 py-1.5 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
                  type="text"
                  name="fullname"
                  id="fullname"
                  autoFocus
                  placeholder="Enter you Full Name"
                  onChange={handleCredentials}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px] "
                >
                  Email Address
                </label>
                <input
                  className="w-[150%] px-2 py-1.5 pl-4  rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
                  type="email"
                  name="email"
                  autoFocus
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={handleCredentials}
                  required
                />
              </div>

              <div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone_no"
                    className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px] "
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-[150%] px-2 py-1.5 pl-4 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
                    type="phone_no"
                    name="phone_no"
                    autoFocus
                    placeholder="Enter you Phone Numer"
                    id="phone_no"
                    onChange={handleCredentials}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px] "
                >
                  Password
                </label>
                <div className="flex relative flex-col">
                  <div>
                    <input
                      className="w-[150%] px-2 py-1.5 pl-4 rounded-3xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
                      type={paswordVisibility ? "text" : "password"}
                      name="password"
                      autoFocus
                      placeholder="Enter you Password"
                      id="password"
                      onChange={handleCredentials}
                      required
                    />
                  </div>
                  <div
                    onClick={() => setpaswordVisibility(!paswordVisibility)}
                    className="absolute -right-32 text-black cursor-pointer  top-3"
                  >
                    {paswordVisibility ? (
                      <Eye size={16} />
                    ) : (
                      <EyeOff size={16} />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex  flex-col">
                <label
                  htmlFor="message"
                  className="pb-2 text-start font-outfit text-[20px] font-normal leading-[23.87px] text-leftfont-outfit "
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-[150%] px-2 h-32  py-2 pl- rounded-2xl bg-[#B8B8B8] text-black placeholder-black focus:outline-0"
                  id="message"
                  placeholder="Enter Your Text Here"
                  onChange={handleCredentials}
                  required
                ></textarea>
              </div>

              <div className="flex justify-start  gap-x-3">
                <input type="checkbox" name="policy" id="policy" required />
                <label className="w-72" htmlFor="policy">
                  I agree to your
                  <span className="text-blue-500">Privacy Policy</span> terms.
                </label>
              </div>

              <div className=" w-[150%]">
                <button
                  type="submit "
                  className="w-full py-2.5 rounded-3xl bg-[#0D315C]"
                >
                  Submit Form
                </button>
                <h1 className="text-center pt-3">
                  Already Have an Account ?{" "}
                  <Link
                    to="/login"
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Login
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-grad-signuppage right-[-180px]  bottom-24 absolute"></div>
    </div>
  );
};

export default Register1;
