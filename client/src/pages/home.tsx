import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import SuccessMetrics from "@/components/sections/success-metrics";
import TradingTech from "@/components/sections/trading-tech";
import LearningPath from "@/components/sections/learning-path";
import RiskApproach from "@/components/sections/risk-approach";
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
      <SuccessMetrics />
      <TradingTech />
      <LearningPath />
      <RiskApproach />
      <Pricing />
      <Testimonials />
      <Community />
      <Newsletter />
      <Footer />
    </div>
  );
}