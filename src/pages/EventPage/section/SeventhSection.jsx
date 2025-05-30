import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SeventhSection = () => {
  const navigate = useNavigate();

  const [seats, setSeats] = useState({
    uiux: { remaining: 90, capacity: 90 },
    lookerStudio: { remaining: 90, capacity: 90 },
  });

  const fetchSeatData = async () => {
    try {
      const res = await axios.get("https://main-server-mu.vercel.app/seats");
      console.log(res);
      
      const data = res.data;

      const updatedSeats = {
        uiux: {
          remaining: data.find((d) => d.name.toLowerCase() === "uiux")?.availableSeats ?? 90,
          capacity: 90,
        },
        lookerStudio: {
          remaining: data.find((d) => d.name.toLowerCase() === "lookerstudio")?.availableSeats ?? 90,
          capacity: 90,
        },
      };

      setSeats(updatedSeats);
    } catch (error) {
      console.error("Error fetching workshop seat data", error);
    }
  };

  useEffect(() => {
    fetchSeatData();
  }, []);

  const gotoreg = () => {
    navigate("/event-register");
    window.location.reload();
  };

  const getPercentage = (remaining, capacity) => ((((capacity - remaining) / capacity) * 100)+30).toFixed(0);

  return (
    <section id="seatCounter" className="py-20 bg-neutral-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-inter">Seat Availability</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Limited seats available for each workshop. Secure yours before they're gone!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side: Seat Count */}
          <div className="order-2 md:order-1">
            <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-700 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 font-inter text-cyan-400">Workshop Capacity</h3>

              {/* UI/UX Workshop */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold">UI/UX Design Workshop</h4>
                  <div className="flex items-center bg-neutral-800 px-3 py-1 rounded-full">
                    <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sm">
                      <span className="font-bold">{seats.uiux.remaining}</span> seats remaining
                    </span>
                  </div>
                </div>

                <div className="w-full bg-neutral-800 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
                    style={{ width: `${getPercentage(seats.uiux.remaining, seats.uiux.capacity)}%` }}
                  ></div>
                </div>
              </div>

              {/* Looker Workshop */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold">Google Looker Studio Workshop</h4>
                  <div className="flex items-center bg-neutral-800 px-3 py-1 rounded-full">
                    <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sm">
                      <span className="font-bold">{seats.lookerStudio.remaining}</span> seats remaining
                    </span>
                  </div>
                </div>

                <div className="w-full bg-neutral-800 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
                    style={{ width: `${getPercentage(seats.lookerStudio.remaining, seats.lookerStudio.capacity) }%` }}
                  ></div>
                </div>
              </div>

              {/* Info Message */}
              <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 mb-6">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-300">
                    Seats are filling up quickly! Registration will automatically close once all seats are booked. The counter updates in real-time.
                  </p>
                </div>
              </div>

              {/* Register Button */}
              <div className="text-center">
                <button
                  onClick={gotoreg}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Image and Description */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1607969892192-8aa9fe65ee26?auto=format&fit=crop&w=1080&q=80"
                alt="Workshop capacity"
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">Limited Capacity Workshops</h4>
                  <p className="text-gray-300">Small batch learning for maximum interaction and personalized attention</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 flex items-center justify-center">
                <p className="text-gray-300 text-4xl text-center">Limited Seats</p>
              </div>
              <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">2</div>
                <p className="text-gray-300 text-sm">Specialized workshops available</p>
              </div>
            </div>

            {/* Why Limited Seats */}
            <div className="mt-6 bg-neutral-900 rounded-xl p-6 border border-neutral-700">
              <h4 className="text-xl font-bold mb-4 font-inter text-cyan-400">Why Limited Seats?</h4>
              <ul className="space-y-3">
                {["Personalized attention from instructors", "Better interaction during live sessions", "High-quality experience"].map((reason, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
