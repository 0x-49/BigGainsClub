import { motion } from "framer-motion";
import { GraduationCap, Target, Trophy, Rocket, ArrowUpRight } from "lucide-react";

const steps = [
  {
    icon: GraduationCap,
    title: "Foundation: Build Your Trading Base (Weeks 1-2).",
    description: "Master the <strong>essential</strong> technical analysis and risk management – <strong>no fluff, just what prints profits.</strong> Learn price action secrets, chart patterns, and the psychology of winning traders. <strong>Skip the years of trial and error. Get the core knowledge, fast.</strong>",
    milestones: [],
    duration: "Week 1-2"
  },
  {
    icon: Target,
    title: "Practice: Trade with the Pros (Weeks 2-4).",
    description: "<strong>Stop paper trading and start learning in LIVE FIRE.</strong> Apply your knowledge in <strong>real-time market analysis and daily trading sessions with expert mentors.</strong> <strong>Execute trades, learn proper sizing, and build your trading journal – all with expert guidance.</strong>",
    milestones: [],
    duration: "Week 2-4"
  },
  {
    icon: Trophy,
    title: "Achievement: Get Funded & Get Paid (Weeks 4-6).",
    description: "<strong>Stop trading with peanuts.</strong> Our <strong>proven strategies are designed to pass funded trader challenges – FAST.</strong> Master risk parameters, consistent execution, and scaling tactics to <strong>manage real capital and claim your payouts.</strong>",
    milestones: [],
    duration: "Week 4-6"
  },
  {
    icon: Rocket,
    title: "Growth: Scale to the Top (Week 6+).",
    description: "<strong>The journey never ends. Scale your trading career with ongoing mentorship and advanced techniques.</strong> Develop advanced strategies, portfolio management skills, and <strong>build your network to reach the highest levels of trading success.</strong> <strong>The 1% lifestyle awaits.</strong>",
    milestones: [],
    duration: "Week 6+"
  }
];

export default function LearningPath() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Fast-Track to Trading Domination
          </h2>
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
                  <p className="text-muted-foreground text-center mb-4" dangerouslySetInnerHTML={{ __html: step.description }} />
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