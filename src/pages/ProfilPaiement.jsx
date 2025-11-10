import React, { useState } from "react";
import waveLogo from "../assets/logowave.png";

// Placez un fichier wave-logo.png dans src/assets ou remplacez par une URL publique

const ProfilPaiement = ({ user: propUser }) => {
  const user = propUser || {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "+221 77 000 0000",
    avatar: null, // mettre une URL si disponible
  };

  const [amount, setAmount] = useState(500);

  const handlePayment = () => {
    // TODO: intégrer l'API/SDK Wave côté serveur ou client.
    // Exemple : rediriger vers votre endpoint qui crée la session de paiement Wave.
    // window.location.href = `/api/pay/wave?amount=${amount}`;
    console.log("Init payment", { user, amount });
    alert(`Paiement Wave simulé : ${amount} XOF pour ${user.name}`);
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      style={{ maxWidth: 480, margin: "32px auto", fontFamily: "sans-serif" }}
    >
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          padding: 16,
          border: "1px solid #eee",
          borderRadius: 8,
        }}
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="avatar"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              color: "#444",
            }}
          >
            {initials}
          </div>
        )}
        <div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>{user.name}</div>
          <div style={{ color: "#666" }}>{user.email}</div>
          <div style={{ color: "#666" }}>{user.phone}</div>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          padding: 16,
          border: "1px solid #eee",
          borderRadius: 8,
        }}
      >
        <div style={{ marginBottom: 8, fontWeight: 600 }}>Payer avec Wave</div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            style={{
              flex: 1,
              padding: 8,
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handlePayment}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              padding: "8px 12px",
              background: "#0066cc",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            <img src={waveLogo} alt="Wave" style={{ height: 20 }} />
            <span>Payer</span>
          </button>
        </div>

        <div style={{ marginTop: 8, color: "#888", fontSize: 13 }}>
          Le bouton lance la procédure de paiement Wave (intégration serveur/SDK
          nécessaire).
        </div>
      </div>
    </div>
  );
};

export default ProfilPaiement;
