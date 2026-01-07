
import React from 'react';
import { MedicalGrid } from '../components/VisualAssets';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500 relative">
      <MedicalGrid />
      
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-10 md:p-20 shadow-2xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-slate-800 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            
            <div className="flex flex-col md:flex-row gap-20 items-center md:items-start">
              <div className="relative flex-shrink-0">
                 <div className="absolute -inset-4 border border-emerald-500/20 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="w-64 h-80 rounded-[2.5rem] overflow-hidden border-2 border-emerald-100 dark:border-emerald-900 shadow-2xl relative z-10">
                  <img 
                    src="https://picsum.photos/seed/gabriel/600/800" 
                    alt="Gabriel Macias" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Established 2000</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-1.5 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Professional Leadership</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black text-slate-950 dark:text-white mb-10 tracking-tighter leading-[0.9]">Gabriel <br /><span className="text-emerald-600">Macias.</span></h1>
                
                <div className="space-y-8">
                  <p className="text-2xl text-slate-900 dark:text-slate-100 leading-tight font-black">
                    Gabriel Macias is a seasoned professional in the orthopedic field with over 30 years of experience, including a strong background in orthopedic sales.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    Since the early 2000s, based in Miami, Florida, he has specialized in orthopedic durable medical equipment (DME) and orthopedic bracing, providing valuable support to orthopedic practices and patients throughout the region.
                  </p>
                  <div className="pt-6 grid grid-cols-2 gap-8">
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Focus Area</h4>
                       <p className="font-bold text-slate-900 dark:text-white">DME & Bracing Specialist</p>
                    </div>
                    <div>
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Region</h4>
                       <p className="font-bold text-slate-900 dark:text-white">Miami, Florida (Corporate HQ)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
             <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-widest mb-4">Integrity</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Clinical solutions built on trust and 30 years of industry relationships.</p>
             </div>
             <div className="bg-emerald-600 p-10 rounded-[2.5rem] text-white text-center shadow-2xl shadow-emerald-600/20">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-black uppercase text-xs tracking-widest mb-4">Precision</h4>
                <p className="text-sm text-emerald-50 font-medium">Standardizing the flow of medical equipment with technical accuracy.</p>
             </div>
             <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚓</span>
                </div>
                <h4 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-widest mb-4">Reliability</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">A staple in the Miami orthopedic community for over two decades.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
