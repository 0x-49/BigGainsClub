import { motion } from "framer-motion";
import { Shield, Scale, BookOpen, HeartHandshake, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const principles = [
  {
    icon: Shield,
    title: "Protected Trading",
    description: "Our risk management strategies ensure your capital is always protected with strict stop-loss protocols.",
    practices: [
      "Maximum 1% risk per trade",
      "Dynamic position sizing",
      "Automated stop-loss placement",
      "Risk-reward ratio optimization"
    ],
    highlight: "Capital preservation is our #1 priority"
  },
  {
    icon: Scale,
    title: "Balanced Approach",
    description: "Learn to balance risk and reward ratios for consistent, sustainable trading results.",
    practices: [
      "Risk-reward minimum 1:2",
      "Portfolio diversification",
      "Correlation analysis",
      "Market condition adaptation"
    ],
    highlight: "Consistency over aggressive returns"
  },
  {
    icon: BookOpen,
    title: "Proven Methods",
    description: "Access battle-tested strategies that have helped members pass multiple funded challenges.",
    practices: [
      "Backtested strategies",
      "Real market validation",
      "Performance tracking",
      "Strategy optimization"
    ],
    highlight: "Data-driven approach to trading"
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Get personalized guidance from mentors who are invested in your success.",
    practices: [
      "1-on-1 mentoring sessions",
      "24/7 community support",
      "Trade review analysis",
      "Performance coaching"
    ],
    highlight: "We succeed when you succeed"
  }
];

export default function RiskApproach() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Risk Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trade with confidence using our proven risk management framework, designed to protect and grow your capital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
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
                    <principle.icon className="h-12 w-12 text-primary mb-4" />
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {principle.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    {principle.description}
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    {principle.practices.map((practice, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-primary italic">
                    "{principle.highlight}"
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}