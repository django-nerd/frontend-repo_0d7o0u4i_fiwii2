import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, UploadCloud, BarChart3, Link as LinkIcon, Store, Clock } from 'lucide-react';

const features = [
  {
    title: 'Connect your store',
    description:
      'Securely authenticate with WordPress to fetch products, categories, images, and metadata in seconds.',
    icon: Store,
  },
  {
    title: 'AI-written articles',
    description:
      'High-quality long-form content optimized for your product keywords, tone, and intent.',
    icon: FileText,
  },
  {
    title: 'SEO built-in',
    description:
      'Automatic internal links, schema markup, meta tags, and readability checks to rank faster.',
    icon: LinkIcon,
  },
  {
    title: 'Auto-publish',
    description:
      'Approve drafts or let posts go live on a schedule. Images, slugs, and categories included.',
    icon: UploadCloud,
  },
  {
    title: 'Performance insights',
    description:
      'Track impressions, clicks, positions and conversions with our analytics dashboard.',
    icon: BarChart3,
  },
  {
    title: 'Save hours weekly',
    description:
      'Automations handle briefs, outlines, drafts and posting so you can focus on growth.',
    icon: Clock,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Glassmorphic simplicity, enterprise power
        </h2>
        <p className="mt-4 text-white/70">
          Everything you need to generate, optimize, and publish product-led content at scale.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-transparent" />
            <f.icon className="relative z-10 h-6 w-6 text-emerald-300" />
            <h3 className="relative z-10 mt-3 text-lg font-semibold">{f.title}</h3>
            <p className="relative z-10 mt-2 text-sm text-white/70">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
