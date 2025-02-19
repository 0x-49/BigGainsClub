import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { GlowingButton } from "@/components/ui/glowing-button";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated with the latest trading insights.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to receive the latest trading insights and community updates
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50 backdrop-blur"
            />
            <GlowingButton type="submit">
              Subscribe
            </GlowingButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
