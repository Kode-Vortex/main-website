import {Link} from "react-router-dom"
import { useState,useEffect } from "react";
const FirstSection = () => {
   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

  // Set your target date/time here
  const targetDate = new Date("2025-05-30T10:00:00");
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        setTimeLeft({ days, hours });
      } else {
        setTimeLeft({ days: 0, hours: 0 });
      }
    };

    updateTimer(); // run once immediately
    const interval = setInterval(updateTimer, 60 * 1000); // update every minute

    return () => clearInterval(interval); // cleanup
  }, [targetDate]);
  return (
    <div id="root">
    <section id="hero" className="relative pt-28  flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dGVjaCUyNTIwd29ya3Nob3AlMjUyMGJhY2tncm91bmQlMjUyMGZ1dHVyaXN0aWMlMjUyMGRhcmt8ZW58MHwwfHx8MTc0Nzc2MzgyNnww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Futuristic tech background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/90"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-inter">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">Kode Vortex</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-inter text-cyan-50">
            Master UI/UX Design & Data Visualization
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Join our immersive online workshops designed for beginners. Learn essential skills from industry experts and kickstart your career.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/event-register" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
              Register Now
            </Link>
            <a href="#workshops" className="px-8 py-3 bg-transparent border border-cyan-400 rounded-md text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300 transform hover:-translate-y-1">
              Explore Workshops
            </a>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 text-3xl font-bold">{timeLeft.days} </span>
              <span className="text-gray-400 text-sm">days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 text-3xl font-bold">{timeLeft.hours} </span>
              <span className="text-gray-400 text-sm">hours left! </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 text-3xl font-bold">₹299</span>
              <span className="text-gray-400 text-sm">Only</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="index.html#workshops" className="animate-bounce text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div> */}
    </section>
  </div>
  )
}

export default FirstSection