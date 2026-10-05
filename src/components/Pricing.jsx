import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_TIERS } from '../data/mockData';

export default function Pricing({ darkMode, onOpenOnboarding }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' or 'annual'

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            Zero Hidden Fees
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Start for free, or unlock autonomous yield engines with Pro. Cancel anytime with a single click.
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="flex justify-center items-center gap-3 mb-14">
          <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? (darkMode ? 'text-white' : 'text-slate-900') : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-14 h-8 rounded-full p-1 bg-slate-800 transition-colors relative"
          >
            <div className={`w-6 h-6 rounded-full brand-gradient transition-transform ${
              billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>

          <div className="flex items-center gap-1.5">
            <span className={`text-sm font-semibold ${billingCycle === 'annual' ? (darkMode ? 'text-white' : 'text-slate-900') : 'text-slate-400'}`}>
              Annual Billing
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, idx) => {
            const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;
            return (
              <div
                key={idx}
                className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? darkMode
                      ? 'bg-slate-900 border-blue-500/60 shadow-2xl shadow-blue-500/15 scale-[1.03] z-10'
                      : 'bg-white border-blue-500/60 shadow-2xl shadow-blue-500/15 scale-[1.03] z-10'
                    : darkMode
                      ? 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-slate-200 shadow-lg'
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full brand-gradient text-white text-[11px] font-bold font-mono tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    {!tier.popular && (
                      <span className="text-xs font-mono text-slate-400">{tier.badge}</span>
                    )}
                  </div>
                  
                  <p className={`text-xs min-h-[36px] ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {tier.description}
                  </p>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold font-mono text-gradient">
                        ${price === 0 ? '0' : price.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        /month {billingCycle === 'annual' && price > 0 && '(billed annually)'}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-slate-800/40">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                      What's Included:
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/40">
                  <button
                    onClick={onOpenOnboarding}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      tier.popular
                        ? 'brand-gradient text-white shadow-lg shadow-blue-500/25 hover:scale-[1.02]'
                        : darkMode
                          ? 'border border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800'
                          : 'border border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>30-Day Money Back Guarantee • No credit card required for Starter</span>
        </div>

      </div>
    </section>
  );
}
