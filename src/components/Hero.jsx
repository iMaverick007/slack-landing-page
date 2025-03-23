import React from "react";

function Hero() {
  return (
    <section className="bg-[#F7EFE8] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Slack is where the future works
          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            {/* Try for Free Button */}
            <button className="bg-[#642067] text-white px-6 py-3 rounded hover:bg-[#52164E] transition-all duration-200 ease-in-out">
              Try for Free
            </button>

            {/* Sign Up with Google Button */}
            <button className="bg-[#2D85F0] text-white px-6 py-3 flex items-center rounded hover:bg-[#1C6FCC] transition-all duration-200 ease-in-out">
              {/* Google Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 46 46"
                className="mr-2"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M23 9.3c3.03 0 5.74 1.14 7.87 3L38 6.2C34.18 2.6 29.01 0 23 0c-6.01 0-11.46 2.3-15.63 6.4l7.64 6.3C16.51 9.49 19.57 8 23 8v1.3z"
                    fill="#EA4335"
                  />
                  <path
                    d="M6.66 18.79l-7.64-6.3C-.75 15.49 0 19.54 0 23s1.24 7.52 3.02 10.44l7.64-6.3c-.63-1.86-1.02-4.35-1.02-7.15l-.98-.2z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23 46c6.01 0 11.18-2.6 14.99-6.2l-7.64-6.3C32.74 35.86 28.41 38 23 38c-4.21 0-7.8-1.47-10.63-3.8l-7.64 6.3C10.69 43.7 16.42 46 23 46v-1.3z"
                    fill="#34A853"
                  />
                  <path
                    d="M46 23c0-1.36-.14-2.77-.37-4.09H23v8.11h12.3c-.5 2.51-1.99 4.63-4.13 6.16l7.64 6.3c4.06-3.4 6.19-8.5 6.19-13.48l1.3.3z"
                    fill="#4285F4"
                  />
                </g>
              </svg>
              Sign Up with Google
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2">
          <video
            src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
            className="w-full rounded-md shadow-md"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;