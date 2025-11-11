import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import {
  Home,
  Users,
  CalendarDays,
  UserPlus,
  Info,
  BarChart3,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/logoQG.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/joueurs", label: "Joueurs", icon: Users },
    { path: "/programmes", label: "Programme", icon: CalendarDays },
    { path: "/classements", label: "Classements", icon: BarChart3 },
    { path: "/apropos", label: "À propos", icon: Info },
  ];

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "text-white bg-gradient-to-r from-yellow-400 to-red-800 font-semibold shadow-inner"
        : "text-gray-200 hover:text-yellow-400"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `relative flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-300 group ${
      isActive
        ? "text-white bg-gradient-to-r from-yellow-500/90 to-red-700/90 font-bold shadow-[0_4px_15px_rgba(234,179,8,0.4)] scale-[1.02] backdrop-blur-sm"
        : "text-gray-100 hover:text-yellow-300 hover:bg-white/10 hover:backdrop-blur-sm hover:translate-x-1 hover:shadow-lg"
    }`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !document.getElementById("mobileMenu")?.contains(event.target) &&
        !document.getElementById("menuButton")?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="bg-gradient-to-r from-red-800 to-yellow-900 shadow-md sticky top-0 z-50 border-b border-[#440000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="bg-gradient-to-r from-red-600 to-yellow-500 px-2 py-0 rounded-lg"
          >
            <img
              src={logo}
              alt="Logo QG"
              className="w-[50px] h-[60px] sm:w-[60px] sm:h-[70px]"
            />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-yellow-400">
            Billard QG
          </h1>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center text-[18px] font-semibold gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink key={link.path} to={link.path} className={navLinkClass}>
                <Icon size={20} />
                {link.label}
              </NavLink>
            );
          })}

          {/* Bouton Inscription */}
          <NavLink
            to="/inscription"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-[#4a0000]
              bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
              shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <UserPlus size={18} />
            S'inscrire
          </NavLink>
        </nav>

        {/* Bouton Menu Mobile */}
        <button
          id="menuButton"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-yellow-400 hover:bg-red-900/30 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay sombre avec effet de feutre de billard */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-black/70 via-green-900/30 to-black/60 backdrop-blur-md z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Mobile - Style Billard Premium */}
      {isOpen && (
        <div
          id="mobileMenu"
          className="lg:hidden fixed top-[92px] right-4 w-[85%] max-w-sm rounded-2xl overflow-hidden shadow-2xl z-50 animate-slide-in"
        >
          {/* Fond avec transparence et glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/90 to-yellow-900/85 backdrop-blur-xl" />

          {/* Bordure lumineuse animée */}
          <div className="absolute inset-0 rounded-2xl border-2 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]" />

          {/* Effet de texture feutre subtil */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

          {/* Bande décorative en haut avec brillance */}
          <div className="relative h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-red-600 shadow-[0_2px_10px_rgba(234,179,8,0.5)]" />

          <nav className="relative px-5 py-6 flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={mobileNavLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {/* Indicateur actif à gauche */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-yellow-400 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon size={22} className="relative z-10" />
                  <span className="relative z-10">{link.label}</span>
                </NavLink>
              );
            })}

            {/* Séparateur élégant */}
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent my-2" />

            {/* Bouton Inscription Mobile Premium */}
            <NavLink
              to="/inscription"
              onClick={() => setIsOpen(false)}
              className="relative flex items-center justify-center gap-2 px-5 py-3.5 mt-2 rounded-xl font-bold text-[#4a0000] overflow-hidden
                bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                shadow-[0_6px_20px_rgba(234,179,8,0.5)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.7)] 
                hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <UserPlus size={20} className="relative z-10" />
              <span className="relative z-10">S'inscrire</span>
            </NavLink>
          </nav>

          {/* Billes décoratives avec effet de profondeur */}
          <div className="absolute bottom-5 left-5 w-10 h-10 rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[0_4px_15px_rgba(0,0,0,0.5)] opacity-20" />
          <div className="absolute top-24 right-5 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_4px_15px_rgba(234,179,8,0.6)] opacity-30 flex items-center justify-center text-sm font-bold text-white">
            8
          </div>
          <div className="absolute bottom-20 right-8 w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-[0_3px_10px_rgba(220,38,38,0.5)] opacity-25" />
        </div>
      )}
    </header>
  );
};

export default Header;
