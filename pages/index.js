import { motion } from "framer-motion";
import { Globe, Timer, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          VantaTrade
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl">
          India's first elite prop trading firm. Powered by data. Built for traders.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <button className="px-8 py-4 text-lg rounded-2xl shadow-xl bg-white text-black hover:scale-105 transition">
            Join the Free Challenge
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-3xl max-w-xs mx-auto">
            <div className="flex flex-col items-center gap-4">
              <Timer className="w-8 h-8 text-teal-300" />
              <p className="text-sm">Launch countdown ends in:</p>
              <h2 className="text-3xl font-semibold">42 Days 10 Hours</h2>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-24 py-24">
        <div className="bg-white/5 p-6 rounded-3xl text-center">
          <Globe className="w-10 h-10 text-purple-300 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Global Leaderboard</h3>
          <p className="text-gray-400 text-sm mt-2">Compete with elite traders worldwide. Rise to the top.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-3xl text-center">
          <Trophy className="w-10 h-10 text-yellow-300 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">$50,000 Funded Accounts</h3>
          <p className="text-gray-400 text-sm mt-2">Pass the challenge. Get funded. Keep 80% of profits.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-3xl text-center">
          <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
            <div className="bg-green-400 h-3 w-3/4"></div>
          </div>
          <h3 className="text-xl font-semibold mt-4">Your Progress</h3>
          <p className="text-gray-400 text-sm mt-2">Track performance, win rate, and funding readiness.</p>
        </div>
      </section>
    </div>
  );
}
