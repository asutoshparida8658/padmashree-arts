"use client";
import { motion } from "framer-motion";

export default function CategoryCard({ name, text }: { name: string; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 h-1.5 w-12 rounded-full bg-gold" />
      <h3 className="font-display text-xl font-bold text-royal">{name}</h3>
      <p className="mt-2 text-ink/70">{text}</p>
    </motion.div>
  );
}
