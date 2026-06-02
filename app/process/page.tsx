export default function ServicesPage() {
  return (
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
  );
}