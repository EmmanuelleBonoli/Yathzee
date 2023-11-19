import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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
    resultTotalSimple,
    resultTotalComplex
  } = useContext(DicesContext);

  const navigate = useNavigate();
  const [disabledContinue, setDisabledContinue] =useState(false)

  function handleReset() {
    setResultTotalSimple(0);
    setResultTotalComplex(0);
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    setDisabledSimple([false, false, false, false, false, false]);
    setDisabledComplex([false, false, false, false, false, false, false]);
    navigate("/yathzee");
  }

  function handleContinue(){
    if (disabledContinue === false){
      navigate("/yathzee");
    }
  }

  useEffect(()=>{
    if (resultTotalSimple !== 0 && resultTotalComplex!==0){
      setDisabledContinue(false)
    }
    if (resultTotalSimple === 0 && resultTotalComplex===0){
      setDisabledContinue(true)
    }
  },[resultTotalSimple, resultTotalComplex])

  return (
    <div className="menu">
      <div className="formatMenu">
        <img className="logoMenu" src="../../images/MajorGames2.png" alt="logo du jeu" />
        <button type="button" onClick={handleContinue} disabled={disabledContinue}>
        Continuer la partie
        </button>
        <button type="button" onClick={handleReset}>
          Nouvelle partie
        </button>
        <NavLink to="/settings">Règles</NavLink>
      </div>
    </div>
  );
};

export default Menu;
