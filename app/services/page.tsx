import Image from 'next/image';
import React from 'react';
import { Users, User, Heart } from 'lucide-react';

export default function ServicesPage() {
  return (
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-6">
       <section id="services" className="bg-white py-8 md:py-24 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">How I Can Help</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Specialized therapeutic approaches designed to help you overcome obstacles and build a life you love.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold mb-3">Couples Counseling</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Navigate relationship challenges, improve communication, and rebuild trust in a neutral, supportive environment.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trauma Recovery</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Evidence-based approaches including EMDR and somatic processing to help you heal from past distressing events.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}