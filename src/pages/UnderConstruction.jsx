import React from "react";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
        🚧 Page Under Construction
      </h1>
      <p className="text-lg md:text-xl max-w-2xl drop-shadow-sm">
        We’re working hard to bring you something amazing. Please check back
        soon as we polish this page to perfection!
      </p>
    </div>
  );
};

export default UnderConstruction;
