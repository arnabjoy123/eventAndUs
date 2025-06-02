export default function Services() {
  const services = [
    {
      title: "Weddings",
      icon: "💍",
      description:
        "From intimate ceremonies to grand celebrations, we craft unforgettable weddings tailored to your dreams.",
    },
    {
      title: "Birthday Parties",
      icon: "🎉",
      description:
        "Celebrate your special day with fun-filled, personalized and theme-based birthday parties that create lasting memories.",
    },
    {
      title: "Annaprashan",
      icon: "👶",
      description:
        "A special touch to your baby's rice ceremony – complete with care, warmth, and tradition.",
    },
    {
      title: "Griha Pravesh",
      icon: "🏠",
      description:
        "Make your housewarming sacred and stylish with rituals, decor, and celebrations handled with grace.",
    },
    {
      title: "Upanayan",
      icon: "🙏",
      description:
        "Preserving tradition and adding elegance to your child's sacred thread ceremony with thoughtful planning.",
    },
    {
      title: "Baby Shower",
      icon: "👶",
      description:
        "Showering the baby with love and motherhood, make this day a special one for you and your baby for the rest of our lives",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h1>
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 text-violet-100">
          We handle everything from planning to execution — so you can focus on
          celebrating life’s most beautiful moments.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-2xl shadow-lg hover:bg-white/20 transition text-center flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2 text-violet-200">
                {service.title}
              </h2>
              <p className="text-violet-100 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
