import { Trophy } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router"; // 👈 corrigé si tu utilises React Router v6+
import logo from "../assets/logoQG.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-red-900 to-yellow-800 text-gray-200 overflow-hidden">
      {/* Boule de billard flottante en arrière-plan */}
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-white to-gray-300 opacity-20 animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-red-600 to-black opacity-15 animate-float-delayed"></div>

      {/* Partie principale du footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Première section : Logo + Liens + Réseaux */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Nom */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="bg-gradient-to-r from-red-600 to-yellow-500 px-2 py-0 rounded-lg shadow-lg"
            >
              <img
                src={logo}
                alt="Logo QG"
                className="w-[50px] h-[60px] object-contain"
              />
            </Link>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              Accueil
            </Link>
            <Link
              to="/joueurs"
              className="hover:text-yellow-400 transition-colors"
            >
              Joueurs
            </Link>
            <Link
              to="/programmes"
              className="hover:text-yellow-400 transition-colors"
            >
              Programme
            </Link>
            <Link
              to="/classements"
              className="hover:text-yellow-400 transition-colors"
            >
              Classements
            </Link>
            <Link
              to="/apropos"
              className="hover:text-yellow-400 transition-colors"
            >
              À propos
            </Link>
            <Link
              to="/inscription"
              className="hover:text-yellow-400 transition-colors"
            >
              Inscription
            </Link>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-5">
            {[
              {
                Icon: FaFacebook,
                href: "https://www.facebook.com/share/g/1CmhbByz5T/?mibextid=wwXIfr",
                label: "Facebook",
              },
              {
                Icon: FaInstagram,
                href: "https://instagram.com/votrecompte",
                label: "Instagram",
              },
              {
                Icon: FaYoutube,
                href: "https://youtube.com/@votrechaine",
                label: "YouTube",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative"
              >
                <Icon
                  className="text-yellow-500 group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                  size={32}
                />
                <span className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Section basse : Copyright */}
      <div className="mt-10 pt-6 pb-8 ">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2 text-yellow-400">
            Communauté Ivoirienne de Billard © {new Date().getFullYear()}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-300">
            <p>
              Organisé par{" "}
              <span className="text-yellow-500 font-semibold">QG Lounge</span>
            </p>
            <span className="hidden md:inline text-gray-500">•</span>
            <p>
              © {new Date().getFullYear()} Billard Pro — Tous droits réservés
            </p>
          </div>
        </div>
      </div>

      {/* Styles pour l'animation de flottement */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
