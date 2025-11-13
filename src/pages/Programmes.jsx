import React from "react";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";
import Jour2 from "./Jour2";

export default function Programme() {
  const matches = [
    { id: 1, image: a, alt: "Match 1" },
    { id: 2, image: b, alt: "Match 2" },
    { id: 3, image: c, alt: "Match 3" },
    { id: 4, image: d, alt: "Match 4" },
    { id: 5, image: e, alt: "Match 5" },
    { id: 6, image: f, alt: "Match 6" },
  ];

  return (
    <>
      <section className="py-16 bg-gradient-to-r from-red-500 to-yellow-700 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
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
                  5j
                </text>
              </svg>

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
            <div className="text-center mb-5">
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
                    1
                  </text>
                </svg>
                <h2 className="text-4xl lg:text-6xl font-bold text-white">
                  Matchs du Jour 1
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
            </div>
            <p className="text-white/90 text-xl">
              QG Lounge 2025 • Tournoi de Billard
            </p>
          </div>

          {/* Galerie de photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match, index) => (
              <div
                key={match.id}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 shadow-2xl"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={match.image}
                    alt={match.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white text-lg font-bold bg-yellow-500/90 px-6 py-2 rounded-full shadow-lg">
                    Match {match.id}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer décoratif */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
              <span className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></span>
              <span className="text-white/90 font-medium">12/11/2025</span>
            </div>
          </div>
        </div>

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

      <Jour2 />
    </>
  );
}
