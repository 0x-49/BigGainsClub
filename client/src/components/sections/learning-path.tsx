import { motion } from "framer-motion";
import { GraduationCap, Target, Trophy, Rocket } from "lucide-react";

const steps = [
  {
    icon: GraduationCap,
    title: "Foundation",
    description: "Master the fundamentals of technical analysis and risk management through our comprehensive A-Z course."
  },
  {
    icon: Target,
    title: "Practice",
    description: "Apply your knowledge with real-time market analysis and daily live trading sessions with expert mentors."
  },
  {
    icon: Trophy,
    title: "Achievement",
    description: "Pass funded trader challenges and start managing significant capital with our proven strategies."
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Scale your trading career with ongoing mentorship and advanced trading techniques."
  }
];

export default function LearningPath() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Path to Trading Mastery
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured approach to becoming a successful trader
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors">
                  <div className="bg-background rounded-full p-4 w-16 h-16 mx-auto mb-4 relative z-10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
