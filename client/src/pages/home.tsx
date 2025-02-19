import { Helmet } from "react-helmet";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import SuccessMetrics from "@/components/sections/success-metrics";
import TradingTech from "@/components/sections/trading-tech";
import LearningPath from "@/components/sections/learning-path";
import RiskApproach from "@/components/sections/risk-approach";
import CommunitySuccess from "@/components/sections/community-success";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import Community from "@/components/sections/community";
import Newsletter from "@/components/sections/newsletter";
import Footer from "@/components/sections/footer";

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
      <Features />
      <SuccessMetrics />
      <TradingTech />
      <LearningPath />
      <RiskApproach />
      <CommunitySuccess />
      <Pricing />
      <Testimonials />
      <Community />
      <Newsletter />
      <Footer />
    </div>
  );
}