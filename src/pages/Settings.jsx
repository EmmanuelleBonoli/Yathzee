import { NavLink } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings">
      <div className="formatMenu">
        <div className="rules">
          <h1>Objectif</h1>
          <p>Marquer le plus de points possibles à la fin de la partie !</p>
        </div>
        <div className="rules">
          <h2>Déroulement</h2>
          <p>
            Vous disposez de 5dés et 3 lancés maximum par tour. A chaque lancé,
            vous pouvez sauvegarder tout ou partie de vos dés et ne relancer que
            les dés non désirés.
          </p>
          <p>
            Une fois satisfait du résultat ou au terme de vos 3 lancés, faites
            votre choix sur la piste de score.
          </p>
        </div>
        <div className="backMenuSettings">
          <NavLink to="/menu" className="btn-menu">
            Retour au Menu
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Settings;
