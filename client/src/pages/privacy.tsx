import { Helmet } from "react-helmet";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Privacy Policy | Big Gains Club Premium</title>
        <meta name="description" content="Privacy Policy for Big Gains Club Premium. Learn how we protect and handle your personal information." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-20 mt-16">
        <article className="prose prose-invert mx-auto">
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: February 19, 2025</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including name, email, and trading preferences.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>Your information helps us provide and improve our services, communicate with you, and enhance your trading education experience.</p>
          
          <h2>3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share data with service providers who help us operate our platform.</p>
          
          {/* Add more privacy sections as needed */}
        </article>
      </main>

      <Footer />
    </div>
  );
}
