"use client";
export default function Footer() {

  return (
    <footer className="bg-[#FAFAFA] py-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sandhya Narayan. All rights reserved.</p>
          <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg border border-red-100 max-w-lg text-center md:text-right">
            <strong>Crisis Notice:</strong> If you are in a life-threatening situation, please call 112 (India) or Local crisis services / community mental health centers.
          </div>
        </div>
    </footer>
  );
}