import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center gap-[6px] px-3.5 py-2 rounded-xl transition-all duration-300 group ${
      isActive
        ? "text-white bg-gradient-to-r from-yellow-500/90 to-red-700/90 font-bold shadow-inner scale-[1.02] backdrop-blur-sm"
        : "text-gray-100 hover:text-yellow-300 hover:bg-white/10 hover:backdrop-blur-sm hover:translate-x-1 hover:shadow-lg"
    }`;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gradient-to-r from-red-800 to-yellow-900 shadow-md sticky top-0 z-50 border-b border-[#440000]">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo + titre */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="bg-gradient-to-r from-red-600 to-yellow-500 px-2 py-0 rounded-lg"
          >
            <img
              src={logo}
              alt="Logo QG"
              className="w-[50px] h-[60px] lg:w-[60px] lg:h-[70px]"
            />
          </Link>
        </div>

        {/* Bouton burger */}
        <button
          onClick={toggleMenu}
          className="text-yellow-400 lg:hidden hover:text-white transition"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center text-[18px] font-semibold gap-1">
          <NavLink to="/" className={navLinkClass}>
            <Home size={20} />
            Accueil
          </NavLink>
          <NavLink to="/joueurs" className={navLinkClass}>
            <Users size={20} />
            Joueurs
          </NavLink>
          <NavLink to="/programmes" className={navLinkClass}>
            <CalendarDays size={20} />
            Programme
          </NavLink>
          <NavLink to="/classements" className={navLinkClass}>
            <BarChart3 size={20} />
            Classements
          </NavLink>
          <NavLink to="/apropos" className={navLinkClass}>
            <Info size={20} />À propos
          </NavLink>
          <NavLink
            to="/inscription"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-[#4a0000]
              bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
              shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <UserPlus size={18} />
            Être membre
          </NavLink>
        </nav>
      </div>

      {/* Overlay sombre quand le menu est ouvert */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-gradient-to-br from-black/70 via-green-900/30 to-black/60 
            backdrop-blur-md z-40 lg:hidden transition-all duration-300"
            onClick={toggleMenu}
          ></div>

          {/* Menu mobile flottant */}
          <div
            className="lg:hidden fixed top-[92px] right-4 w-[85%] max-w-sm rounded-2xl overflow-hidden 
            shadow-2xl z-50 animate-slide-in"
          >
            {/* Fond glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/90 to-yellow-900/85 backdrop-blur-xl" />

            {/* Bordure lumineuse */}
            <div className="absolute inset-0 rounded-2xl border-2 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]" />

            {/* Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none" />

            {/* Bande décorative */}
            <div className="relative h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-red-600" />

            {/* Contenu du menu */}
            <div className="relative flex flex-col gap-2 px-6 py-5 text-lg font-semibold text-white">
              <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>
                <Home size={20} />
                Accueil
              </NavLink>
              <NavLink
                to="/joueurs"
                className={navLinkClass}
                onClick={toggleMenu}
              >
                <Users size={20} />
                Joueurs
              </NavLink>
              <NavLink
                to="/programmes"
                className={navLinkClass}
                onClick={toggleMenu}
              >
                <CalendarDays size={20} />
                Programme
              </NavLink>
              <NavLink
                to="/classements"
                className={navLinkClass}
                onClick={toggleMenu}
              >
                <BarChart3 size={20} />
                Classements
              </NavLink>
              <NavLink
                to="/apropos"
                className={navLinkClass}
                onClick={toggleMenu}
              >
                <Info size={20} />À propos
              </NavLink>
              <NavLink
                to="/inscription"
                onClick={toggleMenu}
                className="flex items-center justify-center gap-2 mt-3 px-4 py-2 rounded-full font-semibold text-[#4a0000]
                  bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                  shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <UserPlus size={18} />
                Être membre✨
              </NavLink>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
