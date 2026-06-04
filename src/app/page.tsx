import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Spotlight } from "@/components/spotlight";
import { Stats } from "@/components/stats";
import { Testimonial } from "@/components/testimonial";
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
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
