"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, UserCircle } from 'lucide-react';
import { logout } from '@/app/actions';

export default function Navbar({ user }: { user: any }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* 1. LEFT: Logo & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-600 hover:text-emerald-600 transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-emerald-800">Sandhya Narayan</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-0.5">Counseling Psychologist</span>
            </Link>
          </div>

          {/* 2. CENTER: Navigation Links (Desktop Only) */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <Link href="/#about" className="hover:text-emerald-600 transition-colors">About</Link>
            <Link href="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
            <Link href="/process" className="hover:text-emerald-600 transition-colors">Process</Link>
            <Link href="/resources" className="hover:text-emerald-600 transition-colors">Resources</Link>
            <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
          </div>

          {/* 3. RIGHT: Action Buttons Group (Desktop Only) */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/intake" className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all shadow-sm">
              Book Consultation
            </Link>
            
            <div className="h-6 w-px bg-slate-200 mx-1"></div> {/* Subtle divider */}

            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/portal" className="text-sm font-medium text-emerald-800 hover:text-emerald-900 flex items-center gap-1.5">
                  <UserCircle size={18} /> My Portal
                </Link>
                
                <div className="h-4 w-px bg-slate-200"></div> {/* Tiny visual separator */}
                
                {/* Forcing the form to be a flex container fixes the alignment entirely */}
                <form action={logout} className="m-0 flex items-center">
                  <button type="submit" className="text-sm font-medium text-slate-500 hover:text-slate-800 flex items-center">
                    Sign Out
                  </button>
                </form>
              </div>
            ) : (
              <Link href="/login" className="text-sm font-medium text-emerald-800 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 px-5 py-2 rounded-full transition-colors">
                Client Login
              </Link>
            )}
          </div>

        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)} />
      
      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-[70] shadow-2xl transform transition-transform duration-300 flex flex-col md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-slate-100">
          <span className="font-serif font-semibold text-emerald-800">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-800 bg-slate-50 p-2 rounded-full">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex flex-col p-6 space-y-6 text-slate-600 font-medium flex-grow">
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">About</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">Services</Link>        
          <Link href="/process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">Process</Link>
          <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">Resources</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">Blog</Link>
          
          <hr className="border-slate-100" />
          
          <Link href="/intake" onClick={() => setIsMobileMenuOpen(false)} className="text-emerald-600 font-semibold flex items-center gap-2">
            Book Consultation <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Auth Section */}
        <div className="p-6 border-t border-slate-100 bg-slate-50">
          {user ? (
             <div className="space-y-4">
               <Link href="/portal" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center justify-center gap-2 bg-emerald-800 text-white py-3 rounded-xl font-medium">
                 <UserCircle size={18} /> My Portal
               </Link>
               <form action={logout} className="w-full">
                 <button type="submit" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center text-sm font-medium text-slate-500 py-2">
                   Sign Out
                 </button>
               </form>
             </div>
          ) : (
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex justify-center text-sm font-medium text-emerald-800 border border-emerald-200 bg-white hover:bg-emerald-50 px-5 py-3 rounded-xl transition-colors">
              Client Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}