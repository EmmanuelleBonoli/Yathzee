import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { uid } from "uid";
import dices from "./dices";
import DicesContext from "./DiceContext";

const BoardGame = ({ affDices }) => {
  const [affDicesSave, setAffDicesSave] = useState([]);
  const { saveDices, setSaveDices, resultDices, setResultDices } =
    useContext(DicesContext);

  function MoveDice(index, fromArea) {
    const clickedDiceValue =
      fromArea === "playArea"
        ? affDices[index].value
        : affDicesSave[index].value;
    if (fromArea === "playArea") {
      const updatedResultDices = [...resultDices];
      updatedResultDices.splice(index, 1);
      setResultDices(updatedResultDices);
      setSaveDices((prevSaveDices) => [...prevSaveDices, clickedDiceValue]);
    } else if (fromArea === "saveArea") {
      const updatedSaveDices = [...saveDices];
      updatedSaveDices.splice(index, 1);
      setSaveDices(updatedSaveDices);
      setResultDices((prevResultDices) => [
        ...prevResultDices,
        clickedDiceValue,
      ]);
    }
  }

  useEffect(() => {
    const updatedAffDicesSave = saveDices.map((saveDice) => {
      return dices.find((dice) => dice.value === saveDice);
    });
    setAffDicesSave(updatedAffDicesSave);
  }, [saveDices, setAffDicesSave]);

  return (
    <div className="boardGame2">
      <div className="playArea">
        {affDices.map((dice, index) => (
          <img
            key={uid(10)}
            className="formatDice selectedDice"
            onClick={() => MoveDice(index, "playArea")}
            src={dice.image}
            alt={dice.name}
          />
        ))}
      </div>
      <div className="saveArea">
        {affDicesSave.map((dice, index) => (
          <img
            key={uid(10)}
            className="formatDice selectedDice"
            onClick={() => MoveDice(index, "saveArea")}
            src={dice.image}
            alt={dice.name}
          />
        ))}
      </div>
    </div>
  );
};
BoardGame.propTypes = {
  affDices: PropTypes.array.isRequired,
};

export default BoardGame;
