import React from "react";
import j1 from "../assets/j1.PNG";
import j2 from "../assets/j2.PNG";
import j3 from "../assets/j3.PNG";
import j4 from "../assets/j4.PNG";
import j5 from "../assets/j5.PNG";
import j6 from "../assets/j6.JPG";

export default function Jour2() {
  const joueurs = [
    { id: 1, image: j1, nom: "Match 1" },
    { id: 2, image: j2, nom: "Match 2" },
    { id: 3, image: j3, nom: "Match 3" },
    { id: 4, image: j4, nom: "Match 4" },
    { id: 5, image: j5, nom: "Match 5" },
    { id: 6, image: j6, nom: "Match 6" },
  ];

  return (
    <section className=" bg-gradient-to-r from-red-500 to-yellow-700 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête stylisé */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" fill="white" opacity="0.15" />
              <circle cx="32" cy="32" r="18" fill="#FFD700" />
              <text
                x="32"
                y="37"
                textAnchor="middle"
                fill="#1a1a1a"
                fontSize="16"
                fontWeight="800"
              >
                2
              </text>
            </svg>
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              Joueurs du Jour 2
            </h2>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
              <path
                d="M10 50 L30 10"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.9"
              />
              <circle cx="46" cy="38" r="10" fill="white" opacity="0.2" />
              <circle cx="46" cy="38" r="5" fill="white" />
            </svg>
          </div>
          <p className="text-white/90 text-xl">
            QG Lounge 2025 • Tournoi de Billard
          </p>
        </div>

        {/* Grille de joueurs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {joueurs.map((joueur, index) => (
            <div
              key={joueur.id}
              className="group relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image du joueur */}
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={joueur.image}
                  alt={`Photo de ${joueur.nom}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400?text=Pas+d'image";
                  }}
                />
              </div>

              {/* Overlay au survol avec le nom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white text-lg font-bold bg-yellow-500/90 px-6 py-2 rounded-full shadow-lg">
                  {joueur.nom}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Badge "En action" en bas */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-white/90 font-medium">Journée en cours</span>
          </div>
        </div>
      </div>

      {/* Animation d’entrée */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
