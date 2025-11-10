import { Link, NavLink } from "react-router";
import {
  Trophy,
  Home,
  Users,
  CalendarDays,
  UserPlus,
  Info,
  BarChart3,
} from "lucide-react";
import logo from "../assets/logoQG.png";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "text-white bg-gradient-to-r from-yellow-400 to-red-800 font-semibold shadow-inner"
        : "text-gray-200 hover:text-yellow-400"
    }`;

  return (
    <header className="bg-gradient-to-r from-red-800 to-yellow-900 shadow-md sticky top-0 z-50 border-b border-[#440000]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="bg-gradient-to-r from-red-600 to-yellow-500 px-2 py-0 rounded-lg"
          >
            <img src={logo} alt="Logo QG" className="w-[60px] h-[70px]" />
          </Link>
          <h1 className="text-2xl font-bold text-yellow-400">Billard QG</h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center text-[18px] font-semibold gap-1">
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
      </div>
    </header>
  );
};

export default Header;
