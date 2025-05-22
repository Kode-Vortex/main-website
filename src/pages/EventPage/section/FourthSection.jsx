import { Link } from "react-router-dom"

const FourthSection = () => {
  return (
<div id="root">
  <section id="benefits" className="py-20 bg-neutral-900 text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-inter">Benefits</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          What you'll gain from our workshops beyond just knowledge
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 group">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y2VydGlmaWNhdGUlMjUyMGFjaGlldmVtZW50JTI1MjBpY29uJTI1MjBuZW9uJTI1MjB0ZWFsJTI1MjBkYXJrfGVufDB8MHx8fDE3NDc3NjM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Certificate of completion" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 font-inter text-cyan-50 group-hover:text-cyan-400 transition-colors duration-300">Certification</h3>
            <p className="text-gray-400 mb-4">
              Receive an official certificate upon completion to showcase your new skills to employers and on your resume.
            </p>
            <div className="flex items-center text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Shareable digital certificate</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 group">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1580795478690-5c6afcf4e7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y2VydGlmaWNhdGUlMjUyMGFjaGlldmVtZW50JTI1MjBpY29uJTI1MjBuZW9uJTI1MjB0ZWFsJTI1MjBkYXJrfGVufDB8MHx8fDE3NDc3NjM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Hands-on projects" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 font-inter text-cyan-50 group-hover:text-cyan-400 transition-colors duration-300">Hands-on Projects</h3>
            <p className="text-gray-400 mb-4">
              Build real-world projects that you can add to your portfolio and demonstrate your practical skills.
            </p>
            <div className="flex items-center text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Portfolio-ready work</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 group">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1568741046857-fc1d0486e285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y2VydGlmaWNhdGUlMjUyMGFjaGlldmVtZW50JTI1MjBpY29uJTI1MjBuZW9uJTI1MjB0ZWFsJTI1MjBkYXJrfGVufDB8MHx8fDE3NDc3NjM5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Assignments and feedback" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 font-inter text-cyan-50 group-hover:text-cyan-400 transition-colors duration-300">Expert Feedback</h3>
            <p className="text-gray-400 mb-4">
              Receive personalized feedback on your assignments from industry professionals to help you improve.
            </p>
            <div className="flex items-center text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Personalized guidance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-inter">Networking Opportunities</h3>
          </div>
          <p className="text-gray-400">
            Connect with like-minded peers and build your professional network in the industry.
          </p>
        </div>

        <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-inter">Learning Resources</h3>
          </div>
          <p className="text-gray-400">
            Access to exclusive learning materials, templates, and resources even after workshop completion.
          </p>
        </div>

        <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold font-inter">Career Guidance</h3>
          </div>
          <p className="text-gray-400">
            Get insights on career paths and industry trends from experienced professionals.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link to="/event-register" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20 inline-flex items-center">
          <span>Secure Your Spot Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path  d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
</div>  )
}

export default FourthSection