import React from "react";
import { Link } from "react-router";
import { Calendar, Trophy } from "lucide-react";

export const Arret = () => {
  return (
    <section className=" flex flex-col items-center justify-center px-4 text-center">
      {/* Message principal */}
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-lg text-yellow-100/90">
          Pour des raisons techniques, les matchs en direct ne peuvent pas être
          visualisés pour l'instant. Découvrez le programme complet et suivez le
          classement en temps réel.
        </p>
      </div>

      {/* Deux boutons "gold" animés */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Bouton Programme */}
        <Link
          to="/programmes"
          className="group relative px-8 py-5 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-900 font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-yellow-400 hover:to-yellow-600 animate-pulse-slow"
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-gray-900" />
            Voir le Programme
          </div>
          <div className="absolute inset-0 rounded-2xl border border-yellow-400/40 animate-glow"></div>
        </Link>

        {/* Bouton Classement */}
        <Link
          to="/classements"
          className="group relative px-8 py-5 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-900 font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-yellow-400 hover:to-yellow-600 animate-pulse-slow"
        >
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-gray-900" />
            Voir le Classement
          </div>
          <div className="absolute inset-0 rounded-2xl border border-yellow-400/40 animate-glow"></div>
        </Link>
      </div>

      {/* Styles personnalisés pour les animations */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.6),
              0 0 20px rgba(255, 215, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.8),
              0 0 30px rgba(255, 215, 0, 0.6);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.92;
          }
        }
        .animate-glow {
          animation: glow 2.5s infinite;
          pointer-events: none;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};
