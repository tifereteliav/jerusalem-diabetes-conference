import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

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

            {/* Previous Conferences Dropdown */}
            <div className="relative group">
              <button className="text-sm font-semibold text-slate-300 hover:text-white hover:text-glow-cyan transition-colors flex items-center gap-1 cursor-pointer">
                כנסים קודמים
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-32 rounded-xl bg-[#0A192F]/95 backdrop-blur-md border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="w-full text-right px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
                >
                  שנת 2025
                </button>
              </div>
            </div>

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

      {/* Video Modal for 2025 Summary */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-4xl bg-[#0A192F]/95 backdrop-blur-md border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.25)]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A192F]/90">
              <h3 className="text-lg font-bold text-white text-glow-gold">
                כנס סוכרת ירושלים 2025 — סרטון סיכום
              </h3>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                aria-label="סגור"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Player Container */}
            <div className="aspect-video bg-black flex items-center justify-center">
              <video 
                src="/סרטון סיכום כנס2025.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;