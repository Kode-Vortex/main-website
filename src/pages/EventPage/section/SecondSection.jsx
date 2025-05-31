import { useNavigate } from "react-router-dom";
const SecondSection = () => {
    const navigate = useNavigate();  

  const gotoreg = () => {
    navigate("/event-register");
    window.location.reload();
  };
  return (
    <div id="root">
      <section id="workshops" className="py-20 pt-36 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-inter">Workshops</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from our specialized workshops designed for beginners. No
              prior experience needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="p-8">
                <div className="flex  space-x-16">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-400/30 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                 <div>
                    <h4 className="text-xl font-semibold mb-1">Days</h4>
                    <p className="text-gray-400">Saturday, Monday, Wednesday</p>
                  </div>
                  </div>
                <h3 className="text-2xl font-bold mb-3 font-inter text-cyan-50 group-hover:text-cyan-400 transition-colors duration-300">
                  UI/UX Design Workshop
                </h3>
                <p className="text-gray-400 mb-6">
                  Learn the fundamentals of user interface and experience
                  design. Perfect for beginners wanting to start their design
                  journey.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400 mt-0.5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Design principles and theory</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400 mt-0.5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Wireframing and prototyping</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400 mt-0.5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>User research methods</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-500 text-3xl line-through">
                        ₹599
                      </span>
                      <span className="text-cyan-400 text-3xl font-bold">
                        ₹299
                      </span>
                    </div>{" "}
                    <span className="text-gray-500 ml-2">only</span>
                  </div>
                  <button
                    onClick={gotoreg}
                    className="px-4 py-2 bg-transparent border border-cyan-400 rounded-md text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    Register Here
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="p-8">
                <div className="flex  space-x-16">

                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-400/30 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>

                  
                </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Days</h4>
                    <p className="text-gray-400">Friday, Sunday, Tuesday</p>
                  </div>
                                  </div>

                <h3 className="text-2xl font-bold mb-3 font-inter text-cyan-50 group-hover:text-cyan-400 transition-colors duration-300">
                  Google Looker Studio Workshop
                </h3>
                <p className="text-gray-400 mb-6">
                  Master data visualization and analysis using Google Looker
                  Studio. Ideal for beginners in data analytics.
                </p>
                <div className="space-y-3 mb-8 mt-11">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400 mt-0.5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data source connections</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400 mt-0.5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dashboard creation</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-cyan-400 mt-0.5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data visualization techniques</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-500 text-3xl line-through">
                        ₹599
                      </span>
                      <span className="text-cyan-400 text-3xl font-bold">
                        ₹299
                      </span>
                    </div>{" "}
                    <span className="text-gray-500 ml-2">only</span>
                  </div>
                  <button
                    onClick={gotoreg}
                    className="px-4 py-2 bg-transparent border border-cyan-400 rounded-md text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    Register Here
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Both workshops are designed for beginners with no prior experience
              required
            </p>
            <a
              href="#schedule"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <span>View workshop schedule</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
