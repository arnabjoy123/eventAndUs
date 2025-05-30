import "./App.css";
import "./components/Navbar";
import { Link } from "react-router-dom";
import HeroCarousel from "./components/HeroCarousel";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          With over a decade of experience, we specialize in creating memorable
          corporate events, luxury weddings, and custom experiences. Our team
          takes pride in delivering seamless events with attention to every
          detail.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-800 to-indigo-900  text-center">
        <h2 className="text-3xl text-white font-bold mb-10">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: "Weddings", icon: "💍" },
            { title: "Birthday Parties", icon: "🎉" },
            { title: "Annaprashan", icon: "👶" },
            { title: "Griha Pravesh", icon: "🏠" },
            { title: "Upanayan", icon: "🙏" },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 w-72 hover:scale-105 transition transform"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
        <p className="text-xl m-5 text-white font-bold mb-10">
          And any kind of private parties
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">What Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm bg-white p-6 rounded-xl shadow-md">
            <p className="italic">
              “Absolutely flawless experience! The team handled every detail
              with precision.”
            </p>
            <h4 className="mt-4 font-semibold">– Prabir Sikdar</h4>
          </div>
          <div className="max-w-sm bg-white p-6 rounded-xl shadow-md">
            <p className="italic">
              “Our corporate event was a huge success thanks to their
              professionalism and creativity.”
            </p>
            <h4 className="mt-4 font-semibold">– Jayanti Mukherjee</h4>
          </div>
          <div className="max-w-sm bg-white p-6 rounded-xl shadow-md">
            <p className="italic">
              “Our corporate event was a huge success thanks to their
              professionalism and creativity.”
            </p>
            <h4 className="mt-4 font-semibold">– Sreela Saha Roy Chowdhury</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-6">Let's Plan Your Event</h2>
        <p className="mb-8 text-lg max-w-xl mx-auto">
          Reach out today and let’s turn your event vision into reality.
        </p>
        <Link to="/contact-us">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Contact Us
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center text-white text-sm md:text-base">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-2 font-semibold text-lg">
            &copy; {new Date().getFullYear()} Event and Us. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 text-gray-300">
            <div>
              📞 Sanchari Coomar:{" "}
              <a href="tel:9477562293" className="underline hover:text-white">
                9477562293
              </a>
            </div>
            <div>
              📞 Saikat Majumdar:{" "}
              <a href="tel:9477562296" className="underline hover:text-white">
                9477562296
              </a>
            </div>
            <div>
              📧{" "}
              <a
                href="mailto:celebrations@eventandus.com"
                className="underline hover:text-white"
              >
                celebrations@eventandus.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
