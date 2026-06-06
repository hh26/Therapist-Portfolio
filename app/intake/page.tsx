"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Lock, AlertCircle, Trash2, CheckCircle } from 'lucide-react';

export default function IntakePage() {
  const formRef = useRef<HTMLFormElement>(null);
  
  // State for conditional rendering
  const [commMode, setCommMode] = useState('');
  const [genderSelection, setGenderSelection] = useState('');
  const [sourceSelection, setSourceSelection] = useState(''); // Added to track the new 'Other' field
  
  // State for submission & validation
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([
    "Name", "Age", "Gender", "Email", "Communication Mode", "How you heard about me", "Concerns", "Virtual Comfort"
  ]);

  // Our custom validation, mapped to your specific Google Form IDs
  const validateForm = () => {
    if (!formRef.current) return;
    
    const data = new FormData(formRef.current);
    const missing: string[] = [];

    // 1. Name & Age
    if (!data.get('entry.85339926')?.toString().trim()) missing.push("Name");
    if (!data.get('entry.741604512')?.toString().trim()) missing.push("Age");

    // 2. Gender
    const gender = data.get('entry.150776536');
    if (!gender) {
      missing.push("Gender");
    } else if (gender === '__other_option__' && !data.get('entry.150776536.other_option_response')?.toString().trim()) {
      missing.push("Specify Gender");
    }

    // 3. Email
    const email = data.get('entry.1070126420')?.toString().trim() || "";
    if (!email || !email.includes('@')) missing.push("Valid Email");

    // 4. Communication Mode
    const comm = data.get('entry.1467909129');
    if (!comm) {
      missing.push("Communication Mode");
    } else if (comm === 'WhatsApp' && !data.get('entry.46654007')?.toString().trim()) {
      missing.push("WhatsApp Number");
    }

    // 5. Source (How did you hear about me) - UPDATED with "Other" validation
    const source = data.get('entry.1378130429');
    if (!source) {
      missing.push("How you heard about me");
    } else if (source === '__other_option__' && !data.get('entry.1378130429.other_option_response')?.toString().trim()) {
      missing.push("Specify how you heard about me");
    }

    // 6. Concerns
    const concerns = data.getAll('entry.782438917');
    const checkedOptions = concerns.filter(c => c !== '__other_option__');
    const isOtherCheckedAndFilled = concerns.includes('__other_option__') && !!data.get('entry.782438917.other_option_response')?.toString().trim();
    
    if (checkedOptions.length === 0 && !isOtherCheckedAndFilled) {
      missing.push("Concerns");
    }

    // 7. Virtual Comfort
    if (!data.get('entry.1897267166')) missing.push("Virtual Comfort");

    // Update states
    setMissingFields(missing);
    setIsFormValid(missing.length === 0);
  };

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.name === 'entry.150776536') setGenderSelection(target.value);
    if (target.name === 'entry.1467909129') setCommMode(target.value);
    if (target.name === 'entry.1378130429') setSourceSelection(target.value); // Track source
    
    setTimeout(validateForm, 0);
  };

  const handleClearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setCommMode('');
      setGenderSelection('');
      setSourceSelection(''); // Clear source
      setTimeout(validateForm, 0);
    }
  };

  // If the form was successfully submitted to Google, show a thank you message!
  if (showSuccess) {
    return (
      <section className="bg-slate-100 py-16 md:py-24 min-h-screen flex items-center justify-center font-sans">
        <div className="max-w-md mx-auto px-6 w-full text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-200 flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-2xl font-serif text-slate-900 mb-4">Thank you for sharing.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Your intake form has been securely submitted. I will review your information and be in touch within 24-48 hours.
            </p>
            <button onClick={() => window.location.href = '/'} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800 transition-all">
              Return Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-100 py-16 md:py-24 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-3xl mx-auto px-6 w-full">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 tracking-tight">Intake Form</h1>
          
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

          <iframe 
            name="hidden_iframe" 
            id="hidden_iframe" 
            style={{ display: 'none' }} 
            onLoad={() => {
              if (isSubmitted) {
                setShowSuccess(true);
                setIsSubmitted(false);
              }
            }}
          ></iframe>

          <form 
            ref={formRef}
            onChange={handleFormChange}
            onKeyUp={handleFormChange}
            onSubmit={() => setIsSubmitted(true)}
            action="https://docs.google.com/forms/d/e/1FAIpQLSeu3EzGjQmRPUoCxUNfvAk0e18MJ-QrQD2KuLExHID5ddtozw/formResponse" 
            method="POST" 
            target="hidden_iframe"
            className="space-y-10"
          >
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Name / Initials <span className="text-emerald-700">*</span></label>
                <input type="text" name="entry.85339926" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Age <span className="text-emerald-700">*</span></label>
                <input type="number" name="entry.741604512" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Gender <span className="text-emerald-700">*</span></label>
              <div className="space-y-3">
                {['Male', 'Female', 'Non Binary'].map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                    <input type="radio" name="entry.150776536" value={option} className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800 transition-colors" /> 
                    <span className="group-hover:text-emerald-900 transition-colors">{option}</span>
                  </label>
                ))}
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <input type="radio" name="entry.150776536" value="__other_option__" className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800" /> 
                  <span>Other:</span>
                  <input type="text" name="entry.150776536.other_option_response" className="bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 flex-1 max-w-xs transition-all" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Mail ID <span className="text-emerald-700">*</span></label>
              <input type="email" name="entry.1070126420" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all" />
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/60">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Preferred mode of communication <span className="text-emerald-700">*</span></label>
              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                  <input type="radio" name="entry.1467909129" value="Email" className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800" /> 
                  <span className="group-hover:text-emerald-900 transition-colors">Email</span>
                </label>
                <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                  <input type="radio" name="entry.1467909129" value="WhatsApp" className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800" /> 
                  <span className="group-hover:text-emerald-900 transition-colors">WhatsApp</span>
                </label>
              </div>
              
              <div className={`transition-all duration-300 overflow-hidden ${commMode === 'WhatsApp' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <label className="block text-sm text-slate-500 mb-2 font-medium">
                  Please provide your WhatsApp number <span className="text-emerald-700">*</span>
                </label>
                <input 
                  type="tel" 
                  name="entry.46654007" 
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all max-w-md shadow-sm" 
                />
              </div>
            </div>

            {/* UPDATED: Added "Other" text input for the Source question */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">How did you hear about me? <span className="text-emerald-700">*</span></label>
              <div className="space-y-3">
                {['Instagram', 'Website', 'Word of Mouth'].map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer group w-fit">
                    <input type="radio" name="entry.1378130429" value={option} className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800 transition-colors" /> 
                    <span className="group-hover:text-emerald-900 transition-colors">{option}</span>
                  </label>
                ))}
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <input type="radio" name="entry.1378130429" value="__other_option__" className="w-4 h-4 text-emerald-800 border-slate-300 focus:ring-emerald-800" /> 
                  <span>Other:</span>
                  <input type="text" name="entry.1378130429.other_option_response" className="bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 flex-1 max-w-xs transition-all" />
                </div>
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
                    <input type="checkbox" name="entry.782438917" value={concern} className="w-4 h-4 text-emerald-800 border-slate-300 rounded focus:ring-emerald-800" /> 
                    <span className="group-hover:text-emerald-900 transition-colors">{concern}</span>
                  </label>
                ))}
                <div className="flex items-center gap-3 text-sm text-slate-700 pt-2">
                  <input type="checkbox" name="entry.782438917" value="__other_option__" className="w-4 h-4 text-emerald-800 border-slate-300 rounded focus:ring-emerald-800" /> 
                  <span>Other:</span>
                  <input type="text" name="entry.782438917.other_option_response" className="bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 flex-1 max-w-sm transition-all" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Additional concerns</label>
              <p className="text-sm text-slate-400 mb-3 font-light">Kindly use this space to mention if you would like to work with a concern that is not listed above.</p>
              <textarea name="entry.1273350129" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all resize-none"></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">How comfortable are you with virtual sessions? <span className="text-emerald-700">*</span></label>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-y border-slate-100">
                <span className="text-sm text-slate-500 text-center md:text-left font-medium">Not at all comfortable</span>
                <div className="flex items-center gap-6 md:gap-8">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num} className="flex flex-col items-center gap-3 cursor-pointer group">
                      <span className="text-sm font-semibold text-slate-400 group-hover:text-emerald-800 transition-colors">{num}</span>
                      <input type="radio" name="entry.1897267166" value={num} className="w-5 h-5 text-emerald-800 border-slate-300 focus:ring-emerald-800" />
                    </label>
                  ))}
                </div>
                <span className="text-sm text-slate-500 text-center md:text-right font-medium">Totally prefer online sessions</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Expectations</label>
              <p className="text-sm text-slate-400 mb-3 font-light">What do you expect from the sessions?</p>
              <textarea name="entry.1720058291" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all resize-none"></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Questions or Queries</label>
              <p className="text-sm text-slate-400 mb-3 font-light">Anything you would like me to know before we begin?</p>
              <textarea name="entry.2074303993" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all resize-none"></textarea>
            </div>

            <div className="pt-8 border-t border-slate-100">
              
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