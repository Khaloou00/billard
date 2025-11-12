import React from "react";
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
import regledejeu from "../../assets/regle.pdf";
import { FaFrancSign, FaTicket } from "react-icons/fa6";
import vi from "../../assets/viob.mp4";

const Acceuildebut = () => {
  function StatCard({ number, label, icon }) {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
        <div className="flex justify-center mb-2">{icon}</div>
        <div className="text-3xl font-extrabold mb-1">{number}</div>
        <div className="text-sm text-white/80">{label}</div>
      </div>
    );
  }
  return (
    <>
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
              Être membre✨✨
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
            <StatCard number="7" label="Jours" icon={<Calendar />} />
            <StatCard
              number="25.000F"
              label="Inscription"
              icon={<FaTicket />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Acceuildebut;
