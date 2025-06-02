export default function AboutUs() {
  const team = [
    {
      name: "Sanchari Coomar",
      role: "Co-Founder",
      img: "/sanchariprodp.jpg",
    },
    {
      name: "Saikat Datta",
      role: "Co-Founder",
      img: "/SaikatDaOG.jpg",
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
            src="https://cdn0.weddingwire.in/vendor/3498/3_2/960/jpg/file-1684229801494_15_373498-168422980345962.jpeg"
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
          <div className="flex justify-center flex-wrap gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex items-center bg-white/10 p-10 rounded-2xl text-center shadow-lg hover:bg-white/20 transition  gap-8 w-full lg:w-[45%]"
              >
                <div className="imgteam flex-shrink-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-96 mx-auto object-cover rounded-xl border-4 border-violet-300 "
                  />
                </div>
                <div className="teamContent flex flex-col text-left space-y-3">
                  <h3 className="text-4xl font-semibold text-violet-100">
                    {member.name}
                  </h3>
                  <p className="text-2xl text-purple-300 mt-1">{member.role}</p>
                  <p className="text-base text-purple-300 ">
                    The man with a plan. The do it all, the go getter, he's none
                    ther than Saikat Datta. Popular, father to a sweet kid. You
                    name it, he can do it.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
