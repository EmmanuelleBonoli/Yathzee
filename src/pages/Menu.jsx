import { NavLink } from "react-router-dom";
import { useContext } from "react";
import DicesContext from "../components/DiceContext";

const Menu = () => {
  const {
    setResultTotalComplex,
    setResultTotalSimple,
    setCounter,
    setResultDices,
    setSaveDices,
  } = useContext(DicesContext);

  function handleReset() {
    setTimeout(() => {
      setResultTotalSimple(0);
      setResultTotalComplex(0);
      setCounter(3);
      setResultDices([0, 0, 0, 0, 0]);
      setSaveDices([]);
    }, 5000);
  }

  return (
    <div className="menu">
      <div className="formatMenu">
        <NavLink to="/jeu-yathzee">Continuer la partie</NavLink>
        <NavLink to="/jeu-yathzee" onClick={handleReset}>
          Nouvelle partie
        </NavLink>
        <NavLink to="/settings">Paramètres</NavLink>
      </div>
    </div>
  );
};

export default Menu;
