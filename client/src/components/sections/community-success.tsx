import { motion } from "framer-motion";
import { Trophy, ArrowUpRight, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const successStories = [
  {
    name: "Tyler Murray",
    achievement: "Passed 3 funded challenges in one month",
    quote: "If you can manage risk its pretty hard not pass from just signal botting. Love the tips from both Don and Antonio",
    rating: 5
  },
  {
    name: "Matthew Geary",
    achievement: "Consistently profitable after 3 weeks",
    quote: "After 1 week of being in and listening to the daily 9:30 live stream from Antonio and others, I knew these guys knew what they were doing.",
    rating: 5
  },
  {
    name: "Kylie Camara",
    achievement: "Successfully transitioned to futures trading",
    quote: "Easily the best discord out there. Have been in for about a month and a half now and have learned so much.",
    rating: 5
  }
];

export default function CommunitySuccess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Join traders who transformed their careers with Big Gains Club
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-colors h-full relative group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                    <div className="flex gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {story.achievement}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    "{story.quote}"
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-4">
                    - {story.name}
                  </p>
                  <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
