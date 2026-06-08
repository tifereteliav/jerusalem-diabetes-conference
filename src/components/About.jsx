import React from 'react';

export default function About() {
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
          
          <div className="glass-card p-8 rounded-2xl text-right">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 mr-0 ml-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">מחקר וקליניקה</h3>
            <p className="text-slate-300 leading-relaxed">
              העמקה בקווי המנחה הטיפוליים העדכניים ביותר, כולל מחקרים אחרונים על שילוב של טיפולי GLP1 R agonists ושימור מסת שריר בקרב מטופלים.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-right">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 mr-0 ml-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">חדשנות טכנולוגית</h3>
            <p className="text-slate-300 leading-relaxed">
              הדגמה וניתוח של מערכות ניטור סוכר מתקדמות (AID), עטי הזרקה חכמים ושימוש בכלים מבוססי נתונים לשיפור האיזון המטבולי.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-right">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-[#D4AF37] mb-6 mr-0 ml-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">למידה חווייתית</h3>
            <p className="text-slate-300 leading-relaxed">
              שילוב של אתגרים דיגיטליים ומשחקים אינטראקטיביים לאורך כל היום, המאפשרים לצוותים לבחון את הידע הקליני שלהם בצורה דינמית ומעוררת עניין.
            </p>
          </div>

        </div>

        {/* Festive Challenge Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-[#D4AF37]/20 rounded-3xl p-6 md:p-8 text-right relative overflow-hidden group hover:border-[#D4AF37]/40 transition-all duration-300">
          {/* Decorative glowing background orb */}
          <div className="absolute -left-20 -top-20 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            {/* Festive Icon (Trophy with particle glow) */}
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 animate-bounce" style={{ animationDuration: '3s' }}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0V9.75m-5.007 0V9.75m5.007 0a3 3 0 01-3-3m-2.007 3a3 3 0 003-3m0 0V2.25h-3M12 7.5h3.75M12 12h-.375a3 3 0 00-3 3v.75h9v-.75a3 3 0 00-3-3H12z" />
              </svg>
            </div>

            <div className="space-y-2 flex-grow">
              <h3 className="text-xl md:text-2xl font-black text-white text-glow-gold flex items-center gap-2">
                מי יהיו זוכי האתגר הגדול? 🏆
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                השנה אנו לוקחים את הלמידה צעד אחד קדימה! לאורך כל הכנס נקיים אתגרים דיגיטליים אינטראקטיביים שיבחנו את הידע שלכם בזמן אמת. האם אלו יהיו צוותי בתי החולים או הקהילה? מי יפגין את המענה המהיר והמדויק ביותר? הכינו את הסמארטפונים – הזוכים יוכרזו בסיכום הכנס החגיגי ויזכו בפרסים יקרי ערך!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}