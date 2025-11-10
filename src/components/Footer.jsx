import { Trophy } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logoQG.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-yellow-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Nom */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="bg-gradient-to-r from-red-600 to-yellow-500 px-2 py-0 rounded-lg"
          >
            <img src={logo} alt="Logo QG" className="w-[50px] h-[60px]" />
          </Link>

          <span className="font-bold text-lg text-yellow-400">Billard QG</span>
        </div>
        {/* Liens rapides */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-yellow-400 transition">
            Accueil
          </Link>
          <Link to="/joueurs" className="hover:text-yellow-400 transition">
            Joueurs
          </Link>
          <Link to="/programmes" className="hover:text-yellow-400 transition">
            Programme
          </Link>
          <Link to="/classements" className="hover:text-yellow-400 transition">
            Classements
          </Link>
          <Link to="/apropos" className="hover:text-yellow-400 transition">
            À propos
          </Link>
          <Link to="/inscription" className="hover:text-yellow-400 transition">
            Inscription
          </Link>
        </div>
        <style>{`
          .gold-gradient {
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.7));
          }
          .gold-gradient:hover {
            filter: drop-shadow(0 0 15px rgba(255, 215, 0, 1));
          }
        `}</style>
        <div className="flex items-center gap-6">
          <a
            href="https://facebook.com/votrepage"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaFacebook
              className="text-yellow-500 group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
              size={32}
              strokeWidth={2.5}
            />
            <span className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>

          <a
            href="https://instagram.com/votrecompte"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaInstagram
              className="text-yellow-500 group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
              size={32}
              strokeWidth={2.5}
            />
            <span className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>

          <a
            href="https://youtube.com/@votrechaine"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaYoutube
              className="text-yellow-500 group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
              size={32}
              strokeWidth={2.5}
            />
            <span className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-red-900 to-yellow-800 text-gray-200 mt-16 py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-3 text-yellow-400">
            Tournoi Billard © {new Date().getFullYear()}
          </p>

          <div className="mt-4 flex justify-center gap-6">
            <p className="text-sm text-gray-300">
              Organisé par{" "}
              <span className="text-yellow-500 font-semibold">QG Lounge</span>{" "}
            </p>
            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} Billard Pro — Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
