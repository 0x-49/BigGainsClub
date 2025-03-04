import { motion } from "framer-motion";
import { Shield, Scale, BookOpen, HeartHandshake, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const principles = [
  {
    icon: Shield,
    title: "Protected Trading: Capital Preservation is King.",
    description: "Our <strong>ironclad risk management strategies</strong> ensure your capital is always protected. <strong>Strict stop-loss protocols, dynamic position sizing, automated risk controls.</strong> Capital preservation isn't just a priority, it's <strong>Rule #1.</strong>",
    practices: [],
    highlight: "Capital preservation is our #1 priority"
  },
  {
    icon: Scale,
    title: "Balanced Approach: Risk vs. Reward Mastery.",
    description: "Learn to <strong>dance the line between risk and reward</strong> for consistent, sustainable profits. <strong>Minimum 1:2 risk-reward, portfolio diversification, market adaptation tactics.</strong>",
    practices: [],
    highlight: "Consistency over aggressive returns"
  },
  {
    icon: BookOpen,
    title: "Proven Methods: Battle-Tested Strategies for Challenge Domination.",
    description: "Access <strong>battle-tested strategies</strong> that have already helped countless members <strong>crush funded challenges.</strong>",
    practices: [],
    highlight: "Data-driven approach to trading"
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Mentorship: Your Success is Our Mission.",
    description: "Get <strong>personalized guidance from mentors who are as invested in your success as you are.</strong>",
    practices: [],
    highlight: "We succeed when you succeed"
  }
];

export default function RiskApproach() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trade Like a Pro, Protect Your Bankroll
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <strong>Trade with Unshakeable Confidence: Master Risk Management Like the Elite.</strong> Our <strong>proven risk management framework</strong> is your shield and your sword – designed to <strong>protect your capital and fuel explosive growth. Trade smart, trade strong, trade like a 1%er.</strong>
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
              <Card className="bg-card/50 backdrop-blur border border-primary/20 hover:border-primary/40 transition-all duration-300 h-full group hover:translate-y-[-5px]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <principle.icon className="h-12 w-12 text-primary mb-4" />
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {principle.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    <span dangerouslySetInnerHTML={{ __html: principle.description }} />
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