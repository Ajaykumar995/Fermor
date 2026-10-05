import React, { useState } from 'react';
import { X, ArrowRight, Sparkles, CheckCircle2, Copy, ShieldCheck, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OnboardingModal({ isOpen, onClose, darkMode }) {
  const [email, setEmail] = useState('');
  const [persona, setPersona] = useState('Tech / Engineer');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const referralCode = `https://app.fermor.com/join?ref=FM-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative w-full max-w-lg rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all ${
        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-800/40 transition-colors text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Start Your 30-Day Free Trial
            </div>

            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Unlock The Fermor Financial OS
              </h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Get instant access to real-time net worth tracking, 5.15% APY cash sweeps, and autonomous rule guards.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                  Work or Personal Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                  Primary Profile
                </label>
                <select
                  value={persona}
                  onChange={(e) => setPersona(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                >
                  <option value="Tech / Engineer">Tech Professional / Software Engineer</option>
                  <option value="Founder / Executive">Startup Founder / Agency Owner</option>
                  <option value="Freelancer">Independent Freelancer / Creator</option>
                  <option value="Family Savers">Family / Retirement Planner</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl brand-gradient text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                >
                  Create Free Account <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>No credit card required • Instant 60-second setup</span>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Welcome to Fermor! 🎉
              </h3>
              <p className={`text-sm mt-1 max-w-sm mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                We've sent a magic login link to <span className="font-semibold text-blue-400">{email}</span>. Check your inbox to connect your first bank account.
              </p>
            </div>

            {/* Unique Referral Card */}
            <div className={`p-4 rounded-2xl border text-left space-y-2 ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Your Priority Invite Link:
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={referralCode}
                  className={`w-full px-3 py-2 rounded-lg border text-xs font-mono select-all ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
                  }`}
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shrink-0 flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="text-[10px] text-slate-500">
                Share with friends to jump +5 spots on the high-yield tier waitlist!
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl border border-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-900"
            >
              Return to Homepage
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
