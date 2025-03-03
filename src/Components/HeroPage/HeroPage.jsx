import "./HeroPage.css";
import heroimage from "./hero_image.png";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Container variants for staggering words
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Each word's animation variants
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Component to animate text word-by-word
function AnimatedText({ text, className }) {
  const words = text.split(" ");
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block">
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}

function HeroPage() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "It always seems impossible until it's done.",
      author: "Nelson Mandela",
    },
    {
      text: "Life is what happens when you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      text: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Failure is simply the opportunity to begin again, this time more intelligently.",
      author: "Henry Ford",
    },
    {
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="hero-container">
      {/* --------------------- HERO SECTION --------------------- */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Image */}
        <motion.img
          src={heroimage}
          alt="Hero"
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Hero Text */}
        <div className="hero-text-container">
          <h1 className="hero-text">
            <AnimatedText text="Your Gateway to" />
            <br />
            <AnimatedText text="Innovation and" />
            <br />
            <AnimatedText text="Success Revolutionizing" />
            <br />
            <AnimatedText text="Learning and Software" />
            <br />
            <AnimatedText text="Solutions" />
          </h1>
        </div>
      </motion.div>

      {/* --------------------- QUOTES SLIDER SECTION --------------------- */}
      <div className="quotes-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Slider {...sliderSettings} className="quotes-slider ">
            {quotes.map((quote, index) => (
              <div key={index} className="quote-card flex items-center justify-center ">
                {/* <h2>Quote of the Day</h2> */}
                <p>〝{quote.text}〞</p>
                <p className="author">- {quote.author}</p>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroPage;