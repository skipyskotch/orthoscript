
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegionId } from '../types';

interface BodySectionProps {
  id: RegionId;
  paths: string[];
  label: string;
  onHover: (label: string | null) => void;
}

const BodySection: React.FC<BodySectionProps> = ({ id, paths, label, onHover }) => {
  const navigate = useNavigate();
  return (
    <g
      onClick={() => navigate(`/region/${id}`)}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover(null)}
      className="cursor-pointer group/section"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          className="fill-emerald-500/5 stroke-emerald-500/20 group-hover/section:fill-emerald-500/40 group-hover/section:stroke-emerald-500 transition-all duration-300"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      ))}
      {paths.map((d, i) => (
        <path
          key={`hit-${i}`}
          d={d}
          className="fill-transparent stroke-transparent"
          strokeWidth="12"
        />
      ))}
    </g>
  );
};

const BodyMap: React.FC = () => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const sections = [
    {
      id: RegionId.HeadNeck,
      label: "Head & Neck",
      paths: [
        "M50 2 C55 2 59 6 59 13 C59 20 55 24 50 24 C45 24 41 20 41 13 C41 6 45 2 50 2 Z M47 24 L46 30 H54 L53 24 Z"
      ]
    },
    {
      id: RegionId.Spine,
      label: "Spine & Torso",
      paths: [
        "M43 31 H57 L59 85 H41 L43 31 Z"
      ]
    },
    {
      id: RegionId.Shoulder,
      label: "Shoulder / Upper Arm",
      paths: [
        "M41 31 L30 35 L28 55 L38 55 L41 31 Z",
        "M59 31 L70 35 L72 55 L62 55 L59 31 Z"
      ]
    },
    {
      id: RegionId.Elbow,
      label: "Elbow Joint",
      paths: [
        "M27 57 L26 72 L36 72 L37 57 Z",
        "M73 57 L74 72 L64 72 L63 57 Z"
      ]
    },
    {
      id: RegionId.WristHand,
      label: "Wrist & Hand",
      paths: [
        "M25 74 L23 100 L33 100 L35 74 Z",
        "M75 74 L77 100 L67 100 L65 74 Z"
      ]
    },
    {
      id: RegionId.Hip,
      label: "Hip & Pelvis",
      paths: [
        "M39 87 H61 L65 110 H35 L39 87 Z"
      ]
    },
    {
      id: RegionId.Knee,
      label: "Knee / Upper Leg",
      paths: [
        "M36 112 H48 V150 H33 L36 112 Z",
        "M64 112 H52 V150 H67 L64 112 Z"
      ]
    },
    {
      id: RegionId.AnkleFoot,
      label: "Ankle & Foot",
      paths: [
        "M33 152 H48 V175 L32 178 L33 152 Z",
        "M67 152 H52 V175 L68 178 L67 152 Z"
      ]
    }
  ];

  return (
    <div className="relative w-full max-w-[340px] mx-auto group">
      {/* HUD Corner Accents */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-xl pointer-events-none"></div>
      <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-emerald-500/40 rounded-tr-xl pointer-events-none"></div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-xl pointer-events-none"></div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-emerald-500/40 rounded-br-xl pointer-events-none"></div>

      <div className="relative w-full bg-white dark:bg-slate-900 rounded-[3rem] p-6 shadow-2xl border border-emerald-500/20 dark:border-slate-800/50 transition-all duration-500 flex flex-col glass-effect overflow-hidden">
        
        {/* Dynamic Scan Line Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden rounded-[3rem]">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent absolute top-0 animate-[scan_4s_linear_infinite]"></div>
        </div>

        <div className="mb-4 text-center border-b border-slate-100 dark:border-slate-800 pb-3 flex-shrink-0 relative z-10">
          <h4 className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em]">Anatomical Workflow</h4>
          <p className="text-[8px] text-slate-400 dark:text-slate-500 font-bold uppercase mt-1">Select target zone</p>
        </div>

        <div className="relative flex items-center justify-center py-4 px-2 z-10">
          <svg 
            viewBox="0 0 100 180" 
            className="w-full h-auto max-h-[400px] drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="opacity-[0.1] pointer-events-none">
              <circle cx="50" cy="90" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-500" strokeDasharray="4 4" />
              <line x1="50" y1="0" x2="50" y2="180" stroke="currentColor" strokeWidth="0.2" className="text-emerald-500" />
            </g>

            {sections.map((section) => (
              <BodySection
                key={section.id}
                id={section.id}
                label={section.label}
                paths={section.paths}
                onHover={setActiveLabel}
              />
            ))}
          </svg>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-center min-h-[90px] flex flex-col justify-center pb-6 relative z-10">
          {activeLabel ? (
            <div className="animate-in fade-in zoom-in-95 duration-300 px-2 pb-1">
              <div className="flex items-center justify-center space-x-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.25em]">Clinical Protocol Found</p>
              </div>
              <p className="text-lg font-black text-slate-950 dark:text-white uppercase tracking-tight leading-tight">{activeLabel}</p>
            </div>
          ) : (
            <div className="opacity-40 flex flex-col items-center">
              <div className="w-2 h-2 bg-slate-300 dark:bg-slate-700 rounded-full animate-pulse mb-2"></div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] italic">Scanning...</p>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .glass-effect {
          backdrop-filter: blur(24px);
          background: rgba(255, 255, 255, 0.98);
        }
        .dark .glass-effect {
          background: rgba(15, 23, 42, 0.98);
        }
      `}} />
    </div>
  );
};

export default BodyMap;
