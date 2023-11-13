import { useContext, useEffect, useState } from "react";
import DicesContext from "../components/DiceContext";
import Score from "../components/Score";
import AreaGame from "../components/AreaGame";

const Game = () => {
  const {
    disabledComplex,
    disabledSimple,
    setDisabledComplex,
    setDisabledSimple,
  } = useContext(DicesContext);

  const [endGame, setEndGame] = useState(false);

  function handleEndGame() {
    setDisabledComplex([false, false, false, false, false, false, false]);
    setDisabledSimple([false, false, false, false, false, false]);
    setEndGame(false)
  }

  useEffect(() => {
    if (
      disabledComplex.every((i) => i === true) &&
      disabledSimple.every((i) => i === true)
    ) {
      setEndGame(true);
    }
  }, [disabledComplex, disabledSimple]);
  return (
    <div className="game">
      <Score />
      {!endGame ? (
        <AreaGame />
      ) : (
        <button onClick={handleEndGame} type="button" className="endGame">
          <div>{`Félicitations !`}</div>
          <div>{`Nouvelle Partie`}</div>
        </button>
      )}
    </div>
  );
};

export default Game;
