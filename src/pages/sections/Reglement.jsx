import { useState, useEffect } from "react";
import {
  Trophy,
  Calendar,
  Users,
  Shield,
  Video,
  Award,
  Shirt,
  Info,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle,
  Star,
  Target,
  Zap,
} from "lucide-react";

const sections = [
  {
    icon: Info,
    title: "Organisation générale",
    details: [
      { icon: Shield, text: "Organisateur : QG Lounge Bar" },
      {
        icon: Users,
        text: "Supervision : Communauté Ivoirienne de Billard (CIB)",
      },
      { icon: Calendar, text: "Dates : 12 au 16 novembre 2025" },
      { icon: Target, text: "Participants : 32 joueurs inscrits" },
    ],
  },
  {
    icon: Users,
    title: "Inscriptions",
    details: [
      { icon: DollarSign, text: "Tarif : 25 000 FCFA par joueur" },
      { icon: CheckCircle, text: "Modes de paiement : Espèces ou Wave" },
      { icon: AlertCircle, text: "Validation après paiement confirmé" },
      { icon: Target, text: "Limite : 32 premières inscriptions payées" },
    ],
  },
  {
    icon: Shield,
    title: "Format de la compétition",
    details: [
      { icon: Trophy, text: "1er tour : 32 joueurs → 16 qualifiés" },
      { icon: Trophy, text: "2e tour : 16 joueurs → 8 qualifiés" },
      { icon: Trophy, text: "1/4 finale : 8 joueurs → 4 qualifiés" },
      { icon: Trophy, text: "1/2 finale : 4 joueurs → 2 finalistes" },
      { icon: Star, text: "Finale : 2 joueurs → 1 Champion 🏆" },
    ],
  },
  {
    icon: Trophy,
    title: "Format des matchs",
    details: [
      { icon: Zap, text: "1er tour : Race to 7 (premier à 7 manches)" },
      { icon: Zap, text: "2e tour : Race to 7 (premier à 7 manches)" },
      { icon: Zap, text: "1/4 Finale : Race to 8 (premier à 8 manches)" },
      { icon: Zap, text: "1/2 Finale : Race to 9 (premier à 9 manches)" },
      { icon: Star, text: "Finale : Race to 10 (premier à 10 manches)" },
    ],
  },
  {
    icon: Calendar,
    title: "Calendrier officiel",
    details: [
      { icon: Calendar, text: "Période : 12 au 16 novembre 2025" },
      { icon: Clock, text: "Horaires : Matchs à partir de 19h00" },
      { icon: Star, text: "Finale : Dimanche 16 novembre à 21h00" },
      { icon: Video, text: "Diffusion en direct sur les réseaux" },
    ],
  },
  {
    icon: Clock,
    title: "Déroulement des matchs",
    details: [
      { icon: CheckCircle, text: "Présence obligatoire 15 min avant" },
      { icon: AlertCircle, text: "5 minutes de retard = 1 manche perdue" },
      { icon: AlertCircle, text: "20 minutes de retard = forfait automatique" },
      { icon: Shield, text: "Arbitre : autorité totale sur la table" },
    ],
  },
  {
    icon: Shield,
    title: "Matériel et conditions",
    details: [
      { icon: CheckCircle, text: "Tables officielles du QG Lounge" },
      { icon: CheckCircle, text: "Craie, triangle et boules fournis" },
      { icon: CheckCircle, text: "Matériel personnel autorisé" },
      { icon: Info, text: "Conditions de jeu standardisées" },
    ],
  },
  {
    icon: Shirt,
    title: "Comportement et tenue",
    details: [
      { icon: Shirt, text: "Tenue : Polo du club + pantalon noir" },
      { icon: CheckCircle, text: "Comportement exemplaire obligatoire" },
      { icon: AlertCircle, text: "Insultes interdites = disqualification" },
      { icon: AlertCircle, text: "Triche ou manque de respect = exclusion" },
    ],
  },
  {
    icon: Award,
    title: "Récompenses",
    details: [
      { icon: Trophy, text: "🥇 Champion : 500 000 FCFA + Trophée" },
      { icon: Award, text: "🥈 Finaliste : 250 000 FCFA" },
      { icon: Award, text: "🥉 Demi-finalistes : 100 000 FCFA chacun" },
      { icon: Star, text: "Prix spéciaux : Fair-play, Meilleur coup" },
      { icon: Star, text: "Révélation du tournoi" },
    ],
  },
  {
    icon: Video,
    title: "Captation et diffusion",
    details: [
      { icon: Video, text: "Diffusion en direct sur Facebook" },
      { icon: Video, text: "Streaming live sur TikTok" },
      { icon: Video, text: "Retransmission sur YouTube" },
      { icon: Star, text: "Visibilité maximale garantie" },
    ],
  },
  {
    icon: Info,
    title: "Autorisation d'image",
    details: [
      { icon: CheckCircle, text: "Captation d'image autorisée" },
      { icon: Video, text: "Diffusion pour promotion du tournoi" },
      { icon: Info, text: "Usage sans rémunération" },
      { icon: AlertCircle, text: "Acceptation lors de l'inscription" },
    ],
  },
  {
    icon: Trophy,
    title: "Communication des résultats",
    details: [
      { icon: CheckCircle, text: "Classements en temps réel" },
      { icon: Info, text: "Scores affichés au QG Lounge" },
      { icon: Video, text: "Mise à jour sur la plateforme" },
      { icon: Star, text: "Transparence totale garantie" },
    ],
  },
];

