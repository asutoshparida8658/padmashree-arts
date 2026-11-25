import Reveal from "./Reveal";
import { steps } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-bold text-royal sm:text-5xl">How It Is Made</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl bg-cream p-6">
                <span className="font-display text-5xl font-bold text-gold">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-ink/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
