import { useEffect, useState } from "react";
import { User, Camera, CheckCircle, XCircle, Users } from "lucide-react";
import toast from "react-hot-toast";
import Resizer from "react-image-file-resizer";
import supabase from "../../../supabase";
import { TiDelete } from "react-icons/ti";
import { FaDice, FaEdit } from "react-icons/fa";
import { GiCardDraw } from "react-icons/gi";
import { FaRandom } from "react-icons/fa";

const CreerJoueur = () => {
  const [nom, setNom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [confirm, setConfirm] = useState("false");
  const [photoPreview, setPhotoPreview] = useState(null);
  const [joueursTab, setJoueursTab] = useState([]);
  const [modifierJoueur, setModifierJoueur] = useState(false);
  const [modifierJoueurId, setModifierJoueurId] = useState(null);
  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];

    try {
      const toastId = toast.loading("Chargement de l'image...");
      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("billardBucket")
        .upload(fileName, file);

      if (uploadError) {
        toast.dismiss(toastId);
        toast.error("Erreur lors du téléchargement de l'image.");
        return;
      }
      const { data } = supabase.storage
        .from("billardBucket")
        .getPublicUrl(fileName);

      setPhotoPreview(data.publicUrl);
      toast.dismiss(toastId);
      toast.success("Image téléchargée avec succès!");
    } catch (error) {
      toast.error("Erreur lors du traitement de l'image.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nom || !pseudo || !photoPreview || confirm === null) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    if (modifierJoueur) {
      try {
        const toastId = toast.loading("Modification du joueur...");
        const joueurInfo = {
          nom,
          pseudo,
          photo: photoPreview,
          confirm: confirm === "true" ? true : false,
        };

        const { error } = await supabase
          .from("Joueurs")
          .update(joueurInfo)
          .eq("id", modifierJoueurId);
        if (error) {
          toast.dismiss(toastId);
          console.log(modifierJoueurId);
          console.log(error);
          toast.error("Erreur lors de la modification du joueur.");
          return;
        }
        const updatedJoueurs = joueursTab.map((joueur) =>
          joueur.id === modifierJoueurId ? joueurInfo : joueur
        );
        setJoueursTab(updatedJoueurs);
        toast.dismiss(toastId);
        toast.success("Joueur modifié avec succès!");
        resetData();
        setModifierJoueur(false);
      } catch (error) {}
    } else {
      try {
        const toastId = toast.loading("Création du joueur...");
        const joueurInfo = {
          nom,
          pseudo,
          photo: photoPreview,
          confirm: confirm === "true" ? true : false,
        };

        const { error } = await supabase.from("Joueurs").insert([joueurInfo]);
        if (error) {
          toast.dismiss(toastId);
          toast.error("Erreur lors de la création du joueur.");
          return;
        }
        setJoueursTab([...joueursTab, joueurInfo]);
        toast.dismiss(toastId);
        toast.success("Joueur créé avec succès!");
        resetData();
      } catch (error) {}
    }
  };

  const resetData = () => {
    setNom("");
    setPseudo("");
    setConfirm(false);
    setPhotoPreview(null);
    setModifierJoueurId(null);
    setModifierJoueur(false);
  };
  const deleteImage = (url) => {
    const fileName = url.split("/").pop();
    const { error } = supabase.storage.from("billardBucket").remove([fileName]);

    if (error) {
      toast.error("Erreur lors de la suppression de l'image.");
    } else {
      -setPhotoPreview(null);
      toast.success("Image supprimée avec succès!");
    }
  };

  const updateState = (joueur) => {
    console.log(joueur);
    setNom(joueur.nom);
    setPseudo(joueur.pseudo);
    setConfirm(joueur.confirm ? "true" : "false");
    setPhotoPreview(joueur.photo);
    setModifierJoueur(true);
    setModifierJoueurId(joueur.id);
  };

  useEffect(() => {
    const fetchJoueurs = async () => {
      const { data, error } = await supabase.from("Joueurs").select("*");
      if (error) {
        toast.error("Erreur lors du chargement des joueurs.");
      } else {
        setJoueursTab(data);
      }
    };
    fetchJoueurs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Gestion des Joueurs
          </h1>
          <p className="text-xl text-gray-600">
            Créez et gérez les profils des participants au tournoi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CRÉER JOUEUR */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {modifierJoueur ? "Modifier un Joueur" : "Créer un Joueur"}
              </h2>
            </div>

            <div className="space-y-6">
              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Photo du joueur
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-md bg-gradient-to-r from-red-600 to-yellow-500 flex items-center justify-center overflow-hidden border-4 border-gray-200">
                    {photoPreview ? (
                      <div className="relative w-full h-full">
                        <img
                          src={photoPreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => deleteImage(photoPreview)}
                          className="absolute bottom-1 right-1 bg-red-500 cursor-pointer text-white rounded-full p-1 shadow-md hover:bg-red-400"
                        >
                          <TiDelete className="" />
                        </button>
                      </div>
                    ) : (
                      <Camera className="w-10 h-10 text-white" />
                    )}
                  </div>

                  <label className="flex-1 cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-red-500 transition-all duration-300 bg-gray-50 hover:bg-red-50">
                      <div className="flex items-center justify-center gap-2 text-gray-600">
                        <Camera className="w-5 h-5" />
                        <span className="font-medium">
                          {photoPreview
                            ? "Changer la photo"
                            : "Ajouter une photo"}
                        </span>
                      </div>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                  </label>
                </div>
              </div>

              {/* Nom */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Ex: Jean Dupont"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Pseudo */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pseudo
                </label>
                <input
                  type="text"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  placeholder="Ex: KingOfPool"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Confirmation */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Statut d'inscription
                </label>
                <select
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 cursor-pointer bg-white"
                >
                  <option value="true">✅ Confirmé</option>
                  <option value="false">⏳ En attente</option>
                </select>
              </div>

              {/* Bouton Submit */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white py-4 rounded-xl font-bold text-lg hover:from-red-500 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                {modifierJoueur ? "Modifier le joueur" : "Créer le joueur"}
              </button>
            </div>
          </div>

          {/* LISTE DES JOUEURS */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
            <div className="flex gap-6 mb-6">
              {/* Joueurs Inscrits - 60% */}
              <div className=" bg-white p-6 w-[50%]rounded-xl shadow-md flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Joueurs Inscrits
                  </h2>
                  <p className="text-gray-500 mt-1">
                    Total : {joueursTab.length}
                  </p>
                </div>
              </div>
              {/* Tirage au sort - 40% */}

              <div className="w-[50%] bg-white p-6 rounded-xl shadow-md flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-red-600 flex items-center justify-center mb-4">
                  <FaDice className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Tirage au sort
                </h2>
                <p className="text-gray-500 mb-4">
                  Faire le tirage au sort maintenant pour le prochain match.
                </p>
                <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition-transform">
                  Lancer le Tirage
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {/* Joueur exemple 1 */}

              {/* Message si vide */}
              {!joueursTab.length > 0 && (
                <div>
                  <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="font-semibold">Liste des joueurs</p>
                  <p className="text-sm">Les joueurs créés apparaîtront ici</p>
                </div>
              )}
              <div>
                {joueursTab.length > 0 &&
                  joueursTab.map((joueur, index) => (
                    <div
                      key={index}
                      className="mt-4 border p-4 relative rounded-lg flex items-center gap-4"
                    >
                      <div className="w-16 h-16 rounded-md overflow-hidden border-4 border-gray-200">
                        <img
                          src={joueur.photo}
                          alt={joueur.nom}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{joueur.nom}</h3>
                        <p className="text-gray-600">@{joueur.pseudo}</p>
                        <p className="text-sm">
                          {joueur.confirm ? "✅ Confirmé" : "⏳ En attente"}
                        </p>
                      </div>
                      <div>
                        <button
                          className="absolute top-2 right-5"
                          onClick={() => updateState(joueur)}
                        >
                          <FaEdit className="w-5 h-5 text-blue-500 cursor-pointer" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreerJoueur;
