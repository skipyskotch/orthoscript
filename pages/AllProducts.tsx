
import React from 'react';
import { BODY_REGIONS } from '../data';
import { Link } from 'react-router-dom';

const AllProducts: React.FC = () => {
  const allProducts = Object.values(BODY_REGIONS).flatMap(region => region.products.map(p => ({ ...p, regionLabel: region.label, regionId: region.id })));

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-24 px-4 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] mb-4">Master Inventory</h2>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Clinical Equipment Catalog</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg font-medium">Browse our standard inventory of professional-grade orthopedic bracing and support systems curated by Gabriel Macias.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col group">
              <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{product.regionLabel}</span>
                   <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">{product.category}</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3 leading-tight">{product.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow line-clamp-2 font-medium">{product.description}</p>
                <Link to={`/region/${product.regionId}`} className="text-xs font-black text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-2">
                  <span>View Joint Workflow</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
