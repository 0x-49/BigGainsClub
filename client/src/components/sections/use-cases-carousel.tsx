import { useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const useCases = [
  {//1
    title: "Futures Scalping Success",
    trader: "Michael R.",
    profit: "$3,200",
    timeframe: "2 Hours",
    strategy: "ES Mini Futures",
    description: "Trade Breakdown: Michael used Big Gains Club volume profile analysis and order flow techniques to snag a rapid $3,200 scalp on ES Futures in just 2 hours. He spotted key support, nailed the order flow imbalance, locked in profits. Proof that our system delivers - FAST profits in ANY market.",
    keyPoints: []
  },
  {//2
    title: "Swing Trading Victory",
    trader: "Sarah K.",
    profit: "$5,800",
    timeframe: "5 Days",
    strategy: "Crypto Pairs",
    description: "Trade Breakdown: Sarah used a combination of technical analysis and market sentiment to capture a major trend in the ETH/USD pair, netting $5,800 in 5 days.",
    keyPoints: []
  },
  {//3
    title: "Options Strategy Win",
    trader: "David L.",
    profit: "$2,900",
    timeframe: "3 Days",
    strategy: "SPY Options",
    description: "Trade Breakdown: David executed a well-timed butterfly spread during earnings season, using volatility analysis to capture a $2,900 win in just 3 days.",
    keyPoints: []
  },
  {//4
    title: "Index Breakout Trade",
    trader: "Emma T.",
    profit: "$4,500",
    timeframe: "1 Day",
    strategy: "NQ Futures",
    description: "Trade Breakdown: Emma capitalized on a major technical breakout using volume confirmation and momentum indicators, netting $4,500 in just 1 day.",
    keyPoints: []
  },
  {//5
    title: "Forex Reversal Play",
    trader: "James H.",
    profit: "$3,700",
    timeframe: "4 Hours",
    strategy: "EUR/USD",
    description: "Trade Breakdown: James identified and traded a key reversal pattern using price action and institutional order flow, banking $3,700 in just 4 hours.",
    keyPoints: []
  },
  {//6
    title: "Commodity Trend Ride",
    trader: "Lisa M.",
    profit: "$6,200",
    timeframe: "1 Week",
    strategy: "Gold Futures",
    description: "Trade Breakdown: Lisa successfully rode a major trend in gold futures using a systematic trend-following approach, generating $6,200 in 1 week.",
    keyPoints: []
  },
  {
    title: "Crypto Arbitrage Success",
    trader: "Alex P.",
    profit: "$2,400",
    timeframe: "1 Day",
    strategy: "Cross-Exchange",
    description: "Trade Breakdown: Alex executed multiple arbitrage opportunities across different crypto exchanges, generating $2,400 in 1 day.",
    keyPoints: []
  },
  {//8
    title: "Stock Gap Trading",
    trader: "Rachel B.",
    profit: "$3,900",
    timeframe: "2 Hours",
    strategy: "Pre-Market Gaps",
    description: "Trade Breakdown: Rachel capitalized on pre-market gaps using statistical analysis and historical patterns, generating $3,900 in just 2 hours.",
    keyPoints: []
  },
  {
    title: "Options Flow Success",
    trader: "Kevin W.",
    profit: "$4,800",
    timeframe: "2 Days",
    strategy: "Unusual Options",
    description: "Trade Breakdown: Kevin followed smart money movement in the options market to capture a significant move, generating $4,800 in 2 days.",
    keyPoints: []
  },
  {//10
    title: "Day Trading Precision",
    trader: "Maria S.",
    profit: "$2,700",
    timeframe: "3 Hours",
    strategy: "Price Action",
    description: "Trade Breakdown: Maria executed multiple successful scalp trades using pure price action and level 2 data, generating $2,700 in just 3 hours.",
    keyPoints: []
  },
  {//11
    title: "Momentum Strategy Win",
    trader: "Chris P.",
    profit: "$5,400",
    timeframe: "4 Hours",
    strategy: "Momentum Stocks",
    description: "Trade Breakdown: Chris captured strong momentum moves in high-volume stocks during market hours, generating $5,400 in just 4 hours.",
    keyPoints: []
  },
  {//12
    title: "Mean Reversion Trade",
    trader: "Nina R.",
    profit: "$3,300",
    timeframe: "1 Day",
    strategy: "Statistical Arbitrage",
    description: "Trade Breakdown: Successfully executed mean reversion strategy on correlated pairs, generating $3,300 in 1 day.",
    keyPoints: []
  }
];

export default function UseCasesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Member Wins: See the Profits Flowing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our members achieve consistent profits using our proven strategies
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 h-full group hover:translate-y-[-5px]">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <Sparkles className="h-8 w-8 text-primary" />
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">{useCase.profit}</span>
                          <p className="text-sm text-muted-foreground">{useCase.timeframe}</p>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors mb-2">
                        {useCase.title}
                      </CardTitle>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium">{useCase.trader}</span>
                        <span className="text-sm text-muted-foreground">{useCase.strategy}</span>
                      </div>
                      <CardDescription className="text-base mb-4">
                        {useCase.description}
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {useCase.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur hidden md:flex"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur hidden md:flex"
            onClick={scrollNext}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
