import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Spotlight } from "@/components/spotlight";
import { Stats } from "@/components/stats";
import { EarlyAccess } from "@/components/early-access";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Spotlight />
        <Stats />
        <EarlyAccess />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
