import { useState } from "react";

const ComplexScore = () => {
  const [resultThreeKind, setResultThreeKind] = useState(0);
  const [resultFourKind, setResultFourKind] = useState(0);
  const [resultFull, setResultFull] = useState(0);
  const [resultSmallStraight, setResultSmallStraight] = useState(0);
  const [resultLargeStraight, setResultLargeStraight] = useState(0);
  const [resultYahtzee, setResultYahtzee] = useState(0);
  const [resultChance, setResultChance] = useState(0);
  const [resultTotal, setResultTotal] = useState(0);

  return (
    <div className="areaScore">
      <div className="imgScore">
        <img
          className="formatDice"
          src="../images/ThreeKind.png"
          alt="Brelan"
        />
        <img
          className="formatDice"
          src="../images/FourKind.png"
          alt="Carré"
        />
        <img
          className="formatDice"
          src="../images/Full.png"
          alt="Full"
        />
        <img
          className="formatDice"
          src="../images/SmallStraight.png"
          alt="Petite Suite"
        />
        <img
          className="formatDice"
          src="../images/LargeStraight.png"
          alt="Grande Suite"
        />
        <img
          className="formatDice"
          src="../images/Yahtzee.png"
          alt="Yahtzee"
        />
        <img
          className="formatDice"
          src="../images/Chance.png"
          alt="Chance"
        />
        <img
          className="formatDice"
          src="../images/Total.png"
          alt="Total"
        />
      </div>
      <div className="resultScore">
        <div>{resultThreeKind}</div>
        <div>{resultFourKind}</div>
        <div>{resultFull}</div>
        <div>{resultSmallStraight}</div>
        <div>{resultLargeStraight}</div>
        <div>{resultYahtzee}</div>
        <div>{resultChance}</div>
        <div>{resultTotal}</div>
      </div>
    </div>
  );
};

export default ComplexScore;
