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
    <div className="min-h-screen bg-gradient-to-r from-red-600 to-yellow-500 py-16 px-4">
      {/* En-tête */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in drop-shadow-2xl">
          Règlement Officiel
        </h1>
        <p className="text-2xl text-white/90 max-w-4xl mx-auto drop-shadow-lg">
          Tournoi de Billard « Qui Sera The King of Table ? » – QG Lounge 2025
        </p>
      </div>

      {/* Carrousel 3D */}
      <div className="max-w-7xl mx-auto relative perspective-2000">
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
              transform = "translateX(-130%) rotateY(50deg) translateZ(-250px)";
              opacity = 0.3;
              zIndex = 10;
              scale = 0.75;
            } else if (isNext) {
              transform = "translateX(130%) rotateY(-50deg) translateZ(-250px)";
              opacity = 0.3;
              zIndex = 10;
              scale = 0.75;
            } else if (position === 2) {
              transform = "translateX(220%) rotateY(-70deg) translateZ(-400px)";
              opacity = 0.15;
              zIndex = 5;
            } else if (position === sections.length - 2) {
              transform = "translateX(-220%) rotateY(70deg) translateZ(-400px)";
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
                />
              </div>
            );
          })}
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Précédent"
        >
          <ChevronLeft className="w-7 h-7 text-red-600" strokeWidth={3} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Suivant"
        >
          <ChevronRight className="w-7 h-7 text-yellow-600" strokeWidth={3} />
        </button>
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-3 mt-16">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-16 h-4 bg-white shadow-lg"
                : "w-4 h-4 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Compteur */}
      <div className="text-center mt-8 text-white font-bold text-xl">
        {currentIndex + 1} / {sections.length}
      </div>
    </div>
  );
}

function SlideCard({ section, isActive, scale }) {
  const Icon = section.icon;

  return (
    <div
      className={`w-[700px] bg-white rounded-3xl shadow-2xl p-10 transition-all duration-700 border-4 ${
        isActive ? "border-yellow-400 animate-scale-in" : "border-white"
      }`}
      style={{ transform: `scale(${scale})` }}
    >
      {/* En-tête avec icône */}
      <div className="flex items-center gap-6 mb-8">
        <div
          className={`w-24 h-24 rounded-2xl bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center text-white shadow-xl transition-transform duration-500 ${
            isActive ? "animate-bounce-subtle" : ""
          }`}
        >
          <Icon size={48} strokeWidth={2.5} />
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-extrabold text-gray-900">
            {section.title}
          </h3>
          <div className="w-full h-1 bg-gradient-to-r from-red-600 to-yellow-500 mt-3 rounded-full"></div>
        </div>
      </div>

      {/* Liste des détails */}
      <div className="space-y-5">
        {section.details.map((detail, idx) => {
          const DetailIcon = detail.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-4 bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-xl hover:from-red-100 hover:to-yellow-100 transition-all duration-300 hover:scale-105 border border-yellow-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center flex-shrink-0">
                <DetailIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-gray-800 text-lg leading-relaxed pt-1.5 font-semibold">
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
