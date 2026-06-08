import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#071120] py-12 border-t border-white/5 overflow-hidden">
      {/* Background light ring decoration */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right">
          
          {/* Logo / Conference Title */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></span>
              <h4 className="text-lg font-bold text-white tracking-wide">סוכרת והשמנה 2026</h4>
            </div>
            <p className="text-slate-400 text-sm">הכנס השנתי לסוכרת והשמנה ירושלים</p>
          </div>

          {/* Quick Info */}
          <div className="text-slate-400 text-sm space-y-1">
            <p>29 ביוני 2026 | מלון מצודת דוד, ירושלים</p>
            <p>יושבות ראש: תהילה הראל & תפארת אליאב</p>
          </div>



        </div>
      </div>
    </footer>
  );
}
