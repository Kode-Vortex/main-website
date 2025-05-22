import { Link } from "react-router-dom"
const SeventhSection = () => {
  return (
<div id="root">
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
        <div className="order-2 md:order-1">
          <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 font-inter text-cyan-400">Workshop Capacity</h3>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">UI/UX Design Workshop</h4>
                <div className="flex items-center bg-neutral-800 px-3 py-1 rounded-full">
                  <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm" id="uiux-seats-counter">
                    <span id="uiux-seats-remaining" className="font-bold">42</span> / 90 seats remaining
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-neutral-800 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full" style={{width: "53%"}}></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>47 seats booked</span>
                <span>90 total capacity</span>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">Google Looker Studio Workshop</h4>
                <div className="flex items-center bg-neutral-800 px-3 py-1 rounded-full">
                  <span className="inline-block w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm" id="looker-seats-counter">
                    <span id="looker-seats-remaining" className="font-bold">38</span> / 90 seats remaining
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-neutral-800 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full" style={{width: "58%" }}></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>52 seats booked</span>
                <span>90 total capacity</span>
              </div>
            </div>
            
            <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 mb-6">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-300">
                  Seats are filling up quickly! Registration will automatically close once all seats are booked. The counter updates in real-time.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/event-register" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
                Register Now
              </Link>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1607969892192-8aa9fe65ee26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8d29ya3Nob3AlMjUyMGNhcGFjaXR5JTI1MjBjb3VudGVyJTI1MjBkYXJrJTI1MjBtaW5pbWFsaXN0JTI1MjBuZW9ufGVufDB8MHx8fDE3NDc3NjQxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
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
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">90</div>
                <p className="text-gray-300 text-sm">Maximum seats per workshop</p>
              </div>
            </div>
            
            <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-700">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">2</div>
                <p className="text-gray-300 text-sm">Specialized workshops available</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-neutral-900 rounded-xl p-6 border border-neutral-700">
            <h4 className="text-xl font-bold mb-4 font-inter text-cyan-400">Why Limited Seats?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Personalized attention from instructors</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Better interaction during live sessions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>More opportunities to ask questions</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Higher quality learning experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      
    </div>
  </section>
</div>  )
}

export default SeventhSection