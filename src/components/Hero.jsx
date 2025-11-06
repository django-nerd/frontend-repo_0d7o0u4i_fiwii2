import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#050d08] to-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-[100px]" />
      </div>

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle gradient overlay so text is readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm text-white/80">AI for WordPress Stores</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Generate SEO articles that publish themselves
          <span className="block text-emerald-300/90">and drive organic sales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Connect to WordPress, pick products, and let our AI craft and publish optimized articles that rank.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 px-6 py-3 font-medium text-black shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-transform hover:scale-[1.02]"
          >
            <Rocket className="h-5 w-5" />
            Start free trial
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-md transition-colors hover:border-white/25"
          >
            <Shield className="h-5 w-5 text-emerald-300" />
            No code. Secure.
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-10 grid grid-cols-2 gap-6 text-left sm:grid-cols-4"
        >
          {[
            { icon: Zap, label: '1-click connect' },
            { icon: Rocket, label: 'Auto-publish' },
            { icon: Shield, label: 'SEO best-practices' },
            { icon: ArrowRight, label: 'Internal linking' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
            >
              <item.icon className="mb-2 h-5 w-5 text-emerald-300" />
              <p className="text-sm text-white/70">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
