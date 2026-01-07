
import React from 'react';
import BodyMap from '../components/BodyMap';
import { Link } from 'react-router-dom';
import { MedicalGrid, LogisticsFlow, ShieldIcon, HeartPulseIcon } from '../components/VisualAssets';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col transition-colors duration-500 bg-slate-50 dark:bg-slate-950 relative">
      <MedicalGrid />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 px-4 overflow-hidden min-h-[95vh] flex items-center">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-900/50 px-5 py-2.5 rounded-2xl mb-10 shadow-xl shadow-emerald-600/5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-800 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">Direct DME Sourcing & Logistics</span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-950 dark:text-white leading-[0.95] mb-8 tracking-tighter">
              Ortho<span className="text-emerald-600">Script</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-600 to-slate-900 dark:from-white dark:via-emerald-400 dark:to-white opacity-90">Concierge DME.</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We provide orthopedic practices with high-performance bracing and specialized equipment. No complex dashboards—just direct, professional fulfillment managed by experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link 
                to="/products"
                className="group px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black hover:bg-emerald-700 transition-all text-center shadow-2xl shadow-emerald-600/30 active:scale-95 flex items-center justify-center space-x-3"
              >
                <span>Browse Equipment</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button 
                onClick={() => document.getElementById('body-navigator')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center shadow-sm active:scale-95"
              >
                Joint Navigator
              </button>
            </div>
          </div>
          
          <div id="body-navigator" className="lg:col-span-5 flex justify-center">
            <div className="w-full">
              <BodyMap />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Visual Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] mb-6">The Fulfillment Loop</h2>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Personalized Clinical Support.</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-10">
              OrthoScript acts as the direct bridge between your clinical diagnosis and the patient's recovery hardware. We handle the logistics so you can focus on the patient.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center flex-shrink-0">
                  <ShieldIcon />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-widest mb-2">Compliance Focused</h4>
                  <p className="text-sm text-slate-500 font-medium">Fully vetted equipment that meets all professional medical standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center flex-shrink-0">
                  <HeartPulseIcon />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-widest mb-2">Direct Service</h4>
                  <p className="text-sm text-slate-500 font-medium">Immediate response and turnaround for specialized bracing needs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-inner">
            <LogisticsFlow />
          </div>
        </div>
      </section>

      {/* Legacy Snapshot */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[4rem] p-12 md:p-20 text-white shadow-[0_40px_100px_-20px_rgba(16,185,129,0.4)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[11px] font-black text-emerald-200 uppercase tracking-[0.4em] mb-6">Miami Excellence Since 2000</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">Three Decades of Direct Orthopedic Care.</h3>
              <p className="text-lg text-emerald-50 leading-relaxed font-medium opacity-90 mb-10">
                Gabriel Macias has dedicated his career to optimizing patient outcomes through high-quality durable medical equipment and specialized bracing.
              </p>
              <Link to="/about" className="inline-flex items-center space-x-3 bg-white text-emerald-700 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl active:scale-95">
                <span>Founder Story</span>
                <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <p className="text-4xl font-black mb-1">30+</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <p className="text-4xl font-black mb-1">2k+</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Partner Clinics</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <p className="text-4xl font-black mb-1">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Miami Support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <p className="text-4xl font-black mb-1">A+</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Quality Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified CTA Section */}
      <section className="pb-32 px-4 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] mb-4">Get Started</h2>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-6">Expert DME Solutions for Your Practice.</h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Skip the digital complexity. Connect directly with our team to source the exact bracing systems and durable medical equipment your patients require.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/contact" 
              className="px-12 py-5 bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-600/20 active:scale-95 transition-all hover:bg-emerald-700"
            >
              Request a Demo
            </Link>
            <Link 
              to="/products" 
              className="px-12 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl font-black text-sm uppercase tracking-widest shadow-sm active:scale-95 transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
