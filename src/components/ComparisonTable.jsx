import React from 'react';
import { Check, X, Sparkles, HelpCircle } from 'lucide-react';
import { COMPARISON_DATA } from '../data/mockData';

export default function ComparisonTable({ darkMode, onOpenOnboarding }) {
  return (
    <section id="comparison" className={`py-20 border-y ${
      darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            Uncompromising Modern Architecture
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Why Modern Wealth Needs Fermor
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            See how Fermor stacks up against traditional banks, legacy spreadsheets, and high-fee wealth advisors.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`rounded-3xl border overflow-x-auto shadow-2xl ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
        }`}>
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'}`}>
                <th className="p-5 text-sm font-bold w-1/3">Core Capability</th>
                <th className="p-5 text-sm font-bold text-blue-400 brand-gradient-text bg-blue-500/10 border-x border-blue-500/30 text-center">
                  <div className="flex items-center justify-center gap-1.5 font-extrabold text-blue-400">
                    <Sparkles className="w-4 h-4 text-blue-400" /> Fermor OS
                  </div>
                </th>
                <th className="p-5 text-sm font-bold text-center text-slate-400">Traditional Banks</th>
                <th className="p-5 text-sm font-bold text-center text-slate-400">Spreadsheets</th>
                <th className="p-5 text-sm font-bold text-center text-slate-400">Wealth Advisors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`transition-colors ${
                    darkMode ? 'hover:bg-slate-900/40' : 'hover:bg-slate-50'
                  }`}
                >
                  {/* Feature Name */}
                  <td className={`p-4 font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {row.feature}
                  </td>

                  {/* Fermor Cell (Highlighted) */}
                  <td className="p-4 text-center bg-blue-500/5 border-x border-blue-500/20 font-bold text-emerald-400 font-mono">
                    {typeof row.fermor === 'boolean' ? (
                      row.fermor ? <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto"><Check className="w-4 h-4" /></div> : <X className="w-4 h-4 text-slate-500 mx-auto" />
                    ) : (
                      row.fermor
                    )}
                  </td>

                  {/* Traditional Banks */}
                  <td className="p-4 text-center text-slate-400 font-mono text-xs">
                    {typeof row.traditionalBank === 'boolean' ? (
                      row.traditionalBank ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-red-400/80 mx-auto" />
                    ) : (
                      row.traditionalBank
                    )}
                  </td>

                  {/* Spreadsheets */}
                  <td className="p-4 text-center text-slate-400 font-mono text-xs">
                    {typeof row.spreadsheets === 'boolean' ? (
                      row.spreadsheets ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-red-400/80 mx-auto" />
                    ) : (
                      row.spreadsheets
                    )}
                  </td>

                  {/* Wealth Advisors */}
                  <td className="p-4 text-center text-slate-400 font-mono text-xs">
                    {typeof row.advisors === 'boolean' ? (
                      row.advisors ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-red-400/80 mx-auto" />
                    ) : (
                      row.advisors
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenOnboarding}
            className="px-8 py-3.5 rounded-xl brand-gradient text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform"
          >
            Upgrade to Fermor Free Today
          </button>
        </div>

      </div>
    </section>
  );
}
