export default function Gallery() {
  const images = [
    {
      src: "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg",
      alt: "Wedding Ceremony",
    },
    {
      src: "https://images.pexels.com/photos/3014846/pexels-photo-3014846.jpeg",
      alt: "Birthday Celebration",
    },
    {
      src: "https://images.pexels.com/photos/302598/pexels-photo-302598.jpeg",
      alt: "Upanayan Decoration",
    },
    {
      src: "https://images.pexels.com/photos/167474/pexels-photo-167474.jpeg",
      alt: "Cultural Event Stage",
    },
    {
      src: "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg",
      alt: "Wedding Ceremony",
    },
    {
      src: "https://images.pexels.com/photos/3014846/pexels-photo-3014846.jpeg",
      alt: "Birthday Celebration",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 text-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Our Gallery
        </h1>
        <p className="text-center text-lg text-violet-200 mb-12 max-w-3xl mx-auto">
          A glimpse into the magical moments we’ve created. From decor to
          emotions – here’s how we bring visions to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
