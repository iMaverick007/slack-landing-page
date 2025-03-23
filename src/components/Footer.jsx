import React from "react";

function Footer() {
  return (
    <footer className="bg-purple-800 text-white text-center py-4 px-2 md:px-4">
      <p className="text-sm md:text-base leading-normal">
        &copy; {new Date().getFullYear()} Slack Technologies, LLC
      </p>
    </footer>
  );
}

export default Footer;