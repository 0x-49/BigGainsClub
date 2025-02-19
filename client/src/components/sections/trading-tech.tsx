import { motion } from "framer-motion";
import { LineChart, Cpu, Waves, Zap, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const technologies = [
  {
    icon: Waves,
    title: "Real-Time Analysis",
    description: "Advanced algorithms analyze market patterns and identify high-probability setups across multiple timeframes.",
    features: [
      "Multi-timeframe correlation analysis",
      "Volume profile and order flow analysis",
      "Dynamic support/resistance levels",
      "Real-time market sentiment indicators"
    ]
  },
  {
    icon: Cpu,
    title: "AI-Powered Signals",
    description: "Machine learning models process vast amounts of market data to generate precise entry and exit points.",
    features: [
      "Neural network price prediction",
      "Pattern recognition algorithms",
      "Volatility forecasting",
      "Risk-adjusted position sizing"
    ]
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Sophisticated tracking tools monitor your progress and help optimize your trading strategy.",
    features: [
      "Detailed trade journal integration",
      "Risk management metrics",
      "Performance attribution analysis",
      "Custom strategy backtesting"
    ]
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Lightning-fast signal delivery ensures you never miss a profitable trading opportunity.",
    features: [
      "Sub-millisecond signal delivery",
      "Multi-broker compatibility",
      "Automated entry/exit alerts",
      "Smart order routing"
    ]
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proprietary tech stack gives you the edge in today's markets through advanced analytics and AI-driven insights
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
                    {tech.description}
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