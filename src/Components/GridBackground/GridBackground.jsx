import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GridBackground = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed  inset-0 pointer-events-none bg-black">
      {/* Matrix Grid Effect */}
      <div className="absolute inset-0 bg-black  grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))] opacity-30">
        {Array.from({ length: 700 }).map((_, i) => (
          <div key={i} className="border border-gray-800 w-full h-full" />
        ))}
      </div>

      {/* Cursor Glow Effect */}
      <motion.div
        className="absolute w-24 h-24 bg-white rounded-full blur-3xl"
        style={{
          left: cursorPos.x - 40,
          top: cursorPos.y - 40,
        }}
        animate={{ opacity: [0, 1, 0.5] }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </div>
  );
};

export default GridBackground;
