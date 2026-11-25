"use client";
import { motion } from "framer-motion";
import { site } from "@/data/site";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-ink via-[#2B4033] to-royal pt-24 text-cream">
      <motion.div
        aria-hidden
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border-[3rem] border-gold/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[2rem] border-maroon/30"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 md:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-3 font-semibold uppercase tracking-widest text-gold">
            {site.tagline}
          </motion.p>
          <motion.h1 variants={item} className="font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Handcrafted <span className="text-gold">with heritage</span>
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-md text-lg text-cream/80">
            Wall hangings and designs for ladies, gents and kids, painted by hand in the Patachitra tradition of Odisha.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a href="#collection" className="btn bg-gold text-ink hover:scale-105">View Collection</a>
            <a href={site.dm} target="_blank" rel="noreferrer" className="btn border-2 border-gold text-gold hover:bg-gold hover:text-ink">
              DM to Order
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="overflow-hidden rounded-t-full border-4 border-gold shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/products/p07.jpg" alt="Patachitra painting" className="aspect-[3/4] w-full object-cover" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 h-28 w-28 overflow-hidden rounded-full border-4 border-gold shadow-xl sm:-left-10 sm:h-36 sm:w-36"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/products/p06.jpg" alt="Hand-painted plate" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
