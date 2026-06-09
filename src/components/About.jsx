import React, { useState } from 'react';

export default function About() {
  const [expanded, setExpanded] = useState({
    research: false,
    innovation: false,
    learning: false,
    challenge: false
  });

  const toggleExpand = (key) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="about" className="pt-20 pb-0 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] h-[250px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">אודות הכנס</h2>
          <div className="w-24 h-1 bg-gradient-to-l from-cyan-500 to-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg leading-relaxed">
            כנס ירושלים השנתי לסוכרת והשמנה חוזר – גדול, ממוקד ומחובר יותר לשטח. השנה נמשיך להדק את הרצף הטיפולי והקשר המקצועי בין בתי החולים לקהילה. לצד הרצאות קליניות בחזית המדע, נחזיר לבמה את חוויית הלמידה הייחודית: אתגר אינטראקטיבי חדשני ודינמי להטמעת כלים מעשיים בעשייה היומיומית.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-0">
          
          {/* Research & Clinic Card */}
          <div 
            onClick={() => toggleExpand('research')}
            className={`glass-card-cyan p-6 rounded-2xl text-right cursor-pointer transition-all duration-300 ${
              expanded.research ? 'bg-white/[0.06] shadow-[0_15px_30px_rgba(0,210,255,0.15)] border-cyan-400' : ''
            }`}
          >
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">מחקר וקליניקה</h3>
              </div>
              <button 
                className={`w-7 h-7 rounded-full bg-slate-900 border flex items-center justify-center text-slate-305 transition-all duration-300 ${
                  expanded.research ? 'rotate-180 border-cyan-500/40 text-cyan-400' : 'border-cyan-500/20 hover:text-white'
                }`}
                aria-label="הצג פרטים"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ${expanded.research ? 'max-h-40 opacity-100 mt-4 border-t border-cyan-500/10 pt-4' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-355 leading-relaxed text-sm">
                העמקה בקווי המנחה הטיפוליים העדכניים ביותר, כולל מחקרים אחרונים על שילוב של טיפולי GLP1 R agonists ושימור מסת שריר בקרב מטופלים.
              </p>
            </div>
          </div>

          {/* Innovation Card */}
          <div 
            onClick={() => toggleExpand('innovation')}
            className={`glass-card-teal p-6 rounded-2xl text-right cursor-pointer transition-all duration-300 ${
              expanded.innovation ? 'bg-white/[0.06] shadow-[0_15px_30px_rgba(20,184,166,0.15)] border-teal-400' : ''
            }`}
          >
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                  <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">חדשנות טכנולוגית</h3>
              </div>
              <button 
                className={`w-7 h-7 rounded-full bg-slate-900 border flex items-center justify-center text-slate-305 transition-all duration-300 ${
                  expanded.innovation ? 'rotate-180 border-teal-500/40 text-teal-400' : 'border-teal-500/20 hover:text-white'
                }`}
                aria-label="הצג פרטים"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ${expanded.innovation ? 'max-h-40 opacity-100 mt-4 border-t border-teal-500/10 pt-4' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-355 leading-relaxed text-sm">
                הדגמה וניתוח של מערכות ניטור סוכר מתקדמות (AID), עטי הזרקה חכמים ושימוש בכלים מבוססי נתונים לשיפור האיזון המטבולי.
              </p>
            </div>
          </div>

          {/* Learning Card */}
          <div 
            onClick={() => toggleExpand('learning')}
            className={`glass-card-gold p-6 rounded-2xl text-right cursor-pointer transition-all duration-300 ${
              expanded.learning ? 'bg-white/[0.06] shadow-[0_15px_30px_rgba(212,175,55,0.15)] border-[#D4AF37]' : ''
            }`}
          >
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">למידה חווייתית</h3>
              </div>
              <button 
                className={`w-7 h-7 rounded-full bg-slate-900 border flex items-center justify-center text-slate-305 transition-all duration-300 ${
                  expanded.learning ? 'rotate-180 border-[#D4AF37]/40 text-[#D4AF37]' : 'border-[#D4AF37]/20 hover:text-white'
                }`}
                aria-label="הצג פרטים"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ${expanded.learning ? 'max-h-40 opacity-100 mt-4 border-t border-[#D4AF37]/10 pt-4' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-355 leading-relaxed text-sm">
                שילוב של אתגרים דיגיטליים ומשחקים אינטראקטיביים לאורך כל היום, המאפשרים לצוותים לבחון את הידע הקליני שלהם בצורה דינמית ומעוררת עניין.
              </p>
            </div>
          </div>

        </div>

        {/* Festive Challenge Section */}
        <div 
          onClick={() => toggleExpand('challenge')}
          className={`mt-12 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border rounded-3xl p-5 md:p-6 text-right relative overflow-hidden cursor-pointer transition-all duration-300 ${
            expanded.challenge ? 'border-[#D4AF37]/50 bg-white/[0.04]' : 'border-[#D4AF37]/20'
          }`}
        >
          {/* Decorative glowing background orb */}
          <div className="absolute -left-20 -top-20 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between gap-4 w-full relative z-10">
            {/* Right: Icon + Title */}
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl shrink-0 animate-bounce" style={{ animationDuration: '3s' }}>
                🏆
              </span>
              <h3 className="text-lg md:text-xl font-black text-white text-glow-gold">
                מי יהיו זוכי האתגר הגדול?
              </h3>
            </div>
            
            {/* Left: Chevron */}
            <button className={`w-8 h-8 rounded-full bg-slate-900 border border-[#D4AF37]/20 flex items-center justify-center text-slate-300 transition-transform duration-300 ${
              expanded.challenge ? 'rotate-180 text-[#D4AF37] border-[#D4AF37]/50' : 'hover:text-white'
            }`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Description Block */}
          <div className={`overflow-hidden transition-all duration-300 relative z-10 ${
            expanded.challenge ? 'max-h-40 opacity-100 mt-4 border-t border-[#D4AF37]/10 pt-4' : 'max-h-0 opacity-0'
          }`}>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              השנה אנו לוקחים את הלמידה צעד אחד קדימה! לאורך כל הכנס נקיים אתגרים דיגיטליים אינטראקטיביים שיבחנו את הידע שלכם בזמן אמת. האם אלו יהיו צוותי בתי החולים או הקהילה? מי יפגין את המענה המהיר והמדויק ביותר? הכינו את הסמארטפונים – הזוכים יוכרזו בסיכום הכנס החגיגי ויזכו בפרסים יקרי ערך!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}