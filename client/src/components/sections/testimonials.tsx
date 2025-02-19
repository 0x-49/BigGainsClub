import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Tyler Murray",
    text: "Have passed 3 funded challenges in a little over a month after joining. If you can manage risk its pretty hard not pass from just signal botting",
    initials: "TM"
  },
  {
    name: "Kyle Gosson",
    text: "Best thing you can get for your money. I'd pay the membership just for the chat. Elite group 💪",
    initials: "KG"
  },
  {
    name: "Vinh T Nguyen",
    text: "Ant makes it too easy to learn how to trade",
    initials: "VN"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trader Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our community members
          </p>
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
                  <p className="text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
