import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <FooterSection />
    </div>
  );
}

export default App;
