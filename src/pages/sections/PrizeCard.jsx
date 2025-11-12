import React from "react";
import { motion } from "framer-motion";

export default function PrizeCard({ rank, title, prize, bonus, highlight }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`relative p-8 rounded-2xl border text-center shadow-lg backdrop-blur-md transition-all duration-300
        ${
          highlight
            ? "bg-white/20 border-white/40 shadow-yellow-300/30"
            : "bg-white/10 border-white/20"
        }
      `}
    >
      {/* Effet lumineux décoratif */}
      {highlight && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-red-600/30 blur-xl opacity-20"></div>
      )}

      <div className="relative z-10">
        {/* Rang ou icône */}
        <div className="text-5xl mb-4 drop-shadow-lg">{rank}</div>

        {/* Titre */}
        <h3 className="text-2xl font-extrabold mb-2">{title}</h3>

        {/* Montant du prix */}
        <p className="text-yellow-200 text-lg font-semibold mb-3">{prize}</p>

        {/* Description ou bonus */}
        <p className="text-white/80 text-sm leading-relaxed">{bonus}</p>
      </div>
    </motion.div>
  );
}
