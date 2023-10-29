import { useState } from "react";

const GlobalScore = () => {
    const [finalScore, setFinalScore] = useState(0)
    return (
        <div>
         <div>Score Général</div>
         <div>{finalScore}</div>
        </div>
    );
};

export default GlobalScore;