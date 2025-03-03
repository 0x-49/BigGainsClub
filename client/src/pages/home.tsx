import { Helmet } from "react-helmet";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import SuccessMetrics from "@/components/sections/success-metrics";
import TradingTech from "@/components/sections/trading-tech";
import LearningPath from "@/components/sections/learning-path";
import RiskApproach from "@/components/sections/risk-approach";
import UseCasesCarousel from "@/components/sections/use-cases-carousel";
import CommunitySuccess from "@/components/sections/community-success";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import Community from "@/components/sections/community";
import Footer from "@/components/sections/footer";
import CtaSection1 from "@/components/sections/cta-section-1";
import CtaSection2 from "@/components/sections/cta-section-2";
import CtaSection3 from "@/components/sections/cta-section-3";
import CtaSection4 from "@/components/sections/cta-section-4";
import CtaSection5 from "@/components/sections/cta-section-5";
import CtaSection6 from "@/components/sections/cta-section-6";
import CtaSection7 from "@/components/sections/cta-section-7";
import CtaSection8 from "@/components/sections/cta-section-8";
import CtaSection9 from "@/components/sections/cta-section-9";
import CtaSection10 from "@/components/sections/cta-section-10";
import CtaSection11 from "@/components/sections/cta-section-11";
import CtaSection12 from "@/components/sections/cta-section-12";



export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Big Gains Club Premium | Elite Trading Education & Community</title>
        <meta name="description" content="Join Big Gains Club Premium for real-time trading signals, live mentorship, and a passionate community focused on growing wealth. Daily live trading sessions, comprehensive education, and proven strategies." />
        <meta property="og:title" content="Big Gains Club Premium | Elite Trading Education & Community" />
        <meta property="og:description" content="Join Big Gains Club Premium for real-time trading signals, live mentorship, and a passionate community focused on growing wealth." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Big Gains Club",
            "description": "Elite trading education and community for serious traders.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2250 N Druid Hills Rd NE",
              "addressLocality": "Atlanta",
              "addressRegion": "GA",
              "postalCode": "30329",
              "addressCountry": "US"
            },
            "telephone": "(800) 589-4356",
            "email": "info@JoinBigGainsClub.com"
          })}
        </script>
      </Helmet>

      <Hero />
      <CtaSection1 />
      <Features />
      <CtaSection2 />
      <SuccessMetrics />
      <CtaSection3 />
      <TradingTech />
      <CtaSection4 />
      <LearningPath />
      <CtaSection5 />
      <RiskApproach />
      <CtaSection6 />
      <UseCasesCarousel />
      <CtaSection7 />
      <CommunitySuccess />
      <CtaSection8 />
      <Pricing />
      <CtaSection9 />
      <Testimonials />
      <CtaSection10 />
      <Community />
      <CtaSection11 />
      <CtaSection12 />
      <Footer />
    </div>
  );
}
