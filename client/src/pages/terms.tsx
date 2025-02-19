import { Helmet } from "react-helmet";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Terms of Service | Big Gains Club Premium</title>
        <meta name="description" content="Terms of Service for Big Gains Club Premium. Read our terms and conditions for using our trading education and community platform." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-20 mt-16">
        <article className="prose prose-invert mx-auto">
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: February 19, 2025</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Big Gains Club Premium services, you agree to be bound by these Terms of Service.</p>
          
          <h2>2. Description of Service</h2>
          <p>Big Gains Club Premium provides educational content, trading signals, and community features for trading education purposes.</p>
          
          <h2>3. Disclaimer</h2>
          <p>Trading involves substantial risk. Past performance is not indicative of future results. Educational content and signals are for informational purposes only.</p>
          
          {/* Add more terms sections as needed */}
        </article>
      </main>

      <Footer />
    </div>
  );
}
