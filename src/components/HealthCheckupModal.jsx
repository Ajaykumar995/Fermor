import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Award, 
  AlertTriangle, 
  RefreshCw 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HealthCheckupModal({ isOpen, onClose, darkMode, onOpenOnboarding }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    idleCash: '',
    trackingMethod: ''
  });

  if (!isOpen) return null;

  const handleSelectOption = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final step calculation & trigger confetti celebration!
      setStep(4);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetAudit = () => {
    setStep(1);
    setAnswers({ goal: '', idleCash: '', trackingMethod: '' });
  };

  // Calculate customized report score
  let score = 72;
  let estimatedExtraYield = 1450;
  if (answers.idleCash === 'C') { score = 64; estimatedExtraYield = 3200; }
  if (answers.idleCash === 'D') { score = 58; estimatedExtraYield = 5800; }

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

        {/* STEP 1: GOAL */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
              <Zap className="w-4 h-4" /> Quick Financial Health Audit • Step 1 of 3
            </div>
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                What is your #1 financial priority right now?
              </h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Select the option that best reflects your current focus.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { key: 'A', text: 'Maximize interest yield on idle cash' },
                { key: 'B', text: 'Eliminate subscription creep & hidden bank fees' },
                { key: 'C', text: 'Accelerate debt paydown & emergency savings' },
                { key: 'D', text: 'Build a tax-optimized FIRE retirement trajectory' },
              ].map(opt => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectOption('goal', opt.key)}
                  className={`w-full p-4 rounded-2xl border text-left font-medium text-sm transition-all flex items-center justify-between group ${
                    darkMode 
                      ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500 hover:bg-slate-900' 
                      : 'bg-slate-50 border-slate-200 hover:border-blue-500 hover:bg-blue-50/50'
                  }`}
                >
                  <span>{opt.text}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: IDLE CASH */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
              <Zap className="w-4 h-4" /> Quick Financial Health Audit • Step 2 of 3
            </div>
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                How much idle cash sits in low-yield checking/savings?
              </h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Traditional checking accounts pay 0.01% APY on average.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { key: 'A', text: 'Under $5,000' },
                { key: 'B', text: '$5,000 – $25,000' },
                { key: 'C', text: '$25,000 – $100,000' },
                { key: 'D', text: 'Over $100,000' },
              ].map(opt => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectOption('idleCash', opt.key)}
                  className={`w-full p-4 rounded-2xl border text-left font-medium text-sm transition-all flex items-center justify-between group ${
                    darkMode 
                      ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500 hover:bg-slate-900' 
                      : 'bg-slate-50 border-slate-200 hover:border-blue-500 hover:bg-blue-50/50'
                  }`}
                >
                  <span>{opt.text}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: TRACKING METHOD */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
              <Zap className="w-4 h-4" /> Quick Financial Health Audit • Step 3 of 3
            </div>
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                How do you currently track net worth & cashflow?
              </h3>
              <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Select your primary management tool.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { key: 'A', text: 'I don\'t track it—money stays scattered in accounts' },
                { key: 'B', text: 'Manual spreadsheets & individual bank apps' },
                { key: 'C', text: 'Legacy ad-heavy budgeting apps' },
                { key: 'D', text: 'High-fee wealth advisors' },
              ].map(opt => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectOption('trackingMethod', opt.key)}
                  className={`w-full p-4 rounded-2xl border text-left font-medium text-sm transition-all flex items-center justify-between group ${
                    darkMode 
                      ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500 hover:bg-slate-900' 
                      : 'bg-slate-50 border-slate-200 hover:border-blue-500 hover:bg-blue-50/50'
                  }`}
                >
                  <span>{opt.text}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: FINAL AUDIT REPORT */}
        {step === 4 && (
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Financial Health Audit Complete
            </div>

            <div>
              <div className="text-5xl font-black font-mono text-gradient mb-1">
                {score}/100
              </div>
              <h3 className="text-xl font-bold">Your Financial Optimization Potential</h3>
              <p className={`text-sm mt-1 max-w-md mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                You have an estimated <span className="text-emerald-400 font-bold font-mono">+${estimatedExtraYield.toLocaleString()}/year</span> in uncaptured yield and fee leakage that Fermor can recover for you instantly.
              </p>
            </div>

            {/* Recommendations */}
            <div className={`p-4 rounded-2xl border text-left space-y-2.5 text-xs ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="font-bold text-slate-300 uppercase tracking-wider font-mono">
                Recommended Fermor Actions:
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enable 5.15% APY auto-sweep for balances over $5,000</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Activate Subscription Leakage Shield to cancel dormant recurring charges</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sync all bank accounts for real-time automated net worth tracking</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => { onClose(); onOpenOnboarding(); }}
                className="flex-1 py-3.5 rounded-xl brand-gradient text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-transform"
              >
                Claim My Free Fermor Account
              </button>
              <button
                onClick={resetAudit}
                className="py-3.5 px-4 rounded-xl border border-slate-800 text-slate-400 text-xs font-semibold hover:text-white"
              >
                Retake Audit
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
