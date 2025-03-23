import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Hero />
        <Partners />
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}

export default App;