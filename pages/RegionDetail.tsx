
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BODY_REGIONS } from '../data';

const RegionDetail: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  
  const region = useMemo(() => {
    if (!regionId) return null;
    return BODY_REGIONS[regionId];
  }, [regionId]);

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 dark:bg-slate-950 transition-colors">
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Region Not Found</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">We couldn't find the body region you're looking for.</p>
          <Link to="/" className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all inline-block">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24 transition-colors duration-500">
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <Link to="/" className="text-emerald-600 dark:text-emerald-400 text-sm font-black flex items-center space-x-2 mb-10 group uppercase tracking-widest">
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span>Back to Navigator</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <p className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.3em] mb-4">Clinical Workflow Focus</p>
              <h1 className="text-5xl md:text-6xl font-black text-slate-950 dark:text-white mb-6 tracking-tight leading-none">{region.label} Support</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{region.description}</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 px-8 py-6 rounded-[2rem] border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex-shrink-0">
              <p className="text-emerald-800 dark:text-emerald-400 font-black text-sm uppercase tracking-wider mb-1">Standard Catalog</p>
              <p className="text-emerald-600/70 dark:text-emerald-500 text-xs font-bold uppercase tracking-widest">Provider Access Only</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {region.products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group flex flex-col">
              <div className="aspect-[5/4] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-4 leading-tight">{product.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-grow font-medium">
                  {product.description}
                </p>
                <button className="w-full py-5 bg-emerald-600 dark:bg-emerald-600 text-white rounded-2xl font-black text-sm hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-600/10">
                  Request Clinical Info
                </button>
              </div>
            </div>
          ))}
          
          {/* Enhanced CTA Card */}
          <div className="bg-emerald-600 dark:bg-emerald-700 rounded-[2.5rem] p-10 flex flex-col justify-center text-white shadow-2xl shadow-emerald-600/20 group relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
            <h3 className="text-3xl font-black mb-6 leading-tight relative z-10">Custom Sourcing Required?</h3>
            <p className="text-emerald-50 mb-10 leading-relaxed font-medium relative z-10 opacity-90">
              Gabriel Macias specialized in hard-to-find orthopedic bracing and custom DME logistics. Reach out for a specialized consult.
            </p>
            <Link to="/contact" className="bg-white text-emerald-600 w-full py-5 rounded-2xl font-black text-sm text-center hover:bg-emerald-50 transition-colors shadow-xl relative z-10 active:scale-95">
              Contact Gabriel Macias
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionDetail;
