import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "600+",
    label: "Active Traders",
    description: "Join our thriving community of dedicated traders"
  },
  {
    icon: Award,
    value: "4.88",
    label: "Rating",
    description: "Based on 130+ verified member reviews"
  },
  {
    icon: TrendingUp,
    value: "3X",
    label: "Funded Challenges",
    description: "Members passing funded trader programs"
  },
  {
    icon: Target,
    value: "95%",
    label: "Success Rate",
    description: "Members achieving consistent profitability"
  }
];

export default function SuccessMetrics() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground">
            Our members consistently achieve remarkable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors">
                <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-primary mb-2">{metric.value}</h3>
                <p className="text-xl font-semibold mb-2">{metric.label}</p>
                <p className="text-muted-foreground">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
