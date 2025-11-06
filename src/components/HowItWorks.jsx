import React from 'react';
import { motion } from 'framer-motion';
import { Plug, Boxes, Pencil, Send } from 'lucide-react';

const steps = [
  {
    title: 'Connect',
    description: 'Link your WordPress store with one click using secure OAuth.',
    icon: Plug,
  },
  {
    title: 'Select products',
    description: 'Pick the SKUs to promote and we fetch metadata + images automatically.',
    icon: Boxes,
  },
  {
    title: 'Generate',
    description: 'AI drafts SEO-optimized articles tailored to your brand and keywords.',
    icon: Pencil,
  },
  {
    title: 'Publish',
    description: 'Auto-post to WordPress or review and schedule in-app.',
    icon: Send,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          How it works
        </h2>
        <p className="mt-4 text-white/70">
          From connect to publish in minutes. No plug-ins, no copy-paste.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-transparent" />
            <s.icon className="relative z-10 h-6 w-6 text-emerald-300" />
            <h3 className="relative z-10 mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="relative z-10 mt-2 text-sm text-white/70">{s.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-transparent p-6 text-center backdrop-blur-xl">
        <p className="text-white/80">Shopify integration is coming soon.</p>
      </div>
    </section>
  );
};

export default HowItWorks;
