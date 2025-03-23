import React from "react";

function VideoSection() {
  return (
    <section className="bg-[#F7EFE8] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Column: Video */}
        <div className="md:w-1/2">
          <video
            src="https://videos.pexels.com/video-files/3826732/3826732-sd_960_506_25fps.mp4"
            className="w-full rounded-md shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Column: Text and Button */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Now is your moment to build a better tomorrow
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            We've seen what the future can be. Now it's time to decide what it will be.
          </p>

          {/* Button */}
          <button className="border-2 border-[#642067] text-[#642067] px-6 py-3 rounded hover:bg-[#F7EFE8] focus:outline-none transition-all duration-200 ease-in-out">
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;