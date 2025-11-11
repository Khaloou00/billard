import { useState, useEffect } from "react";
import {
  Trophy,
  Calendar,
  Users,
  Award,
  MapPin,
  DollarSign,
  ChevronRight,
  Star,
  Zap,
  Target,
  Clock,
  CheckCircle,
  Circle,
  Play,
} from "lucide-react";
import { Link } from "react-router";
import regledejeu from "../assets/regle.pdf";
import { FaFrancSign, FaTicket } from "react-icons/fa6";
import vi from "../assets/viob.mp4";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden text-white flex items-center justify-center py-20 md:py-0">
        {/* 🔹 Vidéo en arrière-plan */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 object-cover 
          md:w-[60%] lg:w-full h-full"
        >
          <source src={vi} type="video/mp4" />
        </video>

        {/* 🔹 Overlay sombre pour contraste */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        {/* 🔹 Contenu principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Tournoi Officiel 2025</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mt-10 md:mt-0">
            QUI SERA
            <br />
            <span className="text-5xl md:text-8xl bg-white text-transparent bg-clip-text drop-shadow-2xl">
              THE KING OF THE TABLE ?
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto px-2">
            Le plus grand tournoi de billard de Côte d'Ivoire organisé par le QG
            Lounge Bar
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              to="/inscription"
              className="group bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:scale-105"
            >
              S'inscrire maintenant
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={regledejeu}
              download="regle_du_tournoi_QGlounge.pdf"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Voir le règlement
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <StatCard number="1Million" label="Cagnotte✨" icon={<Trophy />} />
            <StatCard number="32" label="Joueurs" icon={<Users />} />
            <StatCard number="5" label="Jours" icon={<Calendar />} />
            <StatCard
              number="25.000F"
              label="Inscription"
              icon={<FaTicket />}
            />
          </div>
        </div>
      </section>

      {/* Matchs en cours et à venir */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Matchs du Tournoi
            </h2>
            <p className="text-xl text-gray-600">
              Suivez les résultats en temps réel
            </p>
          </div>

          <LiveMatchesSection />
        </div>
      </section>

      {/* Informations clés */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Informations Essentielles
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur le tournoi
            </p>

            {/* Illustration décorative */}
            <svg
              className="w-full h-32 mx-auto mt-8 opacity-20"
              viewBox="0 0 800 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Ligne décorative avec boules */}
              <line
                x1="50"
                y1="60"
                x2="750"
                y2="60"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="10,5"
              />
              <circle cx="200" cy="60" r="15" fill="#DC2626" />
              <circle cx="400" cy="60" r="20" fill="#EAB308" />
              <circle cx="600" cy="60" r="15" fill="#DC2626" />

              {/* Étoiles */}
              <path
                d="M100 60 L105 50 L110 60 L120 65 L110 70 L105 80 L100 70 L90 65 Z"
                fill="#EAB308"
              />
              <path
                d="M700 60 L705 50 L710 60 L720 65 L710 70 L705 80 L700 70 L690 65 Z"
                fill="#EAB308"
              />

              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="100%" stopColor="#EAB308" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard
              icon={<Calendar size={32} />}
              title="Dates du tournoi"
              description="12 au 16 novembre 2025"
              details="Matchs chaque soir à partir de 19h00"
            />
            <InfoCard
              icon={<MapPin size={32} />}
              title="Lieu"
              description="QG Lounge Bar"
              details="Tables officielles de compétition"
            />
            <InfoCard
              icon={<DollarSign size={32} />}
              title="Inscription"
              description="25 000 FCFA"
              details="Paiement en espèces ou Wave"
            />
            <InfoCard
              icon={<Users size={32} />}
              title="Participants"
              description="32 joueurs maximum"
              details="Inscription par ordre d'arrivée"
            />
            <InfoCard
              icon={<Trophy size={32} />}
              title="Format"
              description="Élimination directe"
              details="Du 1er tour jusqu'à la finale"
            />
            <InfoCard
              icon={<Award size={32} />}
              title="Récompenses"
              description="800 000 FCFA"
              details="+ Trophées et prix spéciaux"
            />
          </div>
        </div>
      </section>

      {/* Récompenses */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Récompenses Exceptionnelles
            </h2>
            <p className="text-xl text-white/90">
              Plus de 800 000 FCFA de prix à remporter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PrizeCard
              rank="🥇"
              title="Champion"
              prize="500 000 FCFA"
              bonus="+ Trophée + Titre"
              highlight={true}
            />
            <PrizeCard
              rank="🥈"
              title="Finaliste"
              prize="250 000 FCFA"
              bonus="+ Médaille"
            />
            <PrizeCard
              rank="🥉"
              title="Demi-finalistes"
              prize="100 000 FCFA"
              bonus="Chacun + Médaille"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg bg-white/20 backdrop-blur-sm inline-block px-8 py-4 rounded-full border border-white/30">
              <Star className="inline w-5 h-5 mr-2" />
              Prix spéciaux : Fair-play • Meilleur coup • Révélation du tournoi
            </p>
          </div>
        </div>
      </section>

      {/* Format de compétition */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Format de la Compétition
            </h2>
            <p className="text-xl text-gray-600">
              Élimination directe avec des matchs intensifs
            </p>

            {/* Illustration bracket de tournoi */}
            <svg
              className="w-full h-48 mx-auto mt-8"
              viewBox="0 0 800 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Bracket simplifié */}
              <defs>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="100%" stopColor="#EAB308" />
                </linearGradient>
              </defs>

              {/* Round 1 */}
              <rect
                x="50"
                y="40"
                width="80"
                height="30"
                rx="5"
                fill="url(#gradient2)"
                opacity="0.2"
              />
              <rect
                x="50"
                y="130"
                width="80"
                height="30"
                rx="5"
                fill="url(#gradient2)"
                opacity="0.2"
              />

              {/* Lignes de connexion */}
              <path
                d="M130 55 L180 55 L180 100 L230 100"
                stroke="url(#gradient2)"
                strokeWidth="3"
              />
              <path
                d="M130 145 L180 145 L180 100 L230 100"
                stroke="url(#gradient2)"
                strokeWidth="3"
              />

              {/* Round 2 */}
              <rect
                x="230"
                y="85"
                width="80"
                height="30"
                rx="5"
                fill="url(#gradient2)"
                opacity="0.3"
              />

              {/* Connexion vers demi-finale */}
              <path
                d="M310 100 L360 100 L360 100 L410 100"
                stroke="url(#gradient2)"
                strokeWidth="3"
              />

              {/* Demi-finale */}
              <rect
                x="410"
                y="85"
                width="80"
                height="30"
                rx="5"
                fill="url(#gradient2)"
                opacity="0.4"
              />

              {/* Connexion vers finale */}
              <path
                d="M490 100 L540 100"
                stroke="url(#gradient2)"
                strokeWidth="3"
              />

              {/* Finale avec trophée */}
              <rect
                x="540"
                y="85"
                width="100"
                height="30"
                rx="8"
                fill="url(#gradient2)"
                opacity="0.6"
              />

              {/* Trophée au centre */}
              <g transform="translate(690, 85)">
                <path d="M20 0 L30 0 L32 10 L18 10 Z" fill="#EAB308" />
                <rect x="22" y="10" width="6" height="8" fill="#EAB308" />
                <rect
                  x="18"
                  y="18"
                  width="14"
                  height="3"
                  rx="1"
                  fill="#EAB308"
                />
                <circle cx="25" cy="-5" r="6" fill="#EAB308" opacity="0.5" />
              </g>

              {/* Texte décoratif */}
              <text
                x="590"
                y="105"
                fill="#DC2626"
                fontSize="12"
                fontWeight="bold"
              >
                FINAL
              </text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <RoundCard stage="1er Tour" players="32 → 16" format="Race to 7" />
            <RoundCard stage="2e Tour" players="16 → 8" format="Race to 7" />
            <RoundCard stage="1/4 Finale" players="8 → 4" format="Race to 8" />
            <RoundCard stage="1/2 Finale" players="4 → 2" format="Race to 9" />
            <RoundCard
              stage="Finale"
              players="2 → 1"
              format="Race to 10"
              highlight={true}
            />
          </div>
        </div>
      </section>

      {/* Pourquoi participer */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Pourquoi Participer ?
            </h2>
            <p className="text-xl text-gray-600">
              Une expérience unique et des opportunités exceptionnelles
            </p>

            {/* Illustration motivante */}
            <svg
              className="w-full h-40 mx-auto mt-8 opacity-10 absolute top-0 left-0"
              viewBox="0 0 1000 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Couronne de laurier stylisée */}
              <path
                d="M200 80 Q250 50, 300 80 Q350 50, 400 80 Q450 50, 500 80 Q550 50, 600 80 Q650 50, 700 80 Q750 50, 800 80"
                stroke="#DC2626"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M200 80 Q250 110, 300 80 Q350 110, 400 80 Q450 110, 500 80 Q550 110, 600 80 Q650 110, 700 80 Q750 110, 800 80"
                stroke="#EAB308"
                strokeWidth="3"
                fill="none"
              />

              {/* Étoiles scintillantes */}
              <g opacity="0.6">
                <circle cx="150" cy="80" r="3" fill="#EAB308" />
                <circle cx="850" cy="80" r="3" fill="#EAB308" />
                <path
                  d="M500 30 L505 40 L515 42 L507 50 L509 60 L500 55 L491 60 L493 50 L485 42 L495 40 Z"
                  fill="#EAB308"
                />
              </g>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Trophy size={40} />}
              title="Compétition de haut niveau"
              description="Affrontez les meilleurs joueurs de Côte d'Ivoire dans un tournoi officiel supervisé par la CIB"
            />
            <FeatureCard
              icon={<Award size={40} />}
              title="Récompenses généreuses"
              description="Plus de 800 000 FCFA de prix et de nombreuses distinctions à remporter"
            />
            <FeatureCard
              icon={<Zap size={40} />}
              title="Visibilité médiatique"
              description="Diffusion en direct sur Facebook, TikTok et YouTube avec des milliers de spectateurs"
            />
            <FeatureCard
              icon={<Target size={40} />}
              title="Environnement professionnel"
              description="Tables officielles, arbitrage certifié et organisation irréprochable"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Prêt à devenir the King of the Table ?
          </h2>
          <p className="text-xl text-white/90">
            Les inscriptions sont ouvertes ! Seulement 32 places disponibles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link to="/inscription">
              <button className="group bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:scale-105">
                <CheckCircle className="w-6 h-6" />
                Inscription immédiate
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Places limitées</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span>Tournoi officiel</span>
            </div>
          </div>
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

function InfoCard({ icon, title, description, details }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-yellow-400">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-2xl font-extrabold text-gray-900 mb-2">
        {description}
      </p>
      <p className="text-gray-600">{details}</p>
    </div>
  );
}

function PrizeCard({ rank, title, prize, bonus, highlight }) {
  return (
    <div
      className={`rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 ${
        highlight
          ? "bg-white text-gray-900 shadow-2xl border-4 border-yellow-400"
          : "bg-white/10 backdrop-blur-sm border-2 border-white/30"
      }`}
    >
      <div className="text-6xl mb-4">{rank}</div>
      <h3
        className={`text-2xl font-bold mb-4 ${
          highlight ? "text-gray-900" : "text-white"
        }`}
      >
        {title}
      </h3>
      <div
        className={`text-4xl font-extrabold mb-2 ${
          highlight ? "text-red-600" : "text-white"
        }`}
      >
        {prize}
      </div>
      <p className={`${highlight ? "text-gray-600" : "text-white/80"}`}>
        {bonus}
      </p>
    </div>
  );
}

function RoundCard({ stage, players, format, highlight }) {
  return (
    <div
      className={`rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
        highlight
          ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-2xl"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="text-lg font-bold mb-2">{stage}</div>
      <div className="text-3xl font-extrabold mb-2">{players}</div>
      <div
        className={`text-sm ${highlight ? "text-white/90" : "text-gray-600"}`}
      >
        {format}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-400">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function LiveMatchesSection() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Charger les données depuis le fichier JSON
    const loadMatches = async () => {
      try {
        // Chemin vers votre fichier matches.json dans le dossier public
        const response = await fetch("/matches.json");

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des matchs");
        }

        const data = await response.json();
        setMatches(data.matches || []);
        setLoading(false);
      } catch (err) {
        console.error("Erreur:", err);
        setError(err.message);
        setLoading(false);

        // Données de secours en cas d'erreur
        setMatches([
          {
            id: 1,
            status: "live",
            round: "1/4 Finale",
            player1: { name: "Armand", score: 6 },
            player2: { name: "Abou le Boss", score: 5 },
            table: "Table 1",
            time: "En cours",
          },
          {
            id: 2,
            status: "live",
            round: "1/4 Finale",
            player1: { name: "Kouassi", score: 4 },
            player2: { name: "Didier", score: 3 },
            table: "Table 2",
            time: "En cours",
          },
        ]);
      }
    };

    loadMatches();

    // Recharger les données toutes les 30 secondes pour les mises à jour en temps réel
    const interval = setInterval(loadMatches, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
        <p className="text-red-600 font-semibold">
          Impossible de charger les matchs pour le moment.
        </p>
        <p className="text-gray-600 mt-2">Veuillez réessayer plus tard.</p>
      </div>
    );
  }

  const liveMatches = matches.filter((m) => m.status === "live");
  const scheduledMatches = matches.filter((m) => m.status === "scheduled");
  const finishedMatches = matches.filter((m) => m.status === "finished");

  return (
    <div className="space-y-12">
      {/* Matchs en direct */}
      {liveMatches.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-full font-bold shadow-lg">
              <Circle className="w-3 h-3 bg-green-800 fill-green-500 rounded-full animate-pulse" />
              EN DIRECT
            </div>
            <p className="text-gray-600 font-semibold">
              {liveMatches.length} match(s) en cours
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Matchs à venir */}
      {scheduledMatches.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-gray-600 text-white px-5 py-3 rounded-full font-bold shadow-lg">
              <Clock className="w-4 h-4" />À VENIR
            </div>
            <p className="text-gray-600 font-semibold">
              {scheduledMatches.length} match(s) programmé(s)
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {scheduledMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Matchs terminés */}
      {finishedMatches.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg">
              <CheckCircle className="w-4 h-4" />
              TERMINÉS
            </div>
            <p className="text-gray-600 font-semibold">
              {finishedMatches.length} dernier(s) résultat(s)
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {finishedMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MatchCard({ match }) {
  const getStatusColor = () => {
    switch (match.status) {
      case "live":
        return "from-red-600 to-red-500";
      case "scheduled":
        return "from-gray-600 to-gray-500";
      case "finished":
        return "from-green-600 to-green-500";
      default:
        return "from-gray-600 to-gray-500";
    }
  };

  const isLive = match.status === "live";
  const isFinished = match.status === "finished";
  const winner = isFinished
    ? match.player1.score > match.player2.score
      ? "player1"
      : "player2"
    : null;

  return (
    <div
      className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
        isLive ? "border-red-500 shadow-red-200" : "border-gray-200"
      }`}
    >
      {/* En-tête */}
      <div
        className={`bg-gradient-to-r ${getStatusColor()} text-white px-6 py-4 flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg">{match.round}</span>
          {isLive && (
            <Circle className="w-3 h-3 bg-green-800 fill-green-500 rounded-full animate-pulse" />
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">{match.table}</span>
          <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
            {match.time}
          </span>
        </div>
      </div>

      {/* Corps du match */}
      <div className="p-6">
        {/* Joueur 1 */}
        <div
          className={`flex items-center justify-between pb-5 mb-5 border-b-2 ${
            winner === "player1" ? "border-yellow-400" : "border-gray-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {match.player1.name.charAt(0)}
            </div>
            <div>
              <p
                className={`font-bold text-xl ${
                  winner === "player1" ? "text-yellow-600" : "text-gray-900"
                }`}
              >
                {match.player1.name}
              </p>
              {winner === "player1" && (
                <p className="text-xs text-yellow-600 font-bold flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  VAINQUEUR
                </p>
              )}
            </div>
          </div>
          {match.player1.score !== null && (
            <div
              className={`text-5xl font-extrabold ${
                winner === "player1" ? "text-yellow-600" : "text-gray-900"
              }`}
            >
              {match.player1.score}
            </div>
          )}
        </div>

        {/* VS Divider */}
        <div className="flex justify-center -my-3 mb-5">
          <span className="bg-gray-100 text-gray-500 font-bold text-[28px] px-4 py-1 rounded-full">
            VS
          </span>
        </div>

        {/* Joueur 2 */}
        <div
          className={`flex items-center justify-between pt-5 mt-5 border-t-2 ${
            winner === "player2" ? "border-yellow-400" : "border-gray-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {match.player2.name.charAt(0)}
            </div>
            <div>
              <p
                className={`font-bold text-xl ${
                  winner === "player2" ? "text-yellow-600" : "text-gray-900"
                }`}
              >
                {match.player2.name}
              </p>
              {winner === "player2" && (
                <p className="text-xs text-yellow-600 font-bold flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  VAINQUEUR
                </p>
              )}
            </div>
          </div>
          {match.player2.score !== null && (
            <div
              className={`text-5xl font-extrabold ${
                winner === "player2" ? "text-yellow-600" : "text-gray-900"
              }`}
            >
              {match.player2.score}
            </div>
          )}
        </div>

        {/* Bouton Voir en direct */}
        {isLive && (
          <button className="mt-6 w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white py-4 rounded-xl font-bold text-lg hover:from-red-500 hover:to-yellow-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            <Play className="w-5 h-5 fill-white" />
            Regarder en direct
          </button>
        )}
      </div>
    </div>
  );
}
