import React, { useState } from 'react';
import { Star, BadgeCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function Testimonials({ darkMode }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Founders & Tech', 'Freelancers', 'Families'];

  const filteredTestimonials = filter === 'All' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.category === filter);

  return (
    <section className={`py-20 border-y ${
      darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            Verified Community Feedback
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Loved By Thousands Of Smart Saver Professionals
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Hear how Fermor helps builders, engineers, agency founders, and families manage their financial future.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? 'brand-gradient text-white shadow-md shadow-blue-500/20'
                  : darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-600/40" />
                </div>

                <p className={`text-sm sm:text-base leading-relaxed italic ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{t.quote}"
                </p>
              </div>

              {/* User Bio */}
              <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center gap-3">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full object-cover border border-slate-700" 
                />
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-bold">
                    <span>{t.name}</span>
                    {t.verified && <BadgeCheck className="w-4 h-4 text-blue-400" />}
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
