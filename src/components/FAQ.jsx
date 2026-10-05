import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/mockData';

export default function FAQ({ darkMode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ['All', 'General', 'Security & Privacy', 'Pricing', 'Bank Sync & Integration'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            Clear Answers
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about Fermor's security, high-yield sweeps, and product features.
          </p>
        </div>

        {/* Live Search & Category Controls */}
        <div className="space-y-4 mb-10">
          
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g., APY, security, cancellation)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode 
                  ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-500' 
                  : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 shadow-sm'
              }`}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'brand-gradient text-white shadow-sm'
                    : darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    darkMode 
                      ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700' 
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base"
                  >
                    <span className={darkMode ? 'text-slate-100' : 'text-slate-900'}>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'
                    }`} />
                  </button>

                  {isOpen && (
                    <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-slate-800/40 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-400 text-sm font-mono">
              No questions matched your search criteria. Try another keyword.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
