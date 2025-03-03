import {useState} from 'react'
import "./ContactUs.css"
// import axios from "axios"
import { send } from '@emailjs/browser';
import toast from 'react-hot-toast'
const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }))
      }
    
      // const handleSubmit = async (e) => {
      //   e.preventDefault()
      //   try {
      //     const response = await axios.post(
      //       "http://localhost:4444/submit-contact-form",
      //       formData
      //     );
      //     console.log("Response:", response.data);
      //     toast.success(response.data.message);
      //     setFormData({
      //       fullName: "",
      //       email: "",
      //       phoneNumber: "",
      //       message: "",
      //     });
      //   } catch (error) {
      //     console.error("Error submitting form:", error);
      //     alert("Failed to submit form");
      //   }
      // }
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const templateParams = {
          from_name: formData.fullName,
          from_email: formData.email,
          phone_number: formData.phoneNumber,
          message: formData.message,
          to_emails : "hv77856@gmail.com , sn013293@gmail.com,vijay.singh@kodevortex.in"
        };
    
        try {
          await send(
            'service_7hbmjqn',    // Replace with your EmailJS service ID
            'template_n9dedjp',   // Replace with your EmailJS template ID
            templateParams,
            'FQ2mG-WW5dDSPIj-1'     // Replace with your EmailJS public key
          );
          toast.success('Message sent successfully!');
          setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            message: '',

          });
        } catch (error) {
          console.error('Failed to send message:', error);
          toast.error('Failed to send message. Please try again later.');
        }
      };
      return (
        <>
        <div className="contact-container mx-[20%] mb-16">
          <div className="contact-content flex flex-col">
            <h1 className='pb-4 text-white text-2xl tracking-wide text-font text-center'>CONTACT US</h1>
            <div className='flex space-x-10'>
            <div className="contact-info ">
              <div className='text-center mb-16'>
                <p className='text-4xl'>KodeVortex, LLC </p>
                <p className='text-xl'> Experience the evolution of learning</p>
              </div>
              
              <div className="info-item">
                <div className="icon-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                </div>
                <div className="info-text">
                  <h3>Our location</h3>
                  <p>C-01,, Maruti Kunj, Gurugram, 122102</p>
                </div>
              </div>
    
              <div className="info-item">
                <div className="icon-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="info-text">
                  <h3>Phone number</h3>
                  <p>+91  7091204379</p>
                </div>
              </div>
    
              <div className="info-item">
                <div className="icon-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>vijay.singh@kodevortex.in
                  www.kodevortex.in</p>
                </div>
              </div>
            </div>
    
            <form className="contact-form px-10 py-10 rounded-3xl " onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required

              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
            </div>
          </div>
        </div>
        </>
      )
}

export default ContactUs