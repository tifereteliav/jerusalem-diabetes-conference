import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-['Heebo','Rubik',sans-serif] selection:bg-cyan-500 selection:text-[#0A192F]">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 right-0 h-[3px] bg-gradient-to-l from-cyan-400 to-[#D4AF37] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#030712]/90 backdrop-blur-lg border-b border-white/5 h-20 md:h-24 flex items-center">
        <div className="container mx-auto px-6 flex items-center justify-between w-full">
          
          {/* Logo / Title */}
          <div className="flex items-center">
            <div className="text-right">
              <span className="font-bold text-white block text-sm sm:text-base md:text-lg tracking-wider hover:text-[#D4AF37] transition-colors duration-300">
                כנס סוכרת ירושלים 2026
              </span>
            </div>
          </div>

          {/* Navigation Links (Desktop - hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-6 md:gap-10">
            <a 
              href="#about" 
              className="text-sm font-semibold text-slate-300 hover:text-white hover:text-glow-cyan transition-colors duration-300"
            >
              אודות הכנס
            </a>
            <a 
              href="#program" 
              className="text-sm font-semibold text-slate-300 hover:text-white hover:text-glow-cyan transition-colors duration-300"
            >
              תוכנית הכנס
            </a>

            {/* Previous Conferences Dropdown */}
            <div className="relative group">
              <button className="text-sm font-semibold text-slate-300 hover:text-white hover:text-glow-cyan flex items-center gap-1.5 align-middle transition-colors duration-300 cursor-pointer">
                <span>כנסים קודמים</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-cyan-400 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-3 w-36 rounded-xl bg-[#030712]/95 backdrop-blur-md border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-1.5">
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="w-full text-right px-3 py-2 text-xs font-bold text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                >
                  שנת 2025
                </button>
              </div>
            </div>

            <a 
              href="https://reg.eventact.com/form?Event=iy5YAAA&c=i9wg&Form=iFJ4AAA&=&Account=iAA&hc=&login=455291486150" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl text-sm font-bold bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.08)] duration-300"
            >
              הרשמה
            </a>
          </nav>

          {/* Mobile elements (Register CTA + Hamburger Toggle) */}
          <div className="flex md:hidden items-center gap-3">
            <a 
              href="https://reg.eventact.com/form?Event=iy5YAAA&c=i9wg&Form=iFJ4AAA&=&Account=iAA&hc=&login=455291486150" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:text-white transition-all"
            >
              הרשמה
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/5 cursor-pointer focus:outline-none transition-colors"
              aria-label="תפריט ניווט"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#030712]/98 backdrop-blur-lg md:hidden flex flex-col pt-28 px-6 transition-all duration-300">
          <nav className="flex flex-col gap-5 text-right mt-6">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-200 hover:text-cyan-400 py-3.5 border-b border-white/5 transition-colors"
            >
              אודות הכנס
            </a>
            <a 
              href="#program" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-slate-200 hover:text-cyan-400 py-3.5 border-b border-white/5 transition-colors"
            >
              תוכנית הכנס
            </a>
            
            {/* Previous Conferences inside Drawer */}
            <div className="py-3.5 border-b border-white/5">
              <span className="text-sm font-bold text-slate-400 block mb-2">כנסים קודמים</span>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowVideoModal(true);
                }}
                className="text-lg font-bold text-[#D4AF37] hover:text-white transition-colors cursor-pointer w-full text-right"
              >
                סרטון סיכום כנס 2025
              </button>
            </div>

            <a 
              href="https://reg.eventact.com/form?Event=iy5YAAA&c=i9wg&Form=iFJ4AAA&=&Account=iAA&hc=&login=455291486150" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 w-full py-4 text-center rounded-xl text-base font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-[#0A192F] shadow-lg shadow-cyan-500/20"
            >
              להרשמה לכנס
            </a>
          </nav>
        </div>
      )}

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