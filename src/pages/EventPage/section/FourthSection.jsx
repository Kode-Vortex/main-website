import { useNavigate } from "react-router-dom";
import cer from "./certificte.png";
import pro from "./pro.jpg";

const FourthSection = () => {
  const navigate = useNavigate();
  const gotoreg = () => {
    navigate("/event-register");
    window.location.reload();
  };

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
            {[
              {
                img: cer,
                title: "Certification",
                text: "Receive an official certificate upon completion to showcase your new skills to employers and on your resume.",
                highlight: "Shareable digital certificate",
              },
              {
                img: pro,
                title: "Hands-on Projects",
                text: "Build real-world projects that you can add to your portfolio and demonstrate your practical skills.",
                highlight: "Portfolio-ready work",
              },
              {
                img: "https://i.pinimg.com/736x/51/b1/38/51b1384c675693438562ac6d1fbbed3f.jpg",
                title: "Expert Feedback",
                text: "Receive personalized feedback on your assignments from industry professionals to help you improve.",
                highlight: "Personalized guidance",
              },
              {
                img: "https://i.pinimg.com/736x/15/21/c7/1521c7781296d344caf0426669695a5d.jpg",
                title: "Networking Opportunities",
                text: "Connect with like-minded peers and build your professional network in the industry.",
                highlight: "Professional connections",
              },
              {
                img: "https://i.pinimg.com/736x/4b/2a/d0/4b2ad07bbe78bc4a746ccd62fb2dd786.jpg",
                title: "Learning Resources",
                text: "Access to exclusive learning materials, templates, and resources even after workshop completion.",
                highlight: "Post-event access",
              },
              {
                img: "https://i.pinimg.com/736x/9a/b6/2a/9ab62af548d9cf1c657aba18218d8d0f.jpg",
                title: "Confidence Building",
                text: "Engage in confidence-boosting exercises and public speaking to prepare you for the real world.",
                highlight: "Improved self-confidence",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-inter text-cyan-50 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.text}</p>
                  <div className="flex items-center text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA Button */}
          <div className="mt-12 text-center">
            <button
              onClick={gotoreg}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourthSection;
