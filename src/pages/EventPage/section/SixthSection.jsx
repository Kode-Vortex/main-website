import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SixthSection = () => {
  const location = useLocation();
  const formData = location.state
  const navigate = useNavigate();  


const handlePayment = async () => {
    try {
      
      const { data } = await axios.post("https://main-server-mu.vercel.app/create-order", {
        formData ,amount: 299, // in INR
        
      });

      console.log(data.newPayment);
      

      const options = {
        key: "rzp_live_tyHcWktmlT8kR0", // Replace with your live key
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Workshop Registration",
        description: "Secure your workshop seat",
        order_id: data.order.id,
        handler: async function (response) {
          alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
          await axios.post("https://main-server-mu.vercel.app/update-status", {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            status: "paid",
            paymentData: data.newPayment, 
    
          });

          navigate("/");

        },
        prefill: {
          name: formData?.fullName || "",
          email: formData?.email || "",
          contact: formData?.whatsappPhone || "",
        },
        theme: {
          color: "#0ea5e9",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment initiation failed", err);
      alert("Payment initiation failed.");
    }
  };

  return (
<div id="root">
  <section id="payment" className="py-20 bg-neutral-900 text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-inter">Payment</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Secure your workshop seat with our easy payment process
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 font-inter text-cyan-400">Payment Details</h3>
              
              <div className="space-y-6">
                <div className="bg-neutral-700/30 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Workshop Fee</span>
                    <span className="font-semibold">₹599</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Discount</span>
                    <span className="font-semibold">-₹300</span>
                  </div>
                  <div className="border-t border-neutral-600 my-2 pt-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Amount</span>
                    <span className="font-bold text-xl text-cyan-400">₹299</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Payment Method</h4>
                  
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 hover:border-cyan-400 transition-colors duration-300 cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-cyan-400/20 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      </div>
                      <span className="font-medium">Razorpay (Cards, UPI, Netbanking)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button         onClick={handlePayment}
  id="razorpay-button" className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
                    <span>Pay ₹299 Securely</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center justify-center space-x-4 py-2">
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8" />
                    <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-8" />
                    <img src="https://img.icons8.com/color/48/000000/google-pay-india.png" alt="Google Pay" className="h-8" />
                    <img src="https://img.icons8.com/color/48/000000/paytm.png" alt="Paytm" className="h-8" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-400">
                <p>By proceeding with the payment, you agree to our Terms & Conditions.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-300">After successful payment, you'll receive a confirmation email with workshop details.</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cmF6b3JwYXklMjUyMHBheW1lbnQlMjUyMGdhdGV3YXklMjUyMGRhcmslMjUyMG1pbmltYWwlMjUyMHRlYWx8ZW58MXwwfHx8MTc0Nzc2NDEwMXww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Razorpay payment gateway" 
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-xl font-bold text-white">Secure Payment Gateway</h4>
                <p className="text-gray-300">Your payment information is protected with industry-standard encryption</p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h4 className="text-xl font-bold mb-4 font-inter text-cyan-400">Why Choose Our Workshops?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expert instructors with industry experience</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Hands-on projects to build your portfolio</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Certificate of completion for your resume</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Interactive sessions with personalized feedback</span>
              </li>
            </ul>
          </div>
          
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1526666361175-e3595627c376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8c2VjdXJlJTI1MjBwYXltZW50JTI1MjBpbnRlcmZhY2UlMjUyMGRhcmslMjUyMG1vZGUlMjUyMGN5YW58ZW58MXwwfHx8MTc0Nzc2NDEwMXww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Secure payment interface" 
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-xl font-bold text-white">Limited Time Offer</h4>
                <p className="text-gray-300">Secure your spot now at our special introductory price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="payment-success-modal" className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden" aria-modal="true" aria-hidden="true">
        <div className="bg-neutral-800 rounded-xl p-8 max-w-md w-full mx-4 border border-neutral-700 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-cyan-400">Payment Successful!</h3>
            <button id="close-payment-modal" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Thank You for Your Payment!</h4>
            <p className="text-gray-300">Your workshop registration is now complete.</p>
          </div>
          
          <div className="bg-neutral-900 p-4 rounded-lg mb-6">
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
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Confirmation email sent to: <span id="user-email" className="text-cyan-400">user@example.com</span></span>
              </li>
            </ul>
          </div>
          
          <p className="text-gray-300 text-sm mb-6">We'll send you a reminder email 24 hours before the workshop starts. See you there!</p>
          
          <div className="flex space-x-4">
            <button id="download-receipt" className="flex-1 px-4 py-2 bg-transparent border border-cyan-400 rounded-md text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300">
              Download Receipt
            </button>
            <button id="close-success-modal" className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>  )
}

export default SixthSection