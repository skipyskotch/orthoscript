
import React from 'react';

export const MedicalGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.07] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

export const LogisticsFlow = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="100" r="30" className="fill-emerald-100 dark:fill-emerald-900/30 stroke-emerald-500" strokeWidth="2" />
    <text x="50" y="105" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 font-bold text-xs uppercase">Doctor</text>
    
    <path d="M 90 100 L 150 100" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="200" cy="100" r="40" className="fill-emerald-600 stroke-emerald-400" strokeWidth="2" />
    <text x="200" y="105" textAnchor="middle" className="fill-white font-bold text-xs uppercase italic">OrthoScript</text>
    
    <path d="M 250 100 L 310 100" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="350" cy="100" r="30" className="fill-blue-100 dark:fill-blue-900/30 stroke-blue-500" strokeWidth="2" />
    <text x="350" y="105" textAnchor="middle" className="fill-blue-700 dark:fill-blue-400 font-bold text-xs uppercase">Patient</text>
    
    <path d="M 200 60 Q 200 20 250 20 L 350 20 Q 380 20 380 50" className="stroke-emerald-500/30" strokeWidth="1" />
    <circle cx="380" cy="60" r="3" className="fill-emerald-500" />
  </svg>
);

export const ShieldIcon = () => (
  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const HeartPulseIcon = () => (
  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
