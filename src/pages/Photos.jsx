export default function Gallery() {
  const images = [
    {
      src: "gallery/1.jpg",
      alt: "Wedding Ceremony",
    },
    {
      src: "gallery/2.jpg",
      alt: "Birthday Celebration",
    },
    {
      src: "gallery/3.jpg",
      alt: "Upanayan Decoration",
    },
    {
      src: "gallery/4.jpg",
      alt: "Cultural Event Stage",
    },
    {
      src: "gallery/5.jpg",
      alt: "Wedding Ceremony",
    },
    {
      src: "gallery/6.jpg",
      alt: "Birthday Celebration",
    },
    {
      src: "gallery/7.jpg",
      alt: "Birthday Celebration",
    },
    {
      src: "gallery/8.jpg",
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

        <div className="flex flex-wrap gap-6 justify-center">
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
