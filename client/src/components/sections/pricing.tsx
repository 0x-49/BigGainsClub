import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GlowingButton } from "@/components/ui/glowing-button";

const features = [
  "Stop guessing, start knowing. Get instant access to battle-tested, high-probability trade setups across crypto, forex, and more. These aren't just 'signals', they're your competitive edge.",
  "Learn directly from proven, hardcore traders – no fluff, no nonsense. Daily live sessions, personalized guidance that actually gets results. We don't just teach, we forge winners.",
  "Track your progress like a pro. Professional-grade analytics and performance metrics put you in control. Know your edge, sharpen your strategy, and dominate your performance.",
  "Don't trade in a vacuum. Join the exclusive Discord tribe of ambitious, results-driven traders. Connect, collaborate, and rise to the top together. No excuses, just excellence.",
  "Daily live trading sessions where you'll see our strategies in action. Copy success, avoid mistakes, and accelerate your growth.",
  "Advanced performance tracking tools that help you identify strengths, eliminate weaknesses, and consistently improve your trading results."
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Premium Access & <strong>Dominate</strong>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to stop trading small-time and go Premium? <strong>Join Big Gains Club and finally unlock the trading success you deserve.</strong>
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl"><strong>Premium Membership</strong></CardTitle>
              <CardDescription className="text-xl">
                <strong>$114.99</strong><span className="text-sm text-muted-foreground">/month</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <GlowingButton
                className="w-full"
                as="a"
                href="https://whop.com/big-gains-club/?a=digitalartlab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go Premium - Unlock Your Edge
              </GlowingButton>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
