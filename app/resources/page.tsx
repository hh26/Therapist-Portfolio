import Image from 'next/image';
import { Download, PieChart, HandHeart, Anchor, Leaf, Book, Moon, LifeBuoy, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
          <section id="resources" className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Client Resources</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Free tools, templates, and guides to support your mental wellness journey between our sessions.</p>
          </div>

          {/* 4-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feelings Wheel */}
            <a href="#" className="group bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col h-full relative overflow-hidden">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PieChart size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">The Feelings Wheel</h4>
              <p className="text-sm text-slate-500 flex-grow mb-4">A visual tool to help you identify and articulate exactly what you are experiencing.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                <Download size={16} /> Download PDF
              </div>
            </a>

            {/* Needs Wheel */}
            <a href="#" className="group bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col h-full">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HandHeart size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Core Needs Inventory</h4>
              <p className="text-sm text-slate-500 flex-grow mb-4">Map out your physical, emotional, and psychological needs to communicate them clearly.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                <Download size={16} /> Download PDF
              </div>
            </a>

            {/* Grounding Techniques */}
            <a href="#" className="group bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col h-full">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Anchor size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Grounding Tools</h4>
              <p className="text-sm text-slate-500 flex-grow mb-4">Quick 5-4-3-2-1 exercises and somatic techniques to manage anxiety and panic.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                <Download size={16} /> View Guide
              </div>
            </a>

            {/* Self Care */}
            <a href="#" className="group bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col h-full">
              <div className="w-10 h-10 bg-teal-50 text-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Leaf size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Self-Care Menu</h4>
              <p className="text-sm text-slate-500 flex-grow mb-4">A customizable checklist of micro-habits to restore your energy on difficult days.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                <Download size={16} /> Download PDF
              </div>
            </a>

            {/* Gratitude Journal */}
            <a href="#" className="group bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col h-full">
              <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Book size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Gratitude Templates</h4>
              <p className="text-sm text-slate-500 flex-grow mb-4">Printable daily journaling sheets designed to gently shift your cognitive focus.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                <Download size={16} /> Download PDF
              </div>
            </a>

            {/* Sleep Hygiene */}
            <a href="#" className="group bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col h-full">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Moon size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Sleep Hygiene Guide</h4>
              <p className="text-sm text-slate-500 flex-grow mb-4">Evidence-based routines to help regulate your nervous system for better rest.</p>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                <Download size={16} /> View Guide
              </div>
            </a>

            {/* Crisis Support - Designed to stand out */}
            <a href="#" className="group bg-rose-50 p-6 rounded-3xl border border-rose-100 hover:border-rose-300 hover:shadow-md transition-all flex flex-col h-full sm:col-span-2">
              <div className="w-10 h-10 bg-white text-rose-500 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <LifeBuoy size={20} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Immediate Crisis Support</h4>
              <p className="text-sm text-rose-700/80 flex-grow mb-4 max-w-md">
                If you are experiencing a mental health emergency, you are not alone. Access immediate, confidential 24/7 support resources and hotlines here.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-rose-600 group-hover:translate-x-1 transition-transform">
                View Emergency Contacts <ArrowRight size={16} />
              </div>
            </a>

          </div>
        </div>
      </section>
  );
}