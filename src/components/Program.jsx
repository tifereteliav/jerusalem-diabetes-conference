import React, { useState } from 'react';

const scheduleData = [
  {
    time: "08:00 - 08:30",
    title: "התכנסות וביקור בתערוכת המציגים",
    type: "break",
    speaker: "",
    sponsor: "",
    desc: "רישום משתתפים, קבלת ערכות כנס, קפה של בוקר וסיור מודרך בין דוכני המציגים והטכנולוגיות החדשניות בתחום הסוכרת והאנדוקרינולוגיה."
  },
  {
    time: "08:30 - 08:40",
    title: "דברי פתיחה",
    type: "lecture",
    speaker: "יושבות ראש הכנס\nתהילה הראל | אחות מומחית קלינית בסוכרת ומרכזת תחום סוכרת, מרכז רפואי הדסה\nתפארת אליאב | אחות מומחית קלינית בסוכרת, ומובילת חדשנות באחיות, קופ\"ח כללית.",
    sponsor: "",
    desc: "ברכות פתיחה והצגת מטרות יום העיון: שילוב בין רפואה קלינית מסורתית לחדשנות טכנולוגית אינטראקטיבית."
  },
  {
    time: "08:40 - 09:00",
    title: "אתגר אינטראקטיבי ראשון",
    type: "challenge",
    speaker: "צוות הכנס",
    sponsor: "",
    desc: "משחק דיגיטלי אינטראקטיבי קצר בסמארטפונים לבדיקת ידע קליני בסיסי בסוכרת והשמנה, המלווה בדיון קצר על התשובות."
  },
  {
    time: "09:00 - 09:20",
    title: "מעבר לירידה במשקל - מבט מקיף על הטיפול במחלת ההשמנה",
    type: "lecture",
    speaker: "ד\"ר ענת צור | מומחית ברפואה פנימית ובאנדוקרינולוגיה, מנהלת מערך סוכרת ואנדוקרינולוגיה, קופ\"ח כללית",
    sponsor: "novo",
    desc: "סקירה קלינית מעמיקה של השמנת יתר כמחלה כרונית רב-מערכתית, התאמת פרוטוקולים תרופתיים חדשניים והבנת ההשפעות המטבוליות ארוכות הטווח מעבר להפחתת משקל גרידא."
  },
  {
    time: "09:20 - 09:40",
    title: "כלים מעשיים לשיפור איכות החיים והאיזון הגליקמי של המטופל הסוכרתי",
    type: "lecture",
    speaker: "דבורה שפירא | אחות מומחית קלינית בסוכרת, המרכז הרפואי שערי צדק",
    sponsor: "sanofi",
    desc: "הצגת ארגז כלים יישומי לליווי מטופלים, שיפור ההיענות לטיפול, איזון גליקמי מותאם אישית והעצמת המטופל בניהול השגרה."
  },
  {
    time: "09:40 - 09:55",
    title: "אתגר אינטראקטיבי שני",
    type: "challenge",
    speaker: "צוות הכנס",
    sponsor: "",
    desc: "חידון קייסים קליניים (Case Studies) מבוסס מקרי בוחן אמיתיים מהמרפאה. המשתתפים מצביעים ומנתחים יחד את אפשרויות הטיפול הטובות ביותר."
  },
  {
    time: "09:55 - 10:15",
    title: "סוכרת תחת לחץ",
    type: "lecture",
    speaker: "מיטל לויטן אליהו | אחות ראשית תא לחץ, מרכז רפואי הדסה",
    sponsor: "",
    desc: "דיון מרתק בהשפעות של מתח נפשי ופיזיולוגי על רמות הסוכר, הטיפול בתא לחץ לפצעים סוכרתיים וההשלכות של תנאי לחץ על כלי הדם ההיקפיים."
  },
  {
    time: "10:15 - 10:30",
    title: "בין האצבעות – מחברים כוחות",
    type: "lecture",
    speaker: "ליה תמיר | אחות רכזת תחום פצעים, קופ\"ח כללית",
    sponsor: "",
    desc: "חשיבות שיתוף הפעולה הבין-מקצועי במניעה וטיפול מוקדם בסיבוכי כף רגל סוכרתית, איתור מוקדם של פצעים קשים ושימוש בחבישות מתקדמות."
  },
  {
    time: "10:30 - 11:00",
    title: "הפסקה וביקור בתערוכת המציגים",
    type: "break",
    speaker: "",
    sponsor: "",
    desc: "הפסקת קפה ומאפה, הזדמנות לנטוורקינג והתנסות מעשית במכשור הרפואי המוצג בביתני התערוכה."
  },
  {
    time: "11:00 - 11:15",
    title: "אתגר אינטראקטיבי שלישי",
    type: "challenge",
    speaker: "צוות הכנס",
    sponsor: "",
    desc: "אתגר סימולציה מהיר: התמודדות עם היפוגליקמיה והיפרגליקמיה קיצונית בזמן אמת. פתרון קבוצתי של תרחישי חירום."
  },
  {
    time: "11:15 - 11:35",
    title: "Diabetes and Obesity Management: A Practical Perspective",
    type: "lecture",
    speaker: "פרופ' אביבית כהן | מנהלת מחלקה פנימית א', מרכז רפואי הדסה, יו\"ר המועצה הלאומית לסוכרת והשמנה",
    sponsor: "lilly",
    desc: "An evidence-based overview of dual GIP/GLP-1 receptor co-agonists, comparative clinical trial results, safety profiles, and recommendations for integration into clinical practice for complex patient cohorts."
  },
  {
    time: "11:35 - 11:50",
    title: "שימור מסת שריר בטיפול GLP1 R agonist",
    type: "lecture",
    speaker: "ד\"ר שושנה עמוס | רופאה בכירה, יחידת הסוכרת, מרכז רפואי הדסה עין כרם",
    sponsor: "",
    desc: "דיון בחשיבות של מניעת אובדן מסת שריר (Sarcopenia) במהלך ירידה חדה במשקל תחת טיפולי אנלוגים ל-GLP-1, והמלצות לתזונה ופעילות גופנית תומכת."
  },
  {
    time: "11:50 - 12:15",
    title: "אתגר אינטראקטיבי רביעי",
    type: "challenge",
    speaker: "צוות הכנס",
    sponsor: "",
    desc: "חידון ידע מורכב בנושאי שילוב תרופות ומינונים. פרסים סמליים יוענקו לצוותים הזוכים ברמת הדיוק והמהירות הגבוהה ביותר."
  },
  {
    time: "12:15 - 12:30",
    title: "האתגר הטכנולוגי בסוכרת בגיל השלישי",
    type: "lecture",
    speaker: "אסנת פינטו | אחות מומחית ומתאמת סוכרת, המרכז הרפואי שערי צדק, קופ\"ח מאוחדת",
    sponsor: "",
    desc: "הנגשת טכנולוגיות ניטור והזרקה לאוכלוסיית הגיל השלישי, התמודדות עם ירידה קוגניטיבית ומוטורית, ותמיכת בני משפחה ומטפלים במערך הטיפולי."
  },
  {
    time: "12:30 - 12:50",
    title: "השלכות התפרצות שלבקת חוגרת בסוכרתיים",
    type: "lecture",
    speaker: "נועה איצקוביץ' | KAM GSK",
    sponsor: "gsk",
    desc: "סקירת הסיכון המוגבר להתפרצות שלבקת חוגרת (Herpes Zoster) בקרב חולי סוכרת עקב פגיעה במערכת החיסון, והשלכותיה על האיזון המטבולי ואיכות החיים."
  },
  {
    time: "12:50 - 13:20",
    title: "הפסקה וביקור בתערוכת המציגים",
    type: "break",
    speaker: "",
    sponsor: "",
    desc: "הפסקת צהריים קלה, המשך סיורים בתערוכה ומפגש עמיתים."
  },
  {
    time: "13:20 - 13:35",
    title: "נהיגה בטוחה וסוכרת – מחויבים לאנשים שבדרך",
    type: "lecture",
    speaker: "תניה ריינפלד | אחות מומחית בסוכרת, מרכז הצבי, קופ\"ח מאוחדת",
    sponsor: "",
    desc: "הנחיות קליניות וחוקיות למניעת היפוגליקמיה בזמן נהיגה, בדיקת רמות סוכר לפני נסיעה, ודרכי התנהגות במצבי חירום בכביש."
  },
  {
    time: "13:35 - 13:50",
    title: "Let there be Data",
    type: "lecture",
    speaker: "ליאורה ברנסקי | אחות מומחית קלינית בסוכרת, קופ\"ח כללית",
    sponsor: "",
    desc: "כיצד ניתוח נתוני עתק (Big Data) מדוחות הניטור הרציף משפר את דיוק קבלת ההחלטות הרפואיות ומאפשר התאמת טיפול מונעת אישית."
  },
  {
    time: "13:50 - 14:05",
    title: "מעבר להנחיות הקלאסיות: ניהול תזונתי מתקדם בסוכרת גרסת 2026",
    type: "lecture",
    speaker: "עדי בצלאל | דיאטנית, רכזת תחום סוכרת, קופ\"ח כללית",
    sponsor: "",
    desc: "חידושים תזונתיים בסוכרת, התאמת דיאטות דלות פחמימות מול תזונה ים תיכונית, שימוש באינדקס גליקמי מותאם אישית וכלים דיגיטליים למעקב תזונתי."
  },
  {
    time: "14:05 - 14:25",
    title: "טיפול מתקדם במערכות AID והזרקה חכמה",
    type: "lecture",
    speaker: "דניאלה סולו | מנהלת מכירות, מינימד",
    sponsor: "minimed",
    desc: "הצגת הדור הבא של מערכות לולאה סגורה היברידית (Automated Insulin Delivery), עטי אינסולין חכמים המסתנכרנים ישירות לאפליקציות הניטור, ופתרונות עתידיים."
  },
  {
    time: "14:25 - 14:40",
    title: "הכרזה על הזוכים ודברי סיכום",
    type: "challenge",
    speaker: "יושבות ראש הכנס",
    sponsor: "",
    desc: "סיכום תוצאות האתגרים האינטראקטיביים שנערכו במהלך היום, הכרזת הזוכים המובילים וחלוקת פרסים, לצד דברי סיכום ותודות לצוותים המציגים והנותנים חסות."
  },
  {
    time: "14:40",
    title: "ארוחת צהריים",
    type: "break",
    speaker: "",
    sponsor: "",
    desc: "ארוחת צהריים בשרית חגיגית במסעדת המלון וסיום יום העיון."
  }
];

