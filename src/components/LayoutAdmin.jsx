import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

const LayoutAdmin = () => {
  return (
    <div className="flex ">
      {/* LEFT */}
      <div className="w-[15%] ">
        <ul>
          <li>
            <NavLink>Tableau de Bord</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/creer"}>Créer Joueur</NavLink>
          </li>
        </ul>
      </div>
      {/* RIGHT */}
      <div className="w-[85%]">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
