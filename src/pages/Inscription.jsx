import React, { useState, useRef, useEffect } from "react";

export default function Inscription() {
  // ==================== ÉTAT DU FORMULAIRE ====================
  // Stocke toutes les données saisies par l'utilisateur
  const [form, setForm] = useState({
    prenom: "", // Prénom du joueur
    nom: "", // Nom du joueur
    email: "", // Adresse email (obligatoire)
    telephone: "", // Numéro de téléphone (optionnel)
    motDePasse: "", // Mot de passe (min 6 caractères)
    confirmerMotDePasse: "", // Confirmation du mot de passe
    tournoiNom: "", // Pseudo unique du joueur pour le tournoi
    photo: null, // Fichier photo (objet File)
  });

  // État pour afficher un aperçu de la photo téléchargée
  const [photoPreview, setPhotoPreview] = useState(null);

  // Stocke les messages d'erreur pour chaque champ
  const [errors, setErrors] = useState({});

  // Message de succès après inscription réussie
  const [success, setSuccess] = useState("");

  // Référence pour accéder à l'élément <input type="file"> du DOM
  const fileRef = useRef();

  // ==================== GESTION DE L'APERÇU PHOTO ====================
  // useEffect s'exécute à chaque fois que form.photo change
  useEffect(() => {
    // Si aucune photo n'est sélectionnée, on supprime l'aperçu
    if (!form.photo) {
      setPhotoPreview(null);
      return;
    }

    // Crée une URL temporaire pour afficher l'image
    const url = URL.createObjectURL(form.photo);
    setPhotoPreview(url);

    // Fonction de nettoyage : libère la mémoire quand le composant se démonte
    // ou quand une nouvelle photo est sélectionnée
    return () => URL.revokeObjectURL(url);
  }, [form.photo]); // Ne s'exécute que quand form.photo change

  // ==================== GESTION DES CHANGEMENTS DE CHAMPS ====================
  // Fonction appelée à chaque fois qu'un champ texte est modifié
  const handleChange = (e) => {
    const { name, value } = e.target; // Récupère le nom et la valeur du champ

    // Met à jour l'état du formulaire en conservant les autres valeurs
    setForm((s) => ({ ...s, [name]: value }));

    // Efface l'erreur de ce champ dès que l'utilisateur commence à taper
    setErrors((s) => ({ ...s, [name]: "" }));

    // Efface le message de succès
    setSuccess("");
  };

  // ==================== GESTION DE LA PHOTO ====================
  // Fonction appelée quand l'utilisateur sélectionne une photo
  const handlePhoto = (e) => {
    const file = e.target.files?.[0]; // Récupère le premier fichier sélectionné
    if (file) {
      // Met à jour la photo dans le formulaire
      setForm((s) => ({ ...s, photo: file }));

      // Efface l'erreur liée à la photo
      setErrors((s) => ({ ...s, photo: "" }));

      // Efface le message de succès
      setSuccess("");
    }
  };

  // Fonction pour supprimer la photo sélectionnée
  const removePhoto = () => {
    // Supprime la photo du formulaire
    setForm((s) => ({ ...s, photo: null }));

    // Supprime l'aperçu
    setPhotoPreview(null);

    // Réinitialise l'input file (important pour pouvoir resélectionner la même photo)
    if (fileRef.current) fileRef.current.value = "";
  };

  // ==================== VALIDATION DU FORMULAIRE ====================
  // Fonction qui vérifie que tous les champs sont correctement remplis
  const validate = () => {
    const err = {}; // Objet qui contiendra toutes les erreurs trouvées

    // Vérifie que le prénom n'est pas vide (après suppression des espaces)
    if (!form.prenom.trim()) err.prenom = "Prénom requis";

    // Vérifie que le nom n'est pas vide
    if (!form.nom.trim()) err.nom = "Nom requis";

    // Vérifie que le pseudo du tournoi n'est pas vide
    if (!form.tournoiNom.trim()) err.tournoiNom = "Nom du tournoi requis";

    // Vérifie le format de l'email avec une expression régulière
    // Format attendu : xxx@yyy.zzz
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      err.email = "Email invalide";

    // Vérifie le téléphone SEULEMENT s'il est renseigné (champ optionnel)
    // Format accepté : chiffres, +, espaces, (), - entre 6 et 20 caractères
    if (form.telephone && !form.telephone.match(/^[0-9+\s()-]{6,20}$/))
      err.telephone = "Téléphone invalide";

    // Vérifie que le mot de passe contient au moins 6 caractères
    if (form.motDePasse.length < 6) err.motDePasse = "Au moins 6 caractères";

    // Vérifie que les deux mots de passe sont identiques
    if (form.motDePasse !== form.confirmerMotDePasse)
      err.confirmerMotDePasse = "Les mots de passe ne correspondent pas";

    // Retourne l'objet contenant toutes les erreurs (vide si tout est OK)
    return err;
  };

  // ==================== SOUMISSION DU FORMULAIRE ====================
  // Fonction appelée quand l'utilisateur clique sur "S'inscrire"
  const handleSubmit = () => {
    // Lance la validation
    const v = validate();

    // S'il y a des erreurs, on les affiche et on arrête
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    // Ici, en production, vous enverriez les données à votre API backend
    console.log("Données inscription:", form);

    // Affiche le message de succès
    setSuccess(
      "Espace créé avec succès ! Vérifiez votre e-mail pour confirmer votre compte."
    );

    // Réinitialise complètement le formulaire
    setForm({
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      motDePasse: "",
      confirmerMotDePasse: "",
      tournoiNom: "",
      photo: null,
    });

    // Supprime l'aperçu de la photo
    setPhotoPreview(null);
  };

  // ==================== CLASSES CSS RÉUTILISABLES ====================
  // Style pour tous les champs input du formulaire
  const inputClass =
    "w-full bg-white/10 border border-white/30 placeholder-white/50 text-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200 hover:bg-white/15";

  // Style pour tous les labels
  const labelClass = "text-sm font-medium block mb-2 text-white/95";

  // ==================== RENDU DU COMPOSANT ====================
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-red-600 to-yellow-500 text-white">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Conteneur principal avec effet de transparence et flou */}
        <div className="max-w-7xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 lg:p-8 border border-white/20">
          {/* ==================== EN-TÊTE ==================== */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Créer mon espace
              </h2>
              <p className="text-sm lg:text-base text-white/80">
                Remplissez vos informations pour créer votre espace personnel.
              </p>
            </div>

            {/* Icônes décoratives (visibles uniquement sur écrans moyens et grands) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Icône de queue de billard */}
              <div className="relative">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="animate-pulse"
                >
                  <rect
                    x="2"
                    y="28"
                    width="50"
                    height="6"
                    rx="3"
                    fill="white"
                    opacity="0.15"
                  />
                  <circle cx="54" cy="31" r="10" fill="white" opacity="0.2" />
                  <circle cx="54" cy="31" r="6" fill="white" />
                </svg>
              </div>
              {/* Icône de boule de billard */}
              <div className="relative">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                >
                  <path
                    d="M10 50 L30 10"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  <circle cx="46" cy="38" r="10" fill="white" opacity="0.2" />
                  <circle cx="46" cy="38" r="5" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          {/* ==================== GRILLE PRINCIPALE : FORMULAIRE + RÈGLEMENT ==================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ==================== FORMULAIRE (COLONNE DE GAUCHE) ==================== */}
            <div className="space-y-5">
              {/* Section Photo + Prénom/Nom */}
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Zone de téléchargement de photo */}
                <div className="w-full sm:w-36">
                  <label className={labelClass}>Photo</label>
                  <div
                    className="relative w-full sm:w-36 h-36 rounded-2xl bg-white/8 border-2 border-dashed border-white/30 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-white/12 hover:border-yellow-400/50 transition-all duration-300 group"
                    onClick={() => fileRef.current?.click()} // Ouvre le sélecteur de fichier
                  >
                    {photoPreview ? (
                      // Si une photo est sélectionnée, on l'affiche
                      <>
                        <img
                          src={photoPreview}
                          alt="preview"
                          className="object-cover w-full h-full"
                        />
                        {/* Bouton pour supprimer la photo */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation(); // Empêche le clic de remonter au parent
                            removePhoto();
                          }}
                          className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 p-1.5 rounded-full transition-all shadow-lg"
                          title="Supprimer la photo"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 6l12 12M18 6L6 18"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </>
                    ) : (
                      // Si aucune photo, on affiche l'icône et le texte d'invitation
                      <div className="flex flex-col items-center text-white/60 group-hover:text-white/90 transition-colors px-2 text-center">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mb-2"
                        >
                          <path
                            d="M21 19V7a2 2 0 0 0-2-2h-3l-2-2h-4L7 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="13"
                            r="3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <span className="text-xs font-medium">
                          Ajouter une photo
                        </span>
                        <span className="text-[10px] text-white/40 mt-1">
                          PNG, JPG • max 2MB
                        </span>
                      </div>
                    )}
                    {/* Input file caché, déclenché par le clic sur la div parent */}
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhoto}
                    />
                  </div>
                  {/* Message d'erreur pour la photo */}
                  {errors.photo && (
                    <p className="text-xs text-red-200 mt-1.5 font-medium">
                      {errors.photo}
                    </p>
                  )}
                </div>

                {/* Prénom, Nom et Pseudo */}
                <div className="flex-1 space-y-4">
                  {/* Prénom et Nom sur la même ligne */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Champ Prénom */}
                    <div>
                      <label className={labelClass}>Prénom *</label>
                      <input
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Votre prénom"
                      />
                      {errors.prenom && (
                        <p className="text-xs text-red-200 mt-1.5 font-medium">
                          {errors.prenom}
                        </p>
                      )}
                    </div>

                    {/* Champ Nom */}
                    <div>
                      <label className={labelClass}>Nom et Prénom *</label>
                      <input
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Votre nom"
                      />
                      {errors.nom && (
                        <p className="text-xs text-red-200 mt-1.5 font-medium">
                          {errors.nom}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Champ Pseudo du tournoi */}
                  <div>
                    <label className={labelClass}>
                      Pseudo *{" "}
                      <span className=" font-light">
                        (Lors d'un duel ou un tournoi)
                      </span>
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        name="tournoiNom"
                        value={form.tournoiNom}
                        onChange={handleChange}
                        className={inputClass + " flex-1"}
                        placeholder="Votre pseudo de joueur"
                      />
                      {/* Badge "Unique" pour indiquer que le pseudo doit être unique */}
                      <div className="text-xs bg-yellow-500/20 border border-yellow-400/30 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap">
                        Unique
                      </div>
                    </div>
                    {errors.tournoiNom && (
                      <p className="text-xs text-red-200 mt-1.5 font-medium">
                        {errors.tournoiNom}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Champ Email */}
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="exemple@domaine.com"
                  type="email"
                />
                {errors.email && (
                  <p className="text-xs text-red-200 mt-1.5 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Champ Téléphone (optionnel) */}
              <div>
                <label className={labelClass}>Téléphone</label>
                <input
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+225 07 12 34 56 78"
                  type="tel"
                />
                {errors.telephone && (
                  <p className="text-xs text-red-200 mt-1.5 font-medium">
                    {errors.telephone}
                  </p>
                )}
              </div>

              {/* Champs Mot de passe */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mot de passe */}
                <div>
                  <label className={labelClass}>Mot de passe *</label>
                  <input
                    name="motDePasse"
                    value={form.motDePasse}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="••••••••"
                    type="password"
                  />
                  {errors.motDePasse && (
                    <p className="text-xs text-red-200 mt-1.5 font-medium">
                      {errors.motDePasse}
                    </p>
                  )}
                </div>

                {/* Confirmation du mot de passe */}
                <div>
                  <label className={labelClass}>Confirmer mot de passe *</label>
                  <input
                    name="confirmerMotDePasse"
                    value={form.confirmerMotDePasse}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="••••••••"
                    type="password"
                  />
                  {errors.confirmerMotDePasse && (
                    <p className="text-xs text-red-200 mt-1.5 font-medium">
                      {errors.confirmerMotDePasse}
                    </p>
                  )}
                </div>
              </div>

              {/* Bouton de soumission */}
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Créer mon espace
              </button>

              {/* Message de succès */}
              {success && (
                <div className="mt-3 p-4 rounded-lg bg-green-500/20 border border-green-400/30 text-green-100 text-sm font-medium">
                  {success}
                </div>
              )}
            </div>

            {/* ==================== RÈGLEMENT (COLONNE DE DROITE) ==================== */}
            <aside className="bg-gradient-to-br from-white/15 to-white/5 border border-yellow-500/30 rounded-2xl p-6 lg:p-7 text-base text-white max-h-[700px] overflow-y-auto leading-relaxed shadow-2xl backdrop-blur-md space-y-6">
              {/* En-tête du règlement */}
              <div className="flex items-start gap-4 pb-5 border-b border-yellow-400/20">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg width="44" height="44" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" fill="white" opacity="0.1" />
                    <circle cx="32" cy="32" r="18" fill="#FFD700" />
                    <text
                      x="32"
                      y="37"
                      textAnchor="middle"
                      fill="#1a1a1a"
                      fontSize="16"
                      fontWeight="800"
                    >
                      8
                    </text>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl lg:text-2xl text-yellow-300 mb-1">
                    Règlement Officiel
                  </h3>
                  <p className="text-sm text-white/75 italic">
                    « QUI SERA THE KING OF TABLE ? – QG LOUNGE 2025 »
                  </p>
                </div>
              </div>

              {/* Section Organisation */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="font-bold text-yellow-300 text-lg flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-sm">
                    1
                  </span>
                  Organisation générale
                </h4>
                <p className="text-white/90 leading-relaxed">
                  Le tournoi{" "}
                  <strong className="text-yellow-200">
                    « QUI SERA THE KING OF TABLE ? – QG 2025 »
                  </strong>{" "}
                  est organisé par le{" "}
                  <strong className="text-yellow-200">QG Lounge Bar</strong>,
                  sous la supervision de la{" "}
                  <strong className="text-yellow-200">
                    Communauté Ivoirienne de Billard (CIB)
                  </strong>
                  . Il se déroulera sur{" "}
                  <strong className="text-yellow-200">5 jours</strong>, du{" "}
                  <strong className="text-yellow-200">
                    12 au 16 novembre 2025
                  </strong>
                  , dans les locaux du QG Lounge. La compétition est ouverte à{" "}
                  <strong className="text-yellow-200">32 participants</strong>,
                  inscrits individuellement.
                </p>
              </div>

              {/* Section Inscriptions */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="font-bold text-yellow-300 text-lg flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-sm">
                    2
                  </span>
                  Inscriptions
                </h4>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>
                      Droit de participation :{" "}
                      <strong className="text-yellow-200">25 000 FCFA</strong>{" "}
                      par joueur
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Paiement en espèces ou par mobile money (Wave)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>
                      Inscription validée uniquement après paiement confirmé
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>
                      Places limitées — priorité selon l'ordre de paiement
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section Format */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="font-bold text-yellow-300 text-lg flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-sm">
                    3
                  </span>
                  Format de la compétition
                </h4>
                <div className="space-y-3 text-white/90">
                  <p>
                    Tournoi à{" "}
                    <strong className="text-yellow-200">
                      élimination directe
                    </strong>{" "}
                    avec 32 participants.
                  </p>
                  <div className="space-y-2 pl-3 border-l-2 border-yellow-400/30">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🏁</span>
                      <span>1/16e de finale → 16 qualifiés</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🎯</span>
                      <span>1/8e de finale → 8 qualifiés</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🔥</span>
                      <span>1/4 de finale → 4 qualifiés</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">⚡</span>
                      <span>1/2 finale → 2 qualifiés</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🏆</span>
                      <span className="font-bold text-yellow-200">
                        Finale → 1 vainqueur
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pied de page du règlement */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-5 border-t border-yellow-400/20">
                <div className="flex gap-3 items-center text-sm text-white/80">
                  <svg width="52" height="32" viewBox="0 0 64 32" fill="none">
                    <path
                      d="M2 24 L48 2"
                      stroke="#FFD700"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                    <circle
                      cx="56"
                      cy="18"
                      r="7"
                      fill="#FFD700"
                      opacity="0.2"
                    />
                    <circle cx="56" cy="18" r="4" fill="#FFD700" />
                  </svg>
                  <span className="font-medium">
                    Respect et fair-play obligatoires 🎱
                  </span>
                </div>
                <button className="text-sm font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl text-white hover:scale-105 transition-all duration-300">
                  📄 Télécharger les règles
                </button>
              </div>
            </aside>
          </div>

          {/* Note de bas de page */}
          <p className="text-xs text-white/70 mt-6 text-center">
            En créant votre espace, vous acceptez nos conditions d'utilisation
            et notre politique de confidentialité.
          </p>
        </div>
      </main>
    </div>
  );
}
