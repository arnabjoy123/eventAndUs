export default function AboutUs() {
  const team = [
    {
      name: "Sanchari Coomar",
      role: "Co-Founder",
      img: "/sanchari2.jpg",
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
          প্রতিটি মুহূর্তই একখণ্ড গল্প—আমরা তাকে স্মৃতিতে বাঁধি!
          <br />
          <br />{" "}
          <span className="text-3xl font-semibold text-white">
            Event & Us !!
          </span>
          <p>
            {" "}
            A dream venture by two dreamers. What would we name it !! A
            connection between our Celebration Seekers & Us. Ergo came Event &
            Us where Us is "You & Us". Every occasion comes with a dream to make
            it memorable, and here we are making it marvellous for You. You
            "PLAN" it with us, we "EXECUTE" and you "CELEBRATE" with your loved
            ones. Our credentials are our efforts through perfect execusion for
            you to celebrate with Event & Us.
          </p>
        </p>

        {/* Meet the Team Section */}
        <div className="mt-16">
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
                </div>
              </div>
            ))}
          </div>
          <p className="text-2xl text-center mt-5">
            Our team : Saikat Datta , Sanchari Coomar, Arnab Das, Mrinalini Basu
          </p>
        </div>
      </div>
    </div>
  );
}
