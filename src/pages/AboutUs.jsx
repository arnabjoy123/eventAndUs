export default function AboutUs() {
  const team = [
    {
      name: "Rhea Kapoor",
      role: "Founder & Creative Director",
      img: "https://images.unsplash.com/photo-1614282425386-019cda2b10b1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Arjun Mehta",
      role: "Head of Operations",
      img: "https://images.unsplash.com/photo-1614282022237-97cd58f2f2e4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Simran Joshi",
      role: "Lead Event Planner",
      img: "https://images.unsplash.com/photo-1590080876094-c0c2f87d9366?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About Us
        </h1>
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 text-violet-100">
          We are more than event planners — we are experience creators.
          Combining creativity, professionalism, and a deep love for
          celebration, we design events that become timeless memories.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1581093588401-3c7a21f40c88?auto=format&fit=crop&w=800&q=80"
            alt="Our team in action"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-200">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-violet-100 mb-4">
              Founded with a passion for bringing people together, Event and Us
              has grown from a small dream to a full-fledged event company
              trusted by top clients and loved by families across the country.
            </p>
            <p className="text-lg leading-relaxed text-violet-100">
              We specialize in corporate functions, weddings, social galas, and
              everything in between. Our diverse team is made up of creative
              strategists, designers, and coordinators dedicated to turning your
              vision into a flawlessly executed experience.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          {[
            { number: "500+", label: "Events Completed" },
            { number: "10+", label: "Years of Experience" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-2xl shadow-lg hover:bg-white/20 transition"
            >
              <h3 className="text-4xl font-bold text-violet-200 mb-2">
                {item.number}
              </h3>
              <p className="text-violet-100 text-lg">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Meet the Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-purple-200">
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-2xl text-center shadow-lg hover:bg-white/20 transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-violet-300 mb-4"
                />
                <h3 className="text-xl font-semibold text-violet-100">
                  {member.name}
                </h3>
                <p className="text-sm text-purple-300 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
