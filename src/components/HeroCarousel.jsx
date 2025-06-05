import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    title: "Plan. Execute. Celebrate.",
    subtitle:
      "From corporate gatherings to dream weddings – we bring your vision to life.",
  },
  {
    image:
      "https://clubtranscend.in/wp-content/uploads/2025/01/Corporate-Event.jpg",
    title: "Elegant. Seamless. Memorable.",
    subtitle: "We design moments that last forever in hearts and minds.",
  },
  {
    image: "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg",
    title: "Celebrate with Style",
    subtitle: "Make your next event extraordinary with our expert team.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="h-screen bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      <div className="bg-black/50 p-6 rounded-lg">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl text-white-300">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl drop-shadow-2xl text-white-100">
          {slides[current].subtitle}
        </p>
        <Link to="/contact-us">
          <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
            Book a Consultation
          </button>
        </Link>
      </div>
    </section>
  );
}
