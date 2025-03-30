import { Link } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import UserState from "../../recoil/state/UserState";
import LoginState from "../../recoil/state/LoginState";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import insta from "./insta.png"
import linkedin from "./linkedin.png"
import x from "./x.png"
import youtube from "./youtube.png"
import toast from "react-hot-toast";
import "./LoginPage.css"
import logo3 from "./logo3.png"
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import googleicons from "./Google_Icons.webp"
import {useGoogleLogin} from "@react-oauth/google" 
import { googleAuth } from "./api.js";



const LoginPage1 = () => {

    const navigate = useNavigate();
    const [paswordVisibility, setpaswordVisibility] = useState(false);

    const [userCredentials , setusercredentials] = useRecoilState(UserState)

    const [loginCredentials, setloginCredentials] = useRecoilState(LoginState);

    const handleCredentials = (event) => {
        setloginCredentials((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
      };



      const handleLogin = async (event) => {
        event.preventDefault();
        console.log("ihbshx");
    
        const { email, password } = loginCredentials;
    
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_REACT_APP_URL}/login`,
            { email, password },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );
    
          if(response.status === 200){
            toast.success("Login SuccessFully!!!");
            setusercredentials(response.data.user);
            navigate("/")
          }
          else if([201,400].includes(response.status)){
            toast.error(response.data.message)
          }
        } catch (error) {
          console.log("Login failed ", error);
        }
      };

      const responseGoogle = async (authResult) => {
        try {
          if (!authResult?.code) {
            throw new Error("No authorization code received.");
          }
          const result = await googleAuth(authResult.code);
          if (result.status === 200) {
            // const { email, firstname, lastname, username, token } = result.data.user;
            // const user = { email, firstname, lastname, username, token };
            setusercredentials(result.data.user)
            toast.success("Login successful!");
            navigate("/");
          } else if(result.status === 201) {
            toast.error(result.data.message)
            navigate("/register")
          }
        } catch (error) {
          console.error("Google Auth Error:", error);
          toast.error(error.message || "Authentication failed");
        }
      };
      
      const googleLogin = useGoogleLogin({
        onSuccess: (response) => responseGoogle(response),
        onError: (error) => console.error("Google Login Error:", error),
        flow: "auth-code",
      });

  return (
    <div className="flex h-[630px]  bg-black items-center relative">

          <div className="bg-grad-loginPage absolute left-[-300px]"></div>

      <div className="flex w-full items-center gap-x-48 bg-black pl-12">
        <div className=" w-[54%] pt-5  items-end flex flex-col">
          <div className="flex pb-6 w-[60%] mr-6">
            <img src={logo3} alt="icon" className="w-52 h-10" />
          </div>
          <form action="#" onSubmit={handleLogin}>
            <h1 className="font-outfit text-[20px] text-start font-normal leading-[23.87px] text-white py-6">
              Please Enter your Account details
            </h1>

            <div className="flex flex-col pb-10">
              <label
                htmlFor="email"
                className="text-white font-outfit text-[20px] font-normal leading-[23.87px] text-left pb-3"
              >
                Email
              </label>
              <input
                className="w-[95%] px-2 py-2 rounded-xl bg-[#8FA0B1] text-black placeholder-black focus:outline-0"
                onChange={handleCredentials}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-white font-outfit text-[20px] font-normal leading-[23.87px] text-left pb-3"
              >
                Password
              </label>
              <div className="relative">
                <input
                    className="w-[95%] px-2 py-2 rounded-xl bg-[#8FA0B1] text-black placeholder-black focus:outline-0"
                    onChange={handleCredentials}
                    type={paswordVisibility ? "text" : "password"}

                    name="password"
                    id="password"
                    required
                />
                 <div
                    onClick={() => setpaswordVisibility(!paswordVisibility)}
                    className="absolute right-10 cursor-pointer   top-3"
                  >
                    {paswordVisibility ? (
                      <Eye size={16} />
                    ) : (
                      <EyeOff size={16} />
                    )}
                  </div>
              </div>
            </div>
            <Link 
  to="/forgot-password" 
  className="font-outfit w-[95%] pr-2 text-[14px] font-normal pt-1 underline leading-[23.87px] text-right text-white hover:underline cursor-pointer"
>
  Forgot Password
</Link>

            <div className="justify-center item-center pt-4">
              <button
                type="submit"
                className="bg-[#1D3E64] border-none justify-center text-white text-lg rounded-2xl py-2 cursor-pointer item-center my-2 w-96"
              >
                Sign In
              </button>
            </div>

            <div className="flex gap-x-4 mt-3 justify-center pr-4">
              <img onClick={googleLogin} className="w-8 cursor-pointer" src={googleicons} alt="" />
              <img className="w-8" src={insta} alt="" />
              <img className="w-8" src={youtube} alt="" />
              <img className="w-8" src={linkedin} alt="" />
            </div>

            <div className="w-[95%] text-end pt-10">
              <Link
                to="/signup"
                className="text-white hover:underline underline font-outfit text-[14px]  font-normal leading-[23.87px] text-left"
              >
                Create an Account
              </Link>
            </div>
          </form>
        </div>

        {/* Right Half  */}
        <div className=" w-[55%]">
          <div className="w-[70%] flex justify-center pb-10 py-[55%] rounded-xl h-[85%] bg-login-grad mt-4">
            <div className="w-full  gap-x-4 bg-white mx-4 my-4 rounded-xl shadow-lg px-2 flex justify-between h-48 items-center relative bottom-[-40px]">
              <div className="w-12 h-12 ml-2 mt-6 px-16 py-16 mb-12 bg-gray-500 rounded-full"></div>

              <div className="flex-col  flex justify-start items-start">
                <p className="text-xs text-gray-700 text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  laoreet purus lacus, eget sodales velit lobortis quis. Quisque
                  eget purus arcu.
                </p>
                <div className="mt-2 text-center">
                  <p className="font-bold text-sm text-black">Name Name</p>
                  <p className="text-gray-500 text-sm">Designation</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage1;
