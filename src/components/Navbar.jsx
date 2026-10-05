import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Search, 
  ArrowRight,
  TrendingUp,
  Layers,
  Zap
} from 'lucide-react';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  onOpenOnboarding, 
  onOpenCommandPalette,
  onOpenHealthCheck 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/20' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight font-sans ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                FERMOR
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-blue-500 font-mono -mt-1">
                Financial OS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  darkMode 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg border transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-800'
              }`}
              title="Search shortcuts (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-800/40 border border-slate-700/50">⌘K</kbd>
            </button>

            {/* Health Score Quiz Trigger */}
            <button
              onClick={onOpenHealthCheck}
              className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                darkMode 
                  ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20' 
                  : 'border-emerald-600/30 text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Quick Audit</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle Dark/Light Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenOnboarding}
              className="relative group overflow-hidden px-5 py-2 rounded-lg brand-gradient text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Start Free <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 ${
          darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800/20"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800/40 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenHealthCheck(); }}
              className="w-full py-2.5 rounded-lg border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Zap className="w-4 h-4" /> Run Financial Audit
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOnboarding(); }}
              className="w-full py-2.5 rounded-lg brand-gradient text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
