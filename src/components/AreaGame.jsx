import { useState } from "react";
import BackMenu from "./BackMenu";
import BoardGame from "./BoardGame";
import GlobalScore from "./GlobalScore";
import Glass from "./Glass";

const AreaGame = () => {
  const [counter, setCounter] = useState(3);
  const [affDices, setAffDices] = useState([]);

  return (
    <div className="areaGame">
      <div>
        <Glass
          counter={counter}
          setCounter={setCounter}
          setAffDices={setAffDices}
        />
        <BackMenu />
      </div>
      <div className="boardGame">
        <BoardGame
          affDices={affDices}
        />
      </div>
      <div className="globalScore">
        <GlobalScore />
      </div>
    </div>
  );
};

export default AreaGame;
