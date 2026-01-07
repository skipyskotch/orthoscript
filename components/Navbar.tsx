
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform overflow-hidden relative">
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              <span className="text-white font-bold text-xl relative z-10">OS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">OrthoScript</h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold mt-1">Miami DME Logistics</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link>
            <Link to="/about" className="text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Founder</Link>
            <Link to="/products" className="text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Inventory</Link>
            
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all border border-slate-100 dark:border-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4-9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.343l.707-.707" />
                  <circle cx="12" cy="12" r="5" strokeWidth={2} />
                </svg>
              )}
            </button>

            <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 dark:border-slate-800">
               <Link 
                to="/contact" 
                className="px-8 py-3 bg-emerald-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/10 active:scale-95"
              >
                Request Demo
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
