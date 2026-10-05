import React, { useState } from 'react';
import { 
  Eye, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Sliders, 
  ArrowUpRight, 
  RefreshCw, 
  Plus, 
  Wallet, 
  PieChart, 
  SlidersHorizontal,
  ChevronRight,
  Sparkles,
  ArrowDownRight,
  Lock
} from 'lucide-react';
import { DEMO_FINANCIAL_DATA } from '../data/mockData';

export default function InteractiveDashboard({ darkMode, onOpenOnboarding }) {
  const [activeTab, setActiveTab] = useState('understand'); // 'understand', 'act', 'grow'
  const [data, setData] = useState(DEMO_FINANCIAL_DATA);
  const [swept, setSwept] = useState(false);
  const [activeRules, setActiveRules] = useState({
    r1: true,
    r2: true,
    r3: true,
    r4: false
  });
  const [selectedAccountFilter, setSelectedAccountFilter] = useState('All');

  // Interactive Cash Sweep Handler
  const handleExecuteSweep = () => {
    if (swept) return;
    setSwept(true);
    setData(prev => {
      const updatedAccounts = prev.accounts.map(acc => {
        if (acc.id === 1) { // Chase Checking
          return { ...acc, balance: 5000 };
        }
        if (acc.id === 2) { // Fermor High-Yield
          return { ...acc, balance: acc.balance + (18500 - 5000) };
        }
        return acc;
      });
      return {
        ...prev,
        accounts: updatedAccounts,
        idleCash: 0,
        potentialExtraYield: 0,
        insights: [
          { id: 99, type: 'success', text: '✅ Successfully swept $13,500 into 5.15% APY! Earning +$695/yr in extra interest.', action: 'Done' },
          ...prev.insights.filter(i => i.id !== 1)
        ]
      };
    });
  };

  const handleToggleRule = (ruleId) => {
    setActiveRules(prev => ({ ...prev, [ruleId]: !prev[ruleId] }));
  };

  const filteredAccounts = selectedAccountFilter === 'All' 
    ? data.accounts 
    : data.accounts.filter(a => a.type === selectedAccountFilter);

  return (
    <section id="platform" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            Interactive Product Preview
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Experience the Fermor Operating System
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Click through the core modules below to see how Fermor transforms raw financial data into automated wealth expansion.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex p-1.5 rounded-2xl border backdrop-blur-md ${
            darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setActiveTab('understand')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'understand'
                  ? 'brand-gradient text-white shadow-lg shadow-blue-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>1. Understand</span>
            </button>
            
            <button
              onClick={() => setActiveTab('act')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'act'
                  ? 'brand-gradient text-white shadow-lg shadow-blue-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>2. Act</span>
              {!swept && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('grow')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'grow'
                  ? 'brand-gradient text-white shadow-lg shadow-blue-500/20'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-emerald-300" />
              <span>3. Grow</span>
            </button>
          </div>
        </div>

        {/* Main App Container */}
        <div className={`rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all ${
          darkMode 
            ? 'bg-slate-950/90 border-slate-800 shadow-black/60' 
            : 'bg-white border-slate-200 shadow-slate-300/40'
        }`}>
          
          {/* Top Mock Window Bar */}
          <div className={`px-6 py-4 border-b flex items-center justify-between ${
            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className={`text-xs font-mono font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                app.fermor.com • Live Sandbox Mode
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Plaid Connected (5 Accounts)
              </span>
              <button 
                onClick={onOpenOnboarding}
                className="text-xs font-medium px-3 py-1 rounded-lg brand-gradient text-white shadow-sm"
              >
                Launch App
              </button>
            </div>
          </div>

          {/* TAB CONTENT 1: UNDERSTAND */}
          {activeTab === 'understand' && (
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Top Key Metrics Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Total Net Worth</span>
                  <div className="text-3xl font-bold font-mono text-gradient mt-1">
                    ${data.netWorth.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-emerald-400 font-medium">
                    <ArrowUpRight className="w-3.5 h-3.5" /> +$4,250 (+1.7%) this month
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Monthly Savings Rate</span>
                  <div className="text-3xl font-bold font-mono text-emerald-400 mt-1">
                    {data.savingsRate}%
                  </div>
                  <div className={`mt-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Income: ${data.monthlyIncome.toLocaleString()} / Exp: ${data.monthlyExpenses.toLocaleString()}
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${
                  swept 
                    ? darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                    : 'bg-amber-500/10 border-amber-500/30'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-amber-400">Idle Cash Alert</span>
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-amber-300 mt-1">
                    ${data.idleCash.toLocaleString()} Idle
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {swept ? 'Fully optimized in 5.15% APY' : `Losing ~$${data.potentialExtraYield}/yr to inflation in 0.01% checking`}
                  </p>
                </div>
              </div>

              {/* Live AI Insight Notification */}
              {data.insights.length > 0 && (
                <div className="space-y-3">
                  {data.insights.map(insight => (
                    <div 
                      key={insight.id} 
                      className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        insight.type === 'warning' 
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {insight.type === 'warning' ? <Zap className="w-5 h-5 text-amber-400 shrink-0" /> : <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                        <span className="text-sm font-medium">{insight.text}</span>
                      </div>
                      {insight.id === 1 && !swept && (
                        <button
                          onClick={handleExecuteSweep}
                          className="px-4 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-semibold text-xs hover:bg-amber-300 transition-colors shadow-sm shrink-0"
                        >
                          {insight.action}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Accounts List & Cashflow Breakdown Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Account Balances Table */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Synced Accounts
                    </h3>
                    <div className="flex gap-1 text-xs">
                      {['All', 'Checking', 'HYSA', 'Investment'].map(filter => (
                        <button
                          key={filter}
                          onClick={() => setSelectedAccountFilter(filter)}
                          className={`px-2.5 py-1 rounded-md transition-colors ${
                            selectedAccountFilter === filter
                              ? 'bg-blue-600 text-white'
                              : darkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {filteredAccounts.map(account => (
                      <div 
                        key={account.id} 
                        className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                          darkMode 
                            ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700' 
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                            account.balance < 0 
                              ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                              : account.type === 'HYSA' 
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                              : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          }`}>
                            <Wallet className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                              {account.name}
                            </div>
                            <div className="text-xs text-slate-400 flex items-center gap-2">
                              <span>{account.type}</span> • <span className="text-emerald-400 font-mono">{account.yield}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-bold font-mono ${account.balance < 0 ? 'text-red-400' : darkMode ? 'text-white' : 'text-slate-900'}`}>
                            ${account.balance.toLocaleString()}
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                            {account.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cashflow Spending Breakdown */}
                <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
                  darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Monthly Cash Flow Audit
                      </h3>
                      <PieChart className="w-4 h-4 text-blue-400" />
                    </div>

                    <div className="space-y-3">
                      {data.cashflowCategories.map((cat, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-xs font-medium">
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{cat.name}</span>
                            <span className="font-mono text-slate-400">${cat.amount} ({cat.percentage}%)</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-800/60 overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-500" 
                              style={{ width: `${cat.percentage}%`, backgroundColor: cat.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/40 text-center">
                    <button 
                      onClick={() => setActiveTab('act')}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center justify-center gap-1 mx-auto"
                    >
                      Set Autonomous Rules for this Cash Flow <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB CONTENT 2: ACT */}
          {activeTab === 'act' && (
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/60 pb-6">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400" /> Autonomous Financial Guardrails
                  </h3>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Fermor monitors your accounts 24/7 and executes rules automatically according to your strict parameters.
                  </p>
                </div>
                {!swept ? (
                  <button
                    onClick={handleExecuteSweep}
                    className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/20 flex items-center gap-2 self-start md:self-auto"
                  >
                    <Zap className="w-4 h-4 fill-slate-950" /> Run Instant Cash Optimization
                  </button>
                ) : (
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cash Sweep Active (5.15% APY)
                  </div>
                )}
              </div>

              {/* Rules List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.automatedRules.map((rule) => {
                  const isActive = activeRules[rule.id];
                  return (
                    <div 
                      key={rule.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        isActive
                          ? darkMode 
                            ? 'bg-slate-900/80 border-blue-500/40 shadow-lg shadow-blue-500/5' 
                            : 'bg-blue-50/50 border-blue-200'
                          : darkMode ? 'bg-slate-900/30 border-slate-800 opacity-60' : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-blue-400 font-mono uppercase tracking-wider">
                            Rule #{rule.id}
                          </span>
                          <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {rule.title}
                          </h4>
                          <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            {rule.desc}
                          </p>
                        </div>
                        
                        {/* Toggle Button */}
                        <button
                          onClick={() => handleToggleRule(rule.id)}
                          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                            isActive ? 'bg-blue-600' : 'bg-slate-700'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                            isActive ? 'translate-x-6' : 'translate-x-0'
                          }`} />
                        </button>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>Status: {isActive ? '🟢 Active & Guarding' : '⚪ Paused'}</span>
                        <span>Execution: Auto-Daily</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Subscription Leakage Scanner Demo */}
              <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">
                      Subscription Guardrail Scan
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">Last scanned: 2 mins ago</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-200">Equinox Gym Pass</div>
                      <div className="text-[11px] text-red-400 font-mono">Unused 52 days ($220/mo)</div>
                    </div>
                    <button className="px-2.5 py-1 rounded-md bg-red-500/20 text-red-300 text-[11px] font-semibold hover:bg-red-500/30">
                      Cancel
                    </button>
                  </div>
                  
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-200">Hulu Premium</div>
                      <div className="text-[11px] text-amber-400 font-mono">Unused 38 days ($17.99/mo)</div>
                    </div>
                    <button className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-semibold hover:bg-amber-500/30">
                      Cancel
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-200">Spotify Family</div>
                      <div className="text-[11px] text-emerald-400 font-mono">Active daily ($16.99/mo)</div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">Verified</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT 3: GROW */}
          {activeTab === 'grow' && (
            <div className="p-6 md:p-8 space-y-6">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" /> 10-Year Wealth Trajectory Simulator
                  </h3>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Comparing standard bank returns vs Fermor's tax-optimized compounding engine.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono font-medium">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <span className="w-3 h-1 bg-blue-500 rounded" /> With Fermor (8.4% Avg)
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span className="w-3 h-1 bg-slate-600 rounded" /> Traditional Bank (0.4%)
                  </span>
                </div>
              </div>

              {/* Simulated SVG Trajectory Chart */}
              <div className={`p-6 rounded-2xl border relative overflow-hidden ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="h-64 w-full relative flex items-end justify-between pt-8 pb-4">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-b border-slate-700 text-[10px] text-slate-400">$650,000</div>
                    <div className="border-b border-slate-700 text-[10px] text-slate-400">$450,000</div>
                    <div className="border-b border-slate-700 text-[10px] text-slate-400">$250,000</div>
                    <div className="border-b border-slate-700 text-[10px] text-slate-400">$100,000</div>
                  </div>

                  {/* SVG Curves */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Fermor Curve (Blue Gradient) */}
                    <path 
                      d="M 0 80 Q 25 70, 50 45 T 100 10" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="3.5"
                    />
                    {/* Traditional Bank Curve (Flat Grey) */}
                    <path 
                      d="M 0 80 Q 25 78, 50 76 T 100 72" 
                      fill="none" 
                      stroke="#64748b" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  </svg>

                  {/* Year markers */}
                  {['Year 1', 'Year 3', 'Year 5', 'Year 7', 'Year 10'].map((year, idx) => (
                    <div key={idx} className="z-10 text-[11px] font-mono text-slate-400">
                      {year}
                    </div>
                  ))}
                </div>

                {/* Growth Delta Footer */}
                <div className="mt-4 pt-4 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-slate-200">
                      Projected 10-Yr Wealth Delta: <span className="text-emerald-400 font-mono text-sm font-bold">+$142,400</span> extra growth
                    </span>
                  </div>
                  <button
                    onClick={onOpenOnboarding}
                    className="px-4 py-1.5 rounded-lg brand-gradient text-white font-semibold text-xs shadow-md"
                  >
                    Build My Wealth Strategy →
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
