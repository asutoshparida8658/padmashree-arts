import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-center text-cream/70">
      <p className="font-display text-xl font-bold text-gold">{site.name}</p>
      <p className="mt-1">{site.tagline}. Handcrafted with heritage.</p>
      <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-3 inline-block text-gold hover:underline">
        {site.handle}
      </a>
      <p className="mt-6 text-sm">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
