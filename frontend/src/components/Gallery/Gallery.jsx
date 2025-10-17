import React from "react";

function Gallery() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Gallery Header Section */}
      <section className="px-4 md:px-8 pt-28 md:pt-32 lg:pt-36 pb-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left - Title */}
          <div className="lg:col-span-4 order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              OUR
              <br />
              GALLERY
            </h1>
          </div>

          {/* Middle - Arrow */}
          <div className="lg:col-span-2 order-2 flex justify-center lg:justify-start">
            <svg
              width="150"
              height="20"
              viewBox="0 0 150 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 sm:w-32 md:w-36 lg:w-40"
            >
              <line
                x1="0"
                y1="10"
                x2="130"
                y2="10"
                stroke="#FFA500"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <polygon points="130,4 150,10 130,16" fill="#FFA500" />
            </svg>
          </div>

          {/* Right - Description */}
          <div className="lg:col-span-6 order-3">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
              At DHAMMANJALI INDIA PRIVATE LIMITED, our gallery captures the
              essence of our journey—showcasing our commitment to quality,
              community engagement, and innovation. Each image reflects our
              dedication to excellence and the meaningful connections we've
              built within the communities we serve. Explore our visual story
              and witness the milestones that define our brand.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content Section - Add your gallery content here */}
      <section className="px-4 md:px-8 pb-16 max-w-7xl mx-auto">
        {/* Gallery grid or content will go here */}
        <div className="text-center text-gray-500">
          Gallery content coming soon...
        </div>
      </section>
    </div>
  );
}

export default Gallery;
