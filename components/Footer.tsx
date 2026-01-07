
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 py-20 px-4 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
              <span className="text-white font-bold text-lg">OS</span>
            </div>
            <span className="text-slate-900 dark:text-white font-black text-2xl tracking-tight">OrthoScript</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed mb-8 font-medium">
            Bridging the gap between diagnosis and recovery. Providing specialized DME support to Florida's orthopedic practices and patients for over three decades.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all border border-slate-200 dark:border-slate-800"><span className="text-xs font-black uppercase tracking-tighter">In</span></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all border border-slate-200 dark:border-slate-800"><span className="text-xs font-black uppercase tracking-tighter">Tw</span></a>
          </div>
        </div>
        <div>
          <h3 className="text-slate-950 dark:text-white font-black mb-8 text-xs uppercase tracking-[0.2em]">Platform</h3>
          <ul className="space-y-4 text-sm font-semibold">
            <li><Link to="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Body Navigator</Link></li>
            <li><Link to="/products" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Equipment Catalog</Link></li>
            <li><Link to="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Our History</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Provider Support</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-slate-950 dark:text-white font-black mb-8 text-xs uppercase tracking-[0.2em]">Miami Office</h3>
          <div className="space-y-4 text-sm font-medium">
            <p className="flex items-center space-x-3">
              <span className="w-5 text-emerald-600">📍</span>
              <span>Miami, Florida 33101</span>
            </p>
            <p className="flex items-center space-x-3">
              <span className="w-5 text-emerald-600">📞</span>
              <span>(305) 555-0123</span>
            </p>
            <p className="flex items-center space-x-3">
              <span className="w-5 text-emerald-600">📧</span>
              <span className="underline decoration-emerald-200 dark:decoration-emerald-800 underline-offset-4">info@orthoscript.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
        <p>&copy; {new Date().getFullYear()} OrthoScript Solutions. Standardizing DME Care.</p>
        <p className="mt-4 sm:mt-0">Designed for Orthopedic Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;
