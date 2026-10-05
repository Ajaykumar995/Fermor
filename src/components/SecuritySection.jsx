import React from 'react';
import { ShieldCheck, Lock, EyeOff, Building2, CheckCircle2 } from 'lucide-react';
import { TRUST_BADGES } from '../data/mockData';

export default function SecuritySection({ darkMode }) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`p-8 sm:p-12 rounded-3xl border relative backdrop-blur-xl ${
          darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-900 text-white border-slate-800 shadow-2xl'
        }`}>
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Title & Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase">
                <ShieldCheck className="w-4 h-4" /> Uncompromising Security Protocol
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Your Money & Data Kept Safe At Every Step
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Fermor operates under strict institutional security standards. We never touch your raw login credentials, we never sell user data, and your funds are protected by up to $5,000,000 in pass-through FDIC insurance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                  <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>256-bit AES Encryption</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                  <EyeOff className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Data Selling Policy</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>FDIC Insured Up To $5M</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SOC 2 Type II Certified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Security Seal Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Read-Only Bank Connection</div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    Powered by Plaid & Teller API
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                  Fermor cannot make unauthorized withdrawals or transfers. Your accounts remain 100% under your control.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
