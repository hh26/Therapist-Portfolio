"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Users, User, ArrowRight, Calendar, Phone, Mail, GraduationCap, Globe, Clock, Sparkles, Target, PieChart, HandHeart, Leaf, LifeBuoy, Book, Anchor, Moon, Download, MessageCircle, X, Send, Menu } from 'lucide-react';

export default function TherapistPortfolio() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStatus, setChatStatus] = useState('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-emerald-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Mobile Menu Button + Logo */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-slate-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-emerald-800">
                Sandhya Narayan
              </span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-0.5">
                Counseling Psychologist
              </span>
            </div>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
            <a href="#process" className="hover:text-emerald-600 transition-colors">Process</a>
            <a href="#resources" className="hover:text-emerald-600 transition-colors">Resources</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md">
            Book Consultation
          </a>
        </div>
      </nav>

      {/* Mobile Slide-Out Menu */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b border-slate-100">
          <span className="font-serif font-semibold text-emerald-800">Menu</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-slate-400 hover:text-slate-800 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-6 text-slate-600 font-medium">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">About</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">Services</a>
          <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">Process</a>
          <a href="#resources" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600">Resources</a>
          <hr className="border-slate-100" />
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-emerald-600 font-semibold flex items-center gap-2">
            Book Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              Counseling Psychologist
            </div>
            <div className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              Accepting New Clients
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
            A Space to be Intentional, Relational, Quietly political, and <span className="text-emerald-700">Deeply Human</span>.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            Making space for the parts of you that may have been quiet for too long, and gently helping them find their voice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-700 transition-all shadow-sm text-center flex items-center justify-center gap-2">
              Schedule a Free Call <ArrowRight size={18} />
            </a>
            <a href="#services" className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all text-center">
              Explore Services
            </a>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-square md:aspect-[4/5] bg-emerald-50 rounded-[2rem] overflow-hidden relative shadow-lg">
            <Image 
              src="/hero-photo.jpg" 
              alt="Sandhya Narayan" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-24 bg-[#FAFAFA] border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            
            {/* Left Column: Image & Quick Facts */}
            <div className="md:col-span-5 space-y-6 md:sticky md:top-32">
              <div className="aspect-[4/5] bg-emerald-50 rounded-[2.5rem] overflow-hidden relative shadow-sm border border-emerald-100/50">
                <Image 
                  src="/about-photo.jpg" 
                  alt="Sandhya Narayan" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              
              {/* Quick Facts Card */}
              <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-1">
                    <GraduationCap size={16} className="text-emerald-600"/> Qualifications
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">M.Sc. in Counseling Psychology</p>
                </div>
                <div className="h-px w-full bg-slate-50"></div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-1">
                    <Clock size={16} className="text-emerald-600"/> Experience
                  </h4>
                  <p className="text-sm text-slate-600">1+ Years in Counseling Practice</p>
                </div>
                <div className="h-px w-full bg-slate-50"></div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-1">
                    <Globe size={16} className="text-emerald-600"/> Languages
                  </h4>
                  <p className="text-sm text-slate-600">English, Tamil (Bilingual)</p>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Text */}
            <div className="md:col-span-7 flex flex-col justify-center pt-8">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Meet Sandhya Narayan</h2>
              
              {/* Profile / About */}
              <div className="space-y-4 mb-10 text-slate-600 text-lg leading-relaxed">
                <p>
                  Hello! I am  a Counseling Psychologist and a big believer in slow beginnings, honest questions, and finding spaces where we can feel a little more like ourselves. 
                </p>
                <p>
                  I believe in showing up as my truest self in sessions. I’m here because being a psychologist is my Ikigai - my reason for being. I’m really glad you’re here. I hope this space feels comfortable enough for frequent visits.
                </p>
                <p>
                  When I’m not working, you’ll find me binging my favourite sitcom for the millionth time or catching up on all the sleep I’ve possibly compromised in my previous lives.
                </p>
              </div>

              {/* Approach & Concerns Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Modality / Approach */}
                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Sparkles size={18} className="text-orange-500" />
                      My Approach
                   </h4>
                   <ul className="text-sm text-slate-600 space-y-2.5 list-none">
                     <li className="flex items-start gap-2">
                       <span className="text-emerald-400 mt-0.5">•</span> Cognitive Behavioral Therapy (CBT)
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-emerald-400 mt-0.5">•</span> Trauma-informed
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-emerald-400 mt-0.5">•</span> Queer-affirmative
                     </li>
                     <li className="flex items-start gap-2">
                       <span className="text-emerald-400 mt-0.5">•</span> Narrative and Art-based
                     </li>
                   </ul>
                </div>

                {/* Concerns I Work With */}
                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Target size={18} className="text-blue-500" />
                      Concerns I Treat
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {['Trauma', 'Anxiety', 'Work-Life Balance', 'Grief', 'Depression', 'Life Transitions,', 'Interpersonal Challenges', 'Self-Exploration'].map(tag => (
                       <span key={tag} className="bg-slate-50 border border-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* The Process Section */}
      <section id="process" className="py-8 md:py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12 text-center">Your Journey Starts Here</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-emerald-100 z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white border-4 border-emerald-100 rounded-full flex items-center justify-center text-xl font-bold text-emerald-700 mb-6 shadow-sm">1</div>
            <h4 className="text-lg font-semibold mb-2">Reach Out</h4>
            <p className="text-sm text-slate-600">Fill out the secure contact form below to verify availability and insurance fit.</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white border-4 border-emerald-100 rounded-full flex items-center justify-center text-xl font-bold text-emerald-700 mb-6 shadow-sm">2</div>
            <h4 className="text-lg font-semibold mb-2">Discovery Call</h4>
            <p className="text-sm text-slate-600">A free 15-minute phone consultation to ensure our therapy styles align perfectly.</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white border-4 border-emerald-100 rounded-full flex items-center justify-center text-xl font-bold text-emerald-700 mb-6 shadow-sm">3</div>
            <h4 className="text-lg font-semibold mb-2">Begin Healing</h4>
            <p className="text-sm text-slate-600">Schedule your first intake session and begin constructing your personalized treatment plan.</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
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

      {/* Contact & Booking */}
      <section id="contact" className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Let's Connect.</h2>
            <p className="text-slate-400 mb-8 max-w-md">Taking the first step is often the hardest. Reach out using the form, or book a consultation directly.</p>
            
            <div className="space-y-6">
              <a href="mailto:sandhya.narayan.psy@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors w-fit">
                <Mail className="text-emerald-400" /> sandhya.narayan.psy@gmail.com
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors w-fit">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-emerald-400"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                @sandhya_narayan_psy
              </a>
            </div>

            {/* Simple Form UI */}
            <form className="mt-12 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" />
              <input type="email" placeholder="Email Address" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" />
              <textarea placeholder="What brings you here today?" rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"></textarea>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-500 transition-all w-full">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-slate-700">
             <Calendar size={48} className="text-slate-600 mb-4" />
             <h3 className="text-xl font-medium mb-2">Secure Online Booking</h3>
             <p className="text-slate-400 text-sm mb-8">Replace this box with your Calendly or Jane.app embed code for seamless scheduling.</p>
             <button className="bg-slate-700 text-slate-300 px-6 py-2 rounded-lg text-sm border border-slate-600">
               [ Embed Booking Widget Here ]
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] py-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sandhya Narayan. All rights reserved.</p>
          <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg border border-red-100 max-w-lg text-center md:text-right">
            <strong>Crisis Notice:</strong> If you are in a life-threatening situation, please call 112 (India) or Local crisis services / community mental health centers.
          </div>
        </div>
      </footer>

      {/* Floating "Chat" Contact Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* The Open Chat Window */}
        {isChatOpen && (
          <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-slate-100 mb-4 overflow-hidden flex flex-col transform transition-all">
            {/* Header */}
            <div className="bg-emerald-600 text-white p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm">Ask a Question</h4>
                <p className="text-emerald-100 text-xs">Replies typically within 24 hours</p>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-emerald-100 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-5">
              <div className="bg-orange-50 border border-orange-100 text-orange-800 text-xs p-3 rounded-lg mb-4">
                <strong>Note:</strong> This is for general inquiries. Please do not share sensitive medical information here.
              </div>

              {chatStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Send size={24} />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Message Sent!</h4>
                  <p className="text-sm text-slate-600">I will reply to your email shortly.</p>
                  <button 
                    onClick={() => {setIsChatOpen(false); setChatStatus('idle');}}
                    className="mt-6 text-emerald-600 text-sm font-medium hover:underline"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setChatStatus('success');
                    // We will connect this to your email in Step 4
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="hello@example.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Your Message</label>
                    <textarea 
                      required
                      rows={3} 
                      placeholder="How can I help you?" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-emerald-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* The Floating Button */}
        {!isChatOpen && (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all flex items-center justify-center group"
          >
            <MessageCircle size={28} className="group-hover:animate-pulse" />
          </button>
        )}
      </div>
    </div>
  );
}