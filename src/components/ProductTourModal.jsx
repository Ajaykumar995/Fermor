import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Eye, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function ProductTourModal({ isOpen, onClose, darkMode, onOpenOnboarding }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: "1. Unified Financial Intelligence",
      subtitle: "See all your accounts, investments, and liabilities in one crystal-clear dashboard.",
      icon: Eye,
      iconColor: "text-blue-400",
      content: (
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs text-left">
          <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
            <span>Net Worth Today</span>
            <span className="text-emerald-400 font-bold">$248,950</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
            <span>Chase Checking</span>
            <span className="text-slate-200 font-bold">$5,400</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
            <span>Fermor 5.15% High-Yield Cash</span>
            <span className="text-emerald-400 font-bold">$34,200</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
            <span>Vanguard Index Fund</span>
            <span className="text-slate-200 font-bold">$142,500</span>
          </div>
        </div>
      )
    },
    {
      title: "2. Autonomous Cash Sweep Engine",
      subtitle: "Fermor automatically moves idle checking funds into top-tier 5.15% APY yield accounts.",
      icon: Zap,
      iconColor: "text-amber-400",
      content: (
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-left">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-mono">
            <div className="font-bold text-amber-400">⚡ Rule #1 Triggered</div>
            <div>Swept $13,500 idle checking cash → 5.15% APY High-Yield Savings.</div>
            <div className="text-emerald-400 font-bold mt-1">+ $695/year extra interest earned</div>
          </div>
        </div>
      )
    },
    {
      title: "3. Subscription Leakage Shield",
      subtitle: "Identify unused recurring charges and cancel them with a single click.",
      icon: ShieldCheck,
      iconColor: "text-purple-400",
      content: (
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-left text-xs font-mono">
          <div className="flex justify-between items-center p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300">
            <span>Equinox Pass ($220/mo) • Unused 52d</span>
            <span className="font-bold px-2 py-0.5 rounded bg-red-500 text-white">Canceled</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">
            <span>Hulu Premium ($17.99/mo) • Unused 38d</span>
            <span className="font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950">Canceled</span>
          </div>
        </div>
      )
    },
    {
      title: "4. Precision FIRE & Wealth Trajectory",
      subtitle: "Model long-term goals and stress test your portfolio against market cycles.",
      icon: TrendingUp,
      iconColor: "text-emerald-400",
      content: (
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-left text-xs font-mono">
          <div className="text-emerald-400 font-bold text-sm">Target: Financial Independence @ Age 48</div>
          <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full brand-gradient w-[78%]" />
          </div>
          <div className="text-slate-400">Projected 10-Yr Portfolio: <span className="text-white font-bold">$648,200</span></div>
        </div>
      )
    }
  ];

  const current = slides[currentSlide];
  const IconComp = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative w-full max-w-xl rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all ${
        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800/40 transition-colors text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold uppercase">
            <IconComp className={`w-4 h-4 ${current.iconColor}`} /> Guided Product Tour ({currentSlide + 1}/4)
          </div>

          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              {current.title}
            </h3>
            <p className={`text-sm mt-1 max-w-md mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {current.subtitle}
            </p>
          </div>

          {/* Interactive Slide Graphic */}
          <div className="my-4">
            {current.content}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/40">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Dots */}
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === i ? 'w-6 brand-gradient' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>

            {currentSlide < slides.length - 1 ? (
              <button
                onClick={() => setCurrentSlide(currentSlide + 1)}
                className="p-2 rounded-lg brand-gradient text-white shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => { onClose(); onOpenOnboarding(); }}
                className="px-4 py-2 rounded-lg brand-gradient text-white text-xs font-bold shadow-md"
              >
                Try Fermor Now
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
