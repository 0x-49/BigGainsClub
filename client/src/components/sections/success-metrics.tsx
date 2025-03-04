import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Target, ArrowUpRight } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "600+",
    label: "Active Traders: Printing Consistent Profits.",
    description: "",
    detail: "Our active community includes both novice and experienced traders from 30+ countries"
  },
  {
    icon: Award,
    value: "4.88",
    label: "4.88 Star Rating: 130+ Members Can't Be Wrong. Read the REAL reviews.",
    description: "",
    detail: "Consistently rated as one of the top trading communities on Whop"
  },
  {
    icon: TrendingUp,
    value: "3X",
    label: "3X Funded Challenges Passed: Our System WORKS to Get You Funded.",
    description: "",
    detail: "Our members have secured over $5M in combined funding accounts"
  },
  {
    icon: Target,
    value: "95%",
    label: "95% Success Rate: See Consistent Profitability in 90 Days. Or you're not serious enough.",
    description: "",
    detail: "Through our proven system of risk management and strategic trading"
  }
];

export default function SuccessMetrics() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proof is in the Profits
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative group"
            >
              <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:translate-y-[-5px]">
                <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {metric.value}
                </h3>
                <p className="text-xl font-semibold mb-2">{metric.label}</p>
                <p className="text-muted-foreground mb-4">{metric.description}</p>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                  <p className="text-sm text-primary/80 mt-2 italic">{metric.detail}</p>
                </div>
                <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}