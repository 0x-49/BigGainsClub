import { motion } from "framer-motion";
import { GraduationCap, Target, Trophy, Rocket, ArrowUpRight } from "lucide-react";

const steps = [
  {
    icon: GraduationCap,
    title: "Foundation",
    description: "Master the fundamentals of technical analysis and risk management through our comprehensive A-Z course.",
    milestones: [
      "Price action mastery",
      "Chart pattern recognition",
      "Risk management principles",
      "Trading psychology basics"
    ],
    duration: "Week 1-2"
  },
  {
    icon: Target,
    title: "Practice",
    description: "Apply your knowledge with real-time market analysis and daily live trading sessions with expert mentors.",
    milestones: [
      "Live market analysis",
      "Real-time trade execution",
      "Position sizing strategies",
      "Trade journal development"
    ],
    duration: "Week 2-4"
  },
  {
    icon: Trophy,
    title: "Achievement",
    description: "Pass funded trader challenges and start managing significant capital with our proven strategies.",
    milestones: [
      "Challenge preparation",
      "Risk parameters mastery",
      "Consistent execution",
      "Account scaling tactics"
    ],
    duration: "Week 4-6"
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Scale your trading career with ongoing mentorship and advanced trading techniques.",
    milestones: [
      "Advanced strategy development",
      "Portfolio management",
      "Market correlation analysis",
      "Professional networking"
    ],
    duration: "Week 6+"
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to becoming a successful trader, backed by expert mentorship and proven methodologies
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
                className="relative group"
              >
                <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="bg-background rounded-full p-4 w-16 h-16 mx-auto mb-4 relative z-10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">{step.description}</p>
                  <div className="space-y-2 text-sm">
                    {step.milestones.map((milestone, i) => (
                      <div key={i} className="flex items-center text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {milestone}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center text-sm font-medium text-primary">
                    {step.duration}
                  </div>
                  <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}