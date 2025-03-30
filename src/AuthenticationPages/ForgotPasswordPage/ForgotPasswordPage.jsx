// ForgotPasswordPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
// import logo3 from "./logo3.png";
// import "./LoginPage.css";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle email submission and request OTP
  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}/send-otp`,
        { email },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("OTP sent to your email!");
        setStep(2);
      } else {
        toast.error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("OTP request failed:", error);
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}/verify-otp`,
        { email, otp },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("OTP verified successfully!");
        setStep(3);
      } else {
        toast.error(response.data.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      toast.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // Handle password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();

    console.log(newPassword , confirmPassword);  
    
    if (newPassword != confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    
    
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_URL}/reset-password`,
        { email, newPassword },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successfully!");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Failed to reset password");
      }
    } catch (error) {
      console.error("Password reset failed:", error);
      toast.error(error.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[630px] bg-black  relative">
      <div className="bg-grad-loginPage absolute left-[-300px]"></div>

      <div className="flex w-full  justify-center">
        <div className="w-[500px] pt-5 items-center flex flex-col">
        
          {step === 1 && (
            <form onSubmit={handleSendOTP} className="w-full max-w-md">
              <h1 className="font-outfit text-[36px] text-center font-semibold text-white py-6">
                Forgot Password
              </h1>
              <p className="text-white text-lg text-center mb-6">
                Enter your email address and we'll send you an OTP to reset your password
              </p>

              <div className="flex flex-col pb-6">
                <label
                  htmlFor="email"
                  className="text-white font-outfit text-[18px] font-normal text-left pb-3"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#8FA0B1] text-black placeholder-black focus:outline-0"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="bg-gray-600 text-white text-lg rounded-2xl py-2 px-6 cursor-pointer"
                >
                  Back to Login
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1D3E64] text-white text-lg rounded-2xl py-2 px-6 cursor-pointer"
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOTP} className="w-full max-w-md">
              <h1 className="font-outfit text-[24px] text-center font-semibold text-white py-6">
                Verify OTP
              </h1>
              <p className="text-white text-center mb-6">
                We've sent an OTP to your email. Please enter it below.
              </p>

              <div className="flex flex-col pb-6">
                <label
                  htmlFor="otp"
                  className="text-white font-outfit text-[18px] font-normal text-left pb-3"
                >
                  OTP
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-[#8FA0B1] text-black placeholder-black focus:outline-0"
                  type="text"
                  name="otp"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-gray-600 text-white text-lg rounded-2xl py-2 px-6 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1D3E64] text-white text-lg rounded-2xl py-2 px-6 cursor-pointer"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleResetPassword} className="w-full max-w-md">
              <h1 className="font-outfit text-[24px] text-center font-semibold text-white py-6">
                Reset Password
              </h1>
              <p className="text-white text-center mb-6">
                Enter your new password
              </p>

              <div className="flex flex-col pb-4">
                <label
                  htmlFor="newPassword"
                  className="text-white font-outfit text-[18px] font-normal text-left pb-3"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-[#8FA0B1] text-black placeholder-black focus:outline-0"
                    type={passwordVisible ? "text" : "password"}
                    name="newPassword"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <div
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-4 cursor-pointer top-3"
                  >
                    {passwordVisible ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col pb-6">
                <label
                  htmlFor="confirmPassword"
                  className="text-white font-outfit text-[18px] font-normal text-left pb-3"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-[#8FA0B1] text-black placeholder-black focus:outline-0"
                    type={confirmPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <div
                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    className="absolute right-4 cursor-pointer top-3"
                  >
                    {confirmPasswordVisible ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-gray-600 text-white text-lg rounded-2xl py-2 px-6 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1D3E64] text-white text-lg rounded-2xl py-2 px-6 cursor-pointer"
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;