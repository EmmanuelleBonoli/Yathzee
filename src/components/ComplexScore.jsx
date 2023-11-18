import { useState, useEffect, useContext } from "react";
import DicesContext from "./DiceContext";

const ComplexScore = () => {
  const {
    resultTotalComplex,
    setResultTotalComplex,
    dicesGlobal,
    setCounter,
    setResultDices,
    setSaveDices,
    disabledComplex,
    setDisabledComplex,
  } = useContext(DicesContext);

  const [resultThreeKind, setResultThreeKind] = useState(0);
  const [resultFourKind, setResultFourKind] = useState(0);
  const [resultFull, setResultFull] = useState(0);
  const [resultSmallStraight, setResultSmallStraight] = useState(0);
  const [resultLargeStraight, setResultLargeStraight] = useState(0);
  const [resultYahtzee, setResultYahtzee] = useState(0);
  const [resultChance, setResultChance] = useState(0);

  const updatedDisabled = [...disabledComplex];

  useEffect(() => {
    let nbDiceOne = [];
    let nbDiceTwo = [];
    let nbDiceThree = [];
    let nbDiceFour = [];
    let nbDiceFive = [];
    let nbDiceSix = [];

    setResultThreeKind(disabledComplex[0] ? resultThreeKind : 0);
    setResultFourKind(disabledComplex[1] ? resultFourKind : 0);
    setResultFull(disabledComplex[2] ? resultFull : 0);
    setResultSmallStraight(disabledComplex[3] ? resultSmallStraight : 0);
    setResultLargeStraight(disabledComplex[4] ? resultLargeStraight : 0);
    setResultYahtzee(disabledComplex[5] ? resultYahtzee : 0);
    setResultChance(disabledComplex[6] ? resultChance : 0); 

    // Maj Three and Four Kind and Yahtzee
    let dicesGSort = dicesGlobal[0].concat(dicesGlobal[1]);
    dicesGSort.sort();

    for (let k = 0; k < dicesGSort.length; k++) {
      if (dicesGSort[k] === 1) {
        nbDiceOne.push(dicesGSort[k]);
        if (nbDiceOne.length >= 3) {
          setResultThreeKind(
            disabledComplex[0]
              ? resultThreeKind
              : nbDiceOne.reduce((acc, currentValue) => acc + currentValue)
          );
        }
        if (nbDiceOne.length >= 4) {
          setResultFourKind(
            disabledComplex[1]
              ? resultFourKind
              : nbDiceOne.reduce((acc, currentValue) => acc + currentValue)
          );
        }
      }
      if (dicesGSort[k] === 2) {
        nbDiceTwo.push(dicesGSort[k]);
        if (nbDiceTwo.length >= 3) {
          setResultThreeKind(
            disabledComplex[0]
              ? resultThreeKind
              : nbDiceTwo.reduce((acc, currentValue) => acc + currentValue)
          );
        }
        if (nbDiceTwo.length >= 4) {
          setResultFourKind(
            disabledComplex[1]
              ? resultFourKind
              : nbDiceTwo.reduce((acc, currentValue) => acc + currentValue)
          );
        }
      }
      if (dicesGSort[k] === 3) {
        nbDiceThree.push(dicesGSort[k]);
        if (nbDiceThree.length >= 3) {
          setResultThreeKind(
            disabledComplex[0]
              ? resultThreeKind
              : nbDiceThree.reduce((acc, currentValue) => acc + currentValue)
          );
        }
        if (nbDiceThree.length >= 4) {
          setResultFourKind(
            disabledComplex[1]
              ? resultFourKind
              : nbDiceThree.reduce((acc, currentValue) => acc + currentValue)
          );
        }
      }
      if (dicesGSort[k] === 4) {
        nbDiceFour.push(dicesGSort[k]);
        if (nbDiceFour.length >= 3) {
          setResultThreeKind(
            disabledComplex[0]
              ? resultThreeKind
              : nbDiceFour.reduce((acc, currentValue) => acc + currentValue)
          );
        }
        if (nbDiceFour.length >= 4) {
          setResultFourKind(
            disabledComplex[1]
              ? resultFourKind
              : nbDiceFour.reduce((acc, currentValue) => acc + currentValue)
          );
        }
      }
      if (dicesGSort[k] === 5) {
        nbDiceFive.push(dicesGSort[k]);
        if (nbDiceFive.length >= 3) {
          setResultThreeKind(
            disabledComplex[0]
              ? resultThreeKind
              : nbDiceFive.reduce((acc, currentValue) => acc + currentValue)
          );
        }
        if (nbDiceFive.length >= 4) {
          setResultFourKind(
            disabledComplex[1]
              ? resultFourKind
              : nbDiceFive.reduce((acc, currentValue) => acc + currentValue)
          );
        }
      }
      if (dicesGSort[k] === 6) {
        nbDiceSix.push(dicesGSort[k]);
        if (nbDiceSix.length >= 3) {
          setResultThreeKind(
            disabledComplex[0]
              ? resultThreeKind
              : nbDiceSix.reduce((acc, currentValue) => acc + currentValue)
          );
        }
        if (nbDiceSix.length >= 4) {
          setResultFourKind(
            disabledComplex[1]
              ? resultFourKind
              : nbDiceSix.reduce((acc, currentValue) => acc + currentValue)
          );
        }
      }
    }
    // Maj Yahtzee
    if (
      dicesGSort[0] !== 0 &&
      dicesGSort[0] === dicesGSort[1] &&
      dicesGSort[0] === dicesGSort[2] &&
      dicesGSort[0] === dicesGSort[3] &&
      dicesGSort[0] === dicesGSort[4]
    ) {
      setResultYahtzee(disabledComplex[5] ? resultYahtzee : 50);
    }

    // Maj Small Straight and Large Straight
    if (
      JSON.stringify(dicesGSort) === JSON.stringify([1, 2, 3, 4, 5]) ||
      JSON.stringify(dicesGSort) == JSON.stringify([2, 3, 4, 5, 6])
    ) {
      setResultLargeStraight(disabledComplex[4] ? resultLargeStraight : 40);
    }

    let previousDice = 0;
    let filterDicesStraight = [];
    let littleStraight1 = [1, 2, 3, 4];
    let littleStraight2 = [2, 3, 4, 5];
    let littleStraight3 = [3, 4, 5, 6];
    for (let p = 0; p < dicesGSort.length; p++) {
      if (dicesGSort[p] !== previousDice) {
        filterDicesStraight.push(dicesGSort[p]);
        previousDice = dicesGSort[p];
      }
    }
    if (
      JSON.stringify(dicesGSort) === JSON.stringify([1, 2, 3, 4, 5]) ||
      JSON.stringify(dicesGSort) === JSON.stringify([2, 3, 4, 5, 6]) ||
      littleStraight1.every((i) => dicesGSort.includes(i)) ||
      littleStraight2.every((i) => dicesGSort.includes(i)) ||
      littleStraight3.every((i) => dicesGSort.includes(i))
    ) {
      setResultSmallStraight(disabledComplex[3] ? resultSmallStraight : 30);
    }

    //Maj Full
    if (
      (dicesGSort[0] === dicesGSort[1] &&
        dicesGSort[0] !== dicesGSort[2] &&
        dicesGSort[2] === dicesGSort[3] &&
        dicesGSort[3] === dicesGSort[4]) ||
      (dicesGSort[0] === dicesGSort[1] &&
        dicesGSort[0] === dicesGSort[2] &&
        dicesGSort[2] !== dicesGSort[3] &&
        dicesGSort[3] === dicesGSort[4])
    ) {
      setResultFull(disabledComplex[2] ? resultFull : 25);
    }

    // Maj Chance
    setResultChance(
      disabledComplex[6]
        ? resultChance
        : dicesGSort.reduce((acc, currentValue) => acc + currentValue)
    );
  }, [
    disabledComplex,
    dicesGlobal,
    resultThreeKind,
    resultFourKind,
    resultFull,
    resultSmallStraight,
    resultLargeStraight,
    resultYahtzee,
    resultChance,
  ]);

  function handleThreeKind() {
    if (!disabledComplex[0]) {
      updatedDisabled[0] = true;
      setDisabledComplex(updatedDisabled);
    }
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    let updatedTotal = resultTotalComplex + resultThreeKind;
    setResultTotalComplex(updatedTotal);
  }

  function handleFourKind() {
    if (!disabledComplex[1]) {
      updatedDisabled[1] = true;
      setDisabledComplex(updatedDisabled);
    }
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    let updatedTotal = resultTotalComplex + resultFourKind;
    setResultTotalComplex(updatedTotal);
  }

  function handleFull() {
    if (!disabledComplex[2]) {
      updatedDisabled[2] = true;
      setDisabledComplex(updatedDisabled);
    }
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    let updatedTotal = resultTotalComplex + resultFull;
    setResultTotalComplex(updatedTotal);
  }

  function handleSmallStraight() {
    if (!disabledComplex[3]) {
      updatedDisabled[3] = true;
      setDisabledComplex(updatedDisabled);
    }
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    let updatedTotal = resultTotalComplex + resultSmallStraight;
    setResultTotalComplex(updatedTotal);
  }

  function handleLargeStraight() {
    if (!disabledComplex[4]) {
      updatedDisabled[4] = true;
      setDisabledComplex(updatedDisabled);
    }
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    let updatedTotal = resultTotalComplex + resultLargeStraight;
    setResultTotalComplex(updatedTotal);
  }

  function handleYahtzee() {
    if (!disabledComplex[5]) {
      updatedDisabled[5] = true;
      setDisabledComplex(updatedDisabled);
    }
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    let updatedTotal = resultTotalComplex + resultYahtzee;
    setResultTotalComplex(updatedTotal);
  }

  function handleChance() {
    if (!disabledComplex[6]) {
      updatedDisabled[6] = true;
      setDisabledComplex(updatedDisabled);
    }
    setCounter(3);
    setResultDices([0, 0, 0, 0, 0]);
    setSaveDices([]);
    let updatedTotal = resultTotalComplex + resultChance;
    setResultTotalComplex(updatedTotal);
  }

  return (
    <div className="areaScore">
      <div className="imgScore">
        <img
          className="formatDice selectedDice"
          src="../images/threeKindBlue.png"
          alt="Brelan"
          disabled={disabledComplex[0]}
          onClick={handleThreeKind}
        />
        <img
          className="formatDice selectedDice"
          src="../images/fourKindBlue.png"
          alt="Carré"
          disabled={disabledComplex[1]}
          onClick={handleFourKind}
        />
        <img
          className="formatDice selectedDice"
          src="../images/fullBlue.png"
          alt="Full"
          disabled={disabledComplex[2]}
          onClick={handleFull}
        />
        <img
          className="formatDice selectedDice"
          src="../images/smallStraightBlue.png"
          alt="Petite Suite"
          disabled={disabledComplex[3]}
          onClick={handleSmallStraight}
        />
        <img
          className="formatDice selectedDice"
          src="../images/largeStraightBlue.png"
          alt="Grande Suite"
          disabled={disabledComplex[4]}
          onClick={handleLargeStraight}
        />
        <img
          className="formatDice selectedDice"
          src="../images/YamBlue.png"
          alt="Yahtzee"
          disabled={disabledComplex[5]}
          onClick={handleYahtzee}
        />
        <img
          className="formatDice selectedDice"
          src="../images/chanceBlue.png"
          alt="Chance"
          disabled={disabledComplex[6]}
          onClick={handleChance}
        />
        <img className="formatDice" src="../images/totalBlue.png" alt="Total" />
      </div>
      <div className="resultScore">
        <div>{resultThreeKind}</div>
        <div>{resultFourKind}</div>
        <div>{resultFull}</div>
        <div>{resultSmallStraight}</div>
        <div>{resultLargeStraight}</div>
        <div>{resultYahtzee}</div>
        <div>{resultChance}</div>
        <div>{resultTotalComplex}</div>
      </div>
    </div>
  );
};

export default ComplexScore;
