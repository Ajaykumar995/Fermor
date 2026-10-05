import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  Zap, 
  Calculator, 
  Eye, 
  TrendingUp, 
  ShieldCheck, 
  Sun, 
  Moon, 
  ArrowRight 
} from 'lucide-react';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  darkMode, 
  setDarkMode, 
  onOpenHealthCheck, 
  onOpenOnboarding 
}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'audit',
      title: 'Run 60-Second Financial Audit',
      desc: 'Calculate your missing yield & subscription leakage score',
      icon: Zap,
      iconColor: 'text-amber-400',
      action: () => { onClose(); onOpenHealthCheck(); }
    },
    {
      id: 'calc',
      title: 'Calculate 10-Year Compound Growth',
      desc: 'Estimate wealth trajectory with 5.15% APY sweeps',
      icon: Calculator,
      iconColor: 'text-emerald-400',
      action: () => { onClose(); window.location.hash = '#calculator'; }
    },
    {
      id: 'sweep',
      title: 'Execute Idle Cash Sweep Demo',
      desc: 'Simulate moving checking funds to high-yield interest',
      icon: TrendingUp,
      iconColor: 'text-blue-400',
      action: () => { onClose(); window.location.hash = '#platform'; }
    },
    {
      id: 'theme',
      title: `Switch to ${darkMode ? 'Light' : 'Dark'} Mode`,
      desc: 'Toggle visual color system theme',
      icon: darkMode ? Sun : Moon,
      iconColor: 'text-amber-300',
      action: () => { setDarkMode(!darkMode); onClose(); }
    },
    {
      id: 'pricing',
      title: 'View Pricing & Membership Tiers',
      desc: 'Compare Starter, Pro, and Wealth tiers',
      icon: ShieldCheck,
      iconColor: 'text-purple-400',
      action: () => { onClose(); window.location.hash = '#pricing'; }
    }
  ];

  const filteredActions = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden transition-all ${
        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Search Header */}
        <div className="p-4 border-b border-slate-800/60 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search action (e.g., Audit, Yield, Theme)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full bg-transparent border-none text-sm font-medium focus:outline-none placeholder:text-slate-500 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          />
          <kbd className="px-2 py-1 text-[10px] font-mono rounded bg-slate-800 text-slate-400 border border-slate-700">ESC</kbd>
        </div>

        {/* Action List */}
        <div className="p-2 space-y-1 max-h-80 overflow-y-auto">
          {filteredActions.length > 0 ? (
            filteredActions.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full p-3 rounded-xl text-left flex items-center justify-between group transition-colors ${
                    darkMode 
                      ? 'hover:bg-slate-900 text-slate-200' 
                      : 'hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-slate-900 border border-slate-800 ${item.iconColor}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">{item.title}</div>
                      <div className="text-[11px] text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-transform" />
                </button>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs text-slate-400 font-mono">
              No matching Fermor commands found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-800/40 flex items-center justify-between text-[10px] text-slate-500 font-mono">
          <span>Navigation Shortcuts</span>
          <span>Press Enter to select</span>
        </div>

      </div>
    </div>
  );
}
