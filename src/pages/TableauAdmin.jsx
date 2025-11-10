import React, { useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#10b981", "#f59e0b"];

// Données initiales plus réalistes
const initialPlayers = [
  {
    id: 1,
    nom: "Traoré",
    prenom: "Alain",
    pseudo: "atraore",
    paiement: true,
    photo: null,
  },
  {
    id: 2,
    nom: "Koné",
    prenom: "Lucien",
    pseudo: "lkone",
    paiement: false,
    photo: null,
  },
  {
    id: 3,
    nom: "Yao",
    prenom: "N’Guessan",
    pseudo: "nyao",
    paiement: true,
    photo: null,
  },
  {
    id: 4,
    nom: "Kouassi",
    prenom: "Armand",
    pseudo: "akouassi",
    paiement: true,
    photo: null,
  },
  {
    id: 5,
    nom: "Bamba",
    prenom: "Didier",
    pseudo: "dbamba",
    paiement: false,
    photo: null,
  },
  {
    id: 6,
    nom: "N’Dri",
    prenom: "Aya",
    pseudo: "andi",
    paiement: true,
    photo: null,
  },
  {
    id: 7,
    nom: "Soro",
    prenom: "Boris",
    pseudo: "bsoro",
    paiement: false,
    photo: null,
  },
  {
    id: 8,
    nom: "Coulibaly",
    prenom: "Ali",
    pseudo: "acoulibaly",
    paiement: true,
    photo: null,
  },
];

const initialMatches = [
  {
    id: 1,
    joueur1: initialPlayers[0],
    joueur2: initialPlayers[1],
    score1: 6,
    score2: 5,
    statut: "terminé",
  },
  {
    id: 2,
    joueur1: initialPlayers[2],
    joueur2: initialPlayers[3],
    score1: 4,
    score2: 7,
    statut: "terminé",
  },
  {
    id: 3,
    joueur1: initialPlayers[4],
    joueur2: initialPlayers[5],
    score1: 0,
    score2: 0,
    statut: "en cours",
  },
];

export default function TableauAdmin() {
  const [onglet, setOnglet] = useState("joueurs");
  const [players, setPlayers] = useState(initialPlayers);
  const [matches, setMatches] = useState(initialMatches);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    pseudo: "",
    paiement: false,
    photo: null,
  });
  const fileInputRef = useRef(null);

  // === Gestion photo ===
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.match("image/.*")) {
      alert("Veuillez sélectionner une image (JPG, PNG, etc.)");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setForm((prev) => ({ ...prev, photo: null }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // === Validation ===
  const validate = () => {
    if (!form.nom.trim() || !form.prenom.trim() || !form.pseudo.trim()) {
      alert("Tous les champs obligatoires doivent être remplis.");
      return false;
    }
    return true;
  };

  // === Soumission ===
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editing) {
      setPlayers((p) =>
        p.map((pl) => (pl.id === editing.id ? { ...form, id: pl.id } : pl))
      );
    } else {
      setPlayers((p) => [...p, { ...form, id: Date.now() }]);
    }

    resetForm();
    setShowModal(false);
  };

  const resetForm = () => {
    setForm({ nom: "", prenom: "", pseudo: "", paiement: false, photo: null });
    setEditing(null);
  };

  const handleEdit = (player) => {
    setEditing(player);
    setForm({ ...player });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Supprimer ce joueur ?")) {
      setPlayers((p) => p.filter((pl) => pl.id !== id));
    }
  };

  // === Matchs ===
  const updateScore = (matchId, key, delta) => {
    setMatches((m) =>
      m.map((match) =>
        match.id === matchId
          ? { ...match, [key]: Math.max(0, match[key] + delta) }
          : match
      )
    );
  };

  const faireTirage = () => {
    const payes = players.filter((p) => p.paiement);
    if (payes.length < 2) {
      alert("Il faut au moins 2 joueurs payés pour faire un tirage !");
      return;
    }
    const shuffled = [...payes].sort(() => 0.5 - Math.random());
    const pair1 = shuffled.slice(0, 2);
    if (pair1.length < 2) return;

    const newMatch = {
      id: matches.length + 1,
      joueur1: pair1[0],
      joueur2: pair1[1],
      score1: 0,
      score2: 0,
      statut: "en cours",
    };
    setMatches((m) => [...m, newMatch]);
    setOnglet("matchs");
  };

  // === Statistiques dynamiques ===
  const stats = {
    joueurs: players.length,
    payes: players.filter((p) => p.paiement).length,
    nonPayes: players.filter((p) => !p.paiement).length,
    matchs: matches.length,
  };

  const pieData = [
    { name: "Payés", value: stats.payes },
    { name: "Non payés", value: stats.nonPayes },
  ];

  // Génère des données de progression mensuelle (simulées)
  const now = new Date();
  const months = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    return d.toLocaleString("fr-FR", { month: "short" });
  }).reverse();

  const lineData = months.map((mois, i) => ({
    mois,
    joueurs: Math.max(1, Math.floor((stats.joueurs * (i + 1)) / 6)),
  }));

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-red-600 to-yellow-500">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-red-600 mb-8 text-center">
            SuperBe Admin
          </h1>
          <nav className="space-y-2">
            {["joueurs", "matchs", "inscriptions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setOnglet(tab)}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  onglet === tab
                    ? "bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow"
                    : "hover:bg-red-100 text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={() => alert("Déconnecté ✅")}
          className="mt-6 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
        >
          Déconnexion
        </button>
      </aside>

      <main className="flex-1 p-6 md:p-8 space-y-8 overflow-y-auto text-white">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Tableau de bord</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={faireTirage}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition"
            >
              🎲 Tirage au sort
            </button>
            <button
              onClick={() => {
                resetForm();
                setShowModal(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
            >
              + Ajouter joueur
            </button>
          </div>
        </header>

        {/* Statistiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard label="Total joueurs" value={stats.joueurs} />
          <StatCard label="Paiements confirmés" value={stats.payes} />
          <StatCard label="En attente" value={stats.nonPayes} />
          <StatCard label="Matchs" value={stats.matchs} />
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GraphBox title="Évolution des inscriptions">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <XAxis dataKey="mois" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#333" }}
                />
                <Line
                  type="monotone"
                  dataKey="joueurs"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ stroke: "#10b981", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </GraphBox>

          <GraphBox title="État des paiements">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </GraphBox>
        </div>

        {/* Onglets */}
        {onglet === "joueurs" && (
          <section className="bg-white/10 backdrop-blur rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">Liste des joueurs</h3>
            <TableJoueurs
              players={players}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </section>
        )}

        {onglet === "matchs" && (
          <section className="bg-white/10 backdrop-blur rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">Matchs</h3>
            {matches.length === 0 ? (
              <p className="text-white/80">Aucun match pour le moment.</p>
            ) : (
              <div className="space-y-4">
                {matches.map((m) => (
                  <div
                    key={m.id}
                    className="bg-white/20 backdrop-blur rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{m.joueur1.pseudo}</span>
                      <span className="text-white/60">vs</span>
                      <span className="font-semibold">{m.joueur2.pseudo}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <ScoreControl
                        label={m.joueur1.pseudo}
                        value={m.score1}
                        onChange={(d) => updateScore(m.id, "score1", d)}
                      />
                      <ScoreControl
                        label={m.joueur2.pseudo}
                        value={m.score2}
                        onChange={(d) => updateScore(m.id, "score2", d)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {onglet === "inscriptions" && (
          <section className="bg-white/10 backdrop-blur rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">
              Inscriptions (à venir)
            </h3>
            <p className="text-white/80">Gestion des inscriptions en ligne</p>
          </section>
        )}
      </main>

      {/* MODAL */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            {editing ? "Modifier le joueur" : "Ajouter un joueur"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Photo */}
            <div className="flex flex-col items-center">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo de profil
              </label>
              {form.photo ? (
                <div className="relative">
                  <img
                    src={form.photo}
                    alt="Aperçu"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={removePhoto}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl">
                  ?
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mt-3 text-sm text-gray-600"
              />
            </div>

            {/* Champs texte */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Nom"
                name="nom"
                value={form.nom}
                onChange={(e) =>
                  setForm((f) => ({ ...f, nom: e.target.value }))
                }
              />
              <Input
                label="Prénom"
                name="prenom"
                value={form.prenom}
                onChange={(e) =>
                  setForm((f) => ({ ...f, prenom: e.target.value }))
                }
              />
            </div>
            <Input
              label="Pseudo"
              name="pseudo"
              value={form.pseudo}
              onChange={(e) =>
                setForm((f) => ({ ...f, pseudo: e.target.value }))
              }
            />

            {/* Paiement */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="paiement"
                checked={form.paiement}
                onChange={(e) =>
                  setForm((f) => ({ ...f, paiement: e.target.checked }))
                }
                className="h-4 w-4 text-red-600 rounded"
              />
              <label htmlFor="paiement" className="text-gray-700">
                Paiement confirmé (25 000 FCFA)
              </label>
            </div>

            {/* Boutons */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg font-medium"
              >
                {editing ? "Mettre à jour" : "Enregistrer"}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

// === Composants ===
function StatCard({ label, value }) {
  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/20 p-5 rounded-xl shadow text-center">
      <p className="text-sm opacity-90">{label}</p>
      <p className="text-3xl font-extrabold mt-1">{value}</p>
    </div>
  );
}

function GraphBox({ title, children }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl shadow p-5">
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-3 py-2 bg-white rounded-lg border focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
    </div>
  );
}

function TableJoueurs({ players, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-lg bg-white/80 backdrop-blur">
      <table className="min-w-full divide-y divide-gray-200 text-gray-800">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold">Photo</th>
            <th className="px-4 py-3 text-left text-xs font-semibold">Nom</th>
            <th className="px-4 py-3 text-left text-xs font-semibold">
              Pseudo
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold">
              Paiement
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {players.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.nom}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium">
                    {p.prenom?.[0] || p.nom?.[0]}
                  </div>
                )}
              </td>
              <td className="px-4 py-3 font-medium">
                {p.prenom} {p.nom}
              </td>
              <td className="px-4 py-3">{p.pseudo}</td>
              <td className="px-4 py-3">
                {p.paiement ? (
                  <span className="px-2 py-1 rounded-full text-xs bg-green-500 text-white">
                    Confirmé
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-500 text-white">
                    En attente
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-right space-x-3">
                <button
                  onClick={() => onEdit(p)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Modifier
                </button>
                <button
                  onClick={() => onDelete(p.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

function ScoreControl({ label, value, onChange }) {
  return (
    <div className="text-center">
      <p className="text-xs font-medium text-white/80">{label}</p>
      <div className="flex items-center gap-1 mt-1">
        <button
          onClick={() => onChange(-1)}
          className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded"
        >
          −
        </button>
        <span className="text-lg font-bold w-6 text-white">{value}</span>
        <button
          onClick={() => onChange(1)}
          className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
