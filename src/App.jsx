import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-100 flex flex-col font-['Heebo','Rubik',sans-serif] selection:bg-cyan-500 selection:text-[#0A192F]">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 right-0 h-[3px] bg-gradient-to-l from-cyan-400 to-[#D4AF37] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A192F]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Title */}
          <div className="flex items-center gap-2">
            <div className="text-right">
              <span className="font-extrabold text-white block text-base md:text-lg tracking-wide">
                כנס סוכרת ירושלים 2026
              </span>
            </div>
          </div>

          {/* Navigation Links (Hebrew RTL) */}
          <nav className="flex items-center gap-6 md:gap-8">
            <a 
              href="#about" 
              className="text-sm font-semibold text-slate-300 hover:text-white hover:text-glow-cyan transition-colors"
            >
              אודות הכנס
            </a>
            <a 
              href="#program" 
              className="text-sm font-semibold text-slate-300 hover:text-white hover:text-glow-cyan transition-colors"
            >
              תוכנית הכנס
            </a>
            <a 
              href="https://reg.eventact.com/form?Event=iy5YAAA&c=i9wg&Form=iFJ4AAA&=&Account=iAA&hc=&login=455291486150" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl text-sm font-bold bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.05)]"
            >
              הרשמה
            </a>
          </nav>

        </div>
      </header>

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Program />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;