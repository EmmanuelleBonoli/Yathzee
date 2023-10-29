import Glass from "./Glass";
import BackMenu from "./BackMenu";
import BoardGame from "./BoardGame";
import GlobalScore from "./GlobalScore";
import dices from "./dices";

const AreaGame = () => {
  return (
    <div className="areaGame">
      <div>
        <Glass dices={dices} />
        <BackMenu />
      </div>
      <div className="boardGame">
        <BoardGame resultDices={resultDices} saveDices={saveDices} />
      </div>
      <div className="globalScore">
        <GlobalScore />
      </div>
    </div>
  );
};

export default AreaGame;
