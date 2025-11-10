import React from "react";
import {
  Trophy,
  Users,
  Calendar,
  DollarSign,
  Table,
  ShieldCheck,
} from "lucide-react";
import Reglement from "./sections/Reglement";
import { Link } from "react-router";
import regledejeu from "../assets/regle.pdf";

export default function Apropos() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <header className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                À propos du Tournoi de Billard QJ
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-95">
                Rassemblement convivial des passionnés de billard — compétition,
                fair-play et belles parties. Rejoignez-nous pour des défis, des
                rencontres et des lots à gagner.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/inscription"
                  className="inline-block bg-white text-red-600 font-semibold
                  px-5 py-3 rounded-lg shadow hover:shadow-md transition"
                >
                  S'inscrire
                </Link>
                <a
                  href={regledejeu}
                  download="regle_du_tournoi_QGlounge.pdf" // Le nom du fichier sera "Reglement-Officiel.pdf"
                  className="inline-block text-white border border-white/30 px-5 py-3 rounded-lg hover:bg-white/10 transition"
                >
                  Règles & format
                </a>
              </div>
            </div>

            <div className="flex-1">
              <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/5">
                <svg
                  className="w-full h-48 mx-auto"
                  viewBox="0 0 600 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="0"
                    y="0"
                    width="600"
                    height="360"
                    rx="16"
                    fill="white"
                    opacity="0.06"
                  />
                  <g
                    transform="translate(40,40)"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse
                      cx="220"
                      cy="110"
                      rx="70"
                      ry="70"
                      fill="#10b981"
                      opacity="0.15"
                    />
                    <rect
                      x="40"
                      y="170"
                      width="320"
                      height="40"
                      rx="8"
                      fill="#fff"
                      opacity="0.08"
                    />
                    <path d="M60 60 L260 170" stroke="#fff" opacity="0.25" />
                    <circle cx="220" cy="110" r="8" fill="#fff" />
                  </g>
                </svg>
                <p className="mt-4 text-sm text-white/90 text-center">
                  Compétition ouverte à tous niveaux — formats singles &
                  doubles, tenue régulière et animation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Promouvoir le Billard
              </h3>
              <p className="text-gray-600">
                Développer la passion du billard et créer une communauté active
                de joueurs.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Créer des Liens</h3>
              <p className="text-gray-600">
                Favoriser les rencontres et l'échange entre passionnés du
                billard.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Encourager le développement des compétences et l'esprit sportif.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Reglement />

      {/* Inscription */}
      <section
        id="inscription"
        className="py-16 bg-gradient-to-r from-red-600 to-yellow-500 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Rejoignez le Tournoi</h2>
          <p className="text-xl mb-8">
            Inscrivez-vous dès maintenant pour participer à notre prochain
            tournoi
          </p>
          <Link
            to="/inscription"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Je m'inscris
          </Link>
        </div>
      </section>
    </main>
  );
}
