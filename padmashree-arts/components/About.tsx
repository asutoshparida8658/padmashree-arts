import Reveal from "./Reveal";
import { categories } from "@/data/site";
import CategoryCard from "./CategoryCard";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold text-royal sm:text-5xl">About Patachitra</h2>
        <p className="mt-5 text-lg text-ink/75">
          Patachitra is a traditional painting art from Odisha, known for bold lines, rich colours and stories from
          Indian culture. At Padmashree Arts, every piece is handcrafted with care and made to be loved for years.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.1}>
            <CategoryCard name={c.name} text={c.text} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
