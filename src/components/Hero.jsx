import React, { useRef } from 'react';

export default function Hero() {
  const scrollRef = useRef(null);

  const speakers = [
    {
      name: 'ד"ר ענת צור',
      title: 'מומחית ברפואה פנימית ובאנדוקרינולוגיה, מנהלת מערך סוכרת ואנדוקרינולוגיה, קופ"ח כללית',
      image: '/anat.jpg'
    },
    {
      name: 'עדי בצלאל',
      title: 'דיאטנית קלינית, רכזת תחום סוכרת, קופ"ח כללית',
      image: '/adi.png'
    },
    {
      name: 'ליאורה ברנסקי',
      title: 'אחות מומחית קלינית בסוכרת, קופ"ח כללית',
      image: '/liora.png'
    },
    {
      name: 'דבורה שפירא',
      title: 'אחות מומחית קלינית בסוכרת, המרכז הרפואי שערי צדק',
      image: ''
    },
    {
      name: 'מיטל לויטן אליהו',
      title: 'אחות ראשית תא לחץ, מרכז רפואי הדסה',
      image: ''
    },
    {
      name: 'ליה תמיר',
      title: 'אחות רכזת תחום פצעים, קופ"ח כללית',
      image: ''
    },
    {
      name: 'Prof. Avivit Cohen',
      title: 'Head of Internal Medicine Dept. A, Hadassah Medical Center, Chair of the National Council for Diabetes & Obesity',
      image: ''
    },
    {
      name: 'ד"ר שושנה עמוס',
      title: 'רופאה בכירה, יחידת הסוכרת, מרכז רפואי הדסה עין כרם',
      image: ''
    },
    {
      name: 'אסנת פינטו',
      title: 'אחות מומחית ומתאמת סוכרת, המרכז הרפואי שערי צדק, קופ"ח מאוחדת',
      image: ''
    },
    {
      name: 'נועה איצקוביץ\'',
      title: 'KAM GSK',
      image: ''
    },
    {
      name: 'תניה ריינפלד',
      title: 'אחות מומחית בסוכרת, מרכז הצבי, קופ"ח מאוחדת',
      image: ''
    },
    {
      name: 'דניאלה סולו',
      title: 'מנהלת מכירות, מינימד',
      image: ''
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const offset = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none bg-glow-cyan" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none bg-glow-gold" />

      {/* Gold Skyline Overlay Header */}
      <div className="absolute top-8 left-0 right-0 flex justify-center opacity-60 pointer-events-none">
        <svg
          className="w-full max-w-[500px] h-auto text-[#D4AF37]"
          viewBox="0 0 400 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Detailed Jerusalem Skyline Vector Outline */}
          <path d="M 0 50 L 30 50 L 30 45 L 35 45 L 35 50 L 50 50 L 50 40 L 55 35 L 60 40 L 60 50 L 80 50 L 80 43 L 88 43 L 88 50 L 110 50 L 110 38 L 125 38 L 125 50 L 140 50 L 140 46 L 144 46 L 144 50 L 160 50 L 160 35 Q 175 25 190 35 L 190 50 L 210 50 L 210 25 L 213 10 L 216 25 L 216 50 L 230 50 L 230 40 L 238 40 L 238 50 L 260 50 L 260 30 Q 275 22 290 30 L 290 50 L 310 50 L 310 44 L 316 44 L 316 50 L 340 50 L 340 42 L 348 42 L 348 50 L 400 50" />
          <path d="M 213 10 L 213 6" strokeWidth="1" />
          <circle cx="213" cy="5" r="1.5" fill="#D4AF37" />
          {/* Dome of the Rock outline */}
          <path d="M 268 30 C 268 18 282 18 282 30" fill="rgba(212, 175, 55, 0.15)" />
          {/* Tower of David outline */}
          <path d="M 116 38 L 116 30 L 119 30 L 119 38" />
          <path d="M 18 50 L 382 50" strokeWidth="1.5" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content (Right column on desktop for RTL) */}
          <div className="lg:col-span-7 text-right order-1 lg:order-2">
            
            {/* Conference Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-medium text-cyan-300">כנס הקיץ לצוותים רפואיים 2026</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
              סוכרת והשמנה:
              <span className="block mt-2 bg-gradient-to-l from-amber-200 to-[#D4AF37] bg-clip-text text-transparent text-glow-gold">
                ניהול אינטגרטיבי וחדשנות
              </span>
            </h1>

            {/* Date & Location Horizontal Panel */}
            <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-start text-slate-300 text-lg mb-8">
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-bold text-white">29.6.2026</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>מלון מצודת דוד, ירושלים</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              הצטרפו לכנס דינמי שמביא את חזית המדע והטכנולוגיה אל השטח. מחקרים קליניים פורצי דרך, הרצאות מקצועיות בגובה העיניים, ואתגר אינטראקטיבי ייחודי שיהפוך את הלמידה לחוויה מעשית בטיפול המשולב בסוכרת ובהשמנה.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 justify-start mb-8">
              <a
                href="#program"
                className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-[#0A192F] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                לתוכנית הכנס
              </a>
              <a
                href="https://reg.eventact.com/form?Event=iy5YAAA&c=i9wg&Form=iFJ4AAA&=&Account=iAA&hc=&login=455291486150"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold glass-card text-[#D4AF37] hover:text-white hover:bg-[#D4AF37]/10 transition-all duration-300 border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.05)]"
              >
                להרשמה לכנס
              </a>
            </div>

            {/* Co-Chairs Section */}
            <div className="border-t border-white/10 pt-6 mt-8">
              <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold block mb-4">יושבות ראש הכנס:</span>
              <div className="flex flex-wrap gap-6 justify-start">
                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-[#0A192F] font-bold text-sm shadow shrink-0">
                    תה
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-white block text-sm leading-none mb-1">תהילה הראל</span>
                    <span className="text-[11px] text-slate-300 block leading-normal max-w-[200px]">
                      אחות מומחית קלינית בסוכרת ומרכזת תחום סוכרת במרכז הרפואי הדסה
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow shrink-0 bg-slate-900">
                    <img src="/tiferet.jpg" alt="תפארת אליאב" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-white block text-sm leading-none mb-1">תפארת אליאב</span>
                    <span className="text-[11px] text-slate-300 block leading-normal max-w-[200px]">
                      אחות מומחית קלינית בסוכרת ומובילת חדשנות באחיות, קופת חולים כללית
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Speakers Section */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-cyan-300 font-bold block">מרצי הכנס:</span>
                
                {/* Scroll Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => scroll('right')}
                    className="w-7 h-7 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/30 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
                    aria-label="הקודם"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => scroll('left')}
                    className="w-7 h-7 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/30 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
                    aria-label="הבא"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scroll Container */}
              <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-2 pt-1 scrollbar-none snap-x snap-mandatory text-right scroll-smooth" 
                style={{ direction: 'rtl' }}
              >
                {speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[180px] sm:w-[200px] snap-start bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 hover:bg-[#112240]/40 p-3 rounded-xl backdrop-blur-sm transition-all duration-300 group/sp"
                  >
                    {/* Avatar */}
                    <div className="w-12 h-12 mx-auto mb-2.5 rounded-full overflow-hidden border border-cyan-500/20 group-hover/sp:border-cyan-400 group-hover/sp:scale-105 transition-all duration-300 shadow-md bg-slate-900 flex items-center justify-center">
                      {speaker.image ? (
                        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-cyan-950/40 text-cyan-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Name & Title */}
                    <div className="text-center">
                      <h5 className="font-bold text-white text-xs sm:text-sm mb-0.5 group-hover/sp:text-cyan-300 transition-colors duration-300">
                        {speaker.name}
                      </h5>
                      <p className="text-[10px] text-slate-400 leading-normal line-clamp-2">
                        {speaker.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Visual Representation (Circular sunset picture) */}
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1 relative">
            <div className="w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] relative flex justify-center items-center">
              
              {/* Outer Golden Border & Glow circles */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/50 p-2 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/30 animate-[spin_40s_linear_infinite_reverse]" />

              {/* Glowing Molecular medical curves SVG */}
              <div className="absolute inset-0 pointer-events-none scale-110 z-0">
                <svg className="w-full h-full text-cyan-400/35" viewBox="0 0 200 200" fill="none">
                  {/* Outer Medical Wave Flow 1 */}
                  <path
                    className="animate-wave-flow"
                    style={{ transformOrigin: 'center' }}
                    d="M 100 10 C 150 10 190 50 190 100 C 190 120 170 150 150 170 C 130 190 70 190 50 170 C 30 150 10 120 10 100 C 10 50 50 10 100 10 Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  {/* Outer Medical Wave Flow 2 */}
                  <path
                    className="animate-wave-flow-reverse"
                    style={{ transformOrigin: 'center' }}
                    d="M 100 20 C 140 20 180 60 180 100 C 180 140 140 180 100 180 C 60 180 20 140 20 100 C 20 60 60 20 100 20 Z"
                    stroke="url(#cyan-glow-grad)"
                    strokeWidth="1.5"
                  />
                  {/* Pulsing Molecular Nodes */}
                  <circle cx="50" cy="35" r="4.5" className="fill-cyan-400 animate-node-pulse" />
                  <circle cx="160" cy="65" r="3.5" className="fill-cyan-400 animate-node-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="150" cy="160" r="5" className="fill-[#D4AF37] animate-node-pulse" style={{ animationDelay: '1.5s' }} />
                  <circle cx="45" cy="145" r="4" className="fill-cyan-400 animate-node-pulse" style={{ animationDelay: '2s' }} />
                  
                  {/* Cross icon for medical logo */}
                  <g transform="translate(25, 80) scale(0.6)">
                    <rect x="5" y="0" width="4" height="14" fill="#00D2FF" className="animate-pulse" />
                    <rect x="0" y="5" width="14" height="4" fill="#00D2FF" className="animate-pulse" />
                  </g>
                  {/* Heart icon for medical logo */}
                  <path
                    d="M 172 110 C 172 107, 168 103, 164 103 C 159 103, 157 108, 157 108 C 157 108, 155 103, 150 103 C 146 103, 142 107, 142 110 C 142 117, 157 127, 157 127 C 157 127, 172 117, 172 110 Z"
                    fill="#D4AF37"
                    opacity="0.75"
                    className="animate-pulse"
                  />

                  <defs>
                    <linearGradient id="cyan-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#00D2FF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Main Circular Image Frame */}
              <div className="w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-2xl relative z-10 bg-[#0A192F]">
                <img
                  src="/jerusalem_sunset.png"
                  alt="ירושלים ומגדל דוד בשקיעה"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
                
                {/* Visual Glassmorphism overlay on bottom of the circle */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A192F]/90 to-transparent flex flex-col justify-end items-center pb-6 px-4">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold text-glow-gold">מצודת דוד</span>
                  <span className="text-[10px] text-slate-400">ירושלים 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}