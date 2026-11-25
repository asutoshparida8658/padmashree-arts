import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Artist from "@/components/Artist";
import Collection from "@/components/Collection";
import Process from "@/components/Process";
import Order from "@/components/Order";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Artist />
      <Collection />
      <Process />
      <Order />
      <Footer />
    </main>
  );
}