const SponsorLogo = ({ brand }) => {
  switch (brand) {
    case 'novo':
      return (
        <span className="inline-flex items-center gap-1.5 bg-blue-950/40 px-2.5 py-1 rounded-lg text-[11px] border border-blue-500/30 text-blue-300 font-sans font-bold shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          novo nordisk
        </span>
      );
    case 'sanofi':
      return (
        <span className="inline-flex items-center gap-1.5 bg-purple-950/40 px-2.5 py-1 rounded-lg text-[11px] border border-violet-500/30 text-violet-300 font-sans font-bold shadow-sm">
          <span className="w-1.5 h-1.5 bg-violet-400 rotate-45 animate-pulse"></span>
          sanofi
        </span>
      );
    case 'lilly':
      return (
        <span className="inline-flex items-center gap-1.5 bg-red-950/40 px-2.5 py-1 rounded-lg text-[11px] border border-red-500/30 text-red-300 font-serif italic font-extrabold shadow-sm">
          Lilly
        </span>
      );
    case 'gsk':
      return (
        <span className="inline-flex items-center gap-1.5 bg-orange-950/30 px-2.5 py-1 rounded-lg text-[11px] border border-orange-500/30 text-orange-400 font-sans font-bold shadow-sm">
          <span className="w-2 h-2 rounded-full border-2 border-orange-400 animate-pulse"></span>
          GSK
        </span>
      );
    case 'minimed':
      return (
        <span className="inline-flex items-center gap-1.5 bg-cyan-950/40 px-2.5 py-1 rounded-lg text-[11px] border border-cyan-500/30 text-cyan-300 font-mono shadow-sm">
          ▲ minimed
        </span>
      );
    default:
      return null;
  }
};

