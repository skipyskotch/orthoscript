
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-24 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Partner With Us</h2>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">Request a Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Consult.</span></h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
              Standardize your clinical DME logistics. Gabriel Macias and the OrthoScript team are ready to optimize your practice's bracing workflow.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl font-bold">📍</span>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg">Miami Headquarters</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Direct regional support for Florida orthopedic practices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl font-bold">📧</span>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg">Electronic Support</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">info@orthoscript.com • Response within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase mb-3 tracking-[0.2em]">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white" placeholder="Dr. John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase mb-3 tracking-[0.2em]">Practice Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white" placeholder="Miami Ortho Clinic" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase mb-3 tracking-[0.2em]">Email Address</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white" placeholder="john@clinic.com" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase mb-3 tracking-[0.2em]">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white" placeholder="How can Gabriel's team support your practice?"></textarea>
              </div>
              <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-emerald-600/30 hover:bg-emerald-700 transition-all active:scale-95">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
