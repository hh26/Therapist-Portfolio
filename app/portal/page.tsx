'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, FileText, CreditCard, Download, ExternalLink, BookOpen, UserCircle, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

export default function PortalPage() {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  useEffect(() => {
    if (activeDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeDrawer]);

  // MOCK DATA
  const homeworkFiles = [
    { id: 1, name: 'Anxiety Trigger Tracker.pdf', date: 'Oct 12, 2026', size: '1.2 MB' },
    { id: 2, name: 'Cognitive Distortions Worksheet.pdf', date: 'Oct 05, 2026', size: '840 KB' },
  ];

  const paymentHistory = [
    { id: 1, date: 'Oct 10, 2026', amount: '₹900', status: 'Paid' },
    { id: 2, date: 'Oct 03, 2026', amount: '₹900', status: 'Paid' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-32">
      
      {/* Pristine Main Dashboard Header */}
      <header className="pt-20 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-sm text-emerald-800 rounded-full flex items-center justify-center mb-6">
            <UserCircle size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight">Your Private Space</h1>
          <p className="text-slate-500 font-medium text-lg max-w-lg mx-auto">
            A secure environment to manage your sessions, review materials, and continue your journey.
          </p>
        </div>
      </header>

      {/* The 4 Main "Launchpad" Cards */}
      <main className="max-w-5xl mx-auto px-6 mt-4">
        <div className="grid md:grid-cols-2 gap-6">
          
          <button onClick={() => setActiveDrawer('schedule')} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group text-left relative overflow-hidden flex flex-col h-full">
            <div className="absolute -right-6 -top-6 text-emerald-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
              <Calendar size={180} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Calendar size={24} />
              </div>
              <h2 className="text-2xl font-serif text-slate-900 mb-3">Book a Session</h2>
              <p className="text-slate-500 leading-relaxed mb-8">Schedule your next online appointment at a time that works for you.</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:translate-x-2 transition-transform">
                Open Calendar <ArrowRight size={16} />
              </div>
            </div>
          </button>

          <button onClick={() => setActiveDrawer('materials')} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group text-left relative overflow-hidden flex flex-col h-full">
            <div className="absolute -right-6 -top-6 text-emerald-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
              <FileText size={180} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-serif text-slate-900 mb-3">Worksheets & Files</h2>
              <p className="text-slate-500 leading-relaxed mb-8">Access personalized homework, resources, and documents shared during our sessions.</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:translate-x-2 transition-transform">
                View Materials <ArrowRight size={16} />
              </div>
            </div>
          </button>

          <button onClick={() => setActiveDrawer('billing')} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group text-left relative overflow-hidden flex flex-col h-full">
            <div className="absolute -right-6 -top-6 text-emerald-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
              <CreditCard size={180} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <CreditCard size={24} />
              </div>
              <h2 className="text-2xl font-serif text-slate-900 mb-3">Billing & History</h2>
              <p className="text-slate-500 leading-relaxed mb-8">View your payment details, bank transfer information, and past session history.</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:translate-x-2 transition-transform">
                Manage Billing <ArrowRight size={16} />
              </div>
            </div>
          </button>

          <button onClick={() => setActiveDrawer('resources')} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group text-left relative overflow-hidden flex flex-col h-full">
            <div className="absolute -right-6 -top-6 text-emerald-50 opacity-50 group-hover:scale-110 transition-transform duration-500">
              <BookOpen size={180} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-serif text-slate-900 mb-3">Helpful Resources</h2>
              <p className="text-slate-500 leading-relaxed mb-8">Find emergency contacts and read insights on mental health and personal growth.</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:translate-x-2 transition-transform">
                Explore Resources <ArrowRight size={16} />
              </div>
            </div>
          </button>

        </div>
      </main>


      {/* ========================================= */}
      {/* THE RESPONSIVE BOTTOM-SHEET / DRAWER      */}
      {/* ========================================= */}

      {/* 1. The Darkened Background Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[60] transition-opacity duration-300 ${activeDrawer ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setActiveDrawer(null)}
      />

      {/* 2. The Sliding Panel (Bottom Sheet on Mobile, Right Drawer on Desktop) */}
      <div className={`
        fixed z-[70] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        /* MOBILE: Bottom Sheet layout */
        inset-x-0 bottom-0 h-[85vh] rounded-t-[2rem] 
        /* DESKTOP: Right Drawer layout */
        md:inset-y-0 md:right-0 md:left-auto md:h-full md:w-full md:max-w-md md:rounded-none
        /* ANIMATION STATES */
        ${activeDrawer 
          ? 'translate-y-0 md:translate-x-0' // Open state
          : 'translate-y-full md:translate-y-0 md:translate-x-full' // Closed state
        }
      `}>
        
        {/* Drawer Header */}
        <div className="pt-4 pb-4 px-8 border-b border-slate-100 bg-white z-10 rounded-t-[2rem] md:rounded-none">
          {/* iOS-style grab handle (Only visible on mobile) */}
          <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-4 md:hidden"></div>
          
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-slate-900">
              {activeDrawer === 'schedule' && 'Book a Session'}
              {activeDrawer === 'materials' && 'Materials & Files'}
              {activeDrawer === 'billing' && 'Billing Details'}
              {activeDrawer === 'resources' && 'Resources'}
            </h3>
            <button 
              onClick={() => setActiveDrawer(null)}
              className="p-2 text-slate-400 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-8 hide-scrollbar">
          
          {/* SCHEDULE CONTENT */}
          {activeDrawer === 'schedule' && (
            <div className="animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-8">
                <Calendar size={28} />
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Find a time that works best for your schedule. All sessions are 60 minutes and conducted via secure video link. 
              </p>
              <a 
                href="https://calendly.com/YOUR_LINK_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-800 text-white px-6 py-4 rounded-xl font-medium hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20"
              >
                Open Calendar <ExternalLink size={18} />
              </a>
            </div>
          )}

          {/* MATERIALS CONTENT */}
          {activeDrawer === 'materials' && (
            <div className="animate-in fade-in duration-500">
              <p className="text-slate-500 mb-8 text-sm">Download your personalized homework and resources.</p>
              <div className="space-y-4">
                {homeworkFiles.map((file) => (
                  <div key={file.id} className="p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-emerald-200 transition-all group">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="p-2 bg-white text-emerald-600 rounded-lg shadow-sm shrink-0">
                          <FileText size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm leading-tight mb-1">{file.name}</p>
                          <p className="text-xs text-slate-500">Uploaded {file.date} • {file.size}</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-emerald-700 p-2 shrink-0">
                        <Download size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BILLING CONTENT */}
          {activeDrawer === 'billing' && (
            <div className="animate-in fade-in duration-500 space-y-10">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Payment Methods</h4>
                <div className="space-y-4 text-slate-600">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="font-semibold text-slate-900 mb-2">UPI Transfer</p>
                    <p className="font-mono text-sm bg-white px-3 py-1.5 rounded border border-slate-200 inline-block">sandhyanarayan@upi</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="font-semibold text-slate-900 mb-2">Bank Transfer</p>
                    <div className="space-y-2 text-sm">
                      <p>Name: <span className="font-medium text-slate-900">Sandhya Narayan</span></p>
                      <p>Account: <span className="font-medium text-slate-900">1234567890</span></p>
                      <p>IFSC: <span className="font-medium text-slate-900">HDFC0001234</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Recent Sessions</h4>
                <div className="space-y-3">
                  {paymentHistory.map((record) => (
                    <div key={record.id} className="flex justify-between items-center p-4 rounded-xl border border-slate-100 bg-white">
                      <span className="text-slate-600 text-sm font-medium">{record.date}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-slate-900 text-sm">{record.amount}</span>
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-bold uppercase tracking-wider">Paid</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* RESOURCES CONTENT */}
          {activeDrawer === 'resources' && (
            <div className="animate-in fade-in duration-500 space-y-4">
              <Link href="/blog" className="block p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-emerald-200 transition-all group">
                <div className="w-10 h-10 bg-white text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <BookOpen size={18} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-700">Journal & Insights</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Read the latest articles on mental health, boundaries, and personal growth.</p>
              </Link>
              
              <div className="block p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-emerald-200 transition-all group cursor-pointer">
                <div className="w-10 h-10 bg-white text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <ExternalLink size={18} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-700">Emergency Contacts</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Immediate support numbers and resources if you are currently in crisis.</p>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}