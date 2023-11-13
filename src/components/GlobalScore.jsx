import { useState, useContext, useEffect } from "react";
import DicesContext from "./DiceContext";

const GlobalScore = () => {
  const { resultTotalComplex, resultTotalSimple } = useContext(DicesContext);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    setFinalScore(resultTotalComplex + resultTotalSimple);
  }, [setFinalScore, resultTotalComplex, resultTotalSimple]);

  return (
    <div>
      <div>Score Général</div>
      <div>{finalScore}</div>
    </div>
  );
};

export default GlobalScore;
