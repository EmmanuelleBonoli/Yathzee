import Score from "../components/Score";
import BoardGame from "../components/BoardGame"

const Game = () => {
    return (
        <div className="game">
            <Score/>
            <BoardGame/>
        </div>
    );
};

export default Game;