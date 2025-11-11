import React from "react";
import { Outlet, NavLink } from "react-router";
import {
  Home,
  UserPlus,
  Users,
  CalendarDays,
  BarChart3,
  MessageSquare,
  BookOpen,
} from "lucide-react";

const LayoutAdmin = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
      isActive
        ? "bg-gradient-to-r from-yellow-400 to-red-700 text-white font-semibold shadow-md"
        : "text-gray-200 hover:bg-gray-700 hover:text-yellow-400"
    }`;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-gray-100 flex flex-col">
        <div className="text-center py-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-yellow-400">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <NavLink to="/admin/tableau" className={linkClass}>
            <Home size={20} />
            Tableau de Bord
          </NavLink>
          <NavLink to="/admin/creer" className={linkClass}>
            <UserPlus size={20} />
            Créer Joueur
          </NavLink>
          <NavLink to="/admin/matchs" className={linkClass}>
            <CalendarDays size={20} />
            Matchs
          </NavLink>
          <NavLink to="/admin/live" className={linkClass}>
            <Users size={20} />
            Live
          </NavLink>
          <NavLink to="/admin/blog" className={linkClass}>
            <BookOpen size={20} />
            Blog
          </NavLink>
          <NavLink to="/admin/classement" className={linkClass}>
            <BarChart3 size={20} />
            Classement
          </NavLink>
          <NavLink to="/admin/commentaire" className={linkClass}>
            <MessageSquare size={20} />
            Commentaire
          </NavLink>
        </nav>
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          © 2025 Billard QG
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutAdmin;
