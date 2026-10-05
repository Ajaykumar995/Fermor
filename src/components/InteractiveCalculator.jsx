import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  Calendar, 
  Percent, 
  CheckCircle2 
} from 'lucide-react';

export default function InteractiveCalculator({ darkMode, onOpenOnboarding }) {
  const [initialCash, setInitialCash] = useState(25000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(1500);
  const [years, setYears] = useState(10);
  const [apy, setApy] = useState(5.15); // Fermor APY
  const bankApy = 0.42; // Traditional bank avg APY

  // Compound interest calculation formula
  // A = P(1 + r/n)^(nt) + PMT * (((1 + r/n)^(nt) - 1) / (r/n))
  const calculateCompound = (principal, monthly, ratePercent, numYears) => {
    const r = ratePercent / 100 / 12;
    const n = numYears * 12;
    
    let balance = principal;
    for (let i = 0; i < n; i++) {
      balance = (balance + monthly) * (1 + r);
    }
    return Math.round(balance);
  };

  const totalContributions = initialCash + (monthlyDeposit * 12 * years);
  const fermorFutureValue = calculateCompound(initialCash, monthlyDeposit, apy, years);
  const bankFutureValue = calculateCompound(initialCash, monthlyDeposit, bankApy, years);
  
  const fermorInterest = fermorFutureValue - totalContributions;
  const bankInterest = bankFutureValue - totalContributions;
  const extraGain = fermorFutureValue - bankFutureValue;

  return (
    <section id="calculator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" /> Interactive Yield & Growth Calculator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            See How Much Cash You Are Leaving On The Table
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Adjust the sliders below to calculate your exact wealth expansion with Fermor's 5.15% APY sweep engine versus standard legacy banks.
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-xl shadow-2xl ${
          darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sliders (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: Initial Deposit */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Initial Cash & Savings
                  </label>
                  <span className="text-lg font-bold font-mono text-blue-400">
                    ${initialCash.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="250000"
                  step="1000"
                  value={initialCash}
                  onChange={(e) => setInitialCash(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>$1,000</span>
                  <span>$250,000+</span>
                </div>
              </div>

              {/* Slider 2: Monthly Savings Deposit */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Monthly Savings / Contribution
                  </label>
                  <span className="text-lg font-bold font-mono text-blue-400">
                    ${monthlyDeposit.toLocaleString()}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={monthlyDeposit}
                  onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>$100/mo</span>
                  <span>$10,000/mo</span>
                </div>
              </div>

              {/* Slider 3: Timeline (Years) */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Time Horizon
                  </label>
                  <span className="text-lg font-bold font-mono text-emerald-400">
                    {years} {years === 1 ? 'Year' : 'Years'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Slider 4: Yield Rate APY */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Fermor High-Yield APY
                  </label>
                  <span className="text-lg font-bold font-mono text-amber-400">
                    {apy}% APY
                  </span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="8.0"
                  step="0.05"
                  value={apy}
                  onChange={(e) => setApy(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>3.0%</span>
                  <span>8.0% (Aggressive Yield)</span>
                </div>
              </div>

            </div>

            {/* Results Output Box (Right 5 Cols) */}
            <div className="lg:col-span-5">
              <div className={`p-6 rounded-2xl border flex flex-col justify-between space-y-6 ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Projected Wealth Portfolio ({years} Yrs)
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-gradient mt-2">
                    ${fermorFutureValue.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Includes ${totalContributions.toLocaleString()} in total deposits
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800/60">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-400">Fermor Yield Earned:</span>
                    <span className="font-mono font-bold text-emerald-400">+${fermorInterest.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs sm:text-sm opacity-60">
                    <span className="text-slate-400">Traditional Bank Interest (0.42%):</span>
                    <span className="font-mono text-slate-300">+${bankInterest.toLocaleString()}</span>
                  </div>

                  {/* Extra Gain Highlight Banner */}
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    <div className="text-xs font-bold uppercase tracking-wide text-emerald-400 font-mono">
                      ✨ Your Extra Fermor Advantage
                    </div>
                    <div className="text-2xl font-black font-mono mt-1 text-emerald-300">
                      +${extraGain.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-emerald-200/80 mt-0.5">
                      Pure extra growth by optimizing idle cash sweeps & low-fee asset compounding.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenOnboarding}
                  className="w-full py-3.5 rounded-xl brand-gradient text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                >
                  Claim Your Extra ${extraGain.toLocaleString()} <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
