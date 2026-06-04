import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Globe, Clock, Sparkles, Target, Calendar, Mail, Video } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              Counseling Psychologist
            </div>
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              Online 1:1 Sessions
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
            <Link href="/#contact" className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-700 transition-all shadow-sm text-center flex items-center justify-center gap-2">
              Schedule a Free Call <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all text-center">
              Explore Services
            </Link>
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

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24 bg-[#FAFAFA] border-y border-slate-100">
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
                <div className="h-px w-full bg-slate-50"></div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-1">
                    <Video size={16} className="text-emerald-600"/> Session Format
                  </h4>
                  <p className="text-sm text-slate-600 font-medium text-emerald-700">100% Online</p>
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

              <div className="grid sm:grid-cols-2 gap-6">
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

      {/* 3. CONTACT SECTION */}
      <section id="contact" className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Let's Connect.</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">Taking the first step is often the hardest. Reach out directly or start by filling out the intake form to book a consultation.</p>
          
          {/* Email & Instagram Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a href="mailto:sandhya.narayan.psy@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors bg-slate-800 px-6 py-3 rounded-full border border-slate-700 w-full sm:w-auto justify-center">
              <Mail className="text-emerald-400" size={20} /> sandhya.narayan.psy@gmail.com
            </a>
            <a href="https://instagram.com/sandhya.narayan.psy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors bg-slate-800 px-6 py-3 rounded-full border border-slate-700 w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              @sandhya.narayan.psy
            </a>
          </div>

          {/* Intake Form Button */}
          <Link href="/intake" className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-500 transition-all text-lg shadow-lg hover:shadow-emerald-900/50">
            Book Consultation / Intake Form <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}