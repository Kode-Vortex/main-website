import { Link } from "react-router-dom"
const ThirdSection = () => {
  return (
<div id="root">
  <section id="schedule" className="pb-20 pt-32 bg-neutral-800 text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-inter">Schedule</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Both workshops follow the same schedule format. Plan your learning journey with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="order-2 md:order-1">
          <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 font-inter text-cyan-400">Workshop Timeline</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Days</h4>
                  <p className="text-gray-400">Monday, Wednesday, Friday</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Time</h4>
                  <p className="text-gray-400">6:00 PM – 8:00 PM IST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Duration</h4>
                  <p className="text-gray-400">6 hours total (2 hours/day)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Format</h4>
                  <p className="text-gray-400">Online via Google Meet</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-neutral-700">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-cyan-400 font-bold text-xl">₹299</span>
                  <span className="text-gray-500 ml-2">per participant</span>
                </div>
                <Link to="/event-register"  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1607969892192-8aa9fe65ee26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8d29ya3Nob3AlMjUyMHNjaGVkdWxlJTI1MjBjYWxlbmRhciUyNTIwZGFyayUyNTIwbmVvbiUyNTIwbWluaW1hbGlzdHxlbnwwfDB8fHwxNzQ3NzYzOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Workshop schedule" 
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-xl font-bold text-white">Flexible Schedule</h4>
                <p className="text-gray-300">Evening sessions designed for students and working professionals</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1591380816222-28cec94b49c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8d29ya3Nob3AlMjUyMHNjaGVkdWxlJTI1MjBjYWxlbmRhciUyNTIwZGFyayUyNTIwbmVvbiUyNTIwbWluaW1hbGlzdHxlbnwwfDB8fHwxNzQ3NzYzOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Online workshop format" 
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-xl font-bold text-white">Interactive Sessions</h4>
                <p className="text-gray-300">Learn from anywhere with our online format</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>  )
}

export default ThirdSection