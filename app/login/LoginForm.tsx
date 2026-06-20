'use client';

import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { login } from '@/app/actions';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 text-center">
      <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
        <Lock size={28} />
      </div>
      <h1 className="text-2xl font-serif text-slate-900 mb-2">Client Portal</h1>
      <p className="text-slate-500 text-sm mb-8">Please sign in to access your secure space.</p>

      <form action={login} className="space-y-6 text-left">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              required 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 pr-12 text-slate-900 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-700 transition-colors flex items-center justify-center"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <button type="submit" className="w-full bg-emerald-800 text-white px-6 py-4 rounded-xl font-medium hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20">
          Sign In
        </button>
      </form>
    </div>
  );
}