import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Tyler Murray",
    text: "<strong>Passed 3 funded challenges in one month</strong> after joining. If you can manage risk its pretty hard not pass from just <strong>signal botting</strong>",
    initials: "TM"
  },
  {
    name: "Kyle Gosson",
    text: "I'd pay the membership just for the chat. <strong>Elite group 💪</strong>",
    initials: "KG"
  },
  {
    name: "Vinh T Nguyen",
    text: "<strong>Ant makes it too easy to learn how to trade</strong>",
    initials: "VN"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Member Triumphs: Real Traders, Real Results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/20">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}