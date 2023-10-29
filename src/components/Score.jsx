import SimpleScore from "./SimpleScore";
import ComplexScore from "./ComplexScore";


const Score = () => {
    return (
        <div className="areaScore">
            <SimpleScore />
            <ComplexScore />
        </div>
    );
};

export default Score;