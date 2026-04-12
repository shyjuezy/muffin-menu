import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { KdsPreview } from "@/components/kds-preview";
import { Features } from "@/components/features";
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
        <KdsPreview />
        <Features />
        <Stats />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
