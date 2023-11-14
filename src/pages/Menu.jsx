import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DicesContext from "../components/DiceContext";

const Menu = () => {
  const {
    setResultTotalComplex,
    setResultTotalSimple,
    setCounter,
    setResultDices,
    setSaveDices,
    setDisabledComplex,
    setDisabledSimple,
  } = useContext(DicesContext);

  const navigate = useNavigate();

  function handleReset() {
    setResultTotalSimple(0);
    setResultTotalComplex(0);
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    setDisabledSimple([false, false, false, false, false, false]);
    setDisabledComplex([false, false, false, false, false, false, false]);
    navigate("/jeu-yathzee");
  }

  return (
    <div className="menu">
      <div className="formatMenu">
        <NavLink to="/jeu-yathzee">Continuer la partie</NavLink>
        <button type="button" onClick={handleReset}>
          Nouvelle partie
        </button>
        <NavLink to="/settings">Paramètres</NavLink>
      </div>
    </div>
  );
};

export default Menu;
