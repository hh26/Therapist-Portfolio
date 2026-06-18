import React from 'react';
import { Heart, Users, User, CreditCard, GraduationCap, Mail } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Services Intro */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">How I Can Help</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Specialized, 1-on-1 and group therapeutic approaches designed to help you overcome obstacles from the comfort of your own space.</p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <User size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Individual Therapy</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">One-on-one sessions focusing on anxiety, depression, life transitions, and building personal resilience.</p>
          </div>

          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Group Sessions</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">Facilitated group spaces focused on shared experiences, skill-building, and peer support in a safe environment.</p>
          </div>

          <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trauma Recovery</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">Evidence-based approaches including EMDR and somatic processing to help you heal from past distressing events.</p>
          </div>
        </div>

        {/* Pricing & Investment Section */}
        <div className="border-t border-slate-100 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">Pricing and Fees</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Transparent pricing for your mental health journey. All sessions are conducted securely online.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Standard Rates Box */}
            <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-slate-100 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2 text-slate-900">
                <CreditCard className="text-emerald-600" /> Standard Rates
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div>
                    <p className="font-medium text-slate-900">Individual Therapy</p>
                    <p className="text-sm text-slate-500 mt-0.5">60-minute video session</p>
                  </div>
                  <p className="text-xl font-semibold text-emerald-700">₹900</p>
                </div>
                
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <div className="pr-4">
                    <p className="font-medium text-slate-900">Group Sessions</p>
                    <p className="text-sm text-slate-500 mt-0.5">Charged as per requirement and work involved</p>
                  </div>
                  <a href="mailto:sandhya.narayan.psy@gmail.com?subject=Enquiry about Group Sessions" className="flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-50 px-3 py-2 rounded-lg whitespace-nowrap">
                    <Mail size={16} /> Contact
                  </a>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-slate-900">Initial Consultation</p>
                    <p className="text-sm text-slate-500 mt-0.5">15-minute discovery call</p>
                  </div>
                  <p className="text-lg font-semibold text-emerald-700 uppercase tracking-wide text-sm">Free</p>
                </div>
              </div>
            </div>

            {/* Discounts Box */}
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden flex flex-col justify-center">
              {/* Decorative background icon */}
              <div className="absolute -right-6 -top-6 text-blue-100/50">
                <GraduationCap size={160} strokeWidth={1.5} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-blue-900">
                  <GraduationCap className="text-blue-600" /> Student Discount
                </h3>
                <p className="text-blue-800/80 text-sm leading-relaxed mb-6">
                  I believe mental health support should be accessible while balancing academics. I offer dedicated discounted rates for active university and college students. 
                </p>
                <div className="bg-white/70 inline-block px-4 py-2.5 rounded-lg border border-blue-200/60 shadow-sm">
                  <p className="font-medium text-blue-900 text-sm">Special rates applicable with valid Student ID</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}