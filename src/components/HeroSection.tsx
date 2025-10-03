"use client";
import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/flooring/Office_Flooring_1.jpg", 
    title: "Unleash Your",
    highlight: "Interior Vision",
    desc: "Premium Flooring, Wallpapers, Carpets & Blinds – curated to elevate your home and office decor.",
  },
  {
    image: "/images/wallpapers/Customized_Wallpaper_1.jpg",
    title: "Experience Wall",
    highlight: "Artistry",
    desc: "Stylish, bespoke wallpapers tailored for modern, sophisticated interiors.",
  },
  {
    image: "/images/carpets/Wall_to_Wall_Carpet_5.jpg",
    title: "Indulge in Pure",
    highlight: "Luxury",
    desc: "Soft and exquisitely crafted carpets for unparalleled home comfort.",
  },
  {
    image: "/images/blinds/Roman_Blinds_1.jpg",
    title: "Shade Your World",
    highlight: "Beautifully",
    desc: "Control light and privacy with our range of elegant blinds & shades.",
  },
];

// NOTE: textVariants object is now removed as per the fix

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];
  
  // Tuned Red Palette
  const primaryRed = "#B71C1C";   // Deeper, richer red
  const accentBrightRed = "#FF5722"; // Slightly softer, vibrant orange-red
  
  return (
    <section 
      className="relative h-[650px] md:h-[750px] overflow-hidden flex items-center" 
      style={{ 
        // Darker Linear Gradient for more depth
        background: `linear-gradient(to bottom, #E0E3EB 0%, #ffffff 100%)` 
      }}
    >
      {/* LEFT TEXT & CTA */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left"> {/* Changed motion.div back to div */}
          
          {/* Badge with Bright Accent Color */}
          <motion.span
            key={`badge-${current}`} // Key ensures re-animation
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} // Sequential delay 0.1s
            className="inline-block text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest"
            style={{ backgroundColor: accentBrightRed }}
          >
            NEW ARRIVALS
          </motion.span>

          {/* Elegant Headline (Balanced Size and Weight) */}
          <motion.h1
            key={`headline-${current}`} // Key ensures re-animation
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} // Sequential delay 0.2s
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900" 
          >
            {slide.title} <br />
            <span style={{ color: primaryRed }}>{slide.highlight}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${current}`} // Key ensures re-animation
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }} // Sequential delay 0.3s
            className="text-base md:text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 font-normal"
          >
            {slide.desc}
          </motion.p>
          
          {/* Shop Now Button: Enhanced Hover Effect */}
          <motion.button 
            key={`button-${current}`} // Key ensures re-animation
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }} // Sequential delay 0.4s
            style={{ backgroundColor: primaryRed, boxShadow: `0 8px 25px ${primaryRed}60` }} 
            className="text-white font-bold rounded-full px-14 py-4 transform transition-all duration-300 hover:scale-[1.03] hover:translate-y-[-3px] hover:shadow-lg active:scale-95 uppercase tracking-wider text-base" 
          > 
            Shop Now
          </motion.button>
        </div>

        {/* RIGHT IMAGE STACK with Clean Red Frame */}
        <div className="hidden md:flex justify-center items-center relative h-full"> 
          <div
            className="w-full max-w-[550px] h-[550px] rounded-[40px] relative overflow-hidden"
            style={{ 
              boxShadow: `
                0 20px 50px rgba(0, 0, 0, 0.15), 
                0 0 0 6px ${primaryRed} 
              `,
            }}
          >
            {slides.map((s, i) => (
              <motion.img
                key={s.image} 
                src={s.image}
                alt="Decor Product"
                className="w-full h-full object-cover rounded-[40px] absolute top-0 left-0"
                animate={{
                  opacity: i === current ? 1 : 0,
                  y: i === current ? 0 : 15, 
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ zIndex: i === current ? 2 : 1 }}
              />
            ))}
          </div>
          
          {/* Discount Bubble */}
          <motion.div
            className="absolute top-2 right-2 w-28 h-20 rounded-full flex flex-col items-center justify-center text-white text-xl font-extrabold shadow-2xl z-30 transform translate-x-1/4 -translate-y-1/4"
            style={{ 
                backgroundColor: accentBrightRed, 
                border: `4px solid #ffffff`,
                boxShadow: `0 0 12px ${accentBrightRed}80`,
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>50%</span>
            <span className="text-xs font-semibold mt-[-2px]">OFF</span>
          </motion.div>
        </div>
      </div>

      {/* DOTS NAVIGATION */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)} 
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current ? "w-8" : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
            style={{ backgroundColor: i === current ? primaryRed : undefined }}
          />
        ))}
      </div>
    </section>
  );
}