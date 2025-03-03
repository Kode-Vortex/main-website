import { useState } from "react";
import "./FormPage.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const FormPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4444/submit-form",
        formData
      );
      console.log("Response:", response.data);
      toast.success(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="form-container px-[10%]  mt-44">
      <div>
        <h1>Let’s build your career with us</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          ullamcorper scelerisque mi, in malesuada felis malesuada vel.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>
      <div className=" ml-10 flex items-center justify-center space-x-24 w-full">
        <form onSubmit={handleSubmit} className="career-form h-[65vh]">
          <h2>Build your career with us</h2>

          <div className="form-field">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="course">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="apply-button">
            APPLY
          </button>

          <p className="login-text">
            Already have account?{" "}
            <Link to="/login" className="login-link">
              LOGIN
            </Link>
          </p>
        </form>

        <div className="w-[45%] h-[64vh] mt-[60px] bg-[#D9D9D9] rounded-lg  "></div>
      </div>
    </div>
  );
};

export default FormPage;
