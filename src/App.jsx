import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <footer className="border-t border-white/10 bg-[#070b08] py-10 text-center text-white/60">
          <p className="text-sm">
            © {new Date().getFullYear()} RankGlass. WordPress today, Shopify tomorrow.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
