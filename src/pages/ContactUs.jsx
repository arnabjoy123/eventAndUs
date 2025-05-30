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
          <div className="bg-white text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">Sanchari Coomar</h2>
            <p className="text-gray-700 mb-1">📞 9477562293</p>
          </div>

          {/* Contact Card: Saikat */}
          <div className="bg-white text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">Saikat Majumdar</h2>
            <p className="text-gray-700 mb-1">📞 9477562296</p>
          </div>
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

        {/* Optional: Contact Form */}

        <form className="mt-12 max-w-xl mx-auto text-left space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md text-black"
          />
          <input
            type="text"
            placeholder="Your Number"
            className="w-full px-4 py-3 rounded-md text-black"
          />
          <textarea
            rows="5"
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
