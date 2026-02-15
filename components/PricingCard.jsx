import React from 'react';
import { Check } from 'lucide-react';

/**
 * Reusable Pricing Card Component
 * Used in the pricing section
 */
export default function PricingCard({ plan, highlighted = false }) {
  return (
    <div 
      className={`relative rounded-2xl p-8 ${
        highlighted 
          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl scale-105' 
          : 'bg-white border border-slate-200 shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      
      <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-slate-900'}`}>
        {plan.name}
      </h3>
      <p className={`mb-6 ${highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
        {plan.description}
      </p>
      
      <div className="mb-6">
        <span className="text-5xl font-bold">{plan.price}</span>
        <span className={`text-lg ${highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
          {plan.period}
        </span>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
              highlighted ? 'text-blue-200' : 'text-green-500'
            }`} />
            <span className={highlighted ? 'text-blue-50' : 'text-slate-600'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
        highlighted 
          ? 'bg-white text-blue-600 hover:bg-blue-50' 
          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl'
      }`}>
        {plan.cta}
      </button>
    </div>
  );
}
