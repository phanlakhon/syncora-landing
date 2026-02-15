import React from 'react';

/**
 * Reusable Feature Card Component
 * Used in the features section
 */
export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <div 
      className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 transition-all group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
