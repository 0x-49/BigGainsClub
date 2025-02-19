import { motion } from "framer-motion";
import { MessageSquare, Users, TrendingUp } from "lucide-react";

export default function Community() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Trading Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect, learn, and grow with over 600+ active traders
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
            <h3 className="text-xl font-semibold mb-2">Active Community</h3>
            <p className="text-muted-foreground">
              Engage with experienced traders in our premium Discord server
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
            <h3 className="text-xl font-semibold mb-2">Live Discussions</h3>
            <p className="text-muted-foreground">
              Daily market analysis and trading insights from our experts
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
            <h3 className="text-xl font-semibold mb-2">Growth Focus</h3>
            <p className="text-muted-foreground">
              Learn, implement, and improve your trading strategy
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
