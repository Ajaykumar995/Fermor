import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  TrendingUp,
  Zap,
  Building2,
  BadgeCheck
} from 'lucide-react';
import { HERO_STATS, TRUST_BADGES } from '../data/mockData';

export default function Hero({ darkMode, onOpenOnboarding, onOpenTour, onOpenHealthCheck }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Feature Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-semibold tracking-wide text-blue-400 uppercase font-mono">
            Fermor 2.0 • The Intelligent Financial OS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] font-sans">
          Understand your money. <br className="hidden sm:inline" />
          <span className="text-gradient">Act with precision.</span> <br />
          Grow your wealth.
        </h1>

        {/* Subtitle */}
        <p className={`mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Fermor replaces fragmented banking apps, complex spreadsheets, and hidden bank fees with a single, clear operating system for your complete financial life.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenOnboarding}
            className="w-full sm:w-auto px-8 py-4 rounded-xl brand-gradient text-white font-semibold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Start 30-Day Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onOpenTour}
            className={`w-full sm:w-auto px-6 py-4 rounded-xl border font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-700' 
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Play className="w-3.5 h-3.5 fill-blue-400 ml-0.5" />
            </div>
            Watch Product Tour
          </button>
        </div>

        {/* Quick Health Audit Teaser Bar */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Not sure where you stand?
          </span>
          <button 
            onClick={onOpenHealthCheck}
            className="text-xs font-semibold text-blue-400 hover:underline flex items-center gap-1"
          >
            Take 60-Second Financial Health Audit <Zap className="w-3 h-3 text-amber-400" />
          </button>
        </div>

        {/* Key Platform Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {HERO_STATS.map((stat, i) => (
            <div 
              key={i} 
              className={`p-5 rounded-2xl border backdrop-blur-sm text-left transition-all hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700' 
                  : 'bg-white/80 border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-gradient">
                  {stat.value}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  {stat.change}
                </span>
              </div>
              <div className={`mt-2 text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Security & FDIC Trust Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/40 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-400">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
