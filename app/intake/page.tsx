"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Lock, AlertCircle, Trash2 } from 'lucide-react';

export default function IntakePage() {
  const formRef = useRef<HTMLFormElement>(null);
  
  // State for conditional rendering
  const [commMode, setCommMode] = useState('');
  const [genderSelection, setGenderSelection] = useState('');
  
  // State for our custom validation
  const [isFormValid, setIsFormValid] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([
    "Name", "Age", "Gender", "Email", "Communication Mode", "How you heard about me", "Concerns", "Virtual Comfort"
  ]);

  // Our custom, bulletproof validation logic
  const validateForm = () => {
    if (!formRef.current) return;
    
    const data = new FormData(formRef.current);
    const missing: string[] = [];

    // 1. Name & Age
    if (!data.get('name')?.toString().trim()) missing.push("Name");
    if (!data.get('age')?.toString().trim()) missing.push("Age");

    // 2. Gender
    const gender = data.get('gender');
    if (!gender) {
      missing.push("Gender");
    } else if (gender === 'Other' && !data.get('gender_other')?.toString().trim()) {
      missing.push("Specify Gender");
    }

    // 3. Email
    const email = data.get('email')?.toString().trim() || "";
    if (!email || !email.includes('@')) missing.push("Valid Email");

    // 4. Communication Mode
    const comm = data.get('communication_mode');
    if (!comm) {
      missing.push("Communication Mode");
    } else if (comm === 'WhatsApp' && !data.get('whatsapp_number')?.toString().trim()) {
      missing.push("WhatsApp Number");
    }

    // 5. Source (How did you hear about me)
    if (!data.get('source')) missing.push("How you heard about me");

    // 6. Concerns
    const hasConcerns = data.getAll('concerns[]').length > 0;
    const hasOtherConcern = !!data.get('concerns_other')?.toString().trim();
    if (!hasConcerns && !hasOtherConcern) {
      missing.push("Concerns");
    }

    // 7. Virtual Comfort
    if (!data.get('virtual_comfort')) missing.push("Virtual Comfort");

    // Update states
    setMissingFields(missing);
    setIsFormValid(missing.length === 0);
  };

  // Run validation on every single keystroke or click
  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.name === 'gender') setGenderSelection(target.value);
    if (target.name === 'communication_mode') setCommMode(target.value);
    
    setTimeout(validateForm, 0);
  };

  // Completely wipe the form and reset the validation state
  const handleClearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setCommMode('');
      setGenderSelection('');
      setTimeout(validateForm, 0);
    }
  };

  return (
    <section className="bg-slate-100 py-16 md:py-24 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-3xl mx-auto px-6 w-full">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 tracking-tight">Getting to Know You: Therapy Intake Form</h1>
          
          <div className="text-slate-500 font-medium max-w-xl mx-auto space-y-4 leading-relaxed text-sm md:text-base">
            <p>
              This form is a gentle first step in helping me understand where you're coming from, what you're carrying, and what you might be looking for from therapy.
            </p>
            <p>
              It’s okay to skip questions you’re unsure of — we can explore together. All responses are private and confidential. Take your time, and thank you for sharing your space with me.
            </p>
          </div>
          
          <p className="text-xs text-slate-400 mt-6 italic">
            * Please note that some core contact fields are required to help set up our initial connection.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-300/50 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-800"></div>

          <div className="flex items-center justify-center gap-2 text-slate-400 mb-10 text-sm font-medium bg-slate-50 py-2 px-4 rounded-full w-fit mx-auto border border-slate-100">
            <Lock size={14} />
            <span>Secure & strictly confidential</span>
          </div>

          <form 
            ref={formRef}
            onChange={handleFormChange}
            onKeyUp={handleFormChange}
            action="https://formspree.io/f/YOUR_UNIQUE_ID_HERE" 
            method="POST" 
            className="space-y-10"
          >
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Name / Initials <span className="text-emerald-700">*</span></label>
                <input type="text" name="name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Age <span className="text-emerald-700">*</span></label>
                <input type="number" name="age" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Gender <span className="text-emerald-700">*</span></label>
              <div className="space-y-3">
                {['Male', 'Female', 'Non Binary'].map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                    <input type="radio" name="gender" value={option} className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800 transition-colors" /> 
                    <span className="group-hover:text-emerald-900 transition-colors">{option}</span>
                  </label>
                ))}
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <input type="radio" name="gender" value="Other" className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800" /> 
                  <span>Other:</span>
                  <input type="text" name="gender_other" className="bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 flex-1 max-w-xs transition-all" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Mail ID <span className="text-emerald-700">*</span></label>
              <input type="email" name="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" />
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Preferred mode of communication <span className="text-emerald-700">*</span></label>
              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                  <input type="radio" name="communication_mode" value="Email" className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800" /> 
                  <span className="group-hover:text-emerald-900 transition-colors">Email</span>
                </label>
                <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                  <input type="radio" name="communication_mode" value="WhatsApp" className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800" /> 
                  <span className="group-hover:text-emerald-900 transition-colors">WhatsApp</span>
                </label>
              </div>
              
              <div className={`transition-all duration-300 overflow-hidden ${commMode === 'WhatsApp' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <label className="block text-sm text-slate-500 mb-2 font-medium">
                  Please provide your WhatsApp number <span className="text-emerald-700">*</span>
                </label>
                <input 
                  type="tel" 
                  name="whatsapp_number" 
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all max-w-md shadow-sm" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">How did you hear about me? <span className="text-emerald-700">*</span></label>
              <div className="space-y-3">
                {['Instagram', 'Website', 'Word of Mouth'].map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                    <input type="radio" name="source" value={option} className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800 transition-colors" /> 
                    <span className="group-hover:text-emerald-900 transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Concerns you hope to address <span className="text-emerald-700">*</span></label>
              <div className="space-y-3 mb-4">
                {[
                  "Work - Life Balance", 
                  "Relationship concerns", 
                  "Academic Stress", 
                  "Career Stress", 
                  "Anxiety", 
                  "Interpersonal Conflicts (Peers, Friends, Family, etc)", 
                  "Self - Exploration & Personal Growth"
                ].map((concern) => (
                  <label key={concern} className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                    <input type="checkbox" name="concerns[]" value={concern} className="w-4 h-4 text-emerald-800 border-slate-300 rounded focus:ring-emerald-800" /> 
                    <span className="group-hover:text-emerald-900 transition-colors">{concern}</span>
                  </label>
                ))}
                <div className="flex items-center gap-3 text-sm text-slate-700 pt-2">
                  <span>Other:</span>
                  <input type="text" name="concerns_other" className="bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 flex-1 max-w-sm transition-all" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Additional concerns</label>
              <p className="text-sm text-slate-400 mb-3 font-light">Kindly use this space to mention if you would like to work with a concern that is not listed above.</p>
              <textarea name="unlisted_concerns" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all resize-none"></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">How comfortable are you with virtual sessions? <span className="text-emerald-700">*</span></label>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-y border-slate-100">
                <span className="text-sm text-slate-500 text-center md:text-left font-medium">Not at all comfortable</span>
                <div className="flex items-center gap-6 md:gap-8">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num} className="flex flex-col items-center gap-3 cursor-pointer group">
                      <span className="text-sm font-semibold text-slate-400 group-hover:text-emerald-800 transition-colors">{num}</span>
                      <input type="radio" name="virtual_comfort" value={num} className="w-5 h-5 text-emerald-800 border-slate-300 focus:ring-emerald-800" />
                    </label>
                  ))}
                </div>
                <span className="text-sm text-slate-500 text-center md:text-right font-medium">Totally prefer online sessions</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Expectations</label>
              <p className="text-sm text-slate-400 mb-3 font-light">What do you expect from the sessions?</p>
              <textarea name="expectations" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all resize-none"></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Questions or Queries</label>
              <p className="text-sm text-slate-400 mb-3 font-light">Anything you would like me to know before we begin?</p>
              <textarea name="questions_queries" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all resize-none"></textarea>
            </div>

            <div className="pt-8 border-t border-slate-100">
              
              {/* Dynamic Error Tracker */}
              {!isFormValid && (
                <div className="mb-6 p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-start gap-3">
                  <AlertCircle size={20} className="text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-orange-800 mb-1">Required fields missing:</h4>
                    <p className="text-sm text-orange-700/80 leading-relaxed">
                      {missingFields.join(", ")}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col-reverse sm:flex-row gap-4">
                <button 
                  type="button" 
                  onClick={handleClearForm}
                  className="px-6 py-4 rounded-xl font-medium text-slate-500 bg-slate-50 hover:bg-slate-100 hover:text-slate-700 border border-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  Clear <Trash2 size={18} />
                </button>

                <button 
                  type="submit" 
                  disabled={!isFormValid}
                  className={`flex-1 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-lg
                    ${isFormValid 
                      ? 'bg-emerald-800 text-white hover:bg-emerald-900 shadow-lg hover:shadow-emerald-900/30 cursor-pointer hover:-translate-y-0.5' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                    }
                  `}
                >
                  Submit Form <Send size={18} />
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}