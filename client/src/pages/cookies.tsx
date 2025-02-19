import { Helmet } from "react-helmet";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Cookie Policy | Big Gains Club Premium</title>
        <meta name="description" content="Cookie Policy for Big Gains Club Premium. Understanding how we use cookies to improve your experience." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-20 mt-16">
        <article className="prose prose-invert mx-auto">
          <h1>Cookie Policy</h1>
          <p className="lead">Last updated: February 19, 2025</p>
          
          <h2>1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device that help us provide and improve our services.</p>
          
          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for essential website functionality, analytics, and to enhance your trading experience.</p>
          
          <h2>3. Managing Cookies</h2>
          <p>You can control and/or delete cookies through your browser settings.</p>
          
          {/* Add more cookie policy sections as needed */}
        </article>
      </main>

      <Footer />
    </div>
  );
}
