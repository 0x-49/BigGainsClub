import { motion } from "framer-motion";
import { MessageSquare, Users, TrendingUp } from "lucide-react";

export default function Community() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become Part of Something Bigger: Join the Big Gains Tribe
          </h2>
          <p className="text-lg text-muted-foreground">
            Join 600+ Ambitious Traders on the Path to Domination.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ruthlessly Supportive Community</h3>
            <p className="text-muted-foreground">
              Engage with <strong>battle-hardened traders</strong> in our <strong>exclusive premium Discord</strong>. Get honest feedback, share winning strategies, and <strong>rise together – or get left behind.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Alpha Insights & Live Market Breakdowns</h3>
            <p className="text-muted-foreground">
              <strong>Tap into the minds of our expert traders</strong> with daily market analysis and live trading insights. <strong>Unfiltered, actionable, and directly from the front lines of the market.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Relentless Focus on Growth & Profitability</h3>
            <p className="text-muted-foreground">
              We're not here for hand-holding. We're here for <strong>growth and profit.</strong> <strong>Learn, implement, dominate, repeat.</strong> This is a community built for <strong>results, not excuses.</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
