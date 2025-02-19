import { motion } from "framer-motion";

export default function TradingTerminal() {
  return (
    <div className="bg-black p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-48 rounded bg-[url('https://images.unsplash.com/photo-1644361566696-3d442b5b482a')] bg-cover bg-center"
        />

        <div className="grid grid-cols-2 gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-24 rounded bg-[url('https://images.unsplash.com/photo-1644363832001-0876e81f37a9')] bg-cover bg-center"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-24 rounded bg-[url('https://images.unsplash.com/photo-1640661089711-708d6043d0c7')] bg-cover bg-center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded bg-card/30 p-3 font-mono text-sm"
        >
          <div className="text-primary">{">"} Analyzing market patterns...</div>
          <div className="text-muted-foreground">{">"} Signal detected: LONG BTC/USD</div>
          <div className="text-primary animate-pulse">{">"} _</div>
        </motion.div>
      </div>
    </div>
  );
}
