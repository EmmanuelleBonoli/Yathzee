import { useState } from "react";
import BackMenu from "./BackMenu";
import BoardGame from "./BoardGame";
import GlobalScore from "./GlobalScore";
import Glass from "./Glass";

const AreaGame = () => {
  const [affDices, setAffDices] = useState([]);

  return (
    <div className="areaGame">
      <div>
        <Glass setAffDices={setAffDices} />
        <BackMenu />
      </div>
      <div className="boardGame">
        <BoardGame affDices={affDices} />
      </div>
      <div className="globalScore">
        <GlobalScore />
      </div>
    </div>
  );
};

export default AreaGame;
