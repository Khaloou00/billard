import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Acceuil from "./pages/Acceuil";
import Inscription from "./pages/Inscription";
import Apropos from "./pages/Apropos";
import Classements from "./pages/Classements";
import Programmes from "./pages/Programmes";
import TableauAdmin from "./pages/TableauAdmin";
import Layout from "./components/Layout";
import Joueurs from "./pages/Joueurs";
import ProfilPaiement from "./pages/ProfilPaiement";
import Errorpage from "./pages/Errorpage";
import TableauAdmin2 from "./pages/TableauAdmin2";
import LayoutAdmin from "./components/LayoutAdmin";

import CreerJoueur from "./pages/Admin/CreerJoueur";
import AdminDashboard from "./pages/Admin/AdminDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Acceuil />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="apropos" element={<Apropos />} />
            <Route path="classements" element={<Classements />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="joueurs" element={<Joueurs />} />
            <Route path="profil-paiement" element={<ProfilPaiement />} />
          </Route>
          <Route path="admin" element={<LayoutAdmin />}>
            <Route index element={<AdminDashboard />} />
            <Route path="creer" element={<CreerJoueur />} />
          </Route>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
