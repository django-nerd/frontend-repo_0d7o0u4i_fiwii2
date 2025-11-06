import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="relative mx-auto max-w-5xl px-6 pb-28 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-white/5 p-8 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur-2xl md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-transparent to-emerald-300/10" />
        <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
              Ready to grow organic traffic?
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {['14-day free trial', 'No credit card required', 'Cancel anytime'].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-300" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 md:items-end">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-6 py-3 font-medium text-black shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-transform hover:scale-[1.02]"
            >
              Start free trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="text-xs text-white/60">Connect your WordPress store in seconds.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
