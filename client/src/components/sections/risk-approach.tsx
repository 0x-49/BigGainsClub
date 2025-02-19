import { motion } from "framer-motion";
import { Shield, Scale, BookOpen, HeartHandshake } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const principles = [
  {
    icon: Shield,
    title: "Protected Trading",
    description: "Our risk management strategies ensure your capital is always protected with strict stop-loss protocols."
  },
  {
    icon: Scale,
    title: "Balanced Approach",
    description: "Learn to balance risk and reward ratios for consistent, sustainable trading results."
  },
  {
    icon: BookOpen,
    title: "Proven Methods",
    description: "Access battle-tested strategies that have helped members pass multiple funded challenges."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Get personalized guidance from mentors who are invested in your success."
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
          <p className="text-lg text-muted-foreground">
            Trade with confidence using our proven risk management framework
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
              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-colors h-full">
                <CardHeader>
                  <principle.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{principle.title}</CardTitle>
                  <CardDescription className="text-base">{principle.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
