import React, { useState } from "react";

export default function Programme() {
  const matchesData = {
    matches: [
      {
        id: 1,
        status: "live",
        round: "1/4 Finale",
        player1: {
          name: "Armand",
          score: 6,
        },
        player2: {
          name: "Abou le Boss",
          score: 5,
        },
        table: "Table 1",
        time: "En cours",
      },
      {
        id: 2,
        status: "live",
        round: "1/4 Finale",
        player1: {
          name: "Kouassi",
          score: 4,
        },
        player2: {
          name: "Didier",
          score: 3,
        },
        table: "Table 2",
        time: "En cours",
      },
      {
        id: 3,
        status: "scheduled",
        round: "1/2 Finale",
        player1: {
          name: "En attente",
          score: null,
        },
        player2: {
          name: "En attente",
          score: null,
        },
        table: "Table 1",
        time: "21h30",
      },
      {
        id: 4,
        status: "finished",
        round: "1er Tour",
        player1: {
          name: "Yao",
          score: 7,
        },
        player2: {
          name: "Koffi",
          score: 4,
        },
        table: "Table 3",
        time: "Terminé",
      },
      {
        id: 5,
        status: "finished",
        round: "2e Tour",
        player1: {
          name: "Aya",
          score: 7,
        },
        player2: {
          name: "Boris",
          score: 6,
        },
        table: "Table 2",
        time: "Terminé",
      },
      {
        id: 6,
        status: "scheduled",
        round: "1/2 Finale",
        player1: {
          name: "En attente",
          score: null,
        },
        player2: {
          name: "En attente",
          score: null,
        },
        table: "Table 2",
        time: "22h00",
      },
    ],
  };

  const [filter, setFilter] = useState("all");

  const getStatusBadge = (status) => {
    const badges = {
      live: {
        bg: "bg-green-400 from-red-500 to-red-600",
        text: "En Direct",
        icon: "⚡",
        pulse: true,
      },
      scheduled: {
        bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
        text: "À venir",
        icon: "🕐",
        pulse: false,
      },
      finished: {
        bg: "bg-gradient-to-r from-gray-600 to-gray-700",
        text: "Terminé",
        icon: "✓",
        pulse: false,
      },
    };
    return badges[status];
  };

  const filteredMatches = matchesData.matches.filter(
    (m) => filter === "all" || m.status === filter
  );

  return (
    <section className="py-16 bg-gradient-to-br from-red-800 to-yellow-700 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
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
                8
              </text>
            </svg>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Programme du Tournoi
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
          <p className="text-white/90 text-lg">
            Suivez tous les matchs en temps réel • QG Lounge 2025
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              filter === "all"
                ? "bg-white text-red-600 shadow-lg scale-105"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            Tous les matchs ({matchesData.matches.length})
          </button>
          <button
            onClick={() => setFilter("live")}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === "live"
                ? "bg-white text-red-600 shadow-lg scale-105"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            En Direct (
            {matchesData.matches.filter((m) => m.status === "live").length})
          </button>
          <button
            onClick={() => setFilter("scheduled")}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              filter === "scheduled"
                ? "bg-white text-red-600 shadow-lg scale-105"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            À venir (
            {matchesData.matches.filter((m) => m.status === "scheduled").length}
            )
          </button>
          <button
            onClick={() => setFilter("finished")}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              filter === "finished"
                ? "bg-white text-red-600 shadow-lg scale-105"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            Terminés (
            {matchesData.matches.filter((m) => m.status === "finished").length})
          </button>
        </div>

        {/* Matchs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMatches.map((match) => {
            const badge = getStatusBadge(match.status);
            return (
              <div
                key={match.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02] shadow-xl"
              >
                {/* En-tête du match */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/20">
                  <div className="flex items-center gap-3">
                    <span
                      className={`${badge.bg} ${
                        badge.pulse ? "animate-pulse" : ""
                      } text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5`}
                    >
                      <span>{badge.icon}</span>
                      {badge.text}
                    </span>
                    <span className="text-yellow-300 font-bold text-sm bg-yellow-500/20 px-3 py-1.5 rounded-lg">
                      {match.round}
                    </span>
                  </div>
                  <div className="text-white/80 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-lg">
                    {match.table}
                  </div>
                </div>

                {/* Joueurs */}
                <div className="space-y-4 mb-5">
                  {/* Joueur 1 */}
                  <div className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center font-bold text-white shadow-lg">
                        {match.player1.name.charAt(0)}
                      </div>
                      <span className="text-white font-semibold text-lg">
                        {match.player1.name}
                      </span>
                    </div>
                    {match.player1.score !== null && (
                      <span className="text-3xl font-bold text-yellow-300">
                        {match.player1.score}
                      </span>
                    )}
                  </div>

                  {/* VS */}
                  <div className="flex justify-center">
                    <span className="text-white/60 font-bold text-md bg-white/5 px-4 py-1 rounded-lg">
                      VS
                    </span>
                  </div>

                  {/* Joueur 2 */}
                  <div className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center font-bold text-white shadow-lg">
                        {match.player2.name.charAt(0)}
                      </div>
                      <span className="text-white font-semibold text-lg">
                        {match.player2.name}
                      </span>
                    </div>
                    {match.player2.score !== null && (
                      <span className="text-3xl font-bold text-yellow-300">
                        {match.player2.score}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-medium">{match.time}</span>
                  </div>
                  {match.status === "live" && (
                    <button className="text-xs font-bold bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all shadow-md">
                      Voir en direct
                    </button>
                  )}
                  {match.status === "finished" && (
                    <span className="text-xs text-white/60 font-medium">
                      Match terminé
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Message si aucun match */}
        {filteredMatches.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                className="mx-auto mb-4 opacity-50"
              >
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                <path
                  d="M8 12h8M12 8v8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-white text-lg font-medium">
                Aucun match dans cette catégorie
              </p>
            </div>
          </div>
        )}

        {/* Légende en bas */}
        <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-white/90 font-medium">Match en direct</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="text-white/90 font-medium">Match à venir</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
              <span className="text-white/90 font-medium">Match terminé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
