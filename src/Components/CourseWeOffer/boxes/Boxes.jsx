

const Boxes = ({ image, title }) => {
  return (
    <motion.div
      className="relative w-64 h-64 cursor-pointer" // Fixed size
      style={{ perspective: 1000 }}
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front Side */}
        <motion.div
          className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent py-2 text-center">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
          </div>
        </motion.div>
        {/* Back Side */}
        <motion.div
          className="absolute w-full h-full rounded-xl flex items-center justify-center shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <h3 className="text-white text-2xl font-bold">Learn {title}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Boxes;