import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GlowingButton } from "@/components/ui/glowing-button";

const features = [
  "Real-time trade signals",
  "Daily live mentorship",
  "Premium Discord access",
  "Advanced market education",
  "Live trading sessions",
  "Performance analytics"
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Trading Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Join Big Gains Club and elevate your trading journey
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
              <CardTitle className="text-3xl">Premium Membership</CardTitle>
              <CardDescription className="text-xl">
                $114.99<span className="text-sm text-muted-foreground">/month</span>
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
                href="https://whop.com/big-gains-club/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Now
              </GlowingButton>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
