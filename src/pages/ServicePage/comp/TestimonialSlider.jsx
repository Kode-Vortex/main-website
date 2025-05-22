import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The analytics capabilities have given us insights we never had before. We've been able to make data-driven decisions that have directly impacted our bottom line.",
    author: "David Chen",
    position: "CTO, DataFlow Solutions",
    image: "/api/placeholder/80/80",
    productImage: "https://images.unsplash.com/photo-1659482633518-f2c99276b6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
  },
  {
    id: 2,
    quote: "Implementing this solution has transformed our workflow efficiency. Our team productivity increased by 40% within just two months.",
    author: "Sarah Johnson",
    position: "Operations Director, Global Innovations",
    image: "/api/placeholder/80/80",
    productImage: "https://images.unsplash.com/photo-1659482634001-7e2571dec3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
  },
  {
    id: 3,
    quote: "The customer support team is exceptional. They've been responsive and helpful with every question we've had during onboarding.",
    author: "Michael Rodriguez",
    position: "CEO, Nexus Enterprises",
    image: "/api/placeholder/80/80",
    productImage: "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8dGVzdGltb25pYWxzJTIwZmVlZGJhY2slMjBhdXRoZW50aWMlMjB0cnVzdHdvcnRoeXxlbnwwfDF8fHwxNzQzMTU5Njc2fDA&ixlib=rb-4.0.3&q=80&w=1080?q=80"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (slideIndex) => {
    if (isAnimating || slideIndex === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(slideIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Trusted by thousands of businesses worldwide to deliver exceptional results.
        </p>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 h-60 bg-gray-800 rounded-lg p-8 relative">
              <p className="text-lg text-gray-300 italic mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
              <img 
                src={testimonials[currentIndex].productImage} 
                alt="Product" 
                className="w-full h-80 object-cover"
              />
              
            </div>
          </div>
          
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-black bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-gray-400" size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-black bg-opacity-40 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-gray-400" size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-400' : 'bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;