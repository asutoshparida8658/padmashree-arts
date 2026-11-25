"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { artist } from "@/data/site";

export default function Artist() {
  return (
    <section id="artist" className="bg-ink py-20 text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-64 sm:w-80 md:col-span-2 md:w-full md:max-w-sm"
        >
          <motion.div
            aria-hidden
            className="absolute -inset-3 rounded-full border-2 border-dashed border-gold/60"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          />
          <div className="aspect-square overflow-hidden rounded-full border-4 border-gold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={artist.photo} alt={artist.name} className="h-full w-full scale-110 object-cover" />
          </div>
        </motion.div>

        <div className="md:col-span-3">
          <Reveal>
            <p className="font-semibold uppercase tracking-widest text-gold">Meet the Artist</p>
            <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{artist.name}</h2>
            <p className="mt-1 text-cream/60">{artist.role}</p>
          </Reveal>
          {artist.about.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className="mt-5 text-lg text-cream/80">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <div className="mt-8 rounded-2xl border border-gold/40 bg-white/5 p-6">
              <p className="font-semibold uppercase tracking-widest text-gold">Our Mission</p>
              <p className="mt-2 font-display text-xl leading-snug sm:text-2xl">{artist.mission}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {artist.values.map((v) => (
                <span key={v} className="rounded-full border border-gold px-4 py-1.5 text-sm text-gold">
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
