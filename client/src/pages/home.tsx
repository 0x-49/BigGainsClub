import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import Community from "@/components/sections/community";
import Newsletter from "@/components/sections/newsletter";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Community />
      <Newsletter />
      <Footer />
    </div>
  );
}