export default function Program() {
  const [filter, setFilter] = useState('all');

  const filteredData = scheduleData.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const getBorderColor = (type) => {
    switch (type) {
      case 'challenge':
        return 'border-r-[#D4AF37] hover:border-l-transparent hover:border-t-transparent hover:border-b-transparent';
      case 'lecture':
        return 'border-r-cyan-500 hover:border-l-transparent hover:border-t-transparent hover:border-b-transparent';
      case 'break':
      default:
        return 'border-r-slate-500 hover:border-l-transparent hover:border-t-transparent hover:border-b-transparent';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'challenge':
        return { text: 'אתגר אינטראקטיבי', css: 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20' };
      case 'lecture':
        return { text: '', css: '' };
      case 'break':
      default:
        return { text: 'הפסקה', css: 'bg-slate-800/80 text-slate-300 border border-slate-700' };
    }
  };

  return (
    <section id="program" className="pt-12 pb-24 relative overflow-hidden bg-[#0A192F]">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">תוכנית הכנס</h2>
          <div className="w-28 h-1.5 bg-gradient-to-l from-cyan-500 via-teal-500 to-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg leading-relaxed">
            לוח זמנים מפורט המשלב את מיטב ההרצאות המקצועיות, אתגרי למידה אינטראקטיביים נושאי פרסים, והזדמנויות נטוורקינג מרתקות.
          </p>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
              filter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-[#0A192F] shadow-lg shadow-cyan-500/20 scale-105'
                : 'glass-card text-slate-300 border border-white/5 hover:text-white hover:bg-white/10'
            }`}
          >
            כל הלו״ז
          </button>
          <button
            onClick={() => setFilter('lecture')}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
              filter === 'lecture'
                ? 'bg-cyan-500 text-[#0A192F] shadow-lg shadow-cyan-500/20 scale-105'
                : 'glass-card text-slate-300 border border-white/5 hover:text-white hover:bg-white/10'
            }`}
          >
            הרצאות מקצועיות
          </button>
          <button
            onClick={() => setFilter('challenge')}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
              filter === 'challenge'
                ? 'bg-[#D4AF37] text-[#0A192F] shadow-lg shadow-amber-500/20 scale-105'
                : 'glass-card text-slate-300 border border-white/5 hover:text-white hover:bg-white/10'
            }`}
          >
            אתגרים דיגיטליים
          </button>
          <button
            onClick={() => setFilter('break')}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
              filter === 'break'
                ? 'bg-slate-700 text-white shadow-lg shadow-slate-700/20 scale-105'
                : 'glass-card text-slate-300 border border-white/5 hover:text-white hover:bg-white/10'
            }`}
          >
            הפסקות ותערוכה
          </button>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pr-8 md:pr-12">
          {/* Vertical Timeline Line */}
          <div className="absolute right-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-[#D4AF37] opacity-60"></div>

          {/* Timeline Items */}
          <div className="space-y-5">
            {filteredData.map((item, index) => {
              const label = getTypeLabel(item.type);
              const accentBorder = getBorderColor(item.type);

              return (
                <div key={index} className="relative group">
                  {/* Timeline Node Point */}
                  <div className="absolute -right-[41px] md:-right-[57px] top-[22px] flex items-center justify-center z-10">
                    {/* Outer pulse */}
                    <div className={`absolute w-8 h-8 rounded-full animate-ping opacity-20 transition-all duration-300 group-hover:opacity-40 ${
                      item.type === 'challenge' ? 'bg-[#D4AF37]' :
                      item.type === 'lecture' ? 'bg-cyan-500' : 'bg-slate-500'
                    }`} />
                    {/* Inner glowing dot */}
                    <div className={`w-5 h-5 rounded-full border-2 bg-[#0A192F] transition-all duration-300 group-hover:scale-125 flex items-center justify-center ${
                      item.type === 'challenge' ? 'border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.7)]' :
                      item.type === 'lecture' ? 'border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]' :
                      'border-slate-500 shadow-[0_0_12px_rgba(100,116,139,0.5)]'
                    }`} />
                  </div>

                  {/* Program Card Container */}
                  <div className={`glass-panel border border-white/5 border-r-4 ${accentBorder} rounded-2xl py-4 px-5 transition-all duration-300 group-hover:bg-[#112240]/60 group-hover:border-white/10 group-hover:shadow-[0_10px_25px_-5px_rgba(0,210,255,0.08)] group-hover:-translate-x-1.5`}>
                    
                    {/* Top Row: Time, Type Label, Sponsor */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      {/* Time Slot Badge */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/10 text-[#D4AF37] font-bold text-xs transition-colors duration-300 group-hover:border-cyan-500/20">
                        <svg className="w-3.5 h-3.5 text-[#D4AF37]/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span dir="ltr">{item.time}</span>
                      </div>

                      {/* Event Type & Sponsor */}
                      <div className="flex flex-wrap items-center gap-2">
                        {label.text && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wide ${label.css}`}>
                            {label.text}
                          </span>
                        )}
                        {item.sponsor && <SponsorLogo brand={item.sponsor} />}
                      </div>
                    </div>

                    {/* Event Title */}
                    <h3 className="text-lg md:text-xl font-extrabold text-white mb-1.5 group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>

                    {/* Speaker Bio */}
                    {item.speaker && (
                      <div className="mt-2 space-y-1 text-slate-300 text-xs">
                        {(() => {
                          const lines = item.speaker.split('\n');
                          if (lines.length === 1) {
                            const line = lines[0];
                            if (line.includes('|')) {
                              const [name, role] = line.split('|');
                              return (
                                <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                                  <svg className="w-4 h-4 text-cyan-400/80 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                  <span className="font-semibold text-white">{name.trim()}</span>
                                  <span className="text-slate-500">|</span>
                                  <span className="text-slate-300 text-[11px]">{role.trim()}</span>
                                </div>
                              );
                            }
                            return (
                              <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                                <svg className="w-4 h-4 text-cyan-400/80 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{line}</span>
                              </div>
                            );
                          }

                          return (
                            <div className="space-y-1">
                              {lines.map((line, lIdx) => {
                                if (lIdx === 0) {
                                  return (
                                    <div key={lIdx} className="font-bold text-[#D4AF37] flex items-center gap-1.5 mb-1.5 text-[13px]">
                                      <svg className="w-4 h-4 text-[#D4AF37]/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                      </svg>
                                      {line}
                                    </div>
                                  );
                                }
                                
                                if (line.includes('|')) {
                                  const [name, role] = line.split('|');
                                  return (
                                    <div key={lIdx} className="pr-5 relative before:content-[''] before:absolute before:right-1.5 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-cyan-500/60 leading-normal">
                                      <span className="font-semibold text-white">{name.replace('•', '').trim()}</span>
                                      <span className="text-slate-400"> | </span>
                                      <span className="text-slate-300 text-[11px]">{role.trim()}</span>
                                    </div>
                                  );
                                }

                                return (
                                  <div key={lIdx} className="pr-5 relative before:content-[''] before:absolute before:right-1.5 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-cyan-500/60 leading-normal">
                                    {line}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })()}
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}