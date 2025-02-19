import { motion } from "framer-motion";
import { LineChart, Cpu, Waves, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const technologies = [
  {
    icon: Waves,
    title: "Real-Time Analysis",
    description: "Advanced algorithms analyze market patterns and identify high-probability setups across multiple timeframes."
  },
  {
    icon: Cpu,
    title: "AI-Powered Signals",
    description: "Machine learning models process vast amounts of market data to generate precise entry and exit points."
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Sophisticated tracking tools monitor your progress and help optimize your trading strategy."
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Lightning-fast signal delivery ensures you never miss a profitable trading opportunity."
  }
];

export default function TradingTech() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge Trading Technology
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proprietary tech stack gives you the edge in today's markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-colors h-full">
                <CardHeader>
                  <tech.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{tech.title}</CardTitle>
                  <CardDescription className="text-base">{tech.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
