import React from 'react'

const FifthSection = () => {
  return (
<div id="root">
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
              <div className="flex items-center bg-neutral-800 px-3 py-1 rounded-full">
                <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm text-gray-300" id="seats-counter">
                  <span id="seats-remaining">87</span> seats remaining
                </span>
              </div>
            </div>
            
            <form id="registration-form" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="whatsappPhone" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp Phone</label>
                  <input 
                    type="tel" 
                    id="whatsappPhone" 
                    name="whatsappPhone" 
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
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
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white appearance-none"
                  >
                    <option value="" disabled selected>Select your year</option>
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
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="Enter your college name"
                  />
                </div>
                
                <div>
                  <label htmlFor="stream" className="block text-sm font-medium text-gray-300 mb-1">Stream</label>
                  <input 
                    type="text" 
                    id="stream" 
                    name="stream" 
                    required
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="Enter your stream (e.g., Computer Science)"
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
                      required
                      className="w-5 h-5 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-neutral-900"
                    />
                    <label htmlFor="uiuxWorkshop" className="ml-3 text-white">UI/UX Design Workshop</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="lookerStudioWorkshop" 
                      name="workshopSelection" 
                      value="lookerStudio"
                      className="w-5 h-5 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-neutral-900"
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
                  id="register-button"
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20"
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
              src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFyayUyNTIwcmVnaXN0cmF0aW9uJTI1MjBmb3JtJTI1MjBuZW9uJTI1MjBjeWFuJTI1MjBtaW5pbWFsaXN0fGVufDB8MHx8fDE3NDc3NjQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
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
              src="https://images.unsplash.com/photo-1518343265568-51eec52d40da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGFyayUyNTIwcmVnaXN0cmF0aW9uJTI1MjBmb3JtJTI1MjBuZW9uJTI1MjBjeWFuJTI1MjBtaW5pbWFsaXN0fGVufDB8MHx8fDE3NDc3NjQwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
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
      
      <div id="confirmation-modal" className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden" aria-modal="true" aria-hidden="true">
        <div className="bg-neutral-800 rounded-xl p-8 max-w-md w-full mx-4 border border-neutral-700 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-cyan-400">Registration Successful!</h3>
            <button id="close-modal" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <p className="text-white">Thank you htmlFor registering htmlFor the <span id="workshop-name" className="font-semibold text-cyan-400"></span>!</p>
            
            <div className="bg-neutral-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Workshop Details:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Monday, Wednesday, Friday</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>6:00 PM – 8:00 PM IST</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span>Google Meet Link: <a href="index.html#" className="text-cyan-400 underline">meet.google.com/abc-defg-hij</a></span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-300 text-sm">A confirmation email has been sent to your registered email address with all the details.</p>
          </div>
          
          <div className="mt-6">
            <button id="close-confirmation" className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>  )
}

export default FifthSection