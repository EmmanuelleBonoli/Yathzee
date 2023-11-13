import { NavLink } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings">
      <div className="formatMenu">
        <div className="rules">
          <h1>Objectif</h1>
          <p>Marquer le plus de points possibles à la fin de la partie</p>
        </div>
        <div className="rules">
          <h2>Déroulement</h2>
          <p>
            Vous disposez de 5dés et 3 lancés par tour. A chaque lancé, vous
            pouvez sauvegarder tout ou partie de vos dés.
          </p>
          <p>
            Une fois vos 3 lancés effectués, faites votre choix sur la piste de
            score.
          </p>
        </div>
        <div className="backMenu">
          <NavLink to="/" className="btn-menu">
            Retour au Menu
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Settings;
