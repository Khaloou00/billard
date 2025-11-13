import supabase from "../../supabase.js";
import { useState, useEffect } from "react";
import {
  Trophy,
  Calendar,
  Users,
  Award,
  MapPin,
  DollarSign,
  ChevronRight,
  Star,
  Zap,
  Target,
  Clock,
  CheckCircle,
  Circle,
  Play,
} from "lucide-react";
import { Link } from "react-router";
import regledejeu from "../assets/regle.pdf";
import { FaFrancSign, FaTicket } from "react-icons/fa6";
import vi from "../assets/viob.mp4";
import Acceuildebut from "./sections/Acceuildebut.jsx";
import Acceuilfin from "./sections/Acceuilfin.jsx";
import { da } from "date-fns/locale/da";

import CommuniqueTournoi from "./sections/CommuniqueTournoi.jsx";
import { Arret } from "./sections/Arret.jsx";

const Acceuil = () => {
  const [matchsTab, setMatchsTab] = useState([]);
  const [editingMatch, setEditingMatch] = useState(null);
  const [enCoursMatch, setEnCoursMatch] = useState([]);

  const [termineMacth, setTermineMacth] = useState([]);
  const [aVenirMatch, setAVenirMatch] = useState([]);

  useEffect(() => {
    fetchMatchs();
  }, []);
  console.log(matchsTab);
  const fetchMatchs = async () => {
    try {
      const { data, error } = await supabase
        .from("Matchs")
        .select(`*, joueurUn(*), joueurDeux(*)`);

      if (error) {
        console.error("Erreur lors de la récupération des matchs:", error);
      } else {
        setMatchsTab(data);
        setEnCoursMatch(data.filter((match) => match.status === "EN_COURS"));
        setTermineMacth(data.filter((match) => match.status === "TERMINE"));
        setAVenirMatch(data.filter((match) => match.status === "A_VENIR"));
      }
    } catch (error) {
      console.error("Erreur inattendue:", error);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-white">
        <Acceuildebut />
      </div>
      <div className="min-h-screen bg-white">
        <CommuniqueTournoi />
      </div>
      {/* <div>
        <h2>En direct</h2>
        <div>
          {enCoursMatch.map((match) => (
            <div key={match.id}>
              <h3>
                date et heure:{" "}
                {new Date(match.dateHeure).toLocaleString("fr-FR")}
              </h3>
              <p>
                <span>nom du tour: {match.tours}</span>
                {match.joueurUn.nom} vs {match.joueurDeux.nom} - Score:{" "}
                {match.scoreJoueur1} - {match.scoreJoueur2}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2>Matchs Terminés</h2>
      <div>
        {termineMacth.map((match) => (
          <div key={match.id}>
            <h3>
              date et heure: {new Date(match.dateHeure).toLocaleString("fr-FR")}
            </h3>
            <p>
              <span>nom du tour: {match.tours}</span>
              {match.joueurUn.nom} vs {match.joueurDeux.nom} - Score:{" "}
              {match.scoreJoueur1} - {match.scoreJoueur2}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h2>Prochains Matchs</h2>
        <div>
          {aVenirMatch.map((match) => (
            <div key={match.id}>
              <h3>
                date et heure:{" "}
                {new Date(match.dateHeure).toLocaleString("fr-FR")}
              </h3>
              <p>
                <span>nom du tour: {match.tours}</span>
                {match.joueurUn.nom} vs {match.joueurDeux.nom}
              </p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="min-h-screen bg-white">
        <Acceuilfin />
      </div>
    </>
  );
};

export default Acceuil;
