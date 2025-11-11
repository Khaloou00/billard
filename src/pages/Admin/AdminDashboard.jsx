import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Users, CalendarDays, BarChart3, Trophy } from "lucide-react";

const AdminDashboard = () => {
  // Données simulées
  const joueursData = [
    { name: "Jean Dupont", score: 1200 },
    { name: "Lucien Koné", score: 950 },
    { name: "Ali Coulibaly", score: 800 },
    { name: "David Traoré", score: 700 },
  ];

  const matchsData = [
    { name: "12 Nov", matchs: 5 },
    { name: "13 Nov", matchs: 8 },
    { name: "14 Nov", matchs: 6 },
    { name: "15 Nov", matchs: 9 },
  ];

  const pieData = [
    { name: "Victoire", value: 60 },
    { name: "Défaite", value: 40 },
  ];

  const COLORS = ["#facc15", "#ef4444"]; // jaune et rouge

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Admin</h1>

      {/* Cartes d’aperçu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
          <Users className="text-yellow-400" size={30} />
          <div>
            <p className="text-gray-500 text-sm">Joueurs</p>
            <p className="text-2xl font-semibold">120</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
          <CalendarDays className="text-red-500" size={30} />
          <div>
            <p className="text-gray-500 text-sm">Matchs</p>
            <p className="text-2xl font-semibold">32</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
          <BarChart3 className="text-green-500" size={30} />
          <div>
            <p className="text-gray-500 text-sm">Classements</p>
            <p className="text-2xl font-semibold">10</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
          <Trophy className="text-yellow-600" size={30} />
          <div>
            <p className="text-gray-500 text-sm">Tournois</p>
            <p className="text-2xl font-semibold">5</p>
          </div>
        </div>
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique des scores joueurs */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Scores des Joueurs</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={joueursData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Graphique match/jour */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Matchs par Jour</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={matchsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="matchs" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Graphique victoires/défaites */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Statistiques Victoire / Défaite
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
