import PropTypes from "prop-types";
import dices from "./dices";

const BoardGame = ({saveDices, resultDices}) => {

//   resultDices.array.forEach(element => {
    
//   });

  return (
    <div className="boardGame2">
      <div className="playArea">{resultDices}</div>
      <div className="saveArea">{saveDices}</div>
    </div>
  );
};

BoardGame.propTypes = {
    saveDices: PropTypes.array.isRequired,
    resultDices: PropTypes.array.isRequired,
  };

export default BoardGame;
