import "./App.css";
import "./components/Navbar";
import { Link } from "react-router-dom";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}

      <section className="py-20 px-6 bg-gray-100 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/EventandusLogo.svg"
            alt="Eventandus Logo"
            className="h-24 w-24 border-4 border-black rounded-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4">Event & Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Event & US!! A dream venture by two dreamers. <br />
          <br />
          What would we name it !! A connection between our Celebration Seekers
          & Us. Ergo came Event & Us where Us is "You & Us". Every occasion
          comes with a dream to make it memorable, and here we are making it
          marvellous for You. You "PLAN" it with us, we "EXECUTE" and you
          "CELEBRATE" with your loved ones. Our credentials are our efforts
          through perfect execusion for you to celebrate with Event & Us.
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
            { title: "Baby Shower", icon: "👶" },
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
            <img
              src="/ShoubhanikTestimonial2.jpg"
              alt="Testimonial1"
              className="w-60 h-60 mx-auto object-cover rounded-full border-4 border-violet-300 mb-4"
            />
            <p className="italic">
              “The Upanayan ceremony for my brother was a deeply significant
              milestone in our lives, and Event & Us ensured that every moment
              was nothing short of extraordinary. Their meticulous planning,
              cultural sensitivity, and seamless execution transformed our
              vision into a beautiful reality. ”
            </p>
            <h4 className="mt-4 font-semibold">– Joy Barui</h4>
          </div>

          <div className="max-w-sm bg-white p-6 rounded-xl shadow-md">
            <img
              src="/Joy_Barui2.jpg"
              alt="Testimonial2"
              className="w-60 h-60 mx-auto object-cover rounded-full border-4 border-violet-300 mb-4"
            />
            <p className="italic">
              “From the very first interaction to the final farewell, Event & Us
              orchestrated my brother’s wedding with absolute perfection. Every
              aspect—from venue décor to guest management—was handled with
              professionalism and creativity. The team was incredibly responsive
              and made sure every request was met with enthusiasm. We couldn’t
              have asked for a better partner in making this special day
              unforgettable!!”
            </p>
            <h4 className="mt-4 font-semibold">– Soubhanik Chowdhury</h4>
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
    </div>
  );
}

export default App;
