import Reveal from "./Reveal";
import { orderSteps, site } from "@/data/site";

export default function Order() {
  return (
    <section id="order" className="bg-gradient-to-br from-royal to-ink py-20 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-bold text-gold sm:text-5xl">How to Order</h2>
          <p className="mt-3 text-cream/75">Simple. Orders are taken on Instagram.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {orderSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-gold/30 bg-white/5 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-bold text-ink">{i + 1}</div>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-cream/75">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <a href={site.dm} target="_blank" rel="noreferrer" className="btn bg-gold text-lg text-ink hover:scale-105">
            DM {site.handle} on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
