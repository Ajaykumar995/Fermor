import React, { useState } from 'react';
import { 
  Eye, 
  Zap, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { PRODUCT_PILLARS } from '../data/mockData';

export default function ProductPillars({ darkMode, onOpenOnboarding }) {
  const [selectedPillar, setSelectedPillar] = useState('understand');

  const currentPillar = PRODUCT_PILLARS.find(p => p.id === selectedPillar);

  return (
    <section id="pillars" className={`py-20 relative border-y ${
      darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-50/80 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            Architected For Financial Mastery
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Built Around 3 Core Pillars
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Most financial tools only show you numbers. Fermor helps you comprehend your situation, executes optimizations automatically, and compounds your long-term growth.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PRODUCT_PILLARS.map((pillar) => {
            const isSelected = selectedPillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? darkMode
                      ? 'bg-slate-900 border-blue-500/60 shadow-xl shadow-blue-500/10 scale-[1.02]'
                      : 'bg-white border-blue-500/60 shadow-xl shadow-blue-500/10 scale-[1.02]'
                    : darkMode
                      ? 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Top Pillar Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {pillar.badge}
                  </span>
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
                  )}
                </div>

                {/* Pillar Title */}
                <h3 className="text-2xl font-black tracking-tight mb-2 flex items-center gap-2">
                  {pillar.id === 'understand' && <Eye className="w-6 h-6 text-blue-400" />}
                  {pillar.id === 'act' && <Zap className="w-6 h-6 text-amber-400" />}
                  {pillar.id === 'grow' && <TrendingUp className="w-6 h-6 text-emerald-400" />}
                  {pillar.title}
                </h3>

                <p className="text-sm font-semibold text-blue-400 mb-4">
                  {pillar.subtitle}
                </p>

                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {pillar.description}
                </p>

                {/* Metric Box */}
                <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-mono font-bold text-gradient">
                      {pillar.highlightMetric}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      {pillar.highlightLabel}
                    </div>
                  </div>
                  <div className={`p-2 rounded-xl transition-colors ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800/40 text-slate-400 group-hover:text-white'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Pillar Interactive Detail Showcase */}
        {currentPillar && (
          <div className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl transition-all ${
            darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Column: Deep-dive bullets */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Pillar Focus: {currentPillar.title}
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  {currentPillar.subtitle}
                </h3>

                <div className="space-y-3.5">
                  {currentPillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenOnboarding}
                    className="px-6 py-3 rounded-xl brand-gradient text-white text-sm font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    Start with {currentPillar.title} Mode <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Mini Mock UI Card */}
              <div className={`p-6 rounded-2xl border ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                {currentPillar.id === 'understand' && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                      <span className="text-slate-400">Aggregated Accounts</span>
                      <span className="text-emerald-400">100% Synced</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <span>Checking & Cash</span>
                        <span className="text-white font-bold">$39,600</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <span>Investments (Index & Crypto)</span>
                        <span className="text-white font-bold">$142,500</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <span>Real Estate Equity</span>
                        <span className="text-white font-bold">$83,200</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-red-400">
                        <span>Liabilities (Car & Student Loans)</span>
                        <span className="font-bold">-$16,400</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentPillar.id === 'act' && (
                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-1">
                      <div className="font-bold text-amber-400">⚡ Auto-Sweep Executed</div>
                      <div>Moved $13,500 idle checking cash → 5.15% APY High Yield.</div>
                      <div className="text-[10px] text-amber-300">Annual Return Delta: +$695/year</div>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-200 space-y-1">
                      <div className="font-bold text-blue-400">🛡️ Subscription Cancel Shield</div>
                      <div>Canceled 2 dormant subscriptions ($107/mo saved).</div>
                    </div>
                  </div>
                )}

                {currentPillar.id === 'grow' && (
                  <div className="space-y-4 text-xs font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>Target Goal: FIRE @ Age 48</span>
                      <span className="text-emerald-400 font-bold">78% On Track</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full brand-gradient w-[78%] rounded-full" />
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
                      Tax-loss harvesting optimized $1,840 in taxable capital gains this tax year.
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
