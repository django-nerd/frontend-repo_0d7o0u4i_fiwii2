import React from 'react';
import { Rocket, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-lg font-semibold text-transparent">
              RankGlass
            </span>
            <span className="ml-3 rounded-full border border-emerald-500/30 bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">
              Beta
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a
              href="#cta"
              className="rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md hover:bg-white/15"
            >
              Start free trial
            </a>
          </nav>

          <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur-xl md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
