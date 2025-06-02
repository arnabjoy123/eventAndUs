export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-violet-200 mb-12">
          Have questions or ready to plan your event? Our team is just a call
          away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Card: Sanchari */}
          <a href="tel:9836057563">
            <div className="bg-gradient-to-r from-white to-purple-400 text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold mb-2">Sanchari Coomar</h2>
              <p className="text-gray-700 mb-1">📞 9836057563</p>
            </div>
          </a>

          {/* Contact Card: Saikat */}
          <a href="tel:7439760139">
            <div className="bg-gradient-to-r from-white to-purple-400 text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold mb-2">Saikat Datta</h2>
              <p className="text-gray-700 mb-1">📞 7439760139</p>
            </div>
          </a>
        </div>

        {/* Email */}
        <div className="mt-12 text-lg">
          📧 Email us at:{" "}
          <a
            href="mailto:celebrations@eventandus.com"
            className="underline hover:text-violet-300 transition"
          >
            celebrations@eventandus.com
          </a>
        </div>
        <p> Or you can submit your query here below</p>

        {/* Optional: Contact Form */}

        <form
          action="https://formspree.io/f/mldnegdn"
          method="POST"
          className="mt-12 max-w-xl mx-auto text-left space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md text-black"
          />
          <input
            type="text"
            name="number"
            placeholder="Your Number"
            className="w-full px-4 py-3 rounded-md text-black"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-indigo-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
