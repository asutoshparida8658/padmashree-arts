"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { categories, products, site } from "@/data/site";

const tabs = [{ id: "all", name: "All" }, ...categories];

export default function Collection() {
  const [active, setActive] = useState("all");
  const list = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="collection" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-bold text-royal sm:text-5xl">Our Collection</h2>
        <p className="mt-3 text-ink/70">Every piece is made by hand. Tap a category to filter.</p>
      </Reveal>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === t.id ? "text-cream" : "text-ink/70 hover:text-ink"
            }`}
          >
            {active === t.id && (
              <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-royal" />
            )}
            <span className="relative">{t.name}</span>
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <Reveal className="mt-12 rounded-2xl border border-dashed border-ink/20 p-10 text-center">
          <p className="text-lg">New designs for this category are made to order.</p>
          <a href={site.dm} target="_blank" rel="noreferrer" className="btn mt-5 bg-royal text-cream hover:scale-105">
            DM to ask
          </a>
        </Reveal>
      ) : (
        <motion.div layout className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.a
                layout
                key={p.id}
                href={site.dm}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                whileHover={{ y: -6 }}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="aspect-[4/5] overflow-hidden bg-ink/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm font-medium text-maroon">DM to order →</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
