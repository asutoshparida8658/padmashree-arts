"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#artist", label: "Artist" },
  { href: "#collection", label: "Collection" },
  { href: "#order", label: "How to Order" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-ink/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-display text-xl font-bold text-gold">
          {site.name}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-medium text-cream transition-colors hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.dm} target="_blank" rel="noreferrer" className="btn bg-maroon text-cream hover:scale-105">
              DM to Order
            </a>
          </li>
        </ul>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-0.5 w-6 bg-cream"
              animate={
                open
                  ? i === 0 ? { rotate: 45, y: 8 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
            />
          ))}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-ink px-5 md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-cream hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pb-5 pt-2">
              <a href={site.dm} target="_blank" rel="noreferrer" className="btn w-full bg-gold text-ink">
                DM to Order
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
