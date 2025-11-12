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
  Link,
} from "lucide-react";
import React from "react";

const Acceuilfin = () => {
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
  return (
    <>
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
    </>
  );
};

export default Acceuilfin;
