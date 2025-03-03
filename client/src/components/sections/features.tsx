oimport { motion } from "framer-motion";
import { LineChart, Signal, Users, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Signal,
    title: "Real-Time Alpha Signals",
    description: "Stop guessing, start knowing. Get *instant access* to *battle-tested, high-probability trade setups* across crypto, forex, and more. These aren't just 'signals', they're your *unfair advantage*."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn directly from successful traders through daily live sessions and personalized guidance."
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "Track your progress with professional-grade trading analytics and performance metrics."
  },
  {
    icon: Zap,
    title: "Premium Community",
    description: "Connect with like-minded traders in our exclusive Discord community."
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
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
