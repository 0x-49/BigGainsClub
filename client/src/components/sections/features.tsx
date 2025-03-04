import { motion } from "framer-motion";
import { LineChart, Signal, Users, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Signal,
    title: "Real-Time Alpha Signals",
    description: "Stop guessing, start knowing. Get <strong>instant access</strong> to <strong>battle-tested, high-probability trade setups</strong> across crypto, forex, and more. These aren't just 'signals', they're your <strong>unfair advantage</strong>."
  },
  {
    icon: Users,
    title: "Unfiltered Expert Mentorship",
    description: "Learn directly from proven, hardcore traders – no fluff, no BS. Daily live sessions, personalized guidance that actually gets results. We don't just teach, we forge winners.",
  },
  {
    icon: LineChart,
    title: "Cutting-Edge Trading Analytics",
    description: "Track your progress like a pro. <strong>Professional-grade analytics and performance metrics</strong> put you in control. <strong>Know your edge, sharpen your strategy, and dominate your performance.</strong>"
  },
  {
    icon: Zap,
    title: "Elite Trader Community",
    description: "Don't trade in a vacuum. Join the <strong>exclusive Discord tribe</strong> of <strong>ambitious, results-driven traders.</strong> Connect, collaborate, and <strong>rise to the top together.</strong> <strong>No whiners, just winners.</strong>"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Arsenal for Market Domination
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    <span dangerouslySetInnerHTML={{ __html: feature.description }} />
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}