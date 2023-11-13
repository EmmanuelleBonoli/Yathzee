import { useState, useContext, useEffect } from "react";
import DicesContext from "./DiceContext";
import dices from "./dices";
import { uid } from "uid";

const SimpleScore = () => {
  const {
    dicesGlobal,
    setCounter,
    setResultDices,
    setSaveDices,
    resultTotalSimple,
    setResultTotalSimple,
    disabledSimple,
    setDisabledSimple
  } = useContext(DicesContext);

  

  const [resultDice1, setResultDice1] = useState(0);
  const [resultDice2, setResultDice2] = useState(0);
  const [resultDice3, setResultDice3] = useState(0);
  const [resultDice4, setResultDice4] = useState(0);
  const [resultDice5, setResultDice5] = useState(0);
  const [resultDice6, setResultDice6] = useState(0);
  const [resultBonus, setResultBonus] = useState(0);

  useEffect(() => {
    let totalValues = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < dicesGlobal.length; i++) {
      dicesGlobal[i].forEach((dice) => {
        totalValues[dice - 1] += dice;
      });
    }
    setResultDice1(disabledSimple[0] ? resultDice1 : totalValues[0]);
    setResultDice2(disabledSimple[1] ? resultDice2 : totalValues[1]);
    setResultDice3(disabledSimple[2] ? resultDice3 : totalValues[2]);
    setResultDice4(disabledSimple[3] ? resultDice4 : totalValues[3]);
    setResultDice5(disabledSimple[4] ? resultDice5 : totalValues[4]);
    setResultDice6(disabledSimple[5] ? resultDice6 : totalValues[5]);
  }, [
    dicesGlobal,
    disabledSimple,
    resultDice1,
    resultDice2,
    resultDice3,
    resultDice4,
    resultDice5,
    resultDice6,
  ]);

  const saveScore = (index, value) => {
    const updatedDisabled = [...disabledSimple];
    if (updatedDisabled[index] === false) {
      updatedDisabled[index] = true;

      let updatedTotal =
        resultTotalSimple +
        (value === 1
          ? resultDice1
          : value === 2
          ? resultDice2
          : value === 3
          ? resultDice3
          : value === 4
          ? resultDice4
          : value === 5
          ? resultDice5
          : value === 6
          ? resultDice6
          : 0);

      setResultTotalSimple(updatedTotal);
      setDisabledSimple(updatedDisabled);
      setCounter(3);
      setResultDices([0, 0, 0, 0, 0]);
      setSaveDices([]);
    }
    if (resultTotalSimple >= 63) {
      setResultBonus(35);
      let updatedBonus = resultTotalSimple + 35;
      setResultTotalSimple(updatedBonus);
    }
  };

  return (
    <div className="areaScore">
      <div className="imgScore">
        {dices.slice(0, -1).map((dice, index) => (
          <img
            key={uid(10)}
            className="formatDice selectedDice"
            disabled={disabledSimple[index]}
            src={dice.image}
            onClick={() => {
              saveScore(index, dice.value);
            }}
            alt={dice.name}
          />
        ))}
        <img className="formatDice" src="../images/Bonus.png" alt="dé Bonus" />
        <img className="formatDice" src="../images/Total.png" alt="dé Total" />
      </div>
      <div className="resultScore">
        <div>{resultDice1}</div>
        <div>{resultDice2}</div>
        <div>{resultDice3}</div>
        <div>{resultDice4}</div>
        <div>{resultDice5}</div>
        <div>{resultDice6}</div>
        <div>{resultBonus}</div>
        <div>{resultTotalSimple}</div>
      </div>
    </div>
  );
};

export default SimpleScore;
