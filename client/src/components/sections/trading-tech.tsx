import { motion } from "framer-motion";
import { LineChart, Cpu, Waves, Zap, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const technologies = [
  {
    icon: Waves,
    title: "Market Vision: Real-Time Analysis",
    description: "Advanced algorithms rip apart market patterns across multiple timeframes, revealing <strong>high-probability setups you'd otherwise miss.</strong>",
    features: []
  },
  {
    icon: Cpu,
    title: "AI-Driven Signals: Predictive Power Unleashed",
    description: "Machine learning models crunch massive data to generate <strong>precise entry and exit points, giving you a data-backed edge.</strong>",
    features: []
  },
  {
    icon: LineChart,
    title: "Performance Domination: Advanced Analytics",
    description: "Sophisticated tools track your progress and <strong>optimize your strategy for peak performance.</strong> <strong>Know where you excel, fix where you fail.</strong>",
    features: []
  },
  {
    icon: Zap,
    title: "Lightning-Fast Signals: Never Miss the Move",
    description: "Sub-millisecond signal delivery ensures you <strong>never miss a profitable opportunity.</strong> Multi-broker ready. Automated alerts. <strong>Execute with speed and precision.</strong>",
    features: []
  }
];

export default function TradingTech() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <strong>Under the Hood: The Tech That Fuels Our Winners.</strong> Our proprietary tech stack - advanced analytics and AI - gives you the <strong>unstoppable edge</strong> in today's unforgiving markets.
          </h2>
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
              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 h-full group hover:translate-y-[-5px]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <tech.icon className="h-12 w-12 text-primary mb-4" />
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {tech.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    <span dangerouslySetInnerHTML={{ __html: tech.description }} />
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {tech.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}