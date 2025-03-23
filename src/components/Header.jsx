import React from "react";

function Header() {
  return (
    <header className="bg-[#F7EFE8] text-gray-800 py-4 sticky top-0 z-10 shadow-md">
      {/* Wrapper to center-align the content */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Logo and Navigation Links */}
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/" aria-label="Slack Homepage">
            <img
              src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png"
              srcSet="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black.png 1x, https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-black@2x.png 2x"
              alt="Slack Logo"
              className="h-8"
            />
          </a>
          <nav aria-label="Main Navigation" className="hidden md:flex gap-6">
            {["Product", "Enterprise", "Resources", "Pricing"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-bold text-black hover:underline transition-colors duration-200 ease-in-out"
                aria-label={`View ${link} section`}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Search Icon and Action Items */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Icon */}
          <button
            className="hover:text-purple-800 focus:outline-none"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Sign In as Link */}
          <a
            href="/signin"
            className="hidden sm:block text-black font-bold hover:underline transition-colors duration-200 ease-in-out"
            aria-label="Sign in to Slack"
          >
            Sign In
          </a>

          {/* Talk to Sales Button */}
          <button
            className="hidden sm:block border-2 border-[#642067] text-[#642067] px-4 py-2 rounded hover:bg-[#F7EFE8] transition-all duration-200 ease-in-out focus:outline-none"
            aria-label="Talk to Slack Sales"
          >
            Talk to Sales
          </button>

          {/* Try for Free Button */}
          <button
            className="bg-[#642067] text-white px-4 py-2 rounded hover:bg-[#50134E] transition-all duration-200 ease-in-out focus:outline-none"
            aria-label="Try Slack for Free"
          >
            Try for Free
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;