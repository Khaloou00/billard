import React, { useEffect, useState } from "react";
import supabase from "../../../supabase";
import tour from "../../../constant";

const Matchs = () => {
  const [matchsTab, setMatchsTab] = useState([]);
  const [editingMatch, setEditingMatch] = useState(null);

  const [tourAPreciser, setTourAPreciser] = useState("32emes de finale");

  useEffect(() => {
    fetchMatchs();
  }, []);

  const fetchMatchs = async () => {
    try {
      const { data, error } = await supabase
        .from("Matchs")
        .select(`*, joueurUn(*), joueurDeux(*)`);

      if (error) {
        console.error("Erreur lors de la récupération des matchs:", error);
      } else {
        setMatchsTab(data);
      }
    } catch (error) {
      console.error("Erreur inattendue:", error);
    }
  };
  console.log(tourAPreciser);
  const handleEdit = (match) => {
    setEditingMatch({
      id: match.id,
      scoreJoueur1: match.scoreJoueur1 !== null ? match.scoreJoueur1 : 0,
      scoreJoueur2: match.scoreJoueur2 !== null ? match.scoreJoueur2 : 0,
      status: match.status || "À VENIR",
      tours: match.tours || "32emes de finale",
    });
  };

  const handleChange = (field, value) => {
    setEditingMatch((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (matchId) => {
    try {
      const { error } = await supabase
        .from("Matchs")
        .update({
          scoreJoueur1: editingMatch.scoreJoueur1,
          scoreJoueur2: editingMatch.scoreJoueur2,
          status: editingMatch.status,
          tours: tourAPreciser.con,
        })
        .eq("id", matchId);

      if (error) {
        console.error("Erreur lors de la mise à jour:", error);
      } else {
        setEditingMatch(null);
        fetchMatchs();
      }
    } catch (error) {
      console.error("Erreur inattendue:", error);
    }
  };

  const handleCancel = () => {
    setEditingMatch(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "A_VENIR":
        return "bg-blue-100 text-blue-800";
      case "EN_COURS":
        return "bg-yellow-100 text-yellow-800";
      case "TERMINE":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Liste des Matchs
          </h1>
          <p className="text-gray-600">
            Gérez et suivez tous vos matchs en temps réel
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Joueur Un
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Joueur Deux
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Date et Heure
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Score 1
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Score 2
                  </th>
                  <th>Tours</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {matchsTab.map((match) => (
                  <tr
                    key={match.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold mr-3">
                          {match.joueurUn
                            ? match.joueurUn.nom.charAt(0).toUpperCase()
                            : "?"}
                        </div>
                        <span className="font-medium text-gray-900">
                          {match.joueurUn ? match.joueurUn.nom : "N/A"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-3">
                          {match.joueurDeux
                            ? match.joueurDeux.nom.charAt(0).toUpperCase()
                            : "?"}
                        </div>
                        <span className="font-medium text-gray-900">
                          {match.joueurDeux ? match.joueurDeux.nom : "N/A"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {new Date(match.dateHeure).toLocaleString("fr-FR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      {editingMatch?.id === match.id ? (
                        <select
                          value={editingMatch.status}
                          onChange={(e) =>
                            handleChange("status", e.target.value)
                          }
                          className="px-3 py-1.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                        >
                          <option value="A_VENIR">À VENIR</option>
                          <option value="EN_COURS">EN COURS</option>
                          <option value="TERMINE">TERMINÉ</option>
                        </select>
                      ) : (
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            match.status || "A_VENIR"
                          )}`}
                        >
                          {match.status || "A_VENIR"}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {editingMatch?.id === match.id ? (
                        <input
                          type="number"
                          value={editingMatch.scoreJoueur1}
                          onChange={(e) =>
                            handleChange(
                              "scoreJoueur1",
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-16 px-2 py-1.5 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      ) : (
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-indigo-100 text-indigo-700 rounded-lg font-bold text-lg">
                          {match.scoreJoueur1 !== null ? match.scoreJoueur1 : 0}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {editingMatch?.id === match.id ? (
                        <input
                          type="number"
                          value={editingMatch.scoreJoueur2}
                          onChange={(e) =>
                            handleChange(
                              "scoreJoueur2",
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-16 px-2 py-1.5 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      ) : (
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-700 rounded-lg font-bold text-lg">
                          {match.scoreJoueur2 !== null ? match.scoreJoueur2 : 0}
                        </span>
                      )}
                    </td>
                    <td>
                      {editingMatch?.id === match.id ? (
                        <select
                          name=""
                          id=""
                          onChange={(e) => setTourAPreciser(e.target.value)}
                          className="px-3 py-1.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        >
                          {tour.map((tour, index) => (
                            <option key={index} value={tour}>
                              {tour}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-700 rounded-lg font-bold text-lg">
                          {match.tour !== null ? (
                            match.tour
                          ) : (
                            <span>A préciser</span>
                          )}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {editingMatch?.id === match.id ? (
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleSubmit(match.id)}
                            className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg"
                          >
                            Envoyer
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium text-sm"
                          >
                            Annuler
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEdit(match)}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg"
                        >
                          Modifier
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {matchsTab.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg font-medium">
                Aucun match disponible
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Matchs;
