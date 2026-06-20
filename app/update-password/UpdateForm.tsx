'use client';

import React, { useState } from 'react';
import { KeyRound, Eye, EyeOff } from 'lucide-react';
import { updatePassword } from '@/app/actions';

export default function UpdateForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 text-center">
      <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
        <KeyRound size={28} />
      </div>
      <h1 className="text-2xl font-serif text-slate-900 mb-2">Set Your Password</h1>
      <p className="text-slate-500 text-sm mb-8">Please create a secure password to access your portal.</p>

      <form action={updatePassword} className="space-y-6 text-left">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">New Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              required 
              minLength={6}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 pr-12 text-slate-900 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-700 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2">Must be at least 6 characters long.</p>
        </div>
        
        <button type="submit" className="w-full bg-emerald-800 text-white px-6 py-4 rounded-xl font-medium hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20">
          Save and Enter Portal
        </button>
      </form>
    </div>
  );
}