export default function Reglement() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % sections.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-600 to-yellow-500 py-8 sm:py-12 lg:py-16 px-4">
      {/* En-tête */}
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 animate-fade-in drop-shadow-2xl px-2">
          Règlement Officiel
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto drop-shadow-lg px-4">
          Tournoi de Billard « Qui Sera The King of Table ? » – QG Lounge 2025
        </p>
      </div>

      {/* Carrousel - Desktop 3D / Mobile Simple */}
      <div className="max-w-7xl mx-auto relative">
        {isMobile ? (
          // Version Mobile - Slide simple
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  display: "flex",
                }}
              >
                {sections.map((section, index) => (
                  <div key={index} className="min-w-full px-2 sm:px-4">
                    <SlideCard
                      section={section}
                      isActive={index === currentIndex}
                      scale={1}
                      isMobile={true}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation mobile */}
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Précédent"
            >
              <ChevronLeft
                className="w-5 h-5 sm:w-6 sm:h-6 text-red-600"
                strokeWidth={3}
              />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Suivant"
            >
              <ChevronRight
                className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600"
                strokeWidth={3}
              />
            </button>
          </div>
        ) : (
          // Version Desktop - Carrousel 3D
          <div className="perspective-2000">
            <div className="relative h-[650px] flex items-center justify-center overflow-visible">
              {sections.map((section, index) => {
                const position =
                  (index - currentIndex + sections.length) % sections.length;
                const isActive = position === 0;
                const isPrev = position === sections.length - 1;
                const isNext = position === 1;

                let transform = "";
                let opacity = 0;
                let zIndex = 0;
                let scale = 0.6;

                if (isActive) {
                  transform = "translateX(0%) rotateY(0deg) translateZ(0px)";
                  opacity = 1;
                  zIndex = 30;
                  scale = 1;
                } else if (isPrev) {
                  transform =
                    "translateX(-130%) rotateY(50deg) translateZ(-250px)";
                  opacity = 0.3;
                  zIndex = 10;
                  scale = 0.75;
                } else if (isNext) {
                  transform =
                    "translateX(130%) rotateY(-50deg) translateZ(-250px)";
                  opacity = 0.3;
                  zIndex = 10;
                  scale = 0.75;
                } else if (position === 2) {
                  transform =
                    "translateX(220%) rotateY(-70deg) translateZ(-400px)";
                  opacity = 0.15;
                  zIndex = 5;
                } else if (position === sections.length - 2) {
                  transform =
                    "translateX(-220%) rotateY(70deg) translateZ(-400px)";
                  opacity = 0.15;
                  zIndex = 5;
                }

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-out"
                    style={{
                      transform: transform,
                      opacity: opacity,
                      zIndex: zIndex,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <SlideCard
                      section={section}
                      isActive={isActive}
                      scale={scale}
                      isMobile={false}
                    />
                  </div>
                );
              })}
            </div>

            {/* Boutons de navigation desktop */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-7 h-7 text-red-600" strokeWidth={3} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
              aria-label="Suivant"
            >
              <ChevronRight
                className="w-7 h-7 text-yellow-600"
                strokeWidth={3}
              />
            </button>
          </div>
        )}
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 lg:mt-16 px-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-12 sm:w-16 h-3 sm:h-4 bg-white shadow-lg"
                : "w-3 sm:w-4 h-3 sm:h-4 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Compteur */}
      <div className="text-center mt-4 sm:mt-6 lg:mt-8 text-white font-bold text-lg sm:text-xl">
        {currentIndex + 1} / {sections.length}
      </div>
    </div>
  );
}

function SlideCard({ section, isActive, scale, isMobile }) {
  const Icon = section.icon;

  return (
    <div
      className={`w-full max-w-[700px] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-10 transition-all duration-700 border-2 sm:border-4 ${
        isActive ? "border-yellow-400 animate-scale-in" : "border-white"
      }`}
      style={{ transform: isMobile ? "none" : `scale(${scale})` }}
    >
      {/* En-tête avec icône */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center text-white shadow-xl transition-transform duration-500 flex-shrink-0 ${
            isActive ? "animate-bounce-subtle" : ""
          }`}
        >
          <Icon size={isMobile ? 32 : 48} strokeWidth={2.5} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 break-words">
            {section.title}
          </h3>
          <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-red-600 to-yellow-500 mt-2 sm:mt-3 rounded-full"></div>
        </div>
      </div>

      {/* Liste des détails */}
      <div className="space-y-3 sm:space-y-4 lg:space-y-5">
        {section.details.map((detail, idx) => {
          const DetailIcon = detail.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-2 sm:gap-3 lg:gap-4 bg-gradient-to-r from-red-50 to-yellow-50 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:from-red-100 hover:to-yellow-100 transition-all duration-300 hover:scale-105 border border-yellow-200"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center flex-shrink-0">
                <DetailIcon
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  strokeWidth={2.5}
                />
              </div>
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed pt-1 sm:pt-1.5 font-semibold break-words">
                {detail.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const style = document.createElement("style");
style.textContent = `
  .perspective-2000 {
    perspective: 2500px;
  }
  
  @keyframes scale-in {
    from {
      transform: scale(0.85);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes bounce-subtle {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(5deg);
    }
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-scale-in {
    animation: scale-in 0.7s ease-out;
  }
  
  .animate-bounce-subtle {
    animation: bounce-subtle 2.5s ease-in-out infinite;
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
`;
document.head.appendChild(style);
