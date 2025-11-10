import { useState, useEffect } from "react";
import {
  Trophy,
  Medal,
  Star,
  TrendingUp,
  Award,
  Users,
  Target,
  Zap,
  Search,
  Filter,
} from "lucide-react";

export default function Joueurs() {
  const [joueurs, setJoueurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("points");

  useEffect(() => {
    // Charger les données depuis le fichier JSON
    const loadJoueurs = async () => {
      try {
        const response = await fetch("/Joueurs.json");

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des joueurs");
        }

        const data = await response.json();
        setJoueurs(data.joueurs || []);
        setLoading(false);
      } catch (err) {
        console.error("Erreur:", err);
        setLoading(false);

        // Données de secours
        // setJoueurs([
        //   {
        //     id: 1,
        //     nom: "Jean Dupont",
        //     points: 320,
        //     matchsJoues: 12,
        //     victoires: 9,
        //     defaites: 3,
        //     rang: 1,
        //   },
        //   {
        //     id: 2,
        //     nom: "Lucien Koné",
        //     points: 290,
        //     matchsJoues: 11,
        //     victoires: 8,
        //     defaites: 3,
        //     rang: 2,
        //   },
        //   {
        //     id: 3,
        //     nom: "David Traoré",
        //     points: 275,
        //     matchsJoues: 10,
        //     victoires: 7,
        //     defaites: 3,
        //     rang: 3,
        //   },
        //   {
        //     id: 4,
        //     nom: "Ali Coulibaly",
        //     points: 260,
        //     matchsJoues: 10,
        //     victoires: 7,
        //     defaites: 3,
        //     rang: 4,
        //   },
        //   {
        //     id: 5,
        //     nom: "Armand Kouassi",
        //     points: 245,
        //     matchsJoues: 9,
        //     victoires: 6,
        //     defaites: 3,
        //     rang: 5,
        //   },
        //   {
        //     id: 6,
        //     nom: "Abou le Boss",
        //     points: 230,
        //     matchsJoues: 9,
        //     victoires: 6,
        //     defaites: 3,
        //     rang: 6,
        //   },
        //   {
        //     id: 7,
        //     nom: "Yao N'Guessan",
        //     points: 215,
        //     matchsJoues: 8,
        //     victoires: 5,
        //     defaites: 3,
        //     rang: 7,
        //   },
        //   {
        //     id: 8,
        //     nom: "Didier Bamba",
        //     points: 200,
        //     matchsJoues: 8,
        //     victoires: 5,
        //     defaites: 3,
        //     rang: 8,
        //   },
        // ]);
      }
    };

    loadJoueurs();
  }, []);

  // Filtrer et trier les joueurs
  const filteredJoueurs = joueurs
    .filter((j) => j.nom.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "points") return b.points - a.points;
      if (sortBy === "victoires") return b.victoires - a.victoires;
      if (sortBy === "nom") return a.nom.localeCompare(b.nom);
      return 0;
    });

  const top3Joueurs = filteredJoueurs.slice(0, 3);
  const autresJoueurs = filteredJoueurs.slice(3);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Illustration SVG */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="80" fill="white" opacity="0.3" />
            <circle cx="600" cy="200" r="100" fill="white" opacity="0.4" />
            <circle cx="1000" cy="200" r="80" fill="white" opacity="0.3" />
            <path
              d="M600 100 L650 180 L730 190 L665 250 L680 330 L600 285 L520 330 L535 250 L470 190 L550 180 Z"
              fill="white"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Classement Officiel</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Les Joueurs du Tournoi
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Découvrez le classement et les statistiques de tous les participants
          </p>

          {/* Stats globales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <StatCard
              number={joueurs.length}
              label="Joueurs"
              icon={<Users />}
            />
            <StatCard
              number={joueurs.reduce((acc, j) => acc + j.matchsJoues, 0)}
              label="Matchs"
              icon={<Trophy />}
            />
            <StatCard
              number={joueurs.reduce((acc, j) => acc + j.victoires, 0)}
              label="Victoires"
              icon={<Award />}
            />
            <StatCard
              number={joueurs.reduce((acc, j) => acc + j.points, 0)}
              label="Points"
              icon={<Star />}
            />
          </div>
        </div>
      </section>

      {/* Podium Top 3 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Podium du Tournoi
            </h2>
            <p className="text-xl text-gray-600">
              Les 3 meilleurs joueurs du classement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {top3Joueurs.map((joueur, index) => (
              <PodiumCard
                key={joueur.id}
                joueur={joueur}
                position={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recherche et filtres */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un joueur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-all"
              />
            </div>

            {/* Filtres */}
            <div className="flex items-center gap-3">
              <Filter className="text-gray-600 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none bg-white font-semibold cursor-pointer"
              >
                <option value="points">Trier par points</option>
                <option value="victoires">Trier par victoires</option>
                <option value="nom">Trier par nom</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Liste complète des joueurs */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Classement Complet
            </h2>
            <p className="text-xl text-gray-600">
              {filteredJoueurs.length} joueur(s) inscrit(s)
            </p>
          </div>

          {/* Version Desktop - Tableau */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-red-600 to-yellow-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-bold">Rang</th>
                  <th className="py-4 px-6 text-left font-bold">Joueur</th>
                  <th className="py-4 px-6 text-center font-bold">Points</th>
                  <th className="py-4 px-6 text-center font-bold">Matchs</th>
                  <th className="py-4 px-6 text-center font-bold">Victoires</th>
                  <th className="py-4 px-6 text-center font-bold">Défaites</th>
                  <th className="py-4 px-6 text-center font-bold">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {filteredJoueurs.map((joueur, index) => (
                  <tr
                    key={joueur.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-yellow-50 transition-all duration-200 border-b border-gray-100`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {joueur.rang <= 3 ? (
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              joueur.rang === 1
                                ? "bg-yellow-400 text-white"
                                : joueur.rang === 2
                                ? "bg-gray-300 text-gray-800"
                                : "bg-orange-400 text-white"
                            }`}
                          >
                            {joueur.rang}
                          </div>
                        ) : (
                          <span className="text-gray-600 font-semibold w-8 text-center">
                            #{joueur.rang}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center text-white font-bold text-lg">
                          {joueur.nom.charAt(0)}
                        </div>
                        <span className="font-bold text-gray-900 text-lg">
                          {joueur.nom}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-full font-bold">
                        <Star className="w-4 h-4" />
                        {joueur.points}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-700">
                      {joueur.matchsJoues}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-green-600 font-bold">
                        {joueur.victoires}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-red-600 font-bold">
                        {joueur.defaites}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-gray-900">
                      {((joueur.victoires / joueur.matchsJoues) * 100).toFixed(
                        0
                      )}
                      %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Version Mobile - Cartes */}
          <div className="lg:hidden space-y-4">
            {filteredJoueurs.map((joueur) => (
              <JoueurCard key={joueur.id} joueur={joueur} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="w-20 h-20 mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Rejoignez le Tournoi !
          </h2>
          <p className="text-xl mb-8">
            Inscrivez-vous maintenant et faites partie de l'aventure
          </p>
          <button className="bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105">
            S'inscrire au tournoi
          </button>
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label, icon }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-3xl font-extrabold mb-1">{number}</div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}

function PodiumCard({ joueur, position }) {
  const getMedaille = () => {
    if (position === 1)
      return {
        emoji: "🥇",
        color: "from-yellow-400 to-yellow-600",
        bg: "bg-yellow-50",
        text: "text-yellow-600",
      };
    if (position === 2)
      return {
        emoji: "🥈",
        color: "from-gray-300 to-gray-500",
        bg: "bg-gray-50",
        text: "text-gray-600",
      };
    return {
      emoji: "🥉",
      color: "from-orange-400 to-orange-600",
      bg: "bg-orange-50",
      text: "text-orange-600",
    };
  };

  const medaille = getMedaille();
  const isFirst = position === 1;

  return (
    <div
      className={`${
        medaille.bg
      } rounded-2xl shadow-2xl p-8 text-center transition-all duration-300 hover:scale-105 border-4 ${
        isFirst ? "border-yellow-400 md:-mt-8" : "border-gray-200"
      }`}
    >
      <div className="text-7xl mb-4">{medaille.emoji}</div>

      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center text-white font-bold text-3xl shadow-xl">
        {joueur.nom.charAt(0)}
      </div>

      <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
        {joueur.nom}
      </h3>

      <div
        className={`inline-flex items-center gap-2 bg-gradient-to-r ${medaille.color} text-white px-6 py-3 rounded-full font-bold text-xl mb-6`}
      >
        <Star className="w-5 h-5" />
        {joueur.points} pts
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-900">
            {joueur.matchsJoues}
          </p>
          <p className="text-sm text-gray-600">Matchs</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-600">
            {joueur.victoires}
          </p>
          <p className="text-sm text-gray-600">Victoires</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-red-600">{joueur.defaites}</p>
          <p className="text-sm text-gray-600">Défaites</p>
        </div>
      </div>
    </div>
  );
}

function JoueurCard({ joueur }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center text-white font-bold text-2xl">
            {joueur.nom.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{joueur.nom}</h3>
            <p className="text-sm text-gray-600">Rang #{joueur.rang}</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-full font-bold">
          {joueur.points} pts
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-lg font-bold text-gray-900">
            {joueur.matchsJoues}
          </p>
          <p className="text-xs text-gray-600">Matchs</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <p className="text-lg font-bold text-green-600">{joueur.victoires}</p>
          <p className="text-xs text-gray-600">Victoires</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3">
          <p className="text-lg font-bold text-red-600">{joueur.defaites}</p>
          <p className="text-xs text-gray-600">Défaites</p>
        </div>
      </div>
    </div>
  );
}
