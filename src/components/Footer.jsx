import React from 'react';
import { TrendingUp, ShieldCheck, ArrowUpRight, Globe, Lock, Mail } from 'lucide-react';

export default function Footer({ darkMode, onOpenOnboarding }) {
  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 text-slate-300 border-slate-800'
    }`}>
      {/* Top Pre-Footer Call to Action Banner */}
      <div className="border-b border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold uppercase">
            Start Building Wealth Today
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto">
            Ready to Take Control of Your Financial OS?
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto">
            Join 140,000+ smart professionals who understand their money, eliminate hidden leakage, and compound their wealth with Fermor.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenOnboarding}
              className="px-8 py-4 rounded-xl brand-gradient text-white text-base font-bold shadow-xl shadow-blue-500/30 hover:scale-[1.02] transition-transform"
            >
              Get Started For Free
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl brand-gradient flex items-center justify-center text-white shadow-md">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                FERMOR
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Fermor is building a better way for people to understand, act, and grow financially. Focused on making finance simpler, clearer, and easier to use.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (FDIC Partner Sync 100%)</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Product OS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#platform" className="hover:text-white transition-colors">Understand Module</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Autonomous Act Sweeps</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">10-Yr FIRE Simulator</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Yield Calculator</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Tiers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Security & Trust
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#comparison" className="hover:text-white transition-colors">FDIC $5M Coverage</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">256-bit AES Encryption</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Plaid & Teller Sync</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Security Disclosures</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">SOC2 Type II Report</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">About Fermor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers (We're Hiring!)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Fermor Technologies Inc. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Security Disclosures</a>
            <a href="#" className="hover:text-slate-300">System Status</a>
          </div>
        </div>

        <div className="mt-4 text-[10px] text-slate-600 leading-relaxed text-center sm:text-left">
          Fermor is a financial technology company, not a bank. Banking services provided by Evolve Bank & Trust or WebBank, Members FDIC. The Fermor High-Yield Cash Account sweeps balances into partner banks to provide up to $5,000,000 in pass-through FDIC insurance.
        </div>

      </div>
    </footer>
  );
}
