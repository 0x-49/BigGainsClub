import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import TradingTerminal from "@/components/ui/trading-terminal";
import { GlowingButton } from "@/components/ui/glowing-button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Big Gains Club
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Join the elite community of traders mastering the markets through advanced signals, real-time mentorship, and cutting-edge analytics.
            </p>
            <div className="flex gap-4">
              <GlowingButton
                as="a"
                href="https://whop.com/big-gains-club/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now <ChevronRight className="h-4 w-4 ml-2" />
              </GlowingButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border border-primary/20">
              <TradingTerminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
