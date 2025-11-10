import { useEffect, useState } from "react";
import {
  Trophy,
  Star,
  Users,
  ChevronRight,
  Circle,
  CheckCircle,
} from "lucide-react";

/**
 * Classements.jsx
 * - Charge /matches.json (public)
 * - Calcule un classement simple basé sur les matchs terminés:
 *   played, wins, losses, framesFor, framesAgainst, diff
 * - Tri: wins DESC, diff DESC, framesFor DESC
 * - UI stylée avec animations et SVG décoratif
 */

export default function Classements() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch("/matches.json");
        if (!res.ok) throw new Error("Impossible de charger matches.json");
        const data = await res.json();
        if (!mounted) return;
        setMatches(data.matches || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        if (!mounted) return;
        setError(err.message);
        setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const computeStandings = (matchesList) => {
    const table = {}; // { name: { played, wins, losses, framesFor, framesAgainst } }

    matchesList.forEach((m) => {
      if (m.status !== "finished") return;
      const p1 = m.player1?.name ?? "Joueur 1";
      const p2 = m.player2?.name ?? "Joueur 2";
      const s1 = typeof m.player1?.score === "number" ? m.player1.score : null;
      const s2 = typeof m.player2?.score === "number" ? m.player2.score : null;
      if (s1 === null || s2 === null) return;

      if (!table[p1])
        table[p1] = {
          name: p1,
          played: 0,
          wins: 0,
          losses: 0,
          framesFor: 0,
          framesAgainst: 0,
        };
      if (!table[p2])
        table[p2] = {
          name: p2,
          played: 0,
          wins: 0,
          losses: 0,
          framesFor: 0,
          framesAgainst: 0,
        };

      table[p1].played += 1;
      table[p2].played += 1;
      table[p1].framesFor += s1;
      table[p1].framesAgainst += s2;
      table[p2].framesFor += s2;
      table[p2].framesAgainst += s1;

      if (s1 > s2) {
        table[p1].wins += 1;
        table[p2].losses += 1;
      } else if (s2 > s1) {
        table[p2].wins += 1;
        table[p1].losses += 1;
      } else {
        // improbable en billard, mais on peut compter demi-victoire si besoin (ici on ignore)
      }
    });

    const arr = Object.values(table).map((p) => ({
      ...p,
      diff: p.framesFor - p.framesAgainst,
    }));

    arr.sort((a, b) => {
      if (b.wins !== a.wins) return b.wins - a.wins; // wins desc
      if (b.diff !== a.diff) return b.diff - a.diff; // diff desc
      return b.framesFor - a.framesFor; // frames for desc
    });

    return arr;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-full border-4 border-t-4 border-red-600 animate-spin" />
          <div className="text-gray-600">Chargement des classements…</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-200 max-w-xl text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="font-bold text-lg text-red-600 mb-2">Erreur</h3>
          <p className="text-sm text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const standings = computeStandings(matches);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="relative mb-10 rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            {/* decorative circles */}
            <div className="absolute left-6 top-6 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute right-6 bottom-6 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-30" />
          </div>

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full border border-white/30 mb-4">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Classements Officiels</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Qui domine le tournoi ?
              </h1>
              <p>
                La compétition bat son plein, et le classement provisoire
                commence à se dessiner. Le leader est déterminé en fonction de
                plusieurs indicateurs de performance, dans l'ordre de priorité
                suivant : le nombre
                <span className="font-bold text-amber-900 ml-1.5">
                  de victoires
                </span>{" "}
                est le critère le plus important, suivi par
                <span className="font-bold ">
                  {" "}
                  la différence de frames
                </span>{" "}
                pour départager les joueurs en cas d'égalité, et enfin les{" "}
                <span className="font-bold "> frames marqués</span> comme
                dernier critère.
              </p>
            </div>

            {/* SVG representative: podium + balls */}
            <div className="w-44 h-44 relative">
              <svg viewBox="0 0 160 160" className="w-full h-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* podium */}
                <rect
                  x="20"
                  y="90"
                  width="40"
                  height="50"
                  rx="6"
                  fill="#fff"
                  opacity="0.12"
                />
                <rect
                  x="60"
                  y="70"
                  width="40"
                  height="70"
                  rx="6"
                  fill="#fff"
                  opacity="0.18"
                />
                <rect
                  x="100"
                  y="100"
                  width="40"
                  height="40"
                  rx="6"
                  fill="#fff"
                  opacity="0.1"
                />

                {/* balls */}
                <circle
                  cx="80"
                  cy="40"
                  r="14"
                  fill="#FDE68A"
                  className="transform origin-center animate-bounce"
                />
                <circle
                  cx="120"
                  cy="50"
                  r="8"
                  fill="#FECDD3"
                  className="animate-pulse"
                />
                <circle cx="40" cy="52" r="10" fill="#FCA5A5" />

                {/* small sparkle */}
                <path
                  d="M14 18 L18 24 L24 26 L18 28 L14 34 L12 28 L6 26 L12 24 Z"
                  fill="#fff"
                  opacity="0.6"
                />
              </svg>
              <div className="absolute -right-2 -top-2 bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-white/20">
                <Star className="w-4 h-4" />
                Top
              </div>
            </div>
          </div>
        </header>

        {/* Leaderboard */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="w-6 h-6 text-red-600" />
              Classement
            </h2>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition">
              Voir détails
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {standings.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              Aucun résultat définitif pour le moment.
            </div>
          ) : (
            <div className="divide-y">
              {standings.map((p, idx) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-4 py-4 px-3 rounded-xl transition-transform transform hover:scale-[1.01] ${
                    idx < 3 ? "bg-gradient-to-r from-yellow-50 to-white/70" : ""
                  }`}
                >
                  <div className="w-12 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md ${
                        idx === 0
                          ? "bg-yellow-400 text-white animate-pulse"
                          : idx === 1
                          ? "bg-gray-300 text-gray-800"
                          : idx === 2
                          ? "bg-amber-300 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {idx < 3 ? ["🥇", "🥈", "🥉"][idx] : idx + 1}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="truncate">
                        <div className="font-semibold text-gray-900">
                          {p.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {p.played} matchs joués
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-extrabold text-gray-900">
                          {p.wins} - {p.losses}
                        </div>
                        <div className="text-xs text-gray-500">vic / déf</div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-red-50 rounded text-red-600 font-semibold">
                          {p.framesFor}
                        </div>
                        <span className="text-gray-400">GF</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-gray-50 rounded text-gray-700 font-semibold">
                          {p.framesAgainst}
                        </div>
                        <span className="text-gray-400">GA</span>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <div className="text-xs text-gray-500">Diff</div>
                        <div
                          className={`px-2 py-0.5 rounded font-bold ${
                            p.diff >= 0
                              ? "bg-green-50 text-green-600"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          {p.diff >= 0 ? `+${p.diff}` : p.diff}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer small legend */}
          <div className="mt-6 text-sm text-gray-500 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-red-600" />
              <span>Victoire = 1</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>Top 3 animé</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
