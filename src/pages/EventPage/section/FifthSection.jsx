import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FifthSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappPhone: "",
    email: "",
    year: "",
    collegeName: "",
    stream: "",
    workshopSelection: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Proceed to payment page
    navigate("/payment", { state: formData });
  };

  return (
    <section id="registration" className="py-20 bg-neutral-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-inter">Register</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Secure your spot in our upcoming workshops. Limited seats available!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-700 shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold font-inter text-cyan-400">Registration Form</h3>
                
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsappPhone" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp Phone</label>
                    <input
                      type="tel"
                      id="whatsappPhone"
                      name="whatsappPhone"
                      value={formData.whatsappPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white"
                      placeholder="Enter your WhatsApp number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">Year</label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white"
                    >
                      <option value="" disabled>Select your year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="collegeName" className="block text-sm font-medium text-gray-300 mb-1">College Name</label>
                    <input
                      type="text"
                      id="collegeName"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white"
                      placeholder="Enter your college name"
                    />
                  </div>

                  <div>
                    <label htmlFor="stream" className="block text-sm font-medium text-gray-300 mb-1">Stream</label>
                    <input
                      type="text"
                      id="stream"
                      name="stream"
                      value={formData.stream}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white"
                      placeholder="Enter your stream (e.g., CSE)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Workshop Selection</label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="uiuxWorkshop"
                        name="workshopSelection"
                        value="uiux"
                        onChange={handleChange}
                        checked={formData.workshopSelection === "uiux"}
                        required
                      />
                      <label htmlFor="uiuxWorkshop" className="ml-3 text-white">UI/UX Design Workshop</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="lookerStudioWorkshop"
                        name="workshopSelection"
                        value="lookerStudio"
                        onChange={handleChange}
                        checked={formData.workshopSelection === "lookerStudio"}
                      />
                      <label htmlFor="lookerStudioWorkshop" className="ml-3 text-white">Google Looker Studio Workshop</label>
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <div id="recaptcha-container" className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    Proceed to Payment (₹299)
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-400">
                <p>After registration, you'll be redirected to the payment page.</p>
                <p className="mt-2">A confirmation email with workshop details will be sent after successful payment.</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
          <div className="relative rounded-xl overflow-hidden group h-64">
            <img 
              src="https://i.pinimg.com/736x/dc/5e/e6/dc5ee614f60435570471df39e73d58ea.jpg" 
              alt="Workshop registration" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-xl font-bold text-white">Join Our Community</h4>
                <p className="text-gray-300">Learn, connect, and grow with like-minded individuals</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden group h-64">
            <img 
              src="https://i.pinimg.com/736x/8e/c1/12/8ec112bbf962efdcfce0c99691768883.jpg" 
              alt="Limited seats available" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-xl font-bold text-white">Limited Seats Available</h4>
                <p className="text-gray-300">Reserve your spot before they're all gone</p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700">
            <h4 className="text-xl font-bold mb-4 font-inter text-cyan-400">What Happens Next?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Complete registration and payment</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Receive confirmation email with Google Meet link</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Get reminder email 24 hours before workshop</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Join the workshop via Google Meet link</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
