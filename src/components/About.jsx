import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] h-[250px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">אודות הכנס</h2>
          <div className="w-24 h-1 bg-gradient-to-l from-cyan-500 to-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg leading-relaxed">
            לאחר ההצלחה הפנומנלית של כנס נובמבר האחרון, כנס ירושלים השנתי לסוכרת והשמנה חוזר – גדול יותר, ממוקד יותר ומחובר יותר לשטח. גם השנה נמשיך להדק את הרצף הטיפולי והקשר המקצועי בין צוותי בתי החולים והקהילה. לצד הרצאות קליניות מעמיקות בחזית המדע, נחזיר אל הבמה את חוויית הלמידה הייחודית של הכנס: אתגר אינטראקטיבי חדשני ודינמי להטמעת הידע והכלים המובילים בעשייה היומיומית.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
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


      </div>
    </section>
  );
}