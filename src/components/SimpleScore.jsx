import { useState, useContext, useEffect } from "react";
import DicesContext from "./DiceContext";
import dices from "./dices";

const SimpleScore = () => {

  const { dicesGlobal } = useContext(DicesContext);

  const [resultDice1, setResultDice1] = useState(0);
  const [resultDice2, setResultDice2] = useState(0);
  const [resultDice3, setResultDice3] = useState(0);
  const [resultDice4, setResultDice4] = useState(0);
  const [resultDice5, setResultDice5] = useState(0);
  const [resultDice6, setResultDice6] = useState(0);
  const [resultBonus, setResultBonus] = useState(0);
  const [resultTotal, setResultTotal] = useState(0);

//  useEffect(() => {
//   // dicesGlobal.forEach((dice)=>{
//   //   if(dice ===1){
//   //     const total1 += dice
//   //     setResultDice1(total1)
//   //   }

//   })
//  },[dicesGlobal])

  return (
    <div className="areaScore">
      <div className="imgScore">
        <img className="formatDice" src="../images/dice1.png" alt="dé1" />
        <img className="formatDice" src="../images/dice2.png" alt="dé2" />
        <img className="formatDice" src="../images/dice3.png" alt="dé3" />
        <img className="formatDice" src="../images/dice4.png" alt="dé4" />
        <img className="formatDice" src="../images/dice5.png" alt="dé5" />
        <img className="formatDice" src="../images/dice6.png" alt="dé6" />
        <img className="formatDice" src="../images/Bonus.png" alt="dé Bonus" />
        <img className="formatDice" src="../images/Total.png" alt="dé Total" />
      </div>
      <div className="resultScore">
        <div>{resultDice1}</div>
        <div>{resultDice2}</div>
        <div>{resultDice3}</div>
        <div>{resultDice4}</div>
        <div>{resultDice5}</div>
        <div>{resultDice6}</div>
        <div>{resultBonus}</div>
        <div>{resultTotal}</div>
      </div>
    </div>
  );
};

export default SimpleScore;
