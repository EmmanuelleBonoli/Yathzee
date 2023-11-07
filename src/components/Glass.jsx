import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import dices from "./dices";
import DicesContext from "./DiceContext";

const Glass = ({
  counter,
  setCounter,
  setAffDices,
}) => {

  const { resultDices, setResultDices } = useContext(DicesContext)

  function rollDice() {
    if (counter > 0) {
      const updatedResultDices = resultDices.map(() =>
        Math.floor(Math.random() * 6 + 1)
      );
      setResultDices(updatedResultDices)
      setCounter(counter - 1)
    }
    
  }

  useEffect(() => {
    
    const updatedAffDices = resultDices.map((resultDiceValue) => {
      return dices.find((dice) => dice.value === resultDiceValue);
    });
    setAffDices(updatedAffDices);
  }, [resultDices, setAffDices]);


  return (
    <div className="glass" onClick={rollDice}>
      {counter}
    </div>
  );
};

Glass.propTypes = {
  counter: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
  setAffDices: PropTypes.func.isRequired,
};

export default Glass;